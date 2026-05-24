import { Text, View } from "react-native";

import { Warning } from "@/components/warning";

const SeeScreenContent = () => {
  return (
    <View className="flex-1">
      <Warning
        icon="eye-sharp"
        title="Camera paused"
        text="Camera object detection is intentionally out of scope for this modernization branch."
      />
      <Text className="pb-6 text-center text-xs text-grey">
        The route is kept so navigation stays familiar.
      </Text>
    </View>
  );
};

export { SeeScreenContent };
