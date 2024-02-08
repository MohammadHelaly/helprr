import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "./TouchableComponent";
import theme from "../../constants/theme";

type SmallButtonProps = {
	style?: any;
	icon: any;
	onPress: () => void;
	size?: number;
};

const SmallButton = (props: SmallButtonProps) => {
	const { style, icon, onPress, size } = props;

	const buttonSize = size ? size : 14;

	const buttonStyles = {
		...style,
		...styles.button,
	};

	return (
		<View style={buttonStyles}>
			<TouchableComponent onPress={onPress}>
				<View style={styles.buttonContent}>
					<Ionicons
						name={icon}
						size={buttonSize}
						color={theme.colors.grey}
					/>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		overflow: "hidden",
	},
	buttonContent: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
});

export default SmallButton;
