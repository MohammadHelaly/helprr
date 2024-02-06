import React from "react";
import { StyleSheet, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import MoreSettingsScreen from "../screens/MoreSettingsScreen";
import LanguageSettingsScreen from "../screens/LanguageSettingsScreen";
import GeneralSettingsScreen from "../screens/GeneralSettingsScreen";
import PermissionsSettingsScreen from "../screens/PermissionsSettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import AcknowledgementsScreen from "../screens/AcknowledgementsScreen";
import theme from "../constants/theme";
import LegalScreen from "../screens/LegalScreen";
import LicenseScreen from "../screens/LicenseScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: styles.header,
				headerShadowVisible: false,
				headerTitleStyle: styles.headerTitle,
				headerTitleAlign: "left",
				headerBackTitleVisible: false,
				headerLeftLabelVisible: false,
				headerBackImage: () => (
					<Ionicons
						name="chevron-back-sharp"
						size={24}
						color={theme.colors.black}
						style={styles.headerBackIcon}
					/>
				),
			}}>
			<Stack.Screen
				name="ListenScreen"
				options={{
					headerTitle: "Settings",
				}}
				component={SettingsScreen}
			/>
			<Stack.Screen
				name="GeneralSettings"
				options={{
					headerTitle: "General",
				}}
				component={GeneralSettingsScreen}
			/>
			<Stack.Screen
				name="PermissionsSettings"
				options={{
					headerTitle: "Permissions",
				}}
				component={PermissionsSettingsScreen}
			/>
			<Stack.Screen
				name="LanguageSettings"
				options={{
					headerTitle: "Language",
				}}
				component={LanguageSettingsScreen}
			/>
			<Stack.Screen
				name="MoreSettings"
				options={{
					headerTitle: "More",
				}}
				component={MoreSettingsScreen}
			/>
			<Stack.Screen
				name="AboutScreen"
				options={{
					headerTitle: "About Helprr",
				}}
				component={AboutScreen}
			/>
			<Stack.Screen
				name="LegalScreen"
				options={{
					headerTitle: "Legal",
				}}
				component={LegalScreen}
			/>
			<Stack.Screen
				name="LicenseScreen"
				options={{
					headerTitle: "License",
				}}
				component={LicenseScreen}
			/>
			<Stack.Screen
				name="AcknowledgementsScreen"
				options={{
					headerTitle: "Acknowledgements",
				}}
				component={AcknowledgementsScreen}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: theme.colors.white,
		borderBottomWidth: 0,
	},
	headerTitle: {
		color: theme.colors.black,
		fontSize: theme.sizes.xxLarge,
		fontWeight: "bold",
	},
	headerBackIcon: {
		marginLeft: Platform.OS === "ios" ? 8 : 0,
	},
});

export default SettingsNavigator;
