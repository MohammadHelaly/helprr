import { router } from "expo-router";

import { Screen } from "@/components/screen";
import { SettingsOption } from "@/components/settings-option";

export default function SettingsScreen() {
  return (
    <Screen>
      <SettingsOption
        icon="gearshape"
        title="General"
        onPress={() => router.push("/settings/general")}
      />
      <SettingsOption
        icon="lock"
        title="Permissions"
        onPress={() => router.push("/settings/permissions")}
      />
      <SettingsOption
        icon="globe"
        title="Language"
        onPress={() => router.push("/settings/language")}
      />
      <SettingsOption
        icon="ellipsis"
        title="More"
        onPress={() => router.push("/settings/more")}
      />
    </Screen>
  );
}
