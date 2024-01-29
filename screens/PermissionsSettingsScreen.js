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
			<Text style={styles.permissionsHeading}>
				Allow Helprr to access your:
			</Text>
			<View style={styles.optionContainer}>
				<View style={styles.option}>
					<Text style={styles.permission}>Camera</Text>
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
			</View>
			<View style={styles.optionContainer}>
				<View style={styles.option}>
					<Text style={styles.permission}>Microphone</Text>
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
			</View>
			<View style={styles.optionContainer}>
				<View style={styles.option}>
					<Text style={styles.permission}>Speech Recognition</Text>
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
		textAlign: "left",
		paddingHorizontal: 16,
	},
	scrollContainer: {
		maxWidth: "100%",
	},
	optionContainer: {
		width: "100%",
		// paddingHorizontal: 16,
	},
	option: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 32,
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGrey,
	},
	permission: {
		fontSize: theme.sizes.medium,
	},
	permissionsHeading: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
		marginBottom: 32,
	},
	permissionsHeading: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
	},
});

export default PermissionsSettingsScreen;
