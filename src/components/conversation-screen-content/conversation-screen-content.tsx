import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { Stack, useIsFocused } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";

import { Button } from "@/components/button";
import { ConversationInput } from "@/components/conversation-input";
import { MessageBubble } from "@/components/message-bubble";
import { Warning } from "@/components/warning";
import { sizes } from "@/constants/theme";
import { useChatConversation } from "@/hooks/use-chat";
import { useConversationLanguage } from "@/hooks/use-language-preferences";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import type { Message } from "@/lib/db/schema";
import { getNextLanguageLocale } from "@/lib/language/language";
import {
  getMicrophonePermission,
  openAppSettings,
  requestMicrophonePermission,
} from "@/lib/permissions/app-permissions";
import { keyboardAvoidingBehavior } from "@/lib/platform/keyboard-avoiding-behavior";
import { formatDate, isSameDate } from "@/lib/utils/date-time";

type Props = {
  conversationId: string;
};

const ConversationScreenContent = (props: Props) => {
  const { conversationId } = props;
  const isFocused = useIsFocused();
  const { conversation, messages, addMessage, editMessage } =
    useChatConversation(conversationId);
  const { language, selectLanguage } = useConversationLanguage();
  const speech = useSpeechSynthesis();
  const listRef = useRef<FlashListRef<Message>>(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<
    boolean | null
  >(null);
  const [
    canAskAgainForMicrophonePermission,
    setCanAskAgainForMicrophonePermission,
  ] = useState(true);

  const selectNextLanguage = () => {
    selectLanguage(getNextLanguageLocale(language));
  };

  const refreshMicrophonePermission = useCallback(async () => {
    const permission = await getMicrophonePermission();
    if (!permission) {
      return;
    }

    setHasMicrophonePermission(permission.granted);
    setCanAskAgainForMicrophonePermission(permission.canAskAgain);
  }, []);

  const handleMicrophonePermission = useCallback(async () => {
    if (canAskAgainForMicrophonePermission) {
      const permission = await requestMicrophonePermission();
      setHasMicrophonePermission(permission.granted);
      setCanAskAgainForMicrophonePermission(permission.canAskAgain);
      return;
    }

    await openAppSettings();
  }, [canAskAgainForMicrophonePermission]);

  useEffect(() => {
    if (isFocused) {
      void Promise.resolve().then(refreshMicrophonePermission);
    }
  }, [isFocused, refreshMicrophonePermission]);

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
        {hasMicrophonePermission === false ? (
          <Warning
            icon="mic-outline"
            title="Microphone needed"
            text="Allow microphone access to record speech in this conversation."
          >
            <Button onPress={handleMicrophonePermission}>
              {canAskAgainForMicrophonePermission
                ? "Grant microphone access"
                : "Open settings"}
            </Button>
          </Warning>
        ) : messages.length > 0 ? (
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
          <Warning text="Make sure your phone is not silent and that you have speech recognition enabled." />
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
