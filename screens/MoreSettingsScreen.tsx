import { StyleSheet, View, ScrollView } from "react-native";
import { MoreSettingsScreenProps } from "../navigation/SettingsNavigator";
import SettingsOption from "../components/UI/SettingsOption";
import theme from "../constants/theme";

const MoreSettingsScreen = (props: MoreSettingsScreenProps) => {
	const { navigation } = props;

	const aboutScreenNavigationHandler = () => {
		navigation.navigate("AboutScreen");
	};

	const legalScreenNavigationHandler = () => {
		navigation.navigate("LegalScreen");
	};

	return (
		<View style={styles.container}>
			{/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
			<SettingsOption
				onPress={aboutScreenNavigationHandler}
				text="About Helprr"
				endIcon="chevron-forward-sharp"
			/>
			{/* <SettingsOption
					onPress={() => {}}
					text="Support"
					endIcon="chevron-forward-sharp"
				/> */}
			{/* <SettingsOption
					onPress={() => {}}
					text="Contact"
					endIcon="chevron-forward-sharp"
				/> */}
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
			{/* <SettingsOption
					onPress={() => {}}
					text="Privacy Policy and Terms of Service"
					endIcon="chevron-forward-sharp"
				/> */}
			<SettingsOption
				onPress={legalScreenNavigationHandler}
				text="Legal"
				endIcon="chevron-forward-sharp"
			/>
			{/* </ScrollView> */}
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
	// scrollContainer: {
	// 	maxWidth: "100%",
	// },
});

export default MoreSettingsScreen;
