import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dummyData from "../../assets/data/dummyData";

const initialState = {
	// conversations: [...dummyData],
	conversations: [],
	language: "en-US",
};

// export const setConversations = createAsyncThunk(
// 	"conversation/setConversations",
// 	(conversations) => {
// 		return { conversations };
// 	}
// );

// export const addNewConversation = createAsyncThunk(
// 	"conversation/addNewConversation",
// 	(conversation) => {
// 		return { conversation };
// 	}
// );

// export const deleteConversation = createAsyncThunk(
// 	"conversation/deleteConversation",
// 	(conversationId) => {
// 		return { conversationId };
// 	}
// );

// export const addNewSentence = createAsyncThunk(
// 	"conversation/addNewSentence",
// 	(sentence) => {
// 		return { sentence };
// 	}
// );

// export const editSentence = createAsyncThunk(
// 	"conversation/editSentence",
// 	(sentence) => {
// 		return { sentence };
// 	}
// );

const conversationSlice = createSlice(
	{
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
				selectedConversation.lastSentence =
					action.payload.sentence.text;
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
	}
	//   extraReducers: (builder) => {
	//     builder
	//       .addCase(setConversations.fulfilled, (state, action) => {
	//         state.conversations = action.payload.conversations;
	//       })
	//       .addCase(addNewConversation.fulfilled, (state, action) => {
	//         state.conversations.push(action.payload.conversation);
	//       })
	//       .addCase(deleteConversation.fulfilled, (state, action) => {
	//         state.conversations = state.conversations.filter(
	//           (conversation) => conversation.id !== action.payload.conversationId
	//         );
	//       })
	//       .addCase(addNewSentence.fulfilled, (state, action) => {
	//         const selectedConversation = state.conversations.find(
	//           (conversation) => conversation.id === action.payload.sentence.conversation
	//         );

	//         selectedConversation.sentences.push(action.payload.sentence);
	//         selectedConversation.lastSentence = action.payload.sentence;
	//       })
	//       .addCase(editSentence.fulfilled, (state, action) => {
	//       });
	//   },
);

export const conversationActions = conversationSlice.actions;

export default conversationSlice.reducer;
