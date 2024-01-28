import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {
	useCameraPermission,
	useMicrophonePermission,
	useCameraDevice,
	useFrameProcessor,
	Camera,
} from "react-native-vision-camera";
import {
	Tensor,
	TensorflowModel,
	useTensorflowModel,
} from "react-native-fast-tflite";
import { useResizePlugin } from "vision-camera-resize-plugin";
import Label from "../components/SeeScreen/Label";
import theme from "../constants/theme";

const SeeScreen = (props) => {
	const { navigation } = props;
	// const { hasPermission, requestPermission } = useMicrophonePermission();
	const { hasPermission, requestPermission } = useCameraPermission();
	const device = useCameraDevice("back");
	const isFocused = useIsFocused();
	const [label, setLabel] = useState(undefined);

	const model = useTensorflowModel(
		require("../assets/models/efficientdet.tflite")
	);
	const actualModel = model.state === "loaded" ? model.model : undefined;

	useEffect(() => {
		if (actualModel == null) return;
		console.log("Model loaded!");
	}, [actualModel]);

	const { resize } = useResizePlugin();

	const frameProcessor = useFrameProcessor(
		(frame) => {
			"worklet";

			if (actualModel == null) return;

			console.log(`Running inference on ${frame}`);
			const resizedFrame = resize(frame, {
				size: {
					width: 320,
					height: 320,
				},
				pixelFormat: "rgb",
				dataType: "uint8",
			});
			// console.log(`Running inference on ${resizedFrame}`);
			const result = actualModel.runSync([resizedFrame]);
			console.log("Result: " + result);
			const num_detections = result[3]?.[0] ?? 0;
			console.log("Result: " + num_detections);
		},
		[actualModel]
	);

	useEffect(() => {
		// if (!hasMicrophonePermission) {
		// 	requestMicrophonePermission();
		// }
		if (!hasPermission) {
			requestPermission();
		}
	}, [hasPermission]);

	return (
		<View style={styles.container}>
			<Camera
				style={styles.camera}
				device={device}
				isActive={isFocused}
				frameProcessor={frameProcessor}
			/>
			{/* <View style={styles.camera} /> */}
			<Label label={label} isFocused={isFocused} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors.darkGray,
	},
});

export default SeeScreen;
