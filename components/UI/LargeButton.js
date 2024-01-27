import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableComponent from "./TouchableComponent";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const LargeButton = (props) => {
	const { style, icon, title, onPress, gradient } = props;
	return (
		<View style={{ ...style, ...styles.button }}>
			<TouchableComponent onPress={onPress}>
				{gradient ? (
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={gradient}>
						<View style={styles.buttonContent}>
							<Text style={styles.buttonText}>{title}</Text>
							{props.icon && (
								<Ionicons name={icon} size={24} color="white" />
							)}
						</View>
					</LinearGradient>
				) : (
					<View
						style={{
							...styles.buttonContent,
							backgroundColor: theme.colors.black,
						}}>
						<Text style={styles.buttonText}>{title}</Text>
						{props.icon && (
							<Ionicons name={icon} size={24} color="white" />
						)}
					</View>
				)}
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		// height: 50,
		borderRadius: 8,
		width: 168,
		overflow: "hidden",
	},
	buttonContent: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
		// borderRadius: 30,
	},
	buttonText: {
		color: theme.colors.white,
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
	},
});

export default LargeButton;
