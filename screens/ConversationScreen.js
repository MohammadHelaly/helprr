import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Platform,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import theme from "../constants/theme";
import ConversationTextInput from "../components/ConversationScreen/ConversationTextInput";
import SentenceBubble from "../components/ConversationScreen/SentenceBubble";

const ConversationScreen = (props) => {
	const { navigation } = props;
	const { conversationId } = props.route.params;

	const flatListRef = useRef();

	const conversation = useSelector((state) =>
		state.conversations.conversations.find(
			(conversation) => conversation.id === conversationId
		)
	);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: conversation?.title,
		});
	}, [conversation]);

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : undefined}
				keyboardVerticalOffset={90}
				style={styles.container}>
				<FlatList
					ref={flatListRef}
					contentContainerStyle={styles.conversation}
					onContentSizeChange={() =>
						flatListRef.current?.scrollToEnd({ animated: true })
					}
					onLayout={() =>
						Platform.OS === "ios" &&
						flatListRef.current?.scrollToEnd({ animated: true })
					}
					removeClippedSubviews={false}
					data={conversation?.sentences}
					keyExtractor={(item) => item.id}
					renderItem={(itemData) => (
						<SentenceBubble sentence={itemData.item} />
					)}
				/>
				{/* <VoiceRecordButton conversationId={conversationId} /> */}
				<ConversationTextInput conversationId={conversationId} />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		backgroundColor: theme.colors.lightGrey,
		// alignItems: "center",
		padding: 0,
	},
	conversation: {
		paddingVertical: 16,
	},
	conversationDate: {
		fontSize: theme.sizes.small,
		// fontWeight: "bold",
		color: theme.colors.grey,
		marginTop: 8,
		textAlign: "center",
	},
	bubble: {
		padding: 16,
		borderRadius: 16,
		marginVertical: 8,
		maxWidth: "80%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "baseline",
		// borderBottomColor: theme.colors.grey,
		// borderBottomWidth: 2,
	},
	speechToTextBubble: {
		// backgroundColor: theme.colors.pink,
		alignSelf: "flex-start",
	},
	speechToTextText: {
		fontSize: theme.sizes.xxLarge,
		fontWeight: "bold",
	},
	textToSpeechBubble: {
		// backgroundColor: theme.colors.lightGrey,
		alignSelf: "flex-end",
	},
	textToSpeechText: {
		fontSize: theme.sizes.xLarge,
		fontWeight: "bold",
	},
});

export default ConversationScreen;
