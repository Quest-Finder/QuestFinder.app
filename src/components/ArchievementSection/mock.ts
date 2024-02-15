import { ImageSourcePropType } from 'react-native';

import badge1 from '../../assets/img/badge1.png';
import badge2 from '../../assets/img/badge2.png';

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: ImageSourcePropType;
};

export const badgesMocks: Badge[] = [
  {
    id: '1',
    description: 'description1',
    name: 'Rei das Rolagens',
    icon: badge1,
  },
  {
    id: '2',
    description: 'description2',
    name: 'Mestre raiz',
    icon: badge2,
  },
];
