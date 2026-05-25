import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { Icon } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";
import type { Conversation } from "@/lib/db/schema";
import { formatDate } from "@/lib/utils/date-time";

type Props = {
  conversation: Conversation;
  onDelete: (conversationId: string) => void;
  onRename: (conversationId: string, title: string) => void;
  onSelect: (conversationId: string) => void;
};

const ConversationListItem = (props: Props) => {
  const { conversation, onDelete, onRename, onSelect } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(conversation.title);

  const preview = conversation.lastMessagePreview
    ? conversation.lastMessagePreview.length > 48
      ? `${conversation.lastMessagePreview.substring(0, 48)}...`
      : conversation.lastMessagePreview
    : "";

  const saveTitle = () => {
    const nextTitle = title.trim();

    if (nextTitle.length !== 0 && nextTitle !== conversation.title) {
      setTitle(nextTitle);
      onRename(conversation.id, nextTitle);
    } else {
      setTitle(conversation.title);
    }

    setIsEditing(false);
  };

  const confirmDelete = () => {
    Alert.alert(
      "Delete Conversation",
      "Are you sure you want to delete this conversation?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(conversation.id),
        },
      ],
    );
  };

  return (
    <Pressable
      className="w-full bg-white px-4 pt-5"
      onPress={() => onSelect(conversation.id)}
    >
      <View className="w-full border-b border-light-grey pb-5">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center">
            {isEditing ? (
              <TextInput
                autoFocus
                // min-w-1 prevents blurring when deleting the last character
                className={`min-w-1 flex-1 p-0 text-lg font-bold text-black ${Platform.OS === "ios" ? "-mt-3 h-10" : ""}`}
                maxLength={32}
                onChangeText={setTitle}
                onEndEditing={saveTitle}
                onSubmitEditing={saveTitle}
                value={title}
              />
            ) : (
              <>
                <Text
                  className="text-lg font-bold text-black"
                  numberOfLines={1}
                >
                  {title}
                </Text>
                <Pressable
                  className="h-8 w-8 items-center justify-center"
                  onPress={(event) => {
                    event.stopPropagation();
                    setIsEditing(true);
                  }}
                >
                  <Icon
                    name="create-outline"
                    color={colors.grey}
                    size={sizes.icon.xxs}
                  />
                </Pressable>
              </>
            )}
          </View>
          <Pressable
            className="h-8 w-8 items-center justify-center"
            onPress={(event) => {
              event.stopPropagation();
              confirmDelete();
            }}
          >
            <Icon
              name="trash-outline"
              color={colors.grey}
              size={sizes.icon.xxs}
            />
          </Pressable>
        </View>
        <Text className="self-start text-xs text-grey">
          {formatDate(conversation.updatedAt)}
        </Text>
        <Text className="mt-2.5 self-start text-base text-black">
          {preview}
        </Text>
      </View>
    </Pressable>
  );
};

export { ConversationListItem };
