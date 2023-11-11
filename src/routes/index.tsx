import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator color="#FFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SignedIn>
        <AppRoutes />
      </SignedIn>
      <SignedOut>
        <AuthRoutes />
      </SignedOut>
    </NavigationContainer>
  );
}
