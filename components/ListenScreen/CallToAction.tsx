import { View, Text, StyleSheet } from "react-native";
import LargeButton from "../UI/LargeButton";
import theme from "../../constants/theme";

type CallToActionProps = {
	onButtonPress: () => void;
};

const CallToAction = (props: CallToActionProps) => {
	const { onButtonPress } = props;

	const lightTextStyles = {
		...styles.callToActionText,
		...styles.callToActionTextLight,
	};

	const darkTextStyles = {
		...styles.callToActionText,
		...styles.callToActionTextDark,
	};

	const highlightTextStyles = {
		...styles.callToActionText,
		...styles.callToActionTextHighlight,
	};

	return (
		<View style={styles.callToActionContainer}>
			<Text style={lightTextStyles}>
				Start a<Text style={highlightTextStyles}> conversation </Text>
				with someone. Have them speak and we'll
				<Text style={darkTextStyles}> transcribe </Text>
				it for you. You can also type what you want to say and we'll
				<Text style={darkTextStyles}> speak </Text>
				it for you. We'll hold on to your last few conversations.
			</Text>
			<LargeButton
				title="Listen"
				icon="ear-sharp"
				onPress={onButtonPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	callToActionContainer: {
		minHeight: "50%",
		justifyContent: "center",
		gap: 24,
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 0,
		backgroundColor: theme.colors.white,
	},
	callToActionText: {
		textAlign: "left",
		fontSize: theme.sizes.medium,
	},
	callToActionTextHighlight: {
		color: theme.colors.pink,
		fontWeight: "bold",
	},
	callToActionTextDark: {
		color: theme.colors.black,
		fontWeight: "bold",
	},
	callToActionTextLight: {
		color: theme.colors.grey,
	},
});

export default CallToAction;
