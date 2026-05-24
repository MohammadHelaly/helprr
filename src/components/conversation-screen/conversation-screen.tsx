import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";

import { ConversationInput } from "@/components/conversation-input";
import { MessageBubble } from "@/components/message-bubble";
import { Warning } from "@/components/warning";
import type { LanguageLocale } from "@/constants/language";
import { useChatConversation, useConversationLanguage } from "@/hooks/use-chat";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import type { Message } from "@/lib/db/schema";
import { keyboardAvoidingBehavior } from "@/lib/platform/keyboard-avoiding-behavior";

type Props = {
  conversationId: string;
};

const ConversationScreenContent = (props: Props) => {
  const { conversationId } = props;
  const { conversation, messages, addMessage } =
    useChatConversation(conversationId);
  const { language, selectLanguage } = useConversationLanguage();
  const speech = useSpeechSynthesis();
  const listRef = useRef<FlashListRef<Message>>(null);

  const selectNextLanguage = () => {
    const nextLanguage: LanguageLocale =
      language === "en-US" ? "ar-EG" : "en-US";
    selectLanguage(nextLanguage);
  };

  return (
    <>
      <Stack.Screen
        options={{ title: conversation?.title ?? "Conversation" }}
      />
      <KeyboardAvoidingView
        className="flex-1 bg-light-grey"
        behavior={keyboardAvoidingBehavior}
        keyboardVerticalOffset={90}
      >
        {messages.length > 0 ? (
          <FlashList
            ref={listRef}
            contentContainerStyle={{ paddingVertical: 16 }}
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
            style={{ flex: 1 }}
          />
        ) : (
          <Warning text="Make sure your phone is not silent and grant speech permissions when prompted." />
        )}
        <ConversationInput
          language={language}
          onToggleLanguage={selectNextLanguage}
          onAddTextToSpeech={(text) =>
            addMessage(text, "text-to-speech", language)
          }
          onAddSpeechToText={(text) =>
            addMessage(text, "speech-to-text", language)
          }
        />
      </KeyboardAvoidingView>
    </>
  );
};

export { ConversationScreenContent };
