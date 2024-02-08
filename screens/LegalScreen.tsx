import { StyleSheet, View } from "react-native";
import { LegalScreenProps } from "../navigation/SettingsNavigator";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const LegalScreen = (props: LegalScreenProps) => {
	const { navigation } = props;

	const licenseScreenNavigationHandler = () => {
		navigation.navigate("LicenseScreen");
	};

	const acknowledgementsScreenNavigationHandler = () => {
		navigation.navigate("AcknowledgementsScreen");
	};

	return (
		<View style={styles.container}>
			<SettingsOption
				onPress={licenseScreenNavigationHandler}
				text="License"
				endIcon="chevron-forward-sharp"
			/>
			<SettingsOption
				onPress={acknowledgementsScreenNavigationHandler}
				text="Acknowledgements"
				endIcon="chevron-forward-sharp"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LegalScreen;
