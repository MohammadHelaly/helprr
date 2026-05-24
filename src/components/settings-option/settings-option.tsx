import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

type SettingsOptionProps = {
  title: string;
  subtitle?: string;
  icon: SymbolViewProps["name"];
  onPress?: () => void;
};

export function SettingsOption({
  title,
  subtitle,
  icon,
  onPress,
}: SettingsOptionProps) {
  return (
    <Pressable
      className="min-h-16 flex-row items-center border-b border-lightGrey bg-white px-5 py-3"
      onPress={onPress}
    >
      <View className="mr-4 h-10 w-10 items-center justify-center rounded-full bg-lightGrey">
        <SymbolView name={icon} size={22} tintColor="#000000" />
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold text-black">{title}</Text>
        {subtitle ? (
          <Text className="mt-1 text-xs text-grey">{subtitle}</Text>
        ) : null}
      </View>
      <SymbolView name="chevron.forward" size={18} tintColor="#000000" />
    </Pressable>
  );
}
