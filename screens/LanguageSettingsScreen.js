import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../constants/theme";
import TouchableComponent from "../components/UI/TouchableComponent";

const LanguageSettingsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			{/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
					<View style={styles.option}>
						<Text style={styles.setting}>English</Text>
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
			</TouchableComponent>
			<TouchableComponent onPress={() => {}}>
				<View style={styles.optionContainer}>
					<View style={styles.option}>
						<Text style={styles.setting}>العربية</Text>
						<Text style={styles.comingSoon}>قريباً!</Text>

						{/* <Ionicons
					name={
						Platform.OS === "android"
							? "md-chevron-forward-sharp"
							: "ios-chevron-forward-sharp"
					}
					size={24}
					color={Platform.OS === "android" ? "#ffffff" : "#000000"}
				/> */}
					</View>
				</View>
			</TouchableComponent>
			{/* </ScrollView> */}
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
	scrollContainer: {
		maxWidth: "100%",
	},
	optionContainer: {
		maxWidth: "100%",
		paddingHorizontal: 16,
	},
	option: {
		width: "100%",
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
	comingSoon: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
	},
});

export default LanguageSettingsScreen;
