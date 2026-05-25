import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";

interface Props {
  isListening: boolean;
  errorMessage: string | null;
  partialTranscript: string;
  onStart: () => void;
  onStop: () => void;
}

const VoiceRecordButton = (props: Props) => {
  const { isListening, errorMessage, partialTranscript, onStart, onStop } =
    props;

  return (
    <View className="absolute bottom-20 end-0 start-0 z-10 flex flex-col items-center justify-center gap-3">
      <View
        className={`max-w-72 rounded-lg bg-black px-4 py-2 transition-all duration-[20] ${partialTranscript || errorMessage ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Text className="text-center text-xs text-white" numberOfLines={2}>
          {errorMessage ?? partialTranscript}
        </Text>
      </View>
      <Pressable onPressIn={onStart} onPressOut={onStop}>
        <View
          className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-200 ${
            isListening
              ? "scale-125 bg-pink"
              : errorMessage
                ? "bg-red-600"
                : "bg-black"
          }`}
        >
          <Icon name="mic-sharp" size={sizes.icon.md} color={colors.white} />
        </View>
      </Pressable>
    </View>
  );
};

export { VoiceRecordButton };
