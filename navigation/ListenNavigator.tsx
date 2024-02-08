import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
	createStackNavigator,
	StackNavigationOptions,
	StackScreenProps,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import ListenScreen from "../screens/ListenScreen";
import ConversationScreen from "../screens/ConversationScreen";
import theme from "../constants/theme";

type ListenParamList = {
	ListenScreen: undefined;
	Conversation: { conversationId: string };
};

type ListenScreenProps = StackScreenProps<ListenParamList, "ListenScreen">;

type ConversationScreenProps = StackScreenProps<
	ListenParamList,
	"Conversation"
>;

const Stack = createStackNavigator<ListenParamList>();

const ListenNavigator = () => {
	const stackNavigatorHeaderBackImage = () => (
		<Ionicons
			name="chevron-back-sharp"
			size={24}
			color={theme.colors.black}
			style={styles.headerBackIcon}
		/>
	);

	const stackNavigatorScreenOptions: StackNavigationOptions = {
		headerStyle: styles.header,
		headerShadowVisible: false,
		headerTitleStyle: styles.headerTitle,
		headerTitleAlign: "left",
		headerBackTitleVisible: false,
		headerLeftLabelVisible: false,
		headerBackImage: stackNavigatorHeaderBackImage,
	};

	const listenScreenOptions: StackNavigationOptions = {
		headerTitle: "Listen",
	};

	return (
		<Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
			<Stack.Screen
				name="ListenScreen"
				options={listenScreenOptions}
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

export { ListenScreenProps, ConversationScreenProps, ListenParamList };
