import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors, sizes } from "@/constants/theme";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type IconProps = Omit<ComponentProps<typeof Ionicons>, "name"> & {
  name: IconName;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { color = colors.black, size = sizes.icon.sm, ...iconProps } = props;

  return <Ionicons color={color} size={size} {...iconProps} />;
};

export { Icon };
