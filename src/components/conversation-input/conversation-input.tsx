import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import { Icon } from "@/components/icon";
import { LanguageToggle } from "@/components/language-toggle";
import { VoiceRecordButton } from "@/components/voice-record-button";
import type { LanguageLocale } from "@/constants/language";
import { colors, sizes } from "@/constants/theme";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { getLanguageOption } from "@/lib/language/language";

interface Props {
  language: LanguageLocale;
  onToggleLanguage: () => void;
  onAddTextToSpeech: (text: string) => void;
  onAddSpeechToText: (text: string) => void;
}

const ConversationInput = (props: Props) => {
  const { language, onToggleLanguage, onAddTextToSpeech, onAddSpeechToText } =
    props;
  const languageOption = getLanguageOption(language);

  const [message, setMessage] = useState("");
  const { speak } = useSpeechSynthesis();
  const recognition = useSpeechRecognition({
    language,
    onFinalResult: onAddSpeechToText,
  });

  const send = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    onAddTextToSpeech(trimmed);
    speak(trimmed, language);
    setMessage("");
  };

  return (
    <View className="relative flex min-h-16 flex-row items-center gap-3 bg-white px-4 py-2">
      <VoiceRecordButton
        isListening={recognition.isListening}
        errorMessage={recognition.errorMessage}
        partialTranscript={recognition.partialTranscript}
        onStart={recognition.start}
        onStop={recognition.stop}
      />
      <LanguageToggle language={language} onToggle={onToggleLanguage} />
      <TextInput
        className={`min-h-10 flex-1 rounded-3xl border border-light-grey bg-light-grey px-4 py-0 text-base text-black ${languageOption.direction === "rtl" ? "text-end" : "text-start"}`}
        multiline
        value={message}
        onChangeText={setMessage}
      />
      <Pressable
        className="h-10 w-10 items-center justify-center rounded-full bg-black"
        onPress={send}
      >
        <Icon
          name="arrow-forward-sharp"
          size={sizes.icon.sm}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};

export { ConversationInput };
