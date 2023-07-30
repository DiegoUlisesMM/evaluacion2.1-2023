import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from '../screen/Account'
import Home from '../screen/Home'
import Favoritos from '../screen/Favoritos'
import Inicio from '../screen/Inicio'

export default function NavigationTab() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Account" component={Account}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Favoritos" component={Favoritos}/>
    </Tab.Navigator>
  )
}