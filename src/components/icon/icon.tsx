import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type IconProps = Omit<ComponentProps<typeof Ionicons>, "name"> & {
  name: IconName;
  className?: string;
};

export function Icon({ color = "#000000", size = 24, ...props }: IconProps) {
  return <Ionicons color={color} size={size} {...props} />;
}
