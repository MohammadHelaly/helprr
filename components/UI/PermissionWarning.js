import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, LogBox, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../../constants/theme";

const PermissionWarning = (props) => {
	const { utility } = props;
	return (
		<View style={styles.camera}>
			<View style={styles.warningContainer}>
				<Ionicons
					name="information-circle-outline"
					size={24}
					color={theme.colors.grey}
				/>
				<Text style={styles.warning}>
					{`Helprr doesnt have permission to access your ${utility}. Please grant that permission in your settings.`}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.lightGrey,
	},
	warningContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 8,
		margin: 48,
		position: "relative",
		top: 200,
	},
	warning: {
		color: theme.colors.grey,
		fontSize: theme.sizes.medium,
	},
});

export default PermissionWarning;
