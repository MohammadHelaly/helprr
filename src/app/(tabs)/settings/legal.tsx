import { LegalSettingsContent } from "@/components/legal-settings-content";
import { Screen } from "@/components/screen";

const LegalSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <LegalSettingsContent />
    </Screen>
  );
};

export default LegalSettingsScreen;
