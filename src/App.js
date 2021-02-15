/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import RootNavigator from './navigation/RootNavigator'

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </ApplicationProvider>
  )
}

export default App
