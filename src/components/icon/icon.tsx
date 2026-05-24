import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type IconProps = Omit<ComponentProps<typeof Ionicons>, "name"> & {
  name: IconName;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { color = "#000000", size = 24, ...iconProps } = props;

  return <Ionicons color={color} size={size} {...iconProps} />;
};

export { Icon };
