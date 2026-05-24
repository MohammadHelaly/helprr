import { router } from "expo-router";
import { View } from "react-native";

import { SettingsOption } from "@/components/settings-option";

const LegalSettingsContent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <SettingsOption
        label="License"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/license")}
      />
      <SettingsOption
        label="Acknowledgements"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/acknowledgements")}
      />
    </View>
  );
};

export { LegalSettingsContent };
