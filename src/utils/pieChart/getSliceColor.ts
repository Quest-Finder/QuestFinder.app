import { ColorsProps } from './interfaces';

const colors: ColorsProps = {
  'Matar, Pilhar e Destruir': '#16BFD6',
  Interpretação: '#00D3CF',
  Dungeon: '#CBFFFC',
};

export function getSliceColor(legend: string) {
  return colors[legend];
}
