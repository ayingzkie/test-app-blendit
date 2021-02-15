import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import BottomTabs from '../components/BottomNavigation'

const BottomTab = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={({ navigation, state }) => <BottomTabs navigation={navigation} state={state} />}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  )
}

export default BottomNavigator
