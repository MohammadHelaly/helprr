import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "./TouchableComponent";
import theme from "../../constants/theme";

type SettingsOptionProps = {
	onPress: () => void;
	text: string;
	endIcon?: any;
	endText?: string;
};

const SettingsOption = (props: SettingsOptionProps) => {
	const { onPress, text, endIcon, endText } = props;

	return (
		<TouchableComponent onPress={onPress}>
			<View style={styles.optionContainer}>
				<View style={styles.option}>
					<View style={styles.optionContent}>
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
		paddingVertical: 32,
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGrey,
	},
	optionContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
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
