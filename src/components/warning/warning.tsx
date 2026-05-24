import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import { Text, View } from 'react-native';

type WarningProps = {
  title?: string;
  text: string;
  icon?: SymbolViewProps['name'];
};

export function Warning({ title = 'Nothing here yet', text, icon = 'exclamationmark.circle' }: WarningProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <SymbolView name={icon} size={48} tintColor="#000000" />
      <Text className="mt-4 text-center text-lg font-bold text-black">{title}</Text>
      <Text className="mt-2 text-center text-sm leading-5 text-grey">{text}</Text>
    </View>
  );
}
