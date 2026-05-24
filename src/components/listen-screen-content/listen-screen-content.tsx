import { router } from "expo-router";
import { Text, View } from "react-native";

import { Button } from "@/components/button";
import { ConversationList } from "@/components/conversation-list";
import { useConversations } from "@/hooks/use-chat";

const ListenScreenContent = () => {
  const {
    conversations,
    createConversation,
    deleteConversation,
    renameConversation,
  } = useConversations();

  const startConversation = () => {
    const conversation = createConversation();
    router.push(`/listen/conversation/${conversation.id}`);
  };

  return (
    <>
      <ConversationList
        conversations={conversations}
        onDelete={deleteConversation}
        onRename={renameConversation}
        onSelect={(conversationId) =>
          router.push(`/listen/conversation/${conversationId}`)
        }
      />
      <View className="min-h-[50%] items-center justify-center gap-6 bg-white px-4">
        <Text className="text-left text-lg text-grey">
          Start a<Text className="font-bold text-pink"> conversation </Text>
          with someone. Have them speak and {"we'll"}
          <Text className="font-bold text-black"> transcribe </Text>
          it for you. You can also type what you want to say and {"we'll"}
          <Text className="font-bold text-black"> speak </Text>
          it for you. {"We'll"} hold on to your last few conversations.
        </Text>
        <Button
          className="w-[168px] overflow-hidden rounded-lg border-0 px-8 py-4"
          contentClassName="justify-around"
          icon="ear-sharp"
          onPress={startConversation}
          textClassName="text-lg"
        >
          Listen
        </Button>
      </View>
    </>
  );
};

export { ListenScreenContent };
