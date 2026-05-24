import { LanguageSettings } from "@/components/language-settings";
import { Screen } from "@/components/screen";

const LanguageSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <LanguageSettings />
    </Screen>
  );
};

export default LanguageSettingsScreen;
