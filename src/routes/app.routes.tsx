import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';

type AppRoutesTypes = {
  home: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
