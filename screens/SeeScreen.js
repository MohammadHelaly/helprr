import React, { useRef, useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	Dimensions,
	LogBox,
} from "react-native";
import { Camera } from "expo-camera";
// import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
// import * as tf from "@tensorflow/tfjs";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import Canvas from "react-native-canvas";
// import * as Speech from "expo-speech";

// const TensorCamera = cameraWithTensors(Camera);

// const initialiseTensorflow = async () => {
// 	await tf.ready();
// 	tf.getBackend();
// };

const SeeScreen = (props) => {
	// const { navigation } = props;
	// let cameraRef = useRef();
	// const [hasCameraPermission, setHasCameraPermission] = useState(null);
	// const [model, setModel] = useState();
	// let textureDimensions =
	// 	Platform.OS === "ios"
	// 		? { height: 1920, width: 1080 }
	// 		: { height: 1200, width: 600 };
	// const { height, width } = Dimensions.get("window");
	// const canvasRef = useRef();
	// const context = useRef();

	// useEffect(() => {
	// 	(async () => {
	// 		const cameraPermission =
	// 			await Camera.requestCameraPermissionsAsync();
	// 		setHasCameraPermission(cameraPermission.status === "granted");
	// 		/////
	// 		await initialiseTensorflow();
	// 		setModel(await cocoSsd.load());
	// 	})();
	// }, []);

	// useEffect(() => {
	// 	const unsubscribe = navigation.addListener("beforeRemove", () => {
	// 		// Stop the camera and release resources before navigating away
	// 		if (cameraRef.current) {
	// 			cameraRef.current.pausePreview();
	// 			cameraRef.current.unloadAsync();
	// 		}
	// 	});

	// 	return unsubscribe;
	// }, [navigation]);

	// if (hasCameraPermission === null) {
	// 	return <View />;
	// }
	// if (hasCameraPermission === false) {
	// 	return <Text>No access to camera</Text>;
	// }

	const handleCameraStream = (images) => {
		// const loop = async () => {
		// 	const nextImageTensor = images.next().value;
		// 	if (!model || !nextImageTensor) {
		// 		return;
		// 	}
		// 	model.detect(nextImageTensor).then((prediction) => {
		// 		console.log(prediction.map((prediction) => prediction.class));
		// 		drawRectangle(prediction, nextImageTensor);
		// 		tf.dispose([nextImageTensor]);
		// 	});
		// 	// const predictions = await model.detect(nextImageTensor);
		// 	// console.log(predictions.map((prediction) => prediction.class));
		// 	// drawRectangle(predictions, nextImageTensor);
		// 	// tf.dispose([nextImageTensor]);
		// 	requestAnimationFrame(loop);
		// };
		// loop();
	};

	// const drawRectangle = (predictions, nextImageTensor) => {
	// 	if (!canvasRef.current || !context.current) {
	// 		return;
	// 	}

	// 	const scaledHeight = height / nextImageTensor.shape[0];
	// 	const scaledWidth = width / nextImageTensor.shape[1];

	// 	const flipHorizontal = Platform.OS === "ios" ? false : true;

	// 	context.current.clearRect(0, 0, width, height);

	// 	for (const prediction of predictions) {
	// 		const { x, y, widthBBox, heightBBox } = prediction.bbox;

	// 		const boundingBoxX = flipHorizontal
	// 			? canvasRef.current.width -
	// 			  x * scaledWidth -
	// 			  widthBBox * scaledWidth
	// 			: x * scaledWidth;
	// 		const boundingBoxY = y * scaledHeight;

	// 		context.current.strokeRect(
	// 			boundingBoxX,
	// 			boundingBoxY,
	// 			widthBBox * scaledWidth,
	// 			heightBBox * scaledHeight
	// 		);

	// 		context.current.strokeText(
	// 			prediction.class,
	// 			boundingBoxX - 5,
	// 			boundingBoxY - 5
	// 		);
	// 	}
	// };

	// const handleCanvasRef = async (canvas) => {
	// 	if (!canvas) {
	// 		return;
	// 	}
	// 	canvas.width = width;
	// 	canvas.height = height;
	// 	const ctx = canvas.getContext("2d");
	// 	ctx.fillStyle = "blue";
	// 	ctx.strokeStyle = "red";
	// 	ctx.lineWidth = 3;

	// 	canvasRef.current = canvas;
	// 	context.current = ctx;
	// };

	return (
		// <SafeAreaView style={styles.container}>
		<View style={styles.container}>
			{/* <Camera
				style={styles.camera}
				type={Camera.Constants.Type.back}
				ref={cameraRef}
			/> */}
			{/* <TensorCamera
				style={styles.camera}
				type={Camera.Constants.Type.back}
				ref={cameraRef}
				cameraTextureHeight={textureDimensions.height}
				cameraTextureWidth={textureDimensions.width}
				resizeHeight={200}
				resizeWidth={152}
				resizeDepth={3}
				onReady={handleCameraStream}
				useCustomShadersToResize={false}
				autorender={true}
			/>
			<Canvas style={styles.canvas} ref={handleCanvasRef} /> */}
		</View>
		//  </SafeAreaView>
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
	},
	canvas: {
		position: "absolute",
		zIndex: 1000000,
		width: "100%",
		height: "100%",
	},
});

export default SeeScreen;
