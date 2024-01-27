import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../constants/theme";
import TouchableComponent from "../UI/TouchableComponent";
// import Sentence from "../../models/Sentence";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import * as Speech from "expo-speech";
import LanguageToggleButton from "./LanguageToggleButton";
import VoiceRecordButton from "./VoiceRecordButton";

const ConversationTextInput = (props) => {
	const { conversationId } = props;
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const language = useSelector((state) => state.conversations.language);

	const textAlignment =
		language === "en-US" ? styles.textLeft : styles.textRight;

	const handleSend = () => {
		if (message.trim() === "") {
			return;
		}

		const newSentence = {
			id: uuidv4(),
			text: message,
			conversation: conversationId,
			type: "textToSpeech",
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
				style={{ ...styles.input, ...textAlignment }}
				placeholder={
					language === "en-US" ? "Type a message..." : "اكتب رسالة..."
				}
				value={message}
				onChangeText={(text) => setMessage(text)}
				multiline
			/>
			<TouchableComponent style={styles.sendButton} onPress={handleSend}>
				<Ionicons
					name={
						Platform.OS === "android"
							? "arrow-forward-circle-sharp"
							: "arrow-forward-circle-sharp"
					}
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
		// borderBottomWidth: 1,
		// borderBottomColor: theme.colors.lightGrey,
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
		// width: 40,
		// height: 40,
		borderRadius: 32,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ConversationTextInput;
