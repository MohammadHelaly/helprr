import { LegalSettings } from "@/components/legal-settings";
import { Screen } from "@/components/screen";

const LegalSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <LegalSettings />
    </Screen>
  );
};

export default LegalSettingsScreen;
