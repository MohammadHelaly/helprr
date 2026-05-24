import { Text, View } from "react-native";

import { Screen } from "@/components/screen";

const AboutSettingsScreen = () => {
  return (
    <Screen>
      <View className="flex-1 justify-center px-8">
        <Text className="text-4xl font-bold text-black">
          About <Text className="text-pink">Helprr</Text>
        </Text>
        <Text className="mt-4 text-base leading-6 text-grey">
          Helprr keeps conversations local and provides speech tools for
          everyday accessibility.
        </Text>
      </View>
    </Screen>
  );
};

export default AboutSettingsScreen;
