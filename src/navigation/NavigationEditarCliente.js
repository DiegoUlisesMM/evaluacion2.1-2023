import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditarPerfilCLiente from '../screen/EditarPerfilCliente';
import NavigationTab from './NavigationTab';

const Stack = createStackNavigator();

export default function NavigationEditarCliente() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='EditarPerfilCLiente' component={EditarPerfilCLiente} options={{ headerShown: false }} />
        <Stack.Screen name='NavigationTab' component={NavigationTab} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}
