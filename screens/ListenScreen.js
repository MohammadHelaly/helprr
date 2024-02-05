import { StyleSheet, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { conversationActions } from "../store/slices/conversation-slice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
// import Conversation from "../models/Conversation";
import ConversationList from "../components/ListenScreen/ConversationList";
import CallToAction from "../components/ListenScreen/CallToAction";
import theme from "../constants/theme";

const ListenScreen = (props) => {
	const { navigation } = props;

	const dispatch = useDispatch();

	const selectExistingConversationHandler = (conversationId) => {
		navigation.navigate("Conversation", {
			conversationId: conversationId,
		});
	};

	const startNewConversationHandler = () => {
		const newConversation = {
			id: uuidv4(),
			title: "A Conversation",
			date: moment(Date.now()).format("MMMM Do YYYY, hh:mm a"),
			sentences: [],
			lastSentence: "",
		};

		// const newConversation = new Conversation(
		// 	"A Conversation",
		// 	Date.now(),
		// 	[],
		// 	""
		// );

		dispatch(
			conversationActions.addNewConversation({
				conversation: newConversation,
			})
		);

		navigation.navigate("Conversation", {
			conversationId: newConversation.id,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<ConversationList
				onConversationPress={selectExistingConversationHandler}
			/>
			<CallToAction onButtonPress={startNewConversationHandler} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.light,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: theme.sizes.large,
		fontWeight: "bold",
		marginVertical: 16,
	},
});

export default ListenScreen;
