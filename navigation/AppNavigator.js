import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Platform, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ListenNavigator from "./ListenNavigator";
import SettingsNavigator from "./SettingsNavigator";
import SeeScreen from "../screens/SeeScreen";
import theme from "../constants/theme";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarActiveTintColor: theme.colors.black,
				// Platform.OS === "android" ? "#ffffff" : "#000000",
				tabBarStyle: styles.tabBar,
				headerStyle: styles.header,
				headerTitleStyle: styles.headerTitle,
				headerTitleAlign: "left",
				// headerShadowVisible: false,
			}}>
			<Tab.Screen
				name="Home"
				options={{
					// headerShown: true,
					headerTitle: () => (
						<Image
							source={require("../assets/logo.jpg")}
							style={styles.logo}
						/>
					),
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={
								Platform.OS === "android"
									? "home-sharp"
									: "home-sharp"
							}
							color={color}
							size={size}
						/>
					),
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Listen"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={
								Platform.OS === "android"
									? "ear-sharp"
									: "ear-sharp"
							}
							color={color}
							size={size}
						/>
					),
				}}
				component={ListenNavigator}
			/>
			<Tab.Screen
				name="See"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={
								Platform.OS === "android"
									? "eye-sharp"
									: "eye-sharp"
							}
							color={color}
							size={size}
						/>
					),
				}}
				component={SeeScreen}
			/>
			<Tab.Screen
				name="Settings"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={
								Platform.OS === "android"
									? "settings-sharp"
									: "settings-sharp"
							}
							color={color}
							size={size}
						/>
					),
				}}
				ta
				component={SettingsNavigator}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		// backgroundColor: Platform.OS === "android" ? "#000000" : "#ffffff",
		backgroundColor: theme.colors.white,
		height: 100,
		paddingVertical: 10,
		borderTopWidth: 0,
	},
	header: {
		backgroundColor:
			Platform.OS === "android" ? theme.colors.black : theme.colors.white,
	},
	headerTitle: {
		color:
			Platform.OS === "android" ? theme.colors.white : theme.colors.black,
		fontSize: theme.sizes.xxLarge,
		fontWeight: "bold",
	},
	logo: {
		width: 40, // 38
		height: 40, // 38
		resizeMode: "cover",
		borderRadius: 8,
	},
});

export default AppNavigator;
