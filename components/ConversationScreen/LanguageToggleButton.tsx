import React, { useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import {
	useTypedSelector,
	useTypedDispatch,
} from "../../hooks/typed-redux-hooks";
import { conversationActions } from "../../store/slices/conversation-slice";
import * as Speech from "expo-speech";
import TouchableComponent from "../UI/TouchableComponent";
import theme from "../../constants/theme";

const LanguageToggleButton = () => {
	const dispatch = useTypedDispatch();

	const language = useTypedSelector(
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
		<View style={styles.button}>
			<TouchableComponent onPress={handleToggle}>
				<View style={styles.buttonContent}>
					<Text style={styles.buttonText}>{buttonLanguage}</Text>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.lightGrey,
		borderRadius: 40,
		overflow: "hidden",
		width: 40,
		height: 40,
	},
	buttonContent: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: theme.colors.black,
		fontSize: theme.sizes.xSmall,
	},
});

export default LanguageToggleButton;
