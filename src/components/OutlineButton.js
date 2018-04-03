import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const OutlineButton = ({ children, onPress, style }) => (
  <TouchableOpacity style={[styles.btn, style ]} onPress={onPress}>
    <Text style={styles.bntText}>{children}</Text>
  </TouchableOpacity>
)

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  btn: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.6,
  },
  bntText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  }
})

export default OutlineButton