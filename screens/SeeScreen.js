import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {
	useCameraPermission,
	useMicrophonePermission,
	useCameraDevice,
	Camera,
} from "react-native-vision-camera";
import Label from "../components/SeeScreen/Label";
import theme from "../constants/theme";

const SeeScreen = (props) => {
	const { navigation } = props;
	// const { hasPermission, requestPermission } = useMicrophonePermission();
	const { hasPermission, requestPermission } = useCameraPermission();
	const device = useCameraDevice("back");
	const isFocused = useIsFocused();
	const [label, setLabel] = useState(undefined);

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
