import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { useRef } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";

import { ConversationInput } from "@/components/conversation-input";
import { MessageBubble } from "@/components/message-bubble";
import { Warning } from "@/components/warning";
import { sizes } from "@/constants/theme";
import { useChatConversation, useConversationLanguage } from "@/hooks/use-chat";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import type { Message } from "@/lib/db/schema";
import { getNextLanguageLocale } from "@/lib/language/language";
import { keyboardAvoidingBehavior } from "@/lib/platform/keyboard-avoiding-behavior";
import { formatDate, isSameDate } from "@/lib/utils/date-time";

type Props = {
  conversationId: string;
};

const ConversationScreenContent = (props: Props) => {
  const { conversationId } = props;
  const { conversation, messages, addMessage, editMessage } =
    useChatConversation(conversationId);
  const { language, selectLanguage } = useConversationLanguage();
  const speech = useSpeechSynthesis();
  const listRef = useRef<FlashListRef<Message>>(null);

  const selectNextLanguage = () => {
    selectLanguage(getNextLanguageLocale(language));
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: conversation?.title ?? "Conversation",
        }}
      />
      <KeyboardAvoidingView
        className="flex-1 bg-light-grey"
        behavior={keyboardAvoidingBehavior}
        keyboardVerticalOffset={sizes.spacing.xxxl}
      >
        {messages.length > 0 ? (
          <FlashList
            ref={listRef}
            contentContainerStyle={{
              paddingVertical: sizes.spacing.md,
            }}
            data={messages}
            keyExtractor={(item) => item.id}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({ animated: true })
            }
            renderItem={({ item, index }) => {
              const previousMessage = messages[index - 1];
              const shouldShowDate =
                !previousMessage ||
                !isSameDate(previousMessage.createdAt, item.createdAt);

              return (
                <>
                  {shouldShowDate ? (
                    <View className="mb-4 mt-2 items-center">
                      <Text className="rounded-full bg-white px-4 py-1 text-xs text-grey">
                        {formatDate(item.createdAt)}
                      </Text>
                    </View>
                  ) : null}
                  <MessageBubble
                    message={item}
                    isSpeaking={speech.speakingId === item.id}
                    onEdit={(body) => editMessage(item.id, body)}
                    onSpeak={() =>
                      speech.speak(item.body, item.language, item.id)
                    }
                  />
                </>
              );
            }}
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
