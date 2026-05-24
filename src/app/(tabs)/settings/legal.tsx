import { router } from "expo-router";

import { Screen } from "@/components/screen";
import { SettingsOption } from "@/components/settings-option";

const LegalSettingsScreen = () => {
  return (
    <Screen>
      <SettingsOption
        icon="document-text-outline"
        title="License"
        onPress={() => router.push("/settings/license")}
      />
      <SettingsOption
        icon="library-outline"
        title="Acknowledgements"
        onPress={() => router.push("/settings/acknowledgements")}
      />
    </Screen>
  );
};

export default LegalSettingsScreen;
