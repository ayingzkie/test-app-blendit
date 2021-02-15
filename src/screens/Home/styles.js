import { StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    top: StatusBar.currentHeight,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    top: 0,
  },
  overlayContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlayItems: {
    height: 50,
    width: '100%',
  },
})

export default styles
