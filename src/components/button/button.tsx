import type { ComponentProps, PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";

type Props = PropsWithChildren<{
  onPress?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  textClassName?: string;
}> &
  Omit<ComponentProps<typeof Pressable>, "children" | "onPress">;

const Button = (props: Props) => {
  const {
    children,
    onPress,
    variant = "primary",
    className = "",
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
      <Text className={`text-base font-bold ${text} ${textClassName}`}>
        {children}
      </Text>
    </Pressable>
  );
};

export { Button };
