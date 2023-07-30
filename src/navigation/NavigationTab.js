import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Expo

import Account from '../screen/Account';
import Home from '../screen/Home';
import Favoritos from '../screen/Favoritos';

export default function NavigationTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false, // Oculta la barra superior en esta pantalla
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ), // Icono para la pestaña "Account"
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Oculta la barra superior en esta pantalla
          
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ), // Icono para la pestaña "Home"
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false, // Oculta la barra superior en esta pantalla
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ), // Icono para la pestaña "Favoritos"
        }}
      />
    </Tab.Navigator>
  );
}