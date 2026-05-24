import { router } from "expo-router";
import { Image, Text, View } from "react-native";

import { Button } from "@/components/button";
import { Screen } from "@/components/screen";

const HomeScreen = () => {
  return (
    <Screen>
      <View className="flex-1 justify-center px-8">
        <Image
          source={require("@/assets/images/logo.jpg")}
          className="mb-8 h-24 w-24 rounded-full"
          resizeMode="cover"
        />
        <Text className="text-4xl font-bold leading-tight text-black">
          Welcome to <Text className="text-pink">Helprr</Text>
        </Text>
        <Text className="mt-4 text-base leading-6 text-grey">
          A modern local-first accessibility companion for speech, typed
          conversations, and navigation support.
        </Text>
        <View className="mt-10 gap-4">
          <Button onPress={() => router.push("/listen")}>
            Start Listening
          </Button>
          <Button variant="ghost" onPress={() => router.push("/see")}>
            Open See
          </Button>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
