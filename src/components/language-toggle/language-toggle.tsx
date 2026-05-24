import { Pressable, Text } from "react-native";

import type { LanguageLocale } from "@/constants/language";

interface Props {
  language: LanguageLocale;
  onToggle: () => void;
}

const LanguageToggle = (props: Props) => {
  const { language, onToggle } = props;

  return (
    <Pressable
      className="h-11 min-w-14 items-center justify-center rounded-full bg-light-grey px-3"
      onPress={onToggle}
    >
      <Text className="text-sm font-bold text-black">
        {language === "en-US" ? "EN" : "AR"}
      </Text>
    </Pressable>
  );
};

export { LanguageToggle };
