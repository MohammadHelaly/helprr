import { View } from "react-native";

import { SettingsOption } from "@/components/settings-option";
import { supportedLanguages } from "@/constants/language";
import { useAppLanguage } from "@/hooks/use-language-preferences";

const LanguageSettingsContent = () => {
  const { language, selectLanguage } = useAppLanguage();

  return (
    <View className="flex-1 items-center justify-center">
      {supportedLanguages.map((languageOption) => (
        <SettingsOption
          key={languageOption.locale}
          label={languageOption.label}
          trailingIcon={
            language === languageOption.locale ? "checkmark-sharp" : null
          }
          onPress={() => selectLanguage(languageOption.locale)}
        />
      ))}
    </View>
  );
};

export { LanguageSettingsContent };
