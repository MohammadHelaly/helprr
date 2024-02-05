import React, { useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import * as Speech from "expo-speech";
import theme from "../../constants/theme";

const LanguageToggleButton = () => {
	const dispatch = useDispatch();

	const language = useSelector(
		(state) => state.conversations.conversationLanguage
	);

	const buttonLanguage = language === "en-US" ? "EN" : "ع";

	const handleToggle = () => {
		dispatch(conversationActions.toggleLanguage());
	};

	const checkAvailableVoices = async () => {
		let availableVoices = await Speech.getAvailableVoicesAsync();
		if (availableVoices.length === 0)
			availableVoices = await Speech.getAvailableVoicesAsync(); // Promise sometimes resolves with an empty array on first call on Android

		if (availableVoices.length === 0) {
			Alert.alert(
				"Voice Data Not Found",
				"Please make sure you have voice data installed on your device if you want to use text-to-speech. You can still use speech-to-text."
			);
			return;
		}

		const voice = availableVoices.find((voice) =>
			voice.language.includes(language)
		);

		if (!voice) {
			const voiceLanguage = language === "en-US" ? "English" : "Arabic";
			Alert.alert(
				`${voiceLanguage} Voice Data Not Found`,
				`Please make sure you have ${voiceLanguage} voice data installed on your device if you want to use text-to-speech in ${voiceLanguage}. You can still use speech-to-text in ${voiceLanguage}.`
			);
		}
	};

	useEffect(() => {
		checkAvailableVoices();
	}, [language]);

	return (
		<TouchableOpacity style={styles.button} onPress={handleToggle}>
			<Text style={styles.buttonText}>{buttonLanguage}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.lightGrey,
		padding: 10,
		borderRadius: 40,
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: theme.colors.black,
		fontSize: theme.sizes.xSmall,
	},
});

export default LanguageToggleButton;
