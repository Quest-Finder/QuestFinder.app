import { Text, View } from 'react-native';

import { getLegendIcon } from '../../utils/pieChart/getLegendIcon';

interface LegendItemProps {
  legend: string;
}

export function LegendItem({ legend }: LegendItemProps) {
  const Icon = getLegendIcon(legend);

  return (
    <View className="flex-row items-center mb-4">
      <Icon width={24} height={24} />
      <Text className="flex-1 text-[#464646] text-xs ml-0.5">{legend}</Text>
    </View>
  );
}
