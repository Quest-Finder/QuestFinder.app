import { View } from 'react-native';

import { ChartProps } from '../../utils/pieChart/interfaces';

import { LegendItem } from './LegendItem';

export function PieChartLegend() {
  const data: ChartProps[] = [
    { id: '1', description: 'Interpretação', value: 30 },
    { id: '2', description: 'Dungeon', value: 20 },
    { id: '3', description: 'Matar, Pilhar e Destruir', value: 50 },
  ].sort((a, b) => b.value - a.value);

  return (
    <View className="flex-1 ml-3">
      {data.map((item) => {
        return <LegendItem key={item.id} legend={item.description} />;
      })}
    </View>
  );
}
