import React from 'react'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const BottomTab = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  )
}

export default BottomNavigator
