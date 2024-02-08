import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
	createStackNavigator,
	StackNavigationOptions,
	StackScreenProps,
} from "@react-navigation/stack";
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

type SettingsParamList = {
	SettingsScreen: undefined;
	GeneralSettings: undefined;
	PermissionsSettings: undefined;
	LanguageSettings: undefined;
	MoreSettings: undefined;
	AboutScreen: undefined;
	LegalScreen: undefined;
	LicenseScreen: undefined;
	AcknowledgementsScreen: undefined;
};

type SettingsScreenProps = StackScreenProps<
	SettingsParamList,
	"SettingsScreen"
>;

type GeneralSettingsScreenProps = StackScreenProps<
	SettingsParamList,
	"GeneralSettings"
>;

type PermissionsSettingsScreenProps = StackScreenProps<
	SettingsParamList,
	"PermissionsSettings"
>;

type LanguageSettingsScreenProps = StackScreenProps<
	SettingsParamList,
	"LanguageSettings"
>;

type MoreSettingsScreenProps = StackScreenProps<
	SettingsParamList,
	"MoreSettings"
>;

type AboutScreenProps = StackScreenProps<SettingsParamList, "AboutScreen">;

type LegalScreenProps = StackScreenProps<SettingsParamList, "LegalScreen">;

type LicenseScreenProps = StackScreenProps<SettingsParamList, "LicenseScreen">;

type AcknowledgementsScreenProps = StackScreenProps<
	SettingsParamList,
	"AcknowledgementsScreen"
>;

const Stack = createStackNavigator<SettingsParamList>();

const SettingsNavigator = () => {
	const stackNavigatorHeaderBackImage = () => (
		<Ionicons
			name="chevron-back-sharp"
			size={24}
			color={theme.colors.black}
			style={styles.headerBackIcon}
		/>
	);

	const stackNavigatorScreenOptions: StackNavigationOptions = {
		headerStyle: styles.header,
		headerShadowVisible: false,
		headerTitleStyle: styles.headerTitle,
		headerTitleAlign: "left",
		headerBackTitleVisible: false,
		headerLeftLabelVisible: false,
		headerBackImage: stackNavigatorHeaderBackImage,
	};

	const settingsScreenOptions: StackNavigationOptions = {
		headerTitle: "Settings",
	};

	const generalSettingsScreenOptions: StackNavigationOptions = {
		headerTitle: "General",
	};

	const permissionsSettingsScreenOptions: StackNavigationOptions = {
		headerTitle: "Permissions",
	};

	const languageSettingsScreenOptions: StackNavigationOptions = {
		headerTitle: "Language",
	};

	const moreSettingsScreenOptions: StackNavigationOptions = {
		headerTitle: "More",
	};

	const aboutScreenOptions: StackNavigationOptions = {
		headerTitle: "About Helprr",
	};

	const legalScreenOptions: StackNavigationOptions = {
		headerTitle: "Legal",
	};

	const licenseScreenOptions: StackNavigationOptions = {
		headerTitle: "License",
	};

	const acknowledgementsScreenOptions: StackNavigationOptions = {
		headerTitle: "Acknowledgements",
	};

	return (
		<Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
			<Stack.Screen
				name="SettingsScreen"
				options={settingsScreenOptions}
				component={SettingsScreen}
			/>
			<Stack.Screen
				name="GeneralSettings"
				options={generalSettingsScreenOptions}
				component={GeneralSettingsScreen}
			/>
			<Stack.Screen
				name="PermissionsSettings"
				options={permissionsSettingsScreenOptions}
				component={PermissionsSettingsScreen}
			/>
			<Stack.Screen
				name="LanguageSettings"
				options={languageSettingsScreenOptions}
				component={LanguageSettingsScreen}
			/>
			<Stack.Screen
				name="MoreSettings"
				options={moreSettingsScreenOptions}
				component={MoreSettingsScreen}
			/>
			<Stack.Screen
				name="AboutScreen"
				options={aboutScreenOptions}
				component={AboutScreen}
			/>
			<Stack.Screen
				name="LegalScreen"
				options={legalScreenOptions}
				component={LegalScreen}
			/>
			<Stack.Screen
				name="LicenseScreen"
				options={licenseScreenOptions}
				component={LicenseScreen}
			/>
			<Stack.Screen
				name="AcknowledgementsScreen"
				options={acknowledgementsScreenOptions}
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

export {
	SettingsScreenProps,
	GeneralSettingsScreenProps,
	PermissionsSettingsScreenProps,
	LanguageSettingsScreenProps,
	MoreSettingsScreenProps,
	AboutScreenProps,
	LegalScreenProps,
	LicenseScreenProps,
	AcknowledgementsScreenProps,
	SettingsParamList,
};
