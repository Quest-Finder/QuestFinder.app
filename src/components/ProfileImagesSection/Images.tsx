import { FlatList, ImageSourcePropType } from 'react-native';

import Image1 from './exampleImages/example1.png';
import Image2 from './exampleImages/example2.png';
import Image3 from './exampleImages/example3.png';
import { ImageCard } from './ImageCard';

/* FIXME: prop image: bem provável que seja uma string, representando o nome da imagem salva no bd. 
 Para acessar a imagem será em uma rota {{uri: `https:www.../images/${imageName}`}}
 */

interface ImagesProps {
  id: string;
  image: ImageSourcePropType;
}

const items: ImagesProps[] = [
  {
    id: '1',
    image: Image1 as ImageSourcePropType,
  },
  {
    id: '2',
    image: Image2 as ImageSourcePropType,
  },
  {
    id: '3',
    image: Image3 as ImageSourcePropType,
  },
];

export function Images() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        gap: 16,
        paddingRight: 60,
      }}
      data={items}
      renderItem={({ item }) => (
        <ImageCard key={item.id} imageSource={item.image} />
      )}
    />
  );
}
