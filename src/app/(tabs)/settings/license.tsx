import { LicenseSettingsContent } from "@/components/license-settings-content";
import { Screen } from "@/components/screen";

const LicenseSettingsScreen = () => {
  return (
    <Screen edges={["left", "right"]}>
      <LicenseSettingsContent />
    </Screen>
  );
};

export default LicenseSettingsScreen;
