import { PieChartData } from 'react-native-svg-charts-updated-peers';

import { getSliceColor } from './getSliceColor';
import { ChartProps } from './interfaces';

export function getPieChartData(data: ChartProps[]): PieChartData[] {
  return data.map((item) => {
    return {
      key: item.id,
      value: item.value,
      svg: { fill: getSliceColor(item.description) },
    };
  });
}
