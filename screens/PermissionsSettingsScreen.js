import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Platform,
	Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import TouchableComponent from "../components/UI/TouchableComponent";

const PermissionsSettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			{/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
			<Text style={styles.settingsHeading}>
				Allow Helprr to access your:
			</Text>
			<View style={styles.option}>
				<Text style={styles.setting}>Camera</Text>
				<Ionicons
					name={
						Platform.OS === "android"
							? "checkmark-sharp"
							: "checkmark-sharp"
					}
					size={24}
					color={theme.colors.black}
				/>
			</View>
			<View style={styles.option}>
				<Text style={styles.setting}>Microphone</Text>
				<Ionicons
					name={
						Platform.OS === "android"
							? "checkmark-sharp"
							: "checkmark-sharp"
					}
					size={24}
					color={theme.colors.black}
				/>
			</View>
			<View style={styles.option}>
				<Text style={styles.setting}>Speech Recognition</Text>
				<Ionicons
					name={
						Platform.OS === "android"
							? "checkmark-sharp"
							: "checkmark-sharp"
					}
					size={24}
					color={theme.colors.black}
				/>
			</View>
			{/* </ScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		// alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
		textAlign: "left",
	},
	scrollContainer: {
		maxWidth: "100%",
	},
	option: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		borderBottomWidth: 1,
		paddingVertical: 32,
		borderBottomColor: theme.colors.lightGrey,
	},
	setting: {
		fontSize: theme.sizes.medium,
	},
	settingsHeading: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
		marginBottom: 32,
	},
	settingsHeading: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
	},
});

export default PermissionsSettingsScreen;
