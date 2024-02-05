import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ConversationListItem from "./ConversationListItem";

const ConversationList = (props) => {
	const { onConversationPress } = props;

	const conversations = useSelector(
		(state) => state.conversations.conversations
	);

	const reversedConversations = [...conversations].reverse();

	const keyExtractor = (item) => item?.id;

	const renderItem = (itemData) => {
		const id = itemData.item?.id;
		const title = itemData.item?.title;
		const date = itemData.item?.date;
		const lastSentence = itemData.item?.lastSentence;

		return (
			<ConversationListItem
				onSelect={onConversationPress}
				id={id}
				title={title}
				date={date}
				lastSentence={lastSentence}
			/>
		);
	};

	return (
		<View style={styles.conversationListContainer}>
			{conversations.length > 0 && (
				<FlatList
					style={styles.conversationList}
					data={reversedConversations}
					keyExtractor={keyExtractor}
					renderItem={renderItem}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	conversationListContainer: {
		flex: 1,
	},
	conversationList: {
		height: "50%",
	},
});

export default ConversationList;
