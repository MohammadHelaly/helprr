import { AcknowledgementsSettings } from "@/components/acknowledgements-settings";
import { Screen } from "@/components/screen";

const AcknowledgementsSettingsScreen = () => {
  return (
    <Screen edges={["left", "right"]}>
      <AcknowledgementsSettings />
    </Screen>
  );
};

export default AcknowledgementsSettingsScreen;
