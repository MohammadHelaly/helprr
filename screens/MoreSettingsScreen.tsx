import { StyleSheet, View, Share, Alert, ScrollView } from "react-native";
import * as StoreReview from "expo-store-review";
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

	const rateHandler = async () => {
		try {
			const isAvailable = await StoreReview.isAvailableAsync();
			if (isAvailable) {
				StoreReview.requestReview();
			} else {
				// TODO: Update with app store redirects based on platform
				Alert.alert(
					"Store Review Not Available",
					"Store review is not available on this device. Please rate Helprr on the app store instead."
				);
			}
		} catch (error: any) {
			Alert.alert(
				"Something Went Wrong",
				"An error occurred while trying to rate Helprr. Please try again."
			);
		}
	};

	const shareHandler = async () => {
		try {
			const shareContent = {
				message: "Helprr | Your hand held guide dog.",
				url: "https://github.com/MohammadHelaly/helprr", // TODO: Update with app store link based on platform
				title: "Helprr",
			};

			const shareOptions = {
				dialogTitle: "Share Helprr",
				subject: "Helprr | Your hand held guide dog.",
			};

			const result = await Share.share(shareContent, shareOptions);

			if (result.action === Share.sharedAction && result.activityType)
				Alert.alert("Success", "Thank you for sharing Helprr!");
		} catch (error: any) {
			Alert.alert(
				"Something Went Wrong",
				"An error occurred while trying to share Helprr. Please try again."
			);
		}
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
				onPress={rateHandler}
				text="Rate Helprr"
				endIcon="chevron-forward-sharp"
			/>
			<SettingsOption
				onPress={shareHandler}
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
