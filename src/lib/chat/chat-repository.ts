import { and, desc, eq, isNull } from "drizzle-orm";

import { defaultLanguage, type LanguageLocale } from "@/constants/language";
import { db } from "@/lib/db/client";
import {
  appSettings,
  conversations,
  messages,
  type Conversation,
  type Message,
  type MessageKind,
} from "@/lib/db/schema";
import { createId } from "@/lib/utils/create-id";

const languageKey = "conversation-language";

const listConversations = () => {
  return db
    .select()
    .from(conversations)
    .orderBy(desc(conversations.updatedAt))
    .all();
};

const createConversation = (title = "New Conversation") => {
  const now = Date.now();
  const conversation: Conversation = {
    id: createId("conversation"),
    title,
    createdAt: now,
    updatedAt: now,
    lastMessagePreview: null,
  };

  db.insert(conversations).values(conversation).run();
  return conversation;
};

const getConversation = (conversationId: string) => {
  return db
    .select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
    .get();
};

const renameConversation = (conversationId: string, title: string) => {
  db.update(conversations)
    .set({ title, updatedAt: Date.now() })
    .where(eq(conversations.id, conversationId))
    .run();
};

const deleteConversation = (conversationId: string) => {
  db.delete(conversations).where(eq(conversations.id, conversationId)).run();
};

const listMessages = (conversationId: string) => {
  return db
    .select()
    .from(messages)
    .where(
      and(
        eq(messages.conversationId, conversationId),
        isNull(messages.deletedAt),
      ),
    )
    .orderBy(messages.createdAt)
    .all();
};

interface AddMessageInput {
  conversationId: string;
  body: string;
  kind: MessageKind;
  language: LanguageLocale;
}

const addMessage = (input: AddMessageInput) => {
  const now = Date.now();
  const message: Message = {
    id: createId("message"),
    conversationId: input.conversationId,
    body: input.body.trim(),
    kind: input.kind,
    language: input.language,
    createdAt: now,
    deletedAt: null,
  };

  db.insert(messages).values(message).run();
  db.update(conversations)
    .set({ updatedAt: now, lastMessagePreview: message.body })
    .where(eq(conversations.id, input.conversationId))
    .run();

  return message;
};

const softDeleteMessage = (messageId: string) => {
  db.update(messages)
    .set({ deletedAt: Date.now() })
    .where(eq(messages.id, messageId))
    .run();
};

const clearConversation = (conversationId: string) => {
  db.update(messages)
    .set({ deletedAt: Date.now() })
    .where(eq(messages.conversationId, conversationId))
    .run();
  db.update(conversations)
    .set({ updatedAt: Date.now(), lastMessagePreview: null })
    .where(eq(conversations.id, conversationId))
    .run();
};

const getLanguagePreference = (): LanguageLocale => {
  const setting = db
    .select()
    .from(appSettings)
    .where(eq(appSettings.key, languageKey))
    .get();
  return (setting?.value as LanguageLocale | undefined) ?? defaultLanguage;
};

const setLanguagePreference = (language: LanguageLocale) => {
  db.insert(appSettings)
    .values({ key: languageKey, value: language })
    .onConflictDoUpdate({
      target: appSettings.key,
      set: { value: language },
    })
    .run();
};

export {
  addMessage,
  clearConversation,
  createConversation,
  deleteConversation,
  getConversation,
  getLanguagePreference,
  listConversations,
  listMessages,
  renameConversation,
  setLanguagePreference,
  softDeleteMessage,
};
