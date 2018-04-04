import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const LoadingView = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name='cards' size={80} />
    <Text style={styles.title}>UdaciCards</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold'
  }
})

export default LoadingView