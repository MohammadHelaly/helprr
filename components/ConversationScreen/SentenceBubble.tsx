import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTypedDispatch } from "../../hooks/typed-redux-hooks";
import {
	Sentence,
	conversationActions,
} from "../../store/slices/conversation-slice";
import * as Speech from "expo-speech";
import EditableText from "../UI/EditableText";
import SmallButton from "../UI/SmallButton";
import theme from "../../constants/theme";

type SentenceBubbleProps = {
	sentence: Sentence;
};

const SentenceBubble = (props: SentenceBubbleProps) => {
	const { sentence } = props;
	const { id, text, conversation, type, language, timestamp } = sentence;

	const [isEditing, setIsEditing] = useState(false);
	const [currentText, setCurrentText] = useState(text);

	const dispatch = useTypedDispatch();

	const textAlignment =
		language === "ar"
			? styles.textRight
			: sentence.language === "en-US"
			? styles.textLeft
			: styles.textLeft;

	const bubbleStyles =
		type === "speechToText"
			? { ...styles.bubble, ...styles.speechToTextBubble }
			: { ...styles.bubble, ...styles.textToSpeechBubble };

	const textStyles =
		type === "speechToText"
			? {
					...styles.speechToTextText,
					...styles.textPink,
					...textAlignment,
			  }
			: { ...styles.textToSpeechText, ...textAlignment };

	const auxiliaryButtonIcon =
		type === "speechToText" ? "create-outline" : "mic-outline";

	const handleEditButtonPress = () => {
		setIsEditing(true);
	};

	const handleSpeechButtonPress = () => {
		Speech.speak(text, {
			language: language,
			pitch: 1,
			rate: 1,
		});
	};

	const auxiliaryButtonPressHandler =
		type === "speechToText"
			? handleEditButtonPress
			: handleSpeechButtonPress;

	const handleCurrentTextChange = (text: string) => {
		setCurrentText(text);
	};

	const handleTextChange = () => {
		const editedSentence: Sentence = {
			id: id,
			text: currentText,
			conversation: conversation,
			type: type,
			language: language,
			timestamp: timestamp,
		};

		dispatch(
			conversationActions.editSentence({
				sentence: editedSentence,
			})
		);

		setIsEditing(false);
	};

	return (
		<View style={bubbleStyles}>
			<View style={styles.textContainer}>
				<EditableText
					defaultValue={text}
					isEditing={isEditing}
					style={textStyles}
					onEndEditing={handleTextChange}
					setCurrentText={handleCurrentTextChange}
					isGradient={type === "speechToText"}
					colors={theme.colors.darkPinkAndCyanGradient}
				/>
			</View>
			<View style={styles.auxiliaryContainer}>
				<SmallButton
					style={styles.button}
					size={18}
					icon={auxiliaryButtonIcon}
					onPress={auxiliaryButtonPressHandler}
				/>
				<Text style={styles.timestamp}>{timestamp}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	bubble: {
		padding: 16,
		borderRadius: 16,
		marginHorizontal: 16,
		marginVertical: 8,
		width: "60%",
		flexDirection: "column",
		justifyContent: "space-around",
		gap: 8,
		backgroundColor: theme.colors.white,
	},
	textContainer: {
		width: "100%",
	},
	textLeft: {
		textAlign: "left",
	},
	textRight: {
		textAlign: "right",
	},
	textPink: {
		color: theme.colors.pink,
	},
	speechToTextBubble: {
		alignSelf: "flex-start",
	},
	speechToTextText: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
	},
	textToSpeechBubble: {
		alignSelf: "flex-end",
	},
	textToSpeechText: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
	},
	button: {
		padding: 0,
	},
	timestamp: {
		fontSize: theme.sizes.xSmall,
		color: theme.colors.grey,
	},
	auxiliaryContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		justifyContent: "flex-end",
		gap: 4,
	},
});

export default SentenceBubble;
