import { ActivityIndicator, Text, View } from "react-native";

import { colors } from "@/constants/theme";

interface Props {
  label?: string;
}

const DetectionLabel = (props: Props) => {
  const { label } = props;

  return (
    <View className="absolute z-10 mt-24 min-h-14 min-w-44 items-center justify-center self-center rounded-lg bg-white p-4">
      {label ? (
        <Text className="text-lg font-bold text-black">{label}</Text>
      ) : (
        <ActivityIndicator color={colors.black} />
      )}
    </View>
  );
};

export { DetectionLabel };
