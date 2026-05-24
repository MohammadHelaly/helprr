import { SettingsOption } from "@/components/settings-option";
import { useConversationLanguage } from "@/hooks/use-chat";

// TODO: decide on app/conversation language functionality
const LanguageSettingsContent = () => {
  const { language, selectLanguage } = useConversationLanguage();

  return (
    <>
      <SettingsOption
        label="English"
        trailingIcon={language === "en-US" ? "checkmark-sharp" : null}
        onPress={() => selectLanguage("en-US")}
      />
      <SettingsOption
        label="Arabic"
        trailingText={language === "ar-EG" ? undefined : "Coming soon!"}
        trailingIcon={language === "ar-EG" ? "checkmark-sharp" : null}
        onPress={() => selectLanguage("ar-EG")}
      />
    </>
  );
};

export { LanguageSettingsContent };
