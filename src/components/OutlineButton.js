import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const OutlineButton = ({ children, onPress, borderColor, textColor, style }) => (
  <TouchableOpacity style={[styles.btn, style, { borderColor }]} onPress={onPress}>
    <Text style={[styles.bntText, { color: textColor }]}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    borderWidth: 1,
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

OutlineButton.propTypes = {
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

export default OutlineButton