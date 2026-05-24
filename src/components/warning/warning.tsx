import { Text, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";

type WarningProps = {
  title?: string;
  text: string;
  icon?: IconName;
};

export function Warning({
  title = "Nothing here yet",
  text,
  icon = "information-circle-outline",
}: WarningProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <Icon name={icon} size={48} color="#000000" />
      <Text className="mt-4 text-center text-lg font-bold text-black">
        {title}
      </Text>
      <Text className="mt-2 text-center text-sm leading-5 text-grey">
        {text}
      </Text>
    </View>
  );
}
