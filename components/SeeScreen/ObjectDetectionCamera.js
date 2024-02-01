import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Alert, LogBox } from "react-native";
import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import PermissionWarning from "../UI/PermissionWarning";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import theme from "../../constants/theme";

LogBox.ignoreAllLogs();

const TensorCamera = cameraWithTensors(Camera);

const ObjectDetectionCamera = (props) => {
	const { setLabel, isFocused } = props;
	const [model, setModel] = useState();
	const [hasPermission, setHasPermission] = useState(true);
	const predictEveryNFrames = 30;
	let frameCount = 0;

	const textureDimensions =
		Platform.OS === "ios"
			? { height: 1920, width: 1080 }
			: { height: 1200, width: 1600 };

	useEffect(() => {
		const handlePermissions = async () => {
			try {
				const permission = await Camera.getCameraPermissionsAsync();
				if (
					permission.granted ||
					(permission.canAskAgain &&
						(await Camera.requestCameraPermissionsAsync()).granted)
				) {
					setHasPermission(true);
				} else {
					setHasPermission(false);
				}
			} catch (error) {
				console.error("Error getting camera permission:", error);
			}
		};

		const loadModel = async () => {
			try {
				await tf.ready();
				const loadedModel = await cocoSsd.load();
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

		handlePermissions();
		loadModel();
	}, []);

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
				const predictions = await model.detect(nextImageTensor);
				if (predictions.length > 0 && predictions[0].score > 0.7) {
					const prediction = predictions[0].class;
					const label =
						prediction.charAt(0).toUpperCase() +
						prediction.slice(1);
					setLabel(label);
				}
				tf.dispose([nextImageTensor]);
			} catch (error) {
				console.error("Error detecting objects:", error);
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
		return <PermissionWarning utility="camera" />;
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
