import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const Inputs = (props) => {
  const [value, setValue] = useState('')
  return (
    <TextInput
      {...props}
      style={styles.input}
      onChangeText={(text) => setValue(text)}
      value={value}
    />
  )
}

export default Inputs
