import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Alert } from "react-native";
import {
	useTypedDispatch,
	useTypedSelector,
} from "../../hooks/typed-redux-hooks";
import { objectDetectionActions } from "../../store/slices/object-detection-slice";
import { Camera, CameraType } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Warning from "../UI/Warning";
import theme from "../../constants/theme";

const TensorCamera = cameraWithTensors(Camera);

const ObjectDetectionCamera = () => {
	const isFocused = useTypedSelector(
		(state) => state.objectDetection.isFocused
	);

	const dispatch = useTypedDispatch();

	const [model, setModel] = useState<cocoSsd.ObjectDetection>();
	const [hasPermission, setHasPermission] = useState(true);

	const cameraType = CameraType.back;
	const textureDimensions =
		Platform.OS === "ios"
			? { height: 1920, width: 1080 }
			: { height: 1200, width: 1600 };
	const predictEveryNFrames = 30;
	let frameCount = 0;

	const loadModel = async () => {
		try {
			await tf.ready();
			let loadedModel = await cocoSsd.load({
				base: "lite_mobilenet_v2",
			});
			setModel(loadedModel);
		} catch (error) {
			console.error("Error loading model:", error);
			Alert.alert(
				"Error Loading Model",
				"There was an issue loading the model. Please check your internet connection and try again.",
				[
					{ text: "Cancel", style: "cancel" },
					{
						text: "Retry",
						style: "default",
						onPress: () => loadModel(),
					},
				]
			);
		}
	};

	const handlePermissions = async () => {
		try {
			const permission = await Camera.getCameraPermissionsAsync();
			setHasPermission(permission.granted);

			if (permission.canAskAgain && !permission.granted) {
				const newPermission =
					await Camera.requestCameraPermissionsAsync();
				setHasPermission(newPermission.granted);
			}
		} catch (error) {
			console.error("Error getting camera permission:", error);
			Alert.alert(
				"Error Getting Camera Permission",
				"An error occurred while trying to get camera permissions. Please try again.",
				[
					{ text: "Cancel", style: "cancel" },
					{
						text: "Retry",
						style: "default",
						onPress: () => handlePermissions(),
					},
				]
			);
		}
	};

	const handleCameraStream = (images: any) => {
		const loop = async () => {
			const nextImageTensor = images.next().value;

			if (!model || !nextImageTensor) {
				return; // TODO: Check if this is the correct way to check for model and nextImageTensor
			}

			if (frameCount % predictEveryNFrames !== 0) {
				frameCount += 1;
				tf.dispose([nextImageTensor]);
				requestAnimationFrame(loop);
				return;
			}

			try {
				const predictions = await model.detect(
					nextImageTensor,
					undefined,
					0.7
				);

				if (predictions.length > 0) {
					const prediction = predictions[0].class;
					const predictedLabel =
						prediction.charAt(0).toUpperCase() +
						prediction.slice(1);

					dispatch(
						objectDetectionActions.setLabel({
							label: predictedLabel,
						})
					);
				}
			} catch (error) {
				console.error("Error detecting objects:", error);
			} finally {
				tf.dispose([nextImageTensor]);
			}
			frameCount += 1;
			requestAnimationFrame(loop);
		};
		loop();
	};

	useEffect(() => {
		handlePermissions();
		loadModel();
	}, []);

	useEffect(() => {
		if (!hasPermission) {
			dispatch(
				objectDetectionActions.setLabel({ label: "Permission needed" })
			);
			return;
		}
		dispatch(objectDetectionActions.clearLabel());
		frameCount = 0;
	}, [isFocused, hasPermission]);

	if (!isFocused) {
		return null;
	}

	if (!hasPermission) {
		return <Warning variant="permission" utility="camera" />;
	}

	if (!model) {
		return <Camera style={styles.camera} type={cameraType} />;
	}

	return (
		<TensorCamera
			style={styles.camera}
			type={cameraType}
			autorender={true}
			cameraTextureHeight={textureDimensions.height}
			cameraTextureWidth={textureDimensions.width}
			resizeHeight={200}
			resizeWidth={152}
			resizeDepth={3}
			useCustomShadersToResize={false}
			onReady={handleCameraStream}
		/>
	);
};

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors.lightGrey,
	},
});

export default ObjectDetectionCamera;
