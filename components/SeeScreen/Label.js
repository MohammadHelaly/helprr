import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import * as Speech from "expo-speech";
import theme from "../../constants/theme";

const Label = (props) => {
	const { label, isFocused } = props;

	useEffect(() => {
		if (label !== undefined && isFocused) {
			Speech.speak(label, {
				language: "en-US",
				pitch: 1,
				rate: 1,
			});
		}
	}, [label, isFocused]);

	return (
		<View style={styles.labelContainer}>
			{label ? (
				<Text style={styles.label}>{label}</Text>
			) : (
				<ActivityIndicator color={theme.colors.black} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	labelContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 100,
		width: 168,
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 8,
		backgroundColor: theme.colors.white,
		// backgroundColor: theme.colors.pink,
	},
	label: {
		color: theme.colors.black,
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
	},
});

export default Label;