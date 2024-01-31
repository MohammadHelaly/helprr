import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import theme from "../../constants/theme";

const TensorCamera = cameraWithTensors(Camera);

const ObjectDetectionCamera = (props) => {
	const { setLabel, isFocused } = props;
	const [model, setModel] = useState();
	let textureDimensions =
		Platform.OS === "ios"
			? { height: 1920, width: 1080 }
			: { height: 1200, width: 1600 };

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await tf.ready();
			const model = await cocoSsd.load();
			setModel(model);
		})();
	}, []);

	// 	const cameraPermission = Camera.getCameraPermissionStatus();
	// 	const device = useCameraDevices().back;

	// 	if (!device) {
	// 		return null;
	// 	}

	const handleCameraStream = (images) => {
		const loop = async () => {
			const nextImageTensor = images.next().value;
			if (!model || !nextImageTensor) {
				return;
			}
			model.detect(nextImageTensor).then((predictions) => {
				if (predictions.length > 0) {
					const prediction = predictions[0].class;
					const label =
						prediction.charAt(0).toUpperCase() +
						prediction.slice(1);
					setLabel(label);
				}
			});
			requestAnimationFrame(loop);
		};
		loop();
	};

	return (
		isFocused && (
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
		)
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
