import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "../UI/TouchableComponent";
// import Sentence from "../../models/Sentence";
import LanguageToggleButton from "./LanguageToggleButton";
import VoiceRecordButton from "./VoiceRecordButton";
import theme from "../../constants/theme";

const ConversationTextInput = (props) => {
	const { conversationId } = props;

	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const language = useSelector(
		(state) => state.conversations.conversationLanguage
	);

	const placeholder =
		language === "en-US" ? "Type a message..." : "اكتب رسالة...";

	const textAlignment =
		language === "en-US" ? styles.textLeft : styles.textRight;

	const textInputStyles = {
		...styles.input,
		...textAlignment,
	};

	const handleTextChange = (text) => {
		setMessage(text);
	};

	const handleSend = () => {
		if (message.trim() === "") {
			return;
		}

		const timestamp = moment(Date.now()).format("hh:mm a");

		const newSentence = {
			id: uuidv4(),
			text: message,
			conversation: conversationId,
			type: "textToSpeech",
			language: language,
			timestamp: timestamp,
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

		Speech.speak(message, {
			language: language,
			pitch: 1,
			rate: 1,
		});

		setMessage("");
	};

	return (
		<View style={styles.container}>
			<VoiceRecordButton conversationId={conversationId} />
			<LanguageToggleButton />
			<TextInput
				style={textInputStyles}
				placeholder={placeholder}
				value={message}
				onChangeText={handleTextChange}
				multiline
			/>
			<TouchableComponent style={styles.sendButton} onPress={handleSend}>
				<Ionicons
					name="arrow-forward-circle-sharp"
					size={42}
					color={theme.colors.black}
				/>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 4,
		paddingHorizontal: 16,
		height: 64,
		backgroundColor: theme.colors.white,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: theme.colors.lightGrey,
		backgroundColor: theme.colors.lightGrey,
		borderRadius: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 16,
		marginHorizontal: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	textLeft: {
		textAlign: "left",
	},
	textRight: {
		textAlign: "right",
	},
	sendButton: {
		borderRadius: 32,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ConversationTextInput;
