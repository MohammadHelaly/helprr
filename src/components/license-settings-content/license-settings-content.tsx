import { ScrollView, Text, View } from "react-native";

import { licenseData } from "@/data/legal/license-data";

const LicenseSettingsContent = () => {
  return (
    <ScrollView className="flex-1" contentContainerClassName="items-center">
      <View className="w-full max-w-screen-sm px-4">
        <Text className="my-4 text-base font-bold text-black">
          Helprr is open source and is licensed under the MIT License
        </Text>
        <Text className="mb-2 text-xs text-black">{licenseData}</Text>
      </View>
    </ScrollView>
  );
};

export { LicenseSettingsContent };
