import React from "react";
import { View, StyleSheet } from "react-native";
import TouchableComponent from "./TouchableComponent";
import { Ionicons } from "@expo/vector-icons";

const SmallButton = (props) => {
	const { style, icon, onPress, size } = props;
	return (
		<View style={{ ...style, ...styles.button }}>
			<TouchableComponent onPress={onPress}>
				<View style={styles.buttonContent}>
					<Ionicons
						name={icon}
						size={size ? size : 14}
						color="grey"
					/>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		// height: 50,
		borderRadius: 4,
		// width: 200,
		overflow: "hidden",
	},
	buttonContent: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
});

export default SmallButton;
