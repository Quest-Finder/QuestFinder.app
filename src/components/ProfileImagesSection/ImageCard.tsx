import { Image, ImageSourcePropType } from 'react-native';

interface ImageCardProps {
  imageSource: ImageSourcePropType;
}

export function ImageCard({ imageSource }: ImageCardProps) {
  return (
    <Image
      className="w-64 h-52 rounded-xl"
      source={imageSource}
      resizeMode="cover"
      alt=""
    />
  );
}
