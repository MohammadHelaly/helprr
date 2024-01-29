import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Label from "../components/SeeScreen/Label";
import ObjectDetectionCamera from "../components/SeeScreen/ObjectDetectionCamera";
import theme from "../constants/theme";

const SeeScreen = (props) => {
	const { navigation } = props;
	const isFocused = useIsFocused();
	const [label, setLabel] = useState(undefined);

	return (
		<View style={styles.container}>
			<ObjectDetectionCamera setLabel={setLabel} isFocused={isFocused} />
			{/* <View style={styles.camera} /> */}
			<Label label={label} isFocused={isFocused} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors.darkGray,
	},
});

export default SeeScreen;
