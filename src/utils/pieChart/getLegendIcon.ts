import DungeonSvg from '../../assets/img/dungeon.svg';
import FireSvg from '../../assets/img/fire.svg';
import SkullSvg from '../../assets/img/skull.svg';

import { IconProps } from './interfaces';

const icons: IconProps = {
  'Matar, Pilhar e Destruir': SkullSvg,
  Interpretação: FireSvg,
  Dungeon: DungeonSvg,
};

export function getLegendIcon(legend: string) {
  return icons[legend];
}
