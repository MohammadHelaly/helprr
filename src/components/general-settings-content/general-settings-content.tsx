import { View } from "react-native";

import { SettingsOption } from "@/components/settings-option";

const GeneralSettingsContent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <SettingsOption label="Appearance" trailingText="Coming soon!" />
      <SettingsOption label="Tutorials" trailingText="Coming soon!" />
    </View>
  );
};

export { GeneralSettingsContent };
