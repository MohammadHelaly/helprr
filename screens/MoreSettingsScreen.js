import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import TouchableComponent from "../components/UI/TouchableComponent";

const MoreSettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>About Helprr</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>Contact us</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>Support us</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>Rate Helprr</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>Share Helprr</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>
							Privacy Policy and Terms of Service
						</Text>
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
				<TouchableComponent onPress={() => {}}>
					<View style={styles.option}>
						<Text style={styles.setting}>Acknowledgements</Text>
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
			</ScrollView>
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
});

export default MoreSettingsScreen;
