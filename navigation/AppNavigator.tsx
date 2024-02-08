import React from "react";
import { StyleSheet } from "react-native";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
	BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ListenParamList } from "./ListenNavigator";
import { SettingsParamList } from "./SettingsNavigator";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ListenNavigator from "./ListenNavigator";
import SettingsNavigator from "./SettingsNavigator";
import SeeScreen from "../screens/SeeScreen";
import theme from "../constants/theme";

type TabParamList = {
	Home: undefined;
	Listen: NavigatorScreenParams<ListenParamList>;
	See: undefined;
	Settings: NavigatorScreenParams<SettingsParamList>;
};

type HomeScreenProps = BottomTabScreenProps<TabParamList, "Home">;

type ListenScreenProps = BottomTabScreenProps<TabParamList, "Listen">;

type SeeScreenProps = BottomTabScreenProps<TabParamList, "See">;

type SettingsScreenProps = BottomTabScreenProps<TabParamList, "Settings">;

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator = () => {
	const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
		tabBarHideOnKeyboard: true,
		headerShown: false,
		tabBarActiveTintColor: theme.colors.black,
		tabBarStyle: styles.tabBar,
		headerTitleStyle: styles.headerTitle,
		headerTitleAlign: "left",
	};

	const tabBarIcon = (iconName: any) => {
		return ({ color, size }) => (
			<Ionicons name={iconName} color={color} size={size} />
		);
	};

	const homeScreenOptions: BottomTabNavigationOptions = {
		tabBarIcon: tabBarIcon("home-sharp"),
	};

	const listenScreenOptions: BottomTabNavigationOptions = {
		tabBarIcon: tabBarIcon("ear-sharp"),
	};

	const seeScreenOptions: BottomTabNavigationOptions = {
		tabBarIcon: tabBarIcon("eye-sharp"),
	};

	const settingsScreenOptions: BottomTabNavigationOptions = {
		tabBarIcon: tabBarIcon("settings-sharp"),
	};

	return (
		<Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
			<Tab.Screen
				name="Home"
				options={homeScreenOptions}
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Listen"
				options={listenScreenOptions}
				component={ListenNavigator}
			/>
			<Tab.Screen
				name="See"
				options={seeScreenOptions}
				component={SeeScreen}
			/>
			<Tab.Screen
				name="Settings"
				options={settingsScreenOptions}
				component={SettingsNavigator}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: theme.colors.white,
		height: 100,
		paddingVertical: 10,
		borderTopWidth: 0,
		elevation: 0,
	},
	headerTitle: {
		color: theme.colors.black,
		fontSize: theme.sizes.xxLarge,
		fontWeight: "bold",
	},
});

export default AppNavigator;

export {
	HomeScreenProps,
	ListenScreenProps,
	SeeScreenProps,
	SettingsScreenProps,
	TabParamList,
};
