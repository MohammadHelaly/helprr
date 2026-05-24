import { Screen } from "@/components/screen";
import { SettingsScreenContent } from "@/components/settings-screen-content";

const SettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <SettingsScreenContent />
    </Screen>
  );
};

export default SettingsScreen;
