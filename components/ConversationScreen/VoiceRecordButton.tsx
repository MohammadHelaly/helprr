import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform, Alert } from "react-native";
import {
	useTypedDispatch,
	useTypedSelector,
} from "../../hooks/typed-redux-hooks";
import {
	conversationActions,
	Sentence,
} from "../../store/slices/conversation-slice";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera"; // Used to handle microphone permissions, as @react-native-voice/voice is not an expo package
import * as Linking from "expo-linking";
import Voice, {
	SpeechErrorEvent,
	SpeechResultsEvent,
} from "@react-native-voice/voice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import TouchableComponent from "../UI/TouchableComponent";
import theme from "../../constants/theme";

type VoiceRecordButtonProps = {
	conversationId: string;
};

const VoiceRecordButton = (props: VoiceRecordButtonProps) => {
	const { conversationId } = props;

	const dispatch = useTypedDispatch();

	const language = useTypedSelector(
		(state) => state.conversations.conversationLanguage
	);

	const [hasPermission, setHasPermission] = useState(false);
	const [engineIsAvailable, setEngineIsAvailable] = useState(true);
	const [isListening, setIsListening] = useState(false);
	const [error, setError] = useState(false);

	const buttonStyles = isListening
		? { ...styles.recordButton, ...styles.recording }
		: error
		? { ...styles.recordButton, ...styles.error }
		: { ...styles.recordButton, ...styles.normal };

	const handlePermissions = async () => {
		try {
			const permission = await Camera.getMicrophonePermissionsAsync();
			setHasPermission(permission.granted);
			if (permission.canAskAgain && !permission.granted) {
				const newPermission =
					await Camera.requestMicrophonePermissionsAsync();
				setHasPermission(newPermission.granted);
			}
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
						onPress: () => handlePermissions(),
					},
				]
			);
		}
	};

	const handleEngineAvailability = async () => {
		try {
			const isAvailable = await Voice.isAvailable();
			const availableEngines = await Voice.getSpeechRecognitionServices();
			if (Platform.OS !== "android") {
				setEngineIsAvailable(isAvailable === 1);
				return;
			}
			setEngineIsAvailable(
				isAvailable &&
					Array.isArray(availableEngines) &&
					availableEngines.includes(
						"com.google.android.googlequicksearchbox"
					)
			);
		} catch (error) {
			console.error("Error checking speech recognition engine:", error);
			Alert.alert(
				"Error Checking Speech Recognition Engine",
				"An error occurred while trying to check the speech recognition engine. Please try again.",
				[
					{ text: "Cancel", style: "cancel" },
					{
						text: "Retry",
						style: "default",
						onPress: () => handleEngineAvailability(),
					},
				]
			);
		}
	};

	const permissionAlert = () => {
		Alert.alert(
			"Microphone Permission Required",
			"Helprr needs access to your microphone.",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Allow",
					style: "default",
					onPress: async () => await Linking.openSettings(),
				},
			]
		);
	};

	const engineAlert = () => {
		if (Platform.OS === "android") {
			Alert.alert(
				"Speech Recognition Engine Not Found",
				"Helprr uses Google's speech recognition engine. Please make sure you have the Google app installed and that it is up to date.",
				[{ text: "OK", style: "default" }]
			);
		} else {
			Alert.alert(
				"Speech Recognition Engine Not Found",
				"Helprr needs to use the speech recognition, but it is not available on your device. Please check your settings.",
				[
					{ text: "Cancel", style: "cancel" },
					{
						text: "OK",
						style: "default",
						onPress: async () => await Linking.openSettings(),
					},
				]
			);
		}
	};

	const startListening = async () => {
		setError(false);
		if (!hasPermission) {
			permissionAlert();
			return;
		}
		if (!engineIsAvailable) {
			engineAlert();
			return;
		}
		try {
			setIsListening(true);
			await Voice.start(language);
		} catch (error) {
			console.error(error);
			setError(true);
		}
	};

	const stopListening = async () => {
		try {
			Voice.removeAllListeners();
			await Voice.stop();
			setIsListening(false);
			setError(false);
		} catch (error) {
			console.error(error);
			setError(true);
		}
	};

	const onSpeechStartHandler = () => {
		console.log("Speech started");
		setError(false);
	};

	const onSpeechResultsHandler = (event: SpeechResultsEvent) => {
		const sentenceText =
			language === "en-US"
				? event.value[0].charAt(0).toUpperCase() +
				  event.value[0].slice(1)
				: event.value[0];

		const newSentence: Sentence = {
			id: uuidv4(),
			text: sentenceText,
			conversation: conversationId,
			type: "speechToText",
			language: language,
			timestamp: moment(Date.now()).format("hh:mm a"),
		};

		dispatch(
			conversationActions.addNewSentence({
				sentence: newSentence,
			})
		);

		setError(false);
	};

	const onSpeechErrorHandler = (error: SpeechErrorEvent) => {
		console.log(error.error);
		if (error.error.code === "7" || error.error.code === "2")
			setError(true);
	};

	useEffect(() => {
		handlePermissions();
		handleEngineAvailability();
	}, []);

	useEffect(() => {
		Voice.onSpeechStart = onSpeechStartHandler;
		Voice.onSpeechEnd = stopListening;
		Voice.onSpeechResults = onSpeechResultsHandler;
		Voice.onSpeechError = onSpeechErrorHandler;

		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, [language]);

	return (
		<View style={buttonStyles}>
			<TouchableComponent
				onLongPress={startListening}
				onPressOut={stopListening}>
				<Ionicons
					name="mic-sharp"
					size={36}
					color={theme.colors.white}
				/>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	recordButton: {
		position: "absolute",
		bottom: 80,
		width: 50,
		height: 50,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	normal: {
		backgroundColor: theme.colors.black,
	},
	recording: {
		transform: [{ scale: 1.2 }],
		backgroundColor: theme.colors.pink,
	},
	error: {
		backgroundColor: "red",
	},
});

export default VoiceRecordButton;
