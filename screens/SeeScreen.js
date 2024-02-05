import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { objectDetectionActions } from "../store/slices/object-detection-slice";
import Label from "../components/SeeScreen/Label";
import ObjectDetectionCamera from "../components/SeeScreen/ObjectDetectionCamera";

const SeeScreen = () => {
	const isFocused = useIsFocused();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			objectDetectionActions.setIsFocused({
				isFocused: isFocused,
			})
		);
	}, [isFocused]);

	return (
		<View style={styles.container}>
			<ObjectDetectionCamera />
			<Label />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default SeeScreen;
