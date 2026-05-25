import { Pressable, Text, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";
import { colors } from "@/constants/theme";

interface Props {
  label: string;
  description?: string;
  disabled?: boolean;
  trailingIcon?: IconName | null;
  trailingText?: string;
  onPress?: () => void;
}

const SettingsOption = (props: Props) => {
  const {
    label,
    description,
    disabled = false,
    trailingIcon,
    trailingText,
    onPress,
  } = props;

  return (
    <Pressable
      className={`w-full bg-white px-4 ${disabled ? "opacity-50" : ""}`}
      disabled={disabled}
      onPress={onPress}
    >
      <View className="w-full border-b border-light-grey py-8">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center">
            <View className="flex-1">
              <Text className="text-lg text-black">{label}</Text>
              {description ? (
                <Text className="mt-1 text-xs text-grey">{description}</Text>
              ) : null}
            </View>
          </View>
          {trailingIcon ? (
            <Icon name={trailingIcon} color={colors.black} />
          ) : trailingText ? (
            <Text className="text-base text-grey">{trailingText}</Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
};

export { SettingsOption };
