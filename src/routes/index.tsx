import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'
import { StackRoutes } from './StackRoutes'
import TestRoute from '../screens/TestRoute'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          backgroundColor: '#efefef',
          borderTopWidth: 0,
          height: 80
        }
      }}
    >
      <Tab.Screen
        name="Login"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="add-circle" color="#000" size={32} />
            }

            return (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            )
          }
        }}
      />
      <Tab.Screen
        name="TestRoute"
        component={TestRoute}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="red" size={32} />
            }

            return <Ionicons name="heart-outline" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
