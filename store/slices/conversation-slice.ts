import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sentence {
	id: string;
	text: string;
	conversation: string;
	type: "textToSpeech" | "speechToText";
	language: "en-US" | "ar"; // string
	timestamp: string;
}

interface Conversation {
	id: string;
	title: string;
	date: string;
	lastSentence: string;
	sentences: Sentence[];
}

interface ConversationState {
	conversations: Conversation[];
	conversationLanguage: "en-US" | "ar"; // string
}

const initialState: ConversationState = {
	conversations: [],
	conversationLanguage: "en-US",
};

const conversationSlice = createSlice({
	name: "conversation",
	initialState,
	reducers: {
		toggleLanguage(state) {
			if (state.conversationLanguage === "en-US") {
				state.conversationLanguage = "ar";
			} else {
				state.conversationLanguage = "en-US";
			}
		},
		setConversations(
			state,
			action: PayloadAction<{ conversations: Conversation[] }>
		) {
			state.conversations = action.payload.conversations;
		},
		addNewConversation(
			state,
			action: PayloadAction<{ conversation: Conversation }>
		) {
			if (state.conversations.length === 10) {
				state.conversations.shift();
			}
			state.conversations.push(action.payload.conversation);
		},
		editConversation(
			state,
			action: PayloadAction<{ conversation: Conversation }>
		) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.conversation.id
			);

			selectedConversation.title = action.payload.conversation.title;
		},
		deleteConversation(
			state,
			action: PayloadAction<{ conversationId: string }>
		) {
			state.conversations = state.conversations.filter(
				(conversation) =>
					conversation.id !== action.payload.conversationId
			);
		},
		clearConversationHitory(state) {
			state.conversations = [];
		},
		addNewSentence(state, action: PayloadAction<{ sentence: Sentence }>) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.sentence.conversation
			);

			selectedConversation.sentences.push(action.payload.sentence);
			selectedConversation.lastSentence = action.payload.sentence.text;
		},
		editSentence(state, action: PayloadAction<{ sentence: Sentence }>) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.sentence.conversation
			);

			const selectedSentence = selectedConversation.sentences.find(
				(sentence) => sentence.id === action.payload.sentence.id
			);

			selectedSentence.text = action.payload.sentence.text;
		},
		deleteSentence(state, action: PayloadAction<{ sentence: Sentence }>) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.sentence.conversation
			);

			// selectedConversation.sentences = selectedConversation.sentences.filter(
			// 	(sentence) => sentence.id !== action.payload.sentence.id
			// );

			const selectedSentence = selectedConversation.sentences.find(
				(sentence) => sentence.id === action.payload.sentence.id
			);

			selectedSentence.text = "";
		},
		clearConversation(
			state,
			action: PayloadAction<{ conversationId: string }>
		) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.conversationId
			);

			selectedConversation.sentences = [];
		},
	},
});

export const conversationActions = conversationSlice.actions;

export default conversationSlice.reducer;

export { Sentence, Conversation };
