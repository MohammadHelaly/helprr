import { StyleSheet, Text, View } from "react-native";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const PermissionsSettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.permissionsHeading}>
				Allow Helprr to access your:
			</Text>
			<SettingsOption
				onPress={() => {}}
				text="Camera"
				endIcon="checkmark-sharp"
			/>
			<SettingsOption
				onPress={() => {}}
				text="Microphone"
				endIcon="checkmark-sharp"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		justifyContent: "center",
		textAlign: "left",
	},
	permissionsHeading: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
		paddingHorizontal: 16,
	},
});

export default PermissionsSettingsScreen;
