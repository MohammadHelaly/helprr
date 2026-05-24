import { LanguageSettingsContent } from "@/components/language-settings-content";
import { Screen } from "@/components/screen";

const LanguageSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <LanguageSettingsContent />
    </Screen>
  );
};

export default LanguageSettingsScreen;
