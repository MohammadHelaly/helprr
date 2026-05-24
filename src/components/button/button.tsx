import type { ComponentProps, PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";
import { colors } from "@/constants/theme";

type Props = PropsWithChildren<{
  onPress?: () => void;
  variant?: "primary" | "ghost";
  icon?: IconName;
  className?: string;
  contentClassName?: string;
  textClassName?: string;
}> &
  Omit<ComponentProps<typeof Pressable>, "children" | "onPress">;

const Button = (props: Props) => {
  const {
    children,
    onPress,
    variant = "primary",
    icon,
    className = "",
    contentClassName = "",
    textClassName = "",
    ...pressableProps
  } = props;

  const container =
    variant === "primary"
      ? "bg-black border-black"
      : "bg-white border-light-grey";
  const text = variant === "primary" ? "text-white" : "text-black";

  return (
    <Pressable
      className={`min-h-14 items-center justify-center rounded border px-6 ${container} ${className}`}
      onPress={onPress}
      {...pressableProps}
    >
      <View
        className={`flex-row items-center justify-center gap-4 ${contentClassName}`}
      >
        <Text className={`text-base font-bold ${text} ${textClassName}`}>
          {children}
        </Text>
        {icon ? (
          <Icon
            name={icon}
            color={variant === "primary" ? colors.white : colors.black}
          />
        ) : null}
      </View>
    </Pressable>
  );
};

export { Button };
