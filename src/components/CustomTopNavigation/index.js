import React from 'react'
import { Input, Layout } from '@ui-kitten/components'
import styles from './styles'

const CustomTopNavigation = () => {
  const [value, setValue] = React.useState('')
  return (
    <Layout style={styles.container} level="1">
      <Input
        style={styles.input}
        placeholder="Your Location"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        style={styles.input}
        placeholder="Your Destination"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
    </Layout>
  )
}

export default CustomTopNavigation
