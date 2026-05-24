import { Text, View } from "react-native";

import { Screen } from "@/components/screen";
import { Warning } from "@/components/warning";

export default function SeeScreen() {
  return (
    <Screen className="bg-lightGrey">
      <View className="flex-1">
        <Warning
          icon="eye"
          title="Camera paused"
          text="Camera object detection is intentionally out of scope for this modernization branch."
        />
        <Text className="pb-6 text-center text-xs text-grey">
          The route is kept so navigation stays familiar.
        </Text>
      </View>
    </Screen>
  );
}
