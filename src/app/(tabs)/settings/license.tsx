import { ScrollView, Text } from "react-native";

import { Screen } from "@/components/screen";
import { appLicense } from "@/data/license-data";

export default function LicenseSettingsScreen() {
  return (
    <Screen>
      <ScrollView className="px-6 py-6">
        <Text className="text-lg font-bold text-black">
          Helprr is open source and is licensed under the MIT License
        </Text>
        <Text className="mt-4 text-xs leading-5 text-black">{appLicense}</Text>
      </ScrollView>
    </Screen>
  );
}
