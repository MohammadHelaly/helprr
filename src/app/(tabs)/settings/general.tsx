import { GeneralSettings } from "@/components/general-settings";
import { Screen } from "@/components/screen";

const GeneralSettingsScreen = () => {
  return (
    <Screen className="items-center justify-center" edges={["left", "right"]}>
      <GeneralSettings />
    </Screen>
  );
};

export default GeneralSettingsScreen;
