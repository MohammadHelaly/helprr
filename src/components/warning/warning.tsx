import { Text, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";

interface Props {
  title?: string;
  text: string;
  icon?: IconName;
}

const Warning = (props: Props) => {
  const {
    title = "Nothing here yet",
    text,
    icon = "information-circle-outline",
  } = props;

  return (
    <View className="flex-1 items-center justify-center px-8">
      <Icon name={icon} size={sizes.iconXLarge} color={colors.black} />
      <Text className="mt-4 text-center text-lg font-bold text-black">
        {title}
      </Text>
      <Text className="mt-2 text-center text-sm leading-5 text-grey">
        {text}
      </Text>
    </View>
  );
};

export { Warning };
