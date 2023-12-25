import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface SectionContentProps extends ViewProps {
  children: ReactNode;
}

export function SectionContent({ children, ...rest }: SectionContentProps) {
  return <View {...rest}>{children}</View>;
}
