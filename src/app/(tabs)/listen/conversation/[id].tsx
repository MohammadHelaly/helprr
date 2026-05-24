import { Stack, useLocalSearchParams } from "expo-router";
import { useRef } from "react";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";

import { ConversationInput } from "@/components/conversation-input";
import { MessageBubble } from "@/components/message-bubble";
import { Screen } from "@/components/screen";
import { Warning } from "@/components/warning";
import { useChatConversation, useConversationLanguage } from "@/hooks/use-chat";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import type { Message } from "@/lib/db/schema";

export default function ConversationScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const conversationId = params["id"];
  const { conversation, messages, addMessage } =
    useChatConversation(conversationId);
  const { language, toggleLanguage } = useConversationLanguage();
  const speech = useSpeechSynthesis();
  const listRef = useRef<FlatList<Message>>(null);

  return (
    <Screen className="bg-lightGrey">
      <Stack.Screen
        options={{ title: conversation?.title ?? "Conversation" }}
      />
      <KeyboardAvoidingView
        className="flex-1 bg-lightGrey"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={90}
      >
        {messages.length > 0 ? (
          <FlatList
            ref={listRef}
            contentContainerClassName="py-4"
            data={messages}
            keyExtractor={(item) => item.id}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({ animated: true })
            }
            renderItem={({ item }) => (
              <MessageBubble
                message={item}
                isSpeaking={speech.speakingId === item.id}
                onSpeak={() =>
                  speech.speak(
                    item.body,
                    item.language as "en-US" | "ar-EG",
                    item.id,
                  )
                }
              />
            )}
          />
        ) : (
          <Warning text="Make sure your phone is not silent and grant speech permissions when prompted." />
        )}
        <ConversationInput
          language={language}
          onToggleLanguage={toggleLanguage}
          onAddTextToSpeech={(text) =>
            addMessage(text, "text-to-speech", language)
          }
          onAddSpeechToText={(text) =>
            addMessage(text, "speech-to-text", language)
          }
        />
      </KeyboardAvoidingView>
    </Screen>
  );
}
