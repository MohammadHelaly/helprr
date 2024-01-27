import { View, Text, StyleSheet, Platform } from "react-native";
import LargeButton from "../UI/LargeButton";
import theme from "../../constants/theme";

const CallToAction = (props) => {
	const { onButtonPress } = props;

	return (
		<View style={styles.callToActionContainer}>
			<Text
				style={{
					...styles.callToActionText,
					...styles.callToActionTextLight,
				}}>
				Start a
				<Text
					style={{
						...styles.callToActionText,
						...styles.callToActionTextHighlight,
					}}>
					{" "}
					conversation{" "}
				</Text>
				with someone. Have them speak and we'll
				<Text
					style={{
						...styles.callToActionText,
						...styles.callToActionTextDark,
					}}>
					{" "}
					transcribe{" "}
				</Text>
				it for you. You can also type what you want to say and we'll
				<Text
					style={{
						...styles.callToActionText,
						...styles.callToActionTextDark,
					}}>
					{" "}
					speak{" "}
				</Text>
				it for you. We'll hold on to your last few conversations.
			</Text>
			<LargeButton
				title="Listen"
				style={styles.button}
				icon={Platform.OS === "android" ? "ear-sharp" : "ear-sharp"}
				onPress={onButtonPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	callToActionContainer: {
		// flex: 1,
		// width: "100%",
		minHeight: "50%", //TODO: make this dynamic
		justifyContent: "center",
		gap: 24,
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 0,
		// borderTopColor: theme.colors.lightGrey,
		// borderTopWidth: 0.5,
		backgroundColor: theme.colors.white,
		// borderRadius: 8,
		// marginHorizontal: 16,
		// marginBottom: 32,
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
