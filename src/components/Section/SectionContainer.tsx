import { ReactNode } from 'react';
import { View } from 'react-native';

interface SectionContainerProps {
  children: ReactNode;
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <View className="w-full mt-8 self-start px-6">{children}</View>;
}
