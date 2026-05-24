import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

import type { LanguageLocale } from "@/constants/language";
import {
  addMessage,
  createConversation,
  deleteConversation,
  getConversation,
  getLanguagePreference,
  listConversations,
  listMessages,
  renameConversation,
  setLanguagePreference,
} from "@/lib/chat/chat-repository";
import type { Conversation, Message, MessageKind } from "@/lib/db/schema";

const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const refresh = useCallback(() => {
    setConversations(listConversations());
  }, []);

  useFocusEffect(refresh);

  const create = useCallback(
    (title?: string) => {
      const conversation = createConversation(title);
      refresh();
      return conversation;
    },
    [refresh],
  );

  const remove = useCallback(
    (conversationId: string) => {
      deleteConversation(conversationId);
      refresh();
    },
    [refresh],
  );

  return {
    conversations,
    createConversation: create,
    deleteConversation: remove,
    refresh,
  };
};

const useChatConversation = (conversationId: string) => {
  const [conversation, setConversation] = useState<Conversation>();
  const [messages, setMessages] = useState<Message[]>([]);

  const refresh = useCallback(() => {
    setConversation(getConversation(conversationId));
    setMessages(listMessages(conversationId));
  }, [conversationId]);

  useFocusEffect(refresh);

  const add = useCallback(
    (body: string, kind: MessageKind, language: LanguageLocale) => {
      const trimmed = body.trim();
      if (!trimmed) return undefined;

      const message = addMessage({
        conversationId,
        body: trimmed,
        kind,
        language,
      });
      refresh();
      return message;
    },
    [conversationId, refresh],
  );

  const rename = useCallback(
    (title: string) => {
      renameConversation(conversationId, title);
      refresh();
    },
    [conversationId, refresh],
  );

  return {
    conversation,
    messages,
    addMessage: add,
    renameConversation: rename,
    refresh,
  };
};

const useConversationLanguage = () => {
  const [language, setLanguage] = useState<LanguageLocale>(() =>
    getLanguagePreference(),
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => {
      const next = current === "en-US" ? "ar-EG" : "en-US";
      setLanguagePreference(next);
      return next;
    });
  }, []);

  return { language, toggleLanguage };
};

export { useChatConversation, useConversationLanguage, useConversations };
