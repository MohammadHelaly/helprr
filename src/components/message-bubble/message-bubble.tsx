import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/icon";
import type { Message } from "@/lib/db/schema";
import { formatTime } from "@/lib/utils/format-date";

interface Props {
  message: Message;
  isSpeaking: boolean;
  onSpeak: () => void;
}

const MessageBubble = (props: Props) => {
  const { message, isSpeaking, onSpeak } = props;

  const isSpeechToText = message.kind === "speech-to-text";

  return (
    <View
      className={`mb-3 px-4 ${isSpeechToText ? "items-start" : "items-end"}`}
    >
      <View
        className={`max-w-[86%] rounded-lg px-4 py-3 ${isSpeechToText ? "bg-black" : "bg-white"}`}
      >
        <Text
          className={`text-base leading-6 ${isSpeechToText ? "text-white" : "text-black"} ${
            message.language.startsWith("ar") ? "text-right" : "text-left"
          }`}
        >
          {message.body}
        </Text>
        <View className="mt-2 flex-row items-center justify-between gap-3">
          <Text
            className={`text-xs ${isSpeechToText ? "text-white" : "text-grey"}`}
          >
            {formatTime(message.createdAt)}
          </Text>
          <Pressable
            className="h-8 w-8 items-center justify-center rounded-full"
            onPress={onSpeak}
          >
            <Icon
              name={isSpeaking ? "volume-high-sharp" : "play-sharp"}
              size={18}
              color={isSpeechToText ? "#ffffff" : "#000000"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export { MessageBubble };
