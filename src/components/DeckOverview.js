import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const DeckOverview = ({ deckTitle, deckCardCount }) => (
  <View style={styles.container}>
    <View style={[styles.container, {justifyContent: 'flex-end'}]}>
      <Text style={styles.deckTitle}>{deckTitle}</Text>
      <Text style={styles.deckCardCount}>{deckCardCount} cards</Text>
    </View>
    <View style={[styles.container, {justifyContent: 'flex-start'}]}>
      <TouchableOpacity style={[styles.btn, { borderColor: 'black', borderWidth: 1}]}>
        <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { marginTop: 10, backgroundColor: 'black'}]}>
        <Text style={[styles.btnText, { color: 'white'}]}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  deckTitle: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  deckCardCount: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gray'
  },
  btn: {
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 30,
    textAlign: 'center',
  },
})

DeckOverview.propTypes = {
  deckTitle: PropTypes.string.isRequired,
  deckCardCount: PropTypes.number.isRequired,
}

export default DeckOverview
