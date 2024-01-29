import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import TouchableComponent from "../components/UI/TouchableComponent";

const MoreSettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
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
				</View>
			</TouchableComponent>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
	},
	optionContainer: {
		width: "100%",
		paddingHorizontal: 16,
	},
	option: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 32,
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGrey,
	},
	setting: {
		fontSize: theme.sizes.medium,
	},
});

export default MoreSettingsScreen;
