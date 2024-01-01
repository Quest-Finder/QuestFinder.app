import { Text, View } from 'react-native';

export function EmptyTime() {
  return (
    <View className="flex items-center justify-center my-8">
      <Text className="text-center font-medium text-lg">
        Escolha um dia para exibir os horários disponíveis.
      </Text>
    </View>
  );
}
