import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Label from "../components/SeeScreen/Label";
import ObjectDetectionCamera from "../components/SeeScreen/ObjectDetectionCamera";

const SeeScreen = () => {
	const isFocused = useIsFocused();
	const [label, setLabel] = useState(undefined);

	return (
		<View style={styles.container}>
			<ObjectDetectionCamera setLabel={setLabel} isFocused={isFocused} />
			<Label label={label} isFocused={isFocused} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default SeeScreen;
