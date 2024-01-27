import { StyleSheet, Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import TouchableComponent from "../components/UI/TouchableComponent";

const SettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<TouchableComponent
				onPress={() => {
					navigation.navigate("GeneralSettings");
				}}>
				<View style={styles.option}>
					<Text style={styles.setting}>General</Text>
					<Ionicons
						name={
							Platform.OS === "android"
								? "chevron-forward-sharp"
								: "chevron-forward-sharp"
						}
						size={24}
						color={theme.colors.black}
					/>
				</View>
			</TouchableComponent>
			<TouchableComponent
				style={styles.option}
				onPress={() => {
					navigation.navigate("PermissionsSettings");
				}}>
				<View style={styles.option}>
					<Text style={styles.setting}>Permissions</Text>
					<Ionicons
						name={
							Platform.OS === "android"
								? "chevron-forward-sharp"
								: "chevron-forward-sharp"
						}
						size={24}
						color={theme.colors.black}
					/>
				</View>
			</TouchableComponent>
			<TouchableComponent
				style={styles.option}
				onPress={() => {
					navigation.navigate("LanguageSettings");
				}}>
				<View style={styles.option}>
					<Text style={styles.setting}>Language</Text>
					<Ionicons
						name={
							Platform.OS === "android"
								? "chevron-forward-sharp"
								: "chevron-forward-sharp"
						}
						size={24}
						color={theme.colors.black}
					/>
				</View>
			</TouchableComponent>
			<TouchableComponent
				style={styles.option}
				onPress={() => {
					navigation.navigate("MoreSettings");
				}}>
				<View style={styles.option}>
					<Text style={styles.setting}>More</Text>
					<Ionicons
						name={
							Platform.OS === "android"
								? "chevron-forward-sharp"
								: "chevron-forward-sharp"
						}
						size={24}
						color={theme.colors.black}
					/>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
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
});

export default SettingsScreen;
