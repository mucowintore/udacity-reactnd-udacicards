import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const Button = ({ children, onPress, backgroundColor, textColor, style = {} }) => (
  <TouchableOpacity 
    style={[styles.btn, style, { backgroundColor: backgroundColor || 'black' }]} 
    onPress={onPress}
  >
    <Text style={[styles.bntText, { color: textColor || 'white' }]}>
      {children}
    </Text>
  </TouchableOpacity>
)

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.6
  },
  bntText: {
    fontSize: 30,
    textAlign: 'center',
  }
})

export default Button