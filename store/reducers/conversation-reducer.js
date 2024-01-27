import {
	SET_CONVERSATIONS,
	ADD_NEW_CONVERSATION,
	DELETE_CONVERSATION,
	ADD_NEW_SENTENCE,
	EDIT_SENTENCE,
} from "../actions/conversation-actions";
import dummyData from "../../assets/data/dummyData";

const initialState = {
	// conversations: [],
	conversations: [...dummyData],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CONVERSATIONS:
			return {
				...state,
				conversations: action.conversations,
			};

		case ADD_NEW_CONVERSATION:
			return {
				...state,
				conversations: [...state.conversations, action.conversation],
			};

		case DELETE_CONVERSATION:
			return {
				...state,
				conversations: state.conversations.filter(
					(conversation) => conversation.id !== action.conversationId
				),
			};

		case ADD_NEW_SENTENCE:
			const selectedConversation = state.conversations.find(
				(conversation) => conversation.id === sentence.conversation
			);

			selectedConversation.sentences = [
				...selectedConversation.sentences,
				action.sentence,
			];

			selectedConversation.lastSentence = action.sentence;

			return {
				...state,
				conversations: state.conversations,
			};

		case EDIT_SENTENCE:
			return {
				...state,
				conversations: state.conversations,
			};

		default:
			return state;
	}
};
