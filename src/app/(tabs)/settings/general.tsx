import { GeneralSettingsContent } from "@/components/general-settings-content";
import { Screen } from "@/components/screen";

const GeneralSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <GeneralSettingsContent />
    </Screen>
  );
};

export default GeneralSettingsScreen;
