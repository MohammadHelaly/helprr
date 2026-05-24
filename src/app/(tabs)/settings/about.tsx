import { AboutSettings } from "@/components/about-settings";
import { Screen } from "@/components/screen";

const AboutSettingsScreen = () => {
  return (
    <Screen className="justify-center" edges={["left", "right"]}>
      <AboutSettings />
    </Screen>
  );
};

export default AboutSettingsScreen;
