import { Text, View } from 'react-native';

export function EmptyDate() {
  return (
    <View className="flex items-center justify-center my-8">
      <Text className="text-center font-medium text-lg">
        Selecione um dia para obter os horários disponíveis.
      </Text>
    </View>
  );
}
