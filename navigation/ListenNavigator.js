import React from "react";
import { StyleSheet, Platform, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import ListenScreen from "../screens/ListenScreen";
import ConversationScreen from "../screens/ConversationScreen";
import theme from "../constants/theme";

const Stack = createStackNavigator();

const ListenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: styles.header,
				headerShadowVisible: false,
				headerTitleStyle: styles.headerTitle,
				headerTitleAlign: "left",
				headerBackTitleVisible: false,
				headerLeftLabelVisible: false,
				headerBackImage: () => (
					<Ionicons
						name="chevron-back-sharp"
						size={24}
						color={theme.colors.black}
						style={styles.headerBackIcon}
					/>
				),
			}}>
			<Stack.Screen
				name="ListenScreen"
				options={{
					headerTitle: "Listen",
				}}
				component={ListenScreen}
			/>
			<Stack.Screen name="Conversation" component={ConversationScreen} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: theme.colors.white,
		borderBottomWidth: 0,
	},
	headerTitle: {
		color: theme.colors.black,
		fontSize: theme.sizes.xxLarge,
		fontWeight: "bold",
	},
	headerBackIcon: {
		marginLeft: Platform.OS === "ios" ? 8 : 0,
	},
});

export default ListenNavigator;
