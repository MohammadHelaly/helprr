import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Warning from "../UI/Warning";
import theme from "../../constants/theme";

const TensorCamera = cameraWithTensors(Camera);

const ObjectDetectionCamera = (props) => {
	const { setLabel, isFocused } = props;

	const [model, setModel] = useState();
	const [predictedLabel, setPredictedLabel] = useState();
	const [hasPermission, setHasPermission] = useState(true);

	const textureDimensions =
		Platform.OS === "ios"
			? { height: 1920, width: 1080 }
			: { height: 1200, width: 1600 };
	const predictEveryNFrames = 30;
	let frameCount = 0;

	const loadModel = async () => {
		try {
			await tf.ready();
			const loadedModel = await cocoSsd.load({
				base: "lite_mobilenet_v2",
			});
			return loadedModel;
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
			setLabel(undefined);
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

	useEffect(() => {
		const init = async () => {
			await handlePermissions();
			setModel(await loadModel());
		};
		init();
	}, []);

	useEffect(() => {
		setLabel(predictedLabel);
	}, [predictedLabel]);

	const handleCameraStream = (images) => {
		const loop = async () => {
			const nextImageTensor = images.next().value;
			if (!model || !nextImageTensor) {
				return;
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
					const capitalizedPrediction =
						prediction.charAt(0).toUpperCase() +
						prediction.slice(1);
					setPredictedLabel(capitalizedPrediction);
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

	if (!isFocused) {
		frameCount = 0;
		setLabel(undefined);
		return null;
	}

	if (!hasPermission) {
		setLabel("Uh oh!");
		return <Warning variant="permission" utility="camera" />;
	}

	if (!model) {
		return (
			<Camera style={styles.camera} type={Camera.Constants.Type.back} />
		);
	}

	return (
		<TensorCamera
			style={styles.camera}
			type={Camera.Constants.Type.back}
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
		backgroundColor: theme.colors.darkGray,
	},
});

export default ObjectDetectionCamera;
