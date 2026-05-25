import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import { Icon } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";
import type { Message } from "@/lib/db/schema";
import { formatTime } from "@/lib/utils/date-time";

interface Props {
  message: Message;
  isSpeaking: boolean;
  onEdit: (body: string) => void;
  onSpeak: () => void;
}

const bubbleEntering = FadeInDown.duration(200)
  .springify()
  .mass(0.4)
  .damping(20)
  .stiffness(200);

const MessageBubble = (props: Props) => {
  const { message, isSpeaking, onEdit, onSpeak } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [draftBody, setDraftBody] = useState(message.body);

  const isSpeechToText = message.type === "speech-to-text";

  const saveBody = () => {
    const nextBody = draftBody.trim();

    if (nextBody.length !== 0 && nextBody !== message.body) {
      setDraftBody(nextBody);
      onEdit(nextBody);
    } else {
      setDraftBody(message.body);
    }

    setIsEditing(false);
  };

  const startEditing = () => {
    setDraftBody(message.body);
    setIsEditing(true);
  };

  return (
    <Animated.View
      entering={bubbleEntering}
      className={`my-2 px-4 ${isSpeechToText ? "items-start" : "items-end"}`}
    >
      <View
        className={`relative flex w-3/5 flex-col gap-4 rounded-2xl bg-white p-4 ${
          isSpeechToText ? "self-start" : "self-end"
        }`}
      >
        <View
          className={`absolute bottom-3 h-0 w-0 border-b-[16px] border-t-[16px] border-b-transparent border-t-transparent ${
            isSpeechToText
              ? "-left-3 border-r-[24px] border-r-white"
              : "-right-3 border-l-[24px] border-l-white"
          }`}
        />
        {isEditing ? (
          <TextInput
            autoFocus
            className={`py-auto p-0 font-bold ${
              isSpeechToText ? "text-2xl text-pink" : "text-lg text-black"
            } ${message.direction === "rtl" ? "text-end" : "text-start"}`}
            multiline
            onChangeText={setDraftBody}
            onEndEditing={saveBody}
            value={draftBody}
          />
        ) : (
          <Text
            className={`font-bold ${
              isSpeechToText ? "text-2xl text-pink" : "text-lg text-black"
            } ${message.direction === "rtl" ? "text-end" : "text-start"}`}
          >
            {message.body}
          </Text>
        )}
        <View className="flex flex-row items-end justify-end gap-2">
          <Pressable
            className="flex h-5 w-5 items-center justify-center"
            onPress={isSpeechToText ? startEditing : onSpeak}
          >
            <Icon
              name={
                isSpeechToText
                  ? "create-outline"
                  : isSpeaking
                    ? "volume-high-outline"
                    : "play-outline"
              }
              size={sizes.icon.xs}
              color={colors.grey}
            />
          </Pressable>
          <Text className="text-xs text-grey">
            {formatTime(message.createdAt)}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export { MessageBubble };
