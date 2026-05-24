import { useLocalSearchParams } from "expo-router";

import { ConversationScreenContent } from "@/components/conversation-screen-content";
import { Screen } from "@/components/screen";

const ConversationScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <ConversationScreenContent conversationId={params["id"]} />
    </Screen>
  );
};

export default ConversationScreen;
