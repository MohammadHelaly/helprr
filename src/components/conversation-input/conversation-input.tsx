import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import { Icon } from "@/components/icon";
import { LanguageToggle } from "@/components/language-toggle";
import { VoiceRecordButton } from "@/components/voice-record-button";
import type { LanguageLocale } from "@/constants/language";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

interface Props {
  language: LanguageLocale;
  onToggleLanguage: () => void;
  onAddTextToSpeech: (text: string) => void;
  onAddSpeechToText: (text: string) => void;
}

const ConversationInput = (props: Props) => {
  const { language, onToggleLanguage, onAddTextToSpeech, onAddSpeechToText } =
    props;

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
    <View className="min-h-16 flex-row items-center bg-white px-4 py-2">
      <VoiceRecordButton
        isListening={recognition.isListening}
        errorMessage={recognition.errorMessage}
        partialTranscript={recognition.partialTranscript}
        onStart={recognition.start}
        onStop={recognition.stop}
      />
      <LanguageToggle language={language} onToggle={onToggleLanguage} />
      <TextInput
        className={`border-light-grey bg-light-grey mx-3 max-h-28 flex-1 rounded-3xl border px-4 py-3 text-base text-black ${
          language.startsWith("ar") ? "text-right" : "text-left"
        }`}
        multiline
        placeholder={
          language === "en-US" ? "Type a message..." : "اكتب رسالة..."
        }
        value={message}
        onChangeText={setMessage}
      />
      <Pressable
        className="h-12 w-12 items-center justify-center rounded-full"
        onPress={send}
      >
        <Icon name="arrow-forward-circle-sharp" size={42} color="#000000" />
      </Pressable>
    </View>
  );
};

export { ConversationInput };
