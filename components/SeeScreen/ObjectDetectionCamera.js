import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
	useCameraPermission,
	useMicrophonePermission,
	useCameraDevice,
	useFrameProcessor,
	runAtTargetFps,
	Camera,
} from "react-native-vision-camera";
import {
	Tensor,
	TensorflowModel,
	useTensorflowModel,
} from "react-native-fast-tflite";
import { useResizePlugin } from "vision-camera-resize-plugin";
import theme from "../../constants/theme";
import labelJsonData from "../../assets/models/google_mobile_object_labeler_v1/mobile_object_labeler_v1_labelmap.json";

const fetchData = async () => {
	try {
		const labelArray = Object.values(labelJsonData).map(
			(item) => item.name
		);
		console.log("Loaded labels successfully!");
		return labelArray;
	} catch (error) {
		console.error("Error reading or parsing JSON file:", error.message);
	}
};

const labelMap = fetchData();

const ObjectDetectionCamera = (props) => {
	const { setLabel, isFocused } = props;
	// const { hasPermission, requestPermission } = useMicrophonePermission();
	const { hasPermission, requestPermission } = useCameraPermission();
	const device = useCameraDevice("back");

	const model = useTensorflowModel(
		require("../../assets/models/google_mobile_object_labeler_v1/1.tflite")
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

			// runAtTargetFps(15, () => {
			// 	"worklet";
			// 	console.log(`Running inference on ${frame}`);
			// 	const resizedFrame = resize(frame, {
			// 		size: {
			// 			width: 224, // 320
			// 			height: 224,
			// 		},
			// 		pixelFormat: "rgb",
			// 		dataType: "uint8",
			// 	});

			// 	// const resizedFrame = frame.toArrayBuffer();

			// 	console.log(`Running inference on ${resizedFrame}`);
			// 	const outputLogits = actualModel.run([resizedFrame]);
			// 	console.log("Result: " + outputLogits);

			// 	const logits = outputLogits.dataSync(); // Convert tensor to a regular array

			// 	const maxConfidenceIndex = logits.indexOf(Math.max(...logits));

			// 	const result = labelMap[maxConfidenceIndex];

			// 	console.log("Detected Label:", result);
			// 	setLabel(result);
			// 	console.log("I'm running synchronously at 15 FPS!");
			// });

			console.log(`Running inference on ${frame}`);
			const resizedFrame = resize(frame, {
				size: {
					width: 224, // 320
					height: 224,
				},
				pixelFormat: "rgb",
				dataType: "float32", // uint8
			});

			console.log(`Running inference on ${resizedFrame}`);
			// const outputLogits = actualModel.runSync([resizedFrame]);
			// console.log("Result: " + outputLogits);

			// const logits = outputLogits.dataSync(); // Convert tensor to a regular array

			// const maxConfidenceIndex = logits.indexOf(Math.max(...logits));

			// const result = labelMap[maxConfidenceIndex];

			// console.log("Detected Label:", result);
			// setLabel(result);
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
		<Camera
			style={styles.camera}
			device={device}
			isActive={isFocused}
			frameProcessor={frameProcessor}
			pixelFormat="yuv"
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
