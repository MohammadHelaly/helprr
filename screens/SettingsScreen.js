import { View, StyleSheet } from "react-native";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const SettingsScreen = (props) => {
	const { navigation } = props;

	const generalSettingsNavigationHandler = () => {
		navigation.navigate("GeneralSettings");
	};

	const permissionSettingsNavigationHandler = () => {
		navigation.navigate("PermissionsSettings");
	};

	const languageSettingsNavigationHandler = () => {
		navigation.navigate("LanguageSettings");
	};

	const moreSettingsNavigationHandler = () => {
		navigation.navigate("MoreSettings");
	};

	return (
		<View style={styles.container}>
			<SettingsOption
				onPress={generalSettingsNavigationHandler}
				text="General"
				endIcon="chevron-forward-sharp"
			/>
			<SettingsOption
				onPress={permissionSettingsNavigationHandler}
				text="Permissions"
				endIcon="chevron-forward-sharp"
			/>
			<SettingsOption
				onPress={languageSettingsNavigationHandler}
				text="Language"
				endIcon="chevron-forward-sharp"
			/>
			<SettingsOption
				onPress={moreSettingsNavigationHandler}
				text="More"
				endIcon="chevron-forward-sharp"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SettingsScreen;
