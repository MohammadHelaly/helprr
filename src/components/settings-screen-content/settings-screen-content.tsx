import { router } from "expo-router";
import { View } from "react-native";

import { SettingsOption } from "@/components/settings-option";

const SettingsScreenContent = () => {
  return (
    <View className="flex-1 items-center justify-center">
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
    </View>
  );
};

export { SettingsScreenContent };
