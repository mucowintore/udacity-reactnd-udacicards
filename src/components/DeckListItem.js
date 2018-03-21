import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const DeckListItem = ({ deckTitle, deckCardCount }) => (
  <View style={styles.deck}>
    <Text style={styles.deckTitle}>{deckTitle}</Text>
    <Text style={styles.deckCardCount}>{deckCardCount} cards</Text>
  </View>
)

DeckListItem.propTypes = {
  deckTitle: PropTypes.string.isRequired,
  deckCardCount: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  deck : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  deckCardCount: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  }
})

export default DeckListItem
