import { Text, View } from 'react-native';

import { Screen } from '@/components/screen';

export default function GeneralSettingsScreen() {
  return (
    <Screen>
      <View className="px-6 py-6">
        <Text className="text-lg font-bold text-black">General</Text>
        <Text className="mt-2 text-base leading-6 text-grey">
          Helprr is rebuilt on the Expo SDK 56 default structure with local-first chat storage.
        </Text>
      </View>
    </Screen>
  );
}
