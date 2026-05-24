import { LicenseSettings } from "@/components/license-settings";
import { Screen } from "@/components/screen";

const LicenseSettingsScreen = () => {
  return (
    <Screen edges={["left", "right"]}>
      <LicenseSettings />
    </Screen>
  );
};

export default LicenseSettingsScreen;
