import type { PropsWithChildren } from "react";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";

type Props = PropsWithChildren<{
  className?: string;
  edges?: Edge[];
}>;

const Screen = (props: Props) => {
  const { children, className = "", edges = ["top", "left", "right"] } = props;

  return (
    <SafeAreaView className={`flex-1 bg-white ${className}`} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

export { Screen };
