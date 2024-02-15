import { Image, Text, View } from 'react-native';

import { Badge } from './mock';

type CardBadge = { badge: Badge };

export function CardBage({ badge }: CardBadge) {
  return (
    <View className="flex flex-row items-center justify-start p-4 space-x-4">
      <Image
        source={badge.icon}
        alt=""
        className="w-[54px] h-[54px] rounded-full"
      />
      <Text className="text-[#656565] text-xl leading-[48px]">
        {badge.name}
      </Text>
    </View>
  );
}
