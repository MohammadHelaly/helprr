import { AcknowledgementsSettingsContent } from "@/components/acknowledgements-settings-content";
import { Screen } from "@/components/screen";

const AcknowledgementsSettingsScreen = () => {
  return (
    <Screen edges={["left", "right"]}>
      <AcknowledgementsSettingsContent />
    </Screen>
  );
};

export default AcknowledgementsSettingsScreen;
