import { Text, View } from "react-native";

import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import { useConversationLanguage } from "@/hooks/use-chat";

export default function LanguageSettingsScreen() {
  const { language, toggleLanguage } = useConversationLanguage();

  return (
    <Screen>
      <View className="gap-4 px-6 py-6">
        <Text className="text-lg font-bold text-black">
          Conversation Language
        </Text>
        <Text className="text-base leading-6 text-grey">
          Current language: {language === "en-US" ? "English" : "Arabic"}
        </Text>
        <Button onPress={toggleLanguage}>Toggle Language</Button>
      </View>
    </Screen>
  );
}
