import React from 'react'
import { SafeAreaView, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import CustomTopNavigation from '../../components/CustomTopNavigation'
import styles from './styles'

const GOOGLE_MAPS_APIKEY = 'AIzaSyD0Q1Ec5qwnZljpvL1y5xerE3N8tcvY7hU'
//  const GEOCODING_API = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_MAPS_APIKEY}`

const Home = () => {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 }
  const destination = { latitude: 37.771707, longitude: -122.4053769 }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections origin={origin} destination={destination} apikey={GOOGLE_MAPS_APIKEY} />
      </MapView>
      <View style={styles.overlay}>
        <View style={styles.overlayContainer}>
          {/* <View style={styles.overlayItems}>
            <Inputs />
          </View> */}
          <View style={styles.overlayItems}>
            <CustomTopNavigation />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
