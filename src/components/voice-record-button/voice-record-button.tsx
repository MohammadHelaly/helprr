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
    <View className="absolute bottom-20 left-1/2 z-10 -ml-7 items-center">
      {partialTranscript || errorMessage ? (
        <View className="mb-3 max-w-72 rounded-lg bg-black px-4 py-2">
          <Text className="text-center text-xs text-white" numberOfLines={2}>
            {errorMessage ?? partialTranscript}
          </Text>
        </View>
      ) : null}
      <Pressable
        className={`h-14 w-14 items-center justify-center rounded-full ${
          isListening
            ? "scale-110 bg-pink"
            : errorMessage
              ? "bg-red-600"
              : "bg-black"
        }`}
        onPressIn={onStart}
        onPressOut={onStop}
      >
        <Icon name="mic-sharp" size={sizes.iconMedium} color={colors.white} />
      </Pressable>
    </View>
  );
};

export { VoiceRecordButton };
