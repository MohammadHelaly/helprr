import { StyleSheet, View } from "react-native";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const GeneralSettingsScreen = () => {
	return (
		<View style={styles.container}>
			<SettingsOption
				onPress={() => {}}
				text="Appearance"
				endText="Coming soon!"
			/>
			<SettingsOption
				onPress={() => {}}
				text="Tutorials"
				endText="Coming soon!"
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

export default GeneralSettingsScreen;
