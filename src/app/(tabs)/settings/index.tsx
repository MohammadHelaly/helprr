import { Screen } from "@/components/screen";
import { SettingsList } from "@/components/settings-list";

const SettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <SettingsList />
    </Screen>
  );
};

export default SettingsScreen;
