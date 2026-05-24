import { ScrollView, Text } from "react-native";

import { appLicense } from "@/data/license-data";

const LicenseSettingsContent = () => {
  return (
    <ScrollView className="px-4">
      <Text className="my-4 text-lg font-bold text-black">
        Helprr is open source and is licensed under the MIT License
      </Text>
      <Text className="mb-2 text-xs text-black">{appLicense}</Text>
    </ScrollView>
  );
};

export { LicenseSettingsContent };
