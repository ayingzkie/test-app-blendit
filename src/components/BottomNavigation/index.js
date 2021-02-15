import React from 'react'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MapMarkedIcon = ({ style }) => {
  const { tintColor } = style
  return <Icon color={tintColor} size={15} name="map-marked-alt" />
}

const BottomTabs = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={MapMarkedIcon} title="MAP" />
    <BottomNavigationTab title="SETTINGS" />
  </BottomNavigation>
)

export default BottomTabs
