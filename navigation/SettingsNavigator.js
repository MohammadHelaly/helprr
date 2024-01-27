import React from "react";
import { StyleSheet, Platform, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import SettingsScreen from "../screens/SettingsScreen";
import MoreSettingsScreen from "../screens/MoreSettingsScreen";
import LanguageSettingsScreen from "../screens/LanguageSettingsScreen";
import GeneralSettingsScreen from "../screens/GeneralSettingsScreen";
import PermissionsSettingsScreen from "../screens/PermissionsSettingsScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				// headerShown: false,
				// tabBarActiveTintColor: "#000000",
				// Platform.OS === "android" ? "#ffffff" : "#000000",
				// tabBarStyle: styles.tabBar,
				headerStyle: styles.header,
				headerShadowVisible: false,
				// headerShown: false,
				headerTitleStyle: styles.headerTitle,
				headerTitleAlign: "left",
				headerBackTitleVisible: false,
				headerLeftLabelVisible: false,
				headerBackImage: () => (
					<Ionicons
						name={
							Platform.OS === "android"
								? "chevron-back-sharp"
								: "chevron-back-sharp"
						}
						size={24}
						color={theme.colors.black}
						style={styles.headerBackIcon}
					/>
				),
				// headerShadowVisible: false,
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
		fontSize: theme.sizes.xxLarge, // 28
		fontWeight: "bold",
		// marginBottom: 16,
	},
	headerBackIcon: {
		marginLeft: 8,
	},
});

export default SettingsNavigator;
