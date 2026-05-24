import { router } from "expo-router";

import { Screen } from "@/components/screen";
import { SettingsOption } from "@/components/settings-option";

export default function SettingsScreen() {
  return (
    <Screen>
      <SettingsOption
        icon="settings-sharp"
        title="General"
        onPress={() => router.push("/settings/general")}
      />
      <SettingsOption
        icon="lock-closed-sharp"
        title="Permissions"
        onPress={() => router.push("/settings/permissions")}
      />
      <SettingsOption
        icon="globe-outline"
        title="Language"
        onPress={() => router.push("/settings/language")}
      />
      <SettingsOption
        icon="ellipsis-horizontal-sharp"
        title="More"
        onPress={() => router.push("/settings/more")}
      />
    </Screen>
  );
}
