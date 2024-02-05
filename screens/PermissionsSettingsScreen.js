import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform, Alert } from "react-native";
import * as Linking from "expo-linking";
import { Camera } from "expo-camera"; // Used to handle both camera and microphone permissions, as @react-native-voice/voice is not an expo package
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const PermissionsSettingsScreen = () => {
	const [hasCameraPermission, setHasCameraPermission] = useState(false);
	const [canAskAgainForCameraPermission, setCanAskAgainForCameraPermission] =
		useState(false);
	const [hasMicrophonePermission, setHasMicrophonePermission] =
		useState(false);
	const [
		canAskAgainForMicrophonePermission,
		setCanAskAgainForMicrophonePermission,
	] = useState(false);

	const cameraPermissionEndIcon = hasCameraPermission
		? "checkmark-sharp"
		: null;
	const microphonePermissionEndIcon = hasMicrophonePermission
		? "checkmark-sharp"
		: null;

	const handleCameraPermissions = async () => {
		try {
			const permission = await Camera.getCameraPermissionsAsync();
			setHasCameraPermission(permission.granted);
			setCanAskAgainForCameraPermission(permission.canAskAgain);
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
						onPress: () => handleCameraPermissions(),
					},
				]
			);
		}
	};

	const handleMicrophonePermissions = async () => {
		try {
			const permission = await Camera.getMicrophonePermissionsAsync();
			setHasMicrophonePermission(permission.granted);
			setCanAskAgainForMicrophonePermission(permission.canAskAgain);
		} catch (error) {
			console.error("Error getting microphone permission:", error);
			Alert.alert(
				"Error Getting Microphone Permission",
				"An error occurred while trying to get microphone permissions. Please try again.",
				[
					{ text: "Cancel", style: "cancel" },
					{
						text: "Retry",
						style: "default",
						onPress: () => handleMicrophonePermissions(),
					},
				]
			);
		}
	};

	const cameraPermissionsHandler = async () => {
		if (hasCameraPermission || !canAskAgainForCameraPermission) {
			await Linking.openSettings();
			return;
		}
		const permission = await Camera.requestCameraPermissionsAsync();
		setHasCameraPermission(permission.granted);
		setCanAskAgainForCameraPermission(permission.canAskAgain);
	};

	const microphonePermissionsHandler = async () => {
		if (hasMicrophonePermission || !canAskAgainForMicrophonePermission) {
			await Linking.openSettings();
			return;
		}
		const permission = await Camera.requestMicrophonePermissionsAsync();
		setHasMicrophonePermission(permission.granted);
		setCanAskAgainForMicrophonePermission(permission.canAskAgain);
	};

	const speechRecognitionPermissionsHandler = () => {
		Alert.alert(
			"Speech Recognition Permissions",
			"Speech recognition permissions are managed by your device's settings. Please navigate to your device's Privacy and Security settings to manage speech recognition permissions.",
			[{ text: "OK", style: "default" }]
		);
	};

	useEffect(() => {
		handleCameraPermissions();
		handleMicrophonePermissions();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.permissionsHeading}>
				Allow Helprr to access your:
			</Text>
			<SettingsOption
				onPress={cameraPermissionsHandler}
				text="Camera"
				endIcon={cameraPermissionEndIcon}
			/>
			<SettingsOption
				onPress={microphonePermissionsHandler}
				text="Microphone"
				endIcon={microphonePermissionEndIcon}
			/>
			{Platform.OS === "ios" && (
				<SettingsOption
					onPress={speechRecognitionPermissionsHandler}
					text="Speech Recognition"
					endIcon="chevron-forward-sharp"
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		justifyContent: "center",
		textAlign: "left",
	},
	permissionsHeading: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
		paddingHorizontal: 16,
	},
});

export default PermissionsSettingsScreen;
