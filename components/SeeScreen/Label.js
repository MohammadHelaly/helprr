import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import * as Speech from "expo-speech";
import theme from "../../constants/theme";

const Label = () => {
	const label = useSelector((state) => state.objectDetection.label);
	const isFocused = useSelector((state) => state.objectDetection.isFocused);

	useEffect(() => {
		if (!isFocused) {
			return;
		}
		if (label === undefined) {
			Speech.speak("Loading", {
				language: "en-US",
				pitch: 1,
				rate: 1,
			});
			return;
		}
		Speech.speak(label, {
			language: "en-US",
			pitch: 1,
			rate: 1,
		});
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
		minWidth: 168,
		minHeight: 54,
		padding: 16,
		borderRadius: 8,
		backgroundColor: theme.colors.white,
		zIndex: 10,
	},
	label: {
		color: theme.colors.black,
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
	},
});

export default Label;
