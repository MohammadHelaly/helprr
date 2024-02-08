import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "./TouchableComponent";
import theme from "../../constants/theme";

type LargeButtonProps = {
	style?: any;
	icon?: any;
	title: string;
	onPress: () => void;
	gradient?: string[];
};

const LargeButton = (props: LargeButtonProps) => {
	const { style, icon, title, onPress, gradient } = props;

	const buttonStyles = {
		...styles.button,
		...style,
	};

	const mainButtonStyles = {
		...styles.buttonContent,
		...styles.mainButton,
	};

	const gradientCoordinates = {
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
	};

	return (
		<View style={buttonStyles}>
			<TouchableComponent onPress={onPress}>
				{gradient ? (
					<LinearGradient
						start={gradientCoordinates.start}
						end={gradientCoordinates.end}
						colors={gradient}>
						<View style={styles.buttonContent}>
							<Text style={styles.buttonText}>{title}</Text>
							{props.icon && (
								<Ionicons
									name={icon}
									size={24}
									color={theme.colors.white}
								/>
							)}
						</View>
					</LinearGradient>
				) : (
					<View style={mainButtonStyles}>
						<Text style={styles.buttonText}>{title}</Text>
						{props.icon && (
							<Ionicons
								name={icon}
								size={24}
								color={theme.colors.white}
							/>
						)}
					</View>
				)}
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		width: 168,
		overflow: "hidden",
	},
	buttonContent: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
	},
	mainButton: {
		backgroundColor: theme.colors.black,
	},
	buttonText: {
		color: theme.colors.white,
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
	},
});

export default LargeButton;
