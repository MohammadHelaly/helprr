import { FlatList, View } from "react-native";

import { ConversationListItem } from "@/components/conversation-list-item";
import type { Conversation } from "@/lib/db/schema";

interface Props {
  conversations: Conversation[];
  onDelete: (conversationId: string) => void;
  onRename: (conversationId: string, title: string) => void;
  onSelect: (conversationId: string) => void;
}

const ConversationList = (props: Props) => {
  const { conversations, onDelete, onRename, onSelect } = props;

  return (
    <View className="w-full flex-1">
      {conversations.length > 0 ? (
        <FlatList
          className="h-1/2"
          data={conversations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ConversationListItem
              conversation={item}
              onDelete={onDelete}
              onRename={onRename}
              onSelect={onSelect}
            />
          )}
        />
      ) : null}
    </View>
  );
};

export { ConversationList };
