import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import TouchableComponent from "../UI/TouchableComponent";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Voice from "@react-native-voice/voice";
import { LinearGradient } from "expo-linear-gradient";

const VoiceRecordButton = (props) => {
	const { conversationId } = props;
	const dispatch = useDispatch();
	const language = useSelector((state) => state.conversations.language);
	const [isListening, setIsListening] = useState(false);
	const [error, setError] = useState(false);

	const buttonStyles = isListening
		? { ...styles.recordButton, ...styles.recording }
		: error
		? { ...styles.recordButton, ...styles.error }
		: { ...styles.recordButton, ...styles.normal };

	const startListening = async () => {
		setError(false);
		setIsListening(true);
		try {
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

	const onSpeechStartHandler = (event) => {
		// console.log("Speech started");
		setError(false);
	};

	const onSpeechResultsHandler = (event) => {
		const newSentence = {
			id: uuidv4(),
			text:
				language === "en-US"
					? event.value[0].charAt(0).toUpperCase() +
					  event.value[0].slice(1)
					: event.value[0],
			conversation: conversationId,
			type: "speechToText",
			language: language,
			timestamp: moment(Date.now()).format("hh:mm a"),
		};

		// const newSentence = new Sentence(
		// 	conversationId,
		// 	message,
		// 	"textToSpeech",
		// 	Date.now()
		// );

		dispatch(
			conversationActions.addNewSentence({
				sentence: newSentence,
			})
		);
		setError(false);
	};

	const onSpeechErrorHandler = (error) => {
		// console.log(error.error);
		// console.log(error.error.code);
		error.error.code == 7 && setError(true);
	};

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
				onPressIn={startListening}
				onPressOut={stopListening}>
				<Ionicons
					name={Platform.OS === "android" ? "mic-sharp" : "mic-sharp"}
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
		// backgroundColor: theme.colors.black,
		justifyContent: "center",
		alignItems: "center",
		// borderWidth: 2,
		// borderColor: theme.colors.black,
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
