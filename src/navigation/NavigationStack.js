import 'react-native-gesture-handler';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from '../screen/Inicio';
import NavigationTab from './NavigationTab';
import Registro from '../screen/Registro';
import RegistroEmpleado from '../screen/RegistroEmpleado';
import RegistroCliente from '../screen/RegistroCliente';
import LoginEmpleado from '../screen/LoginEmpleado';
import LoginCliente from '../screen/LoginCliente';
const Stack = createStackNavigator();

export default function NavigationStack() {
    return (

          <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='NavigationTab'
            component={NavigationTab}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
            name='Registro'
            component={Registro}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='RegistroEmpleado'
            component={RegistroEmpleado}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='RegistroCliente'
            component={RegistroCliente}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='LoginEmpleado'
            component={LoginEmpleado}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='LoginCliente'
            component={LoginCliente}
            options={{
              headerShown:false,
            }}
            />
          </Stack.Navigator>
          

      );
}