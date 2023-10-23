import { Button, Image, SafeAreaView, Text } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

const Home = () => {
  const { user, signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <Text className="text-white mb-20">Home Page - Test</Text>

      <Image
        className="w-40 h-40 rounded-full"
        source={{ uri: user?.avatar }}
        alt=""
      />

      <Text className="text-white">{user?.fullName}</Text>
      <Text className="text-white">{user?.email}</Text>
      <Button title="Sair" onPress={signOut} />
    </SafeAreaView>
  );
};

export default Home;
