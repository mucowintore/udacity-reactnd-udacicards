import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ children, onPress, backgroundColor, textColor, style = {} }) => (
  <TouchableOpacity style={[styles.btn, style, { backgroundColor }]} onPress={onPress}>
    <Text style={[styles.bntText, { color: textColor }]}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bntText: {
    fontSize: 30,
    textAlign: 'center',
  }
})

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

export default Button