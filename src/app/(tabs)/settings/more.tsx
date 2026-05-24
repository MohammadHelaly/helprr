import { router } from "expo-router";

import { Screen } from "@/components/screen";
import { SettingsOption } from "@/components/settings-option";

export default function MoreSettingsScreen() {
  return (
    <Screen>
      <SettingsOption
        icon="info.circle"
        title="About Helprr"
        onPress={() => router.push("/settings/about")}
      />
      <SettingsOption
        icon="doc.text"
        title="Legal"
        onPress={() => router.push("/settings/legal")}
      />
    </Screen>
  );
}
