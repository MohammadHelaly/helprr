import { router } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/button";
import { ConversationList } from "@/components/conversation-list";
import { Screen } from "@/components/screen";
import { useConversations } from "@/hooks/use-chat";

const ListenScreen = () => {
  const { conversations, createConversation } = useConversations();

  const startConversation = () => {
    const conversation = createConversation();
    router.push(`/listen/conversation/${conversation.id}`);
  };

  return (
    <Screen className="bg-light-grey">
      <ConversationList
        conversations={conversations}
        onSelect={(conversationId) =>
          router.push(`/listen/conversation/${conversationId}`)
        }
      />
      <View className="bg-white px-6 py-4">
        <Button onPress={startConversation}>New Conversation</Button>
      </View>
    </Screen>
  );
};

export default ListenScreen;
