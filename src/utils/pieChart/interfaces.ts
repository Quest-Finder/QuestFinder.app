import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { PieChartData } from 'react-native-svg-charts-updated-peers';

interface ChartProps {
  id: string;
  description: string;
  value: number;
}

interface LabelsProps {
  slices: {
    pieCentroid: string;
    labelCentroid: string;
    data: PieChartData;
  }[];
}

interface ColorsProps {
  [key: string]: string;
}

interface IconProps {
  [key: string]: FC<SvgProps>;
}

export { ChartProps, ColorsProps, IconProps, LabelsProps };
