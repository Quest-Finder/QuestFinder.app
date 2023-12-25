import { Text } from 'react-native';

interface SectionHeadlineProps {
  title: string;
}

export function SectionHeadline({ title }: SectionHeadlineProps) {
  return <Text className="text-2xl mb-4 text-[#292929]">{title}</Text>;
}
