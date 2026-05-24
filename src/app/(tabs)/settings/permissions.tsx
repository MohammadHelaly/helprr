import { PermissionsSettings } from "@/components/permissions-settings";
import { Screen } from "@/components/screen";

const PermissionsSettingsScreen = () => {
  return (
    <Screen className="justify-center" edges={["left", "right"]}>
      <PermissionsSettings />
    </Screen>
  );
};

export default PermissionsSettingsScreen;
