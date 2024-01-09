import { Text, View } from 'react-native';
import { PieChart as CustomPieChart } from 'react-native-svg-charts-updated-peers';

import { getPieChartData } from '../../utils/pieChart/getPieChartData';
import { ChartProps, LabelsProps } from '../../utils/pieChart/interfaces';

function Labels(props: Partial<LabelsProps>) {
  const { slices } = props as LabelsProps;
  return (
    <>
      {slices.map((slice) => {
        const { data, labelCentroid } = slice;

        const [x, y] = labelCentroid;

        return (
          <View
            className="absolute bg-white rounded-md px-2 py-1 justify-center items-center shadow-[0px_2px_4px_0px_#1e293b]"
            key={data.key}
            style={{
              elevation: 2,
              left: parseFloat(x),
              top: parseFloat(y),
              transform: [{ translateX: 80 }, { translateY: 85 }],
            }}
          >
            <Text className="text-[#095658] font-medium text-sm">
              {data.value}%
            </Text>
          </View>
        );
      })}
    </>
  );
}

export function PieChart() {
  const data: ChartProps[] = [
    { id: '1', description: 'Interpretação', value: 30 },
    { id: '2', description: 'Dungeon', value: 20 },
    { id: '3', description: 'Matar, Pilhar e Destruir', value: 50 },
  ];

  const pieChartData = getPieChartData(data);

  return (
    <CustomPieChart
      style={{ width: 200, height: 200 }}
      data={pieChartData}
      innerRadius={0}
      padAngle={0}
      sort={(a, b) => a.value! - b.value!}
    >
      <Labels />
    </CustomPieChart>
  );
}
