import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = PropsWithChildren<{
  className?: string;
}>;

export function Screen({ children, className = '' }: ScreenProps) {
  return (
    <SafeAreaView className={`flex-1 bg-white ${className}`} edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );
}
