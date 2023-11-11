import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import TestRoute from '../screens/TestRoute';

type AuthRoutesTypes = {
  signIn: undefined;
  testRoute: undefined; // TODO: Tela de teste
};

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AuthRoutesTypes>;

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesTypes>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          backgroundColor: '#efefef',
          borderTopWidth: 0,
          height: 80,
        },
      }}
    >
      <Screen
        name="signIn"
        component={Login}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="add-circle" color="#000" size={32} />;
            }
            return (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            );
          },
        }}
      />
      <Screen
        name="testRoute"
        component={TestRoute}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="red" size={32} />;
            }
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
}
