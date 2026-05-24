import { useLocalSearchParams } from "expo-router";

import { ConversationScreenContent } from "@/components/conversation-screen";
import { Screen } from "@/components/screen";

const ConversationScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <Screen className="bg-light-grey">
      <ConversationScreenContent conversationId={params["id"]} />
    </Screen>
  );
};

export default ConversationScreen;
