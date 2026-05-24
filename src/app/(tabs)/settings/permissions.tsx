import { Linking, Text, View } from "react-native";

import { Button } from "@/components/button";
import { Screen } from "@/components/screen";

export default function PermissionsSettingsScreen() {
  return (
    <Screen>
      <View className="gap-4 px-6 py-6">
        <Text className="text-lg font-bold text-black">Speech Permissions</Text>
        <Text className="text-base leading-6 text-grey">
          Microphone and speech recognition permissions are requested when you
          hold the mic button.
        </Text>
        <Button onPress={() => Linking.openSettings()}>Open Settings</Button>
      </View>
    </Screen>
  );
}
