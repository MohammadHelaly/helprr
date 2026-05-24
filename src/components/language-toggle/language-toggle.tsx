import { Pressable, Text } from "react-native";

import type { LanguageLocale } from "@/constants/language";
import { getLanguageOption } from "@/lib/language/language";

interface Props {
  language: LanguageLocale;
  onToggle: () => void;
}

const LanguageToggle = (props: Props) => {
  const { language, onToggle } = props;
  const languageOption = getLanguageOption(language);

  return (
    <Pressable
      className="flex h-10 min-w-10 flex-shrink-0 items-center justify-center rounded-full bg-light-grey"
      onPress={onToggle}
    >
      <Text className="text-sm font-bold text-black">
        {languageOption.symbol}
      </Text>
    </Pressable>
  );
};

export { LanguageToggle };
