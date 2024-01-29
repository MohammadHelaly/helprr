import React, { useState } from "react";
import { View, StyleSheet, Platform, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import GradientText from "../UI/GradientText";
import SmallButton from "../UI/SmallButton";
import theme from "../../constants/theme";
import * as Speech from "expo-speech";

const SentenceBubble = (props) => {
	const { sentence } = props;

	const [isEditing, setIsEditing] = useState(false);
	const [currentText, setCurrentText] = useState(sentence.text);

	const dispatch = useDispatch();

	const textAlignment =
		sentence.language === "ar-SA"
			? styles.textRight
			: sentence.language === "en-US"
			? styles.textLeft
			: styles.textLeft;

	const bubbleStyles =
		sentence.type === "speechToText"
			? { ...styles.bubble, ...styles.speechToTextBubble }
			: { ...styles.bubble, ...styles.textToSpeechBubble };

	const textStyles =
		sentence.type === "speechToText"
			? {
					...styles.speechToTextText,
					...styles.textPink,
					...textAlignment,
			  }
			: { ...styles.textToSpeechText, ...textAlignment };

	const handleTextChange = () => {
		dispatch(
			conversationActions.editSentence({
				sentence: {
					id: sentence.id,
					text: currentText,
					conversation: sentence.conversation,
				},
			})
		);
		setIsEditing(false);
	};

	return (
		<View style={bubbleStyles}>
			<View style={styles.textContainer}>
				{isEditing ? (
					<TextInput
						autoFocus
						// multiline
						style={textStyles}
						returnKeyType="done"
						defaultValue={sentence.text}
						onChangeText={(text) => {
							setCurrentText(text);
						}}
						onEndEditing={handleTextChange}
					/>
				) : sentence.type === "textToSpeech" ? (
					<Text style={textStyles}>{sentence?.text}</Text>
				) : (
					<GradientText
						style={textStyles}
						colors={theme.colors.darkPinkAndCyanGradient}>
						{sentence?.text}
					</GradientText>
				)}
			</View>
			<View style={styles.auxiliaryContainer}>
				{sentence.type === "speechToText" ? (
					<SmallButton
						style={styles.button}
						size={18}
						icon={
							Platform.OS === "android"
								? "create-outline"
								: "create-outline"
						}
						onPress={() => {
							setIsEditing(true);
						}}
					/>
				) : (
					<SmallButton
						style={styles.button}
						size={18}
						icon={
							Platform.OS === "android"
								? "mic-outline"
								: "mic-outline"
						}
						onPress={() => {
							Speech.speak(sentence?.text, {
								language: sentence?.language,
								pitch: 1,
								rate: 1,
							});
						}}
					/>
				)}
				<Text style={styles.timestamp}>{sentence.timestamp}</Text>
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
		// alignItems: "flex-end",
		gap: 8,
		backgroundColor: theme.colors.white,
		// borderBottomColor: theme.colors.grey,
		// borderBottomWidth: 2,
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
		// backgroundColor: theme.colors.pink,
		alignSelf: "flex-start",
	},
	speechToTextText: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
	},
	textToSpeechBubble: {
		// backgroundColor: theme.colors.lightGrey,
		alignSelf: "flex-end",
	},
	textToSpeechText: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
	},
	button: {
		// marginLeft: 4,
		padding: 0,
		// height: 20,
	},
	timestamp: {
		fontSize: theme.sizes.xSmall,
		color: theme.colors.grey,
		// marginHorizontal: 4,
	},
	auxiliaryContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		justifyContent: "flex-end",
		gap: 4,
	},
});

export default SentenceBubble;
