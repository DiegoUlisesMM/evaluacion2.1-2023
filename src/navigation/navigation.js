import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStack from './NavigationStack';
import NavigationTab from './NavigationTab';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='NavigationStack' component={NavigationStack} options={{ headerShown: false }} />
        <Stack.Screen name='NavigationTab' component={NavigationTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
