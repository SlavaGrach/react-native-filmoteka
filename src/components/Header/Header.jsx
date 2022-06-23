import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  logo: {
    maxWidth: 250,
    width: '100%',
    height: 40,
  },
})

export { Header }
