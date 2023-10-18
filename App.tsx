import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View testID="App" className="flex-1 items-center justify-center bg-white">
      <Text className="text-black">Tem Vaga Mestre?</Text>
      <StatusBar style="auto" />
    </View>
  );
}
