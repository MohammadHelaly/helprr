import { FlatList, StyleSheet, View } from "react-native";
import ConversationListItem from "./ConversationListItem";

const ConversationList = (props) => {
	const { conversations, onConversationPress } = props;

	const reversedConversations = [...conversations].reverse();
	return (
		<View style={styles.conversationListContainer}>
			{conversations.length > 0 && (
				<FlatList
					style={styles.conversationList}
					data={reversedConversations}
					keyExtractor={(item) => item?.id}
					renderItem={({ item }) => (
						<ConversationListItem
							onSelect={onConversationPress}
							id={item?.id}
							title={item?.title}
							date={item?.date}
							lastSentence={item?.lastSentence}
						/>
					)}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	conversationListContainer: {
		// marginTop: 32,
		// marginHorizontal: 16,
		// borderRadius: 8,
		// overflow: "hidden",
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		// width: "92%",
	},
	conversationList: {
		// padding: 16,
		// width: "100%",
		height: "50%", //TODO: make this dynamic
	},
});

export default ConversationList;
