import React, { useEffect, useRef } from "react";
import {
	StyleSheet,
	FlatList,
	Platform,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import { ConversationScreenProps } from "../navigation/ListenNavigator";
import { useTypedSelector } from "../hooks/typed-redux-hooks";
import { Sentence } from "../store/slices/conversation-slice";
import ConversationInput from "../components/ConversationScreen/ConversationInput";
import SentenceBubble from "../components/ConversationScreen/SentenceBubble";
import Warning from "../components/UI/Warning";
import theme from "../constants/theme";

type SentenceItemData = {
	item: Sentence;
};

const ConversationScreen = (props: ConversationScreenProps) => {
	const { navigation, route } = props;
	const { conversationId } = route.params;

	const conversation = useTypedSelector((state) =>
		state.conversations.conversations.find(
			(conversation) => conversation.id === conversationId
		)
	);
	const { sentences } = conversation;

	const flatListRef = useRef<FlatList<Sentence>>();

	const keyboardAvoidingViewBehavior =
		Platform.OS === "ios" ? "height" : undefined;

	const keyExtractor = (item: Sentence) => item.id;

	const renderItem = (itemData: SentenceItemData) => {
		const { item } = itemData;
		return <SentenceBubble sentence={item} />;
	};

	const onContentSizeChange = () => {
		flatListRef?.current?.scrollToEnd({ animated: true });
	};

	const onLayout = () => {
		Platform.OS === "ios" &&
			flatListRef?.current?.scrollToEnd({ animated: true });
	};

	useEffect(() => {
		navigation.setOptions({
			headerTitle: conversation?.title,
		});
	}, [conversation]);

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={keyboardAvoidingViewBehavior}
				keyboardVerticalOffset={90}
				style={styles.conversationContainer}>
				{sentences?.length > 0 ? (
					<FlatList
						ref={flatListRef}
						contentContainerStyle={styles.conversation}
						onContentSizeChange={onContentSizeChange}
						onLayout={onLayout}
						removeClippedSubviews={false}
						data={sentences}
						keyExtractor={keyExtractor}
						renderItem={renderItem}
					/>
				) : (
					<Warning
						variant="general"
						text="Make sure your phone isn't silent and you have a good internet connection."
					/>
				)}
				<ConversationInput conversationId={conversationId} />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	conversationContainer: {
		flex: 1,
		justifyContent: "flex-start",
		backgroundColor: theme.colors.lightGrey,
		padding: 0,
	},
	conversation: {
		paddingVertical: 16,
	},
	conversationDate: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
		marginTop: 8,
		textAlign: "center",
	},
});

export default ConversationScreen;
