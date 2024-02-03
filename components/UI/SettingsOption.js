import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "./TouchableComponent";
import theme from "../../constants/theme";

const SettingsOption = (props) => {
	const { onPress, text, endIcon, endText } = props;

	return (
		<TouchableComponent onPress={onPress}>
			<View style={styles.optionContainer}>
				<View style={styles.option}>
					<Text style={styles.setting}>{text}</Text>
					{endIcon ? (
						<Ionicons
							name={endIcon}
							size={24}
							color={theme.colors.black}
						/>
					) : endText ? (
						<Text style={styles.secondaryText}>{endText}</Text>
					) : null}
				</View>
			</View>
		</TouchableComponent>
	);
};

const styles = StyleSheet.create({
	optionContainer: {
		maxWidth: "100%",
		paddingHorizontal: 16,
	},
	option: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 32,
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGrey,
	},
	setting: {
		fontSize: theme.sizes.medium,
	},
	secondaryText: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
	},
});

export default SettingsOption;
