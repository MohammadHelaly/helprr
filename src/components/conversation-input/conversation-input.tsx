import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { LanguageToggle } from '@/components/language-toggle';
import { VoiceRecordButton } from '@/components/voice-record-button';
import type { LanguageLocale } from '@/constants/language';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { useSpeechSynthesis } from '@/hooks/use-speech-synthesis';

type ConversationInputProps = {
  language: LanguageLocale;
  onToggleLanguage: () => void;
  onAddTextToSpeech: (text: string) => void;
  onAddSpeechToText: (text: string) => void;
};

export function ConversationInput({
  language,
  onToggleLanguage,
  onAddTextToSpeech,
  onAddSpeechToText,
}: ConversationInputProps) {
  const [message, setMessage] = useState('');
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
    setMessage('');
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
        className={`mx-3 max-h-28 flex-1 rounded-3xl border border-lightGrey bg-lightGrey px-4 py-3 text-base text-black ${
          language.startsWith('ar') ? 'text-right' : 'text-left'
        }`}
        multiline
        placeholder={language === 'en-US' ? 'Type a message...' : 'اكتب رسالة...'}
        value={message}
        onChangeText={setMessage}
      />
      <Pressable className="h-12 w-12 items-center justify-center rounded-full" onPress={send}>
        <SymbolView name="arrow.forward.circle.fill" size={42} tintColor="#000000" />
      </Pressable>
    </View>
  );
}
