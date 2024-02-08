import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../constants/theme";

type WarningProps = {
	variant: "permission" | "general";
	utility?: string;
	text?: string;
};

const Warning = (props: WarningProps) => {
	const { variant, utility, text } = props;

	const warningText =
		variant === "permission"
			? `Helprr doesnt have permission to access your ${utility}. Please grant that permission in your settings.`
			: variant === "general"
			? text
			: null;

	const warningContainerStyles =
		variant === "permission"
			? { ...styles.container, ...styles.permissionWarningContainer }
			: { ...styles.container };

	return (
		<View style={warningContainerStyles}>
			<View style={styles.warning}>
				<Ionicons
					name="information-circle-outline"
					size={24}
					color={theme.colors.grey}
				/>
				<Text style={styles.warningText}>{warningText}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.lightGrey,
	},
	permissionWarningContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	warning: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 8,
		margin: 48,
		position: "relative",
	},
	warningText: {
		color: theme.colors.grey,
		fontSize: theme.sizes.medium,
	},
});

export default Warning;
