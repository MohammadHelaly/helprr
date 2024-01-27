export const SET_CONVERSATIONS = "SET_CONVERSATIONS";
export const ADD_NEW_CONVERSATION = "ADD_NEW_CONVERSATION";
export const EDIT_CONVERSATION = "EDIT_CONVERSATION";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
export const ADD_NEW_SENTENCE = "ADD_NEW_SENTENCE";
export const EDIT_SENTENCE = "ADD_SENTENCE";

export const setConversations = () => {
	const conversations = [];
	return { type: SET_CONVERSATIONS, conversations: conversations };
};

export const addNewConversation = (conversation) => {
	return { type: ADD_NEW_CONVERSATION, conversation: conversation };
};

export const editConversation = (conversation) => {
	return { type: EDIT_CONVERSATION, conversation: conversation };
};

export const deleteConversation = (conversationId) => {
	return { type: ADD_NEW_CONVERSATION, conversationId: conversationId };
};

export const addNewSentence = (sentence) => {
	return { type: ADD_NEW_SENTENCE, sentence: sentence };
};

export const editSentence = (sentence) => {
	return { type: ADD_NEW_SENTENCE, sentence: sentence };
};
