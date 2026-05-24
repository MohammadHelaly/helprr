import { AboutSettingsContent } from "@/components/about-settings-content";
import { Screen } from "@/components/screen";

const AboutSettingsScreen = () => {
  return (
    <Screen className="justify-center" edges={["left", "right"]}>
      <AboutSettingsContent />
    </Screen>
  );
};

export default AboutSettingsScreen;
