import { FlatList, StyleSheet, View } from "react-native";
import { useTypedSelector } from "../../hooks/typed-redux-hooks";
import { Conversation } from "../../store/slices/conversation-slice";
import ConversationListItem from "./ConversationListItem";

type ConversationListProps = {
	onConversationPress: (id: string) => void;
};

type ConversationItemData = {
	item: Conversation;
};

const ConversationList = (props: ConversationListProps) => {
	const { onConversationPress } = props;

	const conversations = useTypedSelector(
		(state) => state.conversations.conversations
	);

	const reversedConversations = [...conversations].reverse();

	const keyExtractor = (item: Conversation) => item?.id;

	const renderItem = (itemData: ConversationItemData) => {
		const conversation = itemData.item;

		return (
			<ConversationListItem
				onSelect={onConversationPress}
				conversation={conversation}
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
