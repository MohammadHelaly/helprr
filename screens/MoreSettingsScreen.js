import { StyleSheet, View, ScrollView } from "react-native";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const MoreSettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<SettingsOption
					onPress={() => {}}
					text="About Helprr"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Support"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Contact"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Rate Helprr"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Share Helprr"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Privacy Policy and Terms of Service"
					endIcon="chevron-forward-sharp"
				/>
				<SettingsOption
					onPress={() => {}}
					text="Acknowledgements"
					endIcon="chevron-forward-sharp"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	scrollContainer: {
		maxWidth: "100%",
	},
});

export default MoreSettingsScreen;
