import { FlatList, Pressable, Text, View } from "react-native";

import { Icon } from "@/components/icon";
import { Warning } from "@/components/warning";
import type { Conversation } from "@/lib/db/schema";
import { formatDate } from "@/lib/utils/format-date";

type ConversationListProps = {
  conversations: Conversation[];
  onSelect: (conversationId: string) => void;
};

export function ConversationList({
  conversations,
  onSelect,
}: ConversationListProps) {
  if (conversations.length === 0) {
    return (
      <Warning
        icon="ear-sharp"
        title="Start listening"
        text="Create a conversation to save speech-to-text and text-to-speech messages locally."
      />
    );
  }

  return (
    <FlatList
      className="flex-1 bg-lightGrey"
      contentContainerClassName="py-4"
      data={conversations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          className="mx-4 mb-3 flex-row items-center rounded-lg bg-white p-4"
          onPress={() => onSelect(item.id)}
        >
          <View className="mr-4 h-12 w-12 items-center justify-center rounded-full bg-black">
            <Icon name="chatbubble-sharp" size={22} color="#ffffff" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-bold text-black" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="mt-1 text-sm text-grey" numberOfLines={1}>
              {item.lastMessagePreview ?? "No messages yet"}
            </Text>
          </View>
          <Text className="ml-3 text-xs text-grey">
            {formatDate(item.updatedAt)}
          </Text>
        </Pressable>
      )}
    />
  );
}
