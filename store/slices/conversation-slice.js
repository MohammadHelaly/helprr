import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	conversations: [],
	language: "en-US",
};

const conversationSlice = createSlice({
	name: "conversation",
	initialState,
	reducers: {
		toggleLanguage(state, action) {
			if (state.language === "en-US") {
				state.language = "ar-SA";
			} else {
				state.language = "en-US";
			}
		},
		setConversations(state, action) {
			state.conversations = action.payload.conversations;
		},
		addNewConversation(state, action) {
			state.conversations.push(action.payload.conversation);
		},
		editConversation(state, action) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.conversation.id
			);

			selectedConversation.title = action.payload.conversation.title;
		},
		deleteConversation(state, action) {
			state.conversations = state.conversations.filter(
				(conversation) =>
					conversation.id !== action.payload.conversationId
			);
		},
		clearConversationHitory(state, action) {
			state.conversations = [];
		},
		addNewSentence(state, action) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.sentence.conversation
			);

			selectedConversation.sentences.push(action.payload.sentence);
			selectedConversation.lastSentence = action.payload.sentence.text;
		},
		editSentence(state, action) {
			const selectedConversation = state.conversations.find(
				(conversation) =>
					conversation.id === action.payload.sentence.conversation
			);

			const selectedSentence = selectedConversation.sentences.find(
				(sentence) => sentence.id === action.payload.sentence.id
			);

			selectedSentence.text = action.payload.sentence.text;
		},
		deleteSentence(state, action) {
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
		clearConversation(state, action) {
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
