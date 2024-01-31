import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";
import theme from "../../constants/theme";

const LanguageToggleButton = () => {
	const dispatch = useDispatch();
	const language = useSelector((state) => state.conversations.language);

	const buttonLanguage = language === "en-US" ? "EN" : "ع";

	const handleToggle = () => {
		dispatch(conversationActions.toggleLanguage());
	};

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
		// fontWeight: "bold",
		fontSize: theme.sizes.xSmall,
	},
});

export default LanguageToggleButton;
