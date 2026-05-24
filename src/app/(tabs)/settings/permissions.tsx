import { PermissionsSettingsContent } from "@/components/permissions-settings-content";
import { Screen } from "@/components/screen";

const PermissionsSettingsScreen = () => {
  return (
    <Screen className="justify-center" edges={["left", "right"]}>
      <PermissionsSettingsContent />
    </Screen>
  );
};

export default PermissionsSettingsScreen;
