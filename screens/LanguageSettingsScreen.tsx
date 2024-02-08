import { StyleSheet, View } from "react-native";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const LanguageSettingsScreen = () => {
	return (
		<View style={styles.container}>
			<SettingsOption
				onPress={() => {}}
				text="English"
				endIcon="checkmark-sharp"
			/>
			<SettingsOption
				onPress={() => {}}
				text="العربية"
				endText="قريباً!"
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

export default LanguageSettingsScreen;
