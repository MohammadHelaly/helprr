import { View } from "react-native";

import { SettingsOption } from "@/components/settings-option";
import { languageOptions, supportedLanguages } from "@/constants/language";
import { useAppLanguage } from "@/hooks/use-language-preferences";

const LanguageSettingsContent = () => {
  const { language, selectLanguage } = useAppLanguage();

  return (
    <View className="flex-1 items-center justify-center">
      {supportedLanguages.map((languageOption) => {
        const disabled = languageOption.locale === languageOptions.arabic.locale;

        return (
          <SettingsOption
            key={languageOption.locale}
            label={languageOption.label}
            disabled={disabled}
            trailingIcon={
              language === languageOption.locale ? "checkmark-sharp" : null
            }
            trailingText={disabled ? "Coming soon!" : undefined}
            onPress={() => selectLanguage(languageOption.locale)}
          />
        );
      })}
    </View>
  );
};

export { LanguageSettingsContent };
