import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useTypedDispatch } from "../hooks/typed-redux-hooks";
import { objectDetectionActions } from "../store/slices/object-detection-slice";
import ObjectDetectionCamera from "../components/SeeScreen/ObjectDetectionCamera";
import Label from "../components/SeeScreen/Label";

const SeeScreen = () => {
	const isFocused = useIsFocused();
	const dispatch = useTypedDispatch();

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
