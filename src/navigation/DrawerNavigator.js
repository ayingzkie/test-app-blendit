import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from './BottomNavigator'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={BottomNavigator} />
    </Navigator>
  )
}

export default DrawerNavigator
