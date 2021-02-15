import { StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
    paddingTop: 20,
    paddingBottom: 10,
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
  },
})

export default styles
