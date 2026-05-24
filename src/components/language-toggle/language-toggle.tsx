import { Pressable, Text } from "react-native";

import type { LanguageLocale } from "@/constants/language";

type LanguageToggleProps = {
  language: LanguageLocale;
  onToggle: () => void;
};

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <Pressable
      className="h-11 min-w-14 items-center justify-center rounded-full bg-lightGrey px-3"
      onPress={onToggle}
    >
      <Text className="text-sm font-bold text-black">
        {language === "en-US" ? "EN" : "AR"}
      </Text>
    </Pressable>
  );
}
