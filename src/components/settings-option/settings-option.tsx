import { Pressable, Text, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";

interface Props {
  title: string;
  subtitle?: string;
  icon: IconName;
  onPress?: () => void;
}

const SettingsOption = (props: Props) => {
  const { title, subtitle, icon, onPress } = props;

  return (
    <Pressable
      className="min-h-16 flex-row items-center border-b border-lightGrey bg-white px-5 py-3"
      onPress={onPress}
    >
      <View className="mr-4 h-10 w-10 items-center justify-center rounded-full bg-lightGrey">
        <Icon name={icon} size={22} color="#000000" />
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold text-black">{title}</Text>
        {subtitle ? (
          <Text className="mt-1 text-xs text-grey">{subtitle}</Text>
        ) : null}
      </View>
      <Icon name="chevron-forward-sharp" size={18} color="#000000" />
    </Pressable>
  );
};

export { SettingsOption };
