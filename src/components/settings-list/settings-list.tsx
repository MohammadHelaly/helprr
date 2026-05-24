import { router } from "expo-router";

import { SettingsOption } from "@/components/settings-option";

const SettingsList = () => {
  return (
    <>
      <SettingsOption
        label="General"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/general")}
      />
      <SettingsOption
        label="Permissions"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/permissions")}
      />
      <SettingsOption
        label="Language"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/language")}
      />
      <SettingsOption
        label="About"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/about")}
      />
    </>
  );
};

export { SettingsList };
