import type { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = PropsWithChildren<{
  className?: string;
}>;

const Screen = (props: Props) => {
  const { children, className = "" } = props;

  return (
    <SafeAreaView
      className={`flex-1 bg-white ${className}`}
      edges={["top", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};

export { Screen };
