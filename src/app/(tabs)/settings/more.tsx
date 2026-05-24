import { router } from "expo-router";

import { Screen } from "@/components/screen";
import { SettingsOption } from "@/components/settings-option";

const MoreSettingsScreen = () => {
  return (
    <Screen>
      <SettingsOption
        icon="information-circle-outline"
        title="About Helprr"
        onPress={() => router.push("/settings/about")}
      />
      <SettingsOption
        icon="document-text-outline"
        title="Legal"
        onPress={() => router.push("/settings/legal")}
      />
    </Screen>
  );
};

export default MoreSettingsScreen;
