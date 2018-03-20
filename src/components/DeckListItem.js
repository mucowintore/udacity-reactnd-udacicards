import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const DeckListItem = ({ deckTitle, deckCardCount }) => (
  <View style={{flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <Text style={{fontSize: 30}}>{deckTitle}</Text>
      <Text style={{fontSize: 15, textAlign: 'center', color: 'gray'}}>{deckCardCount} cards</Text>
    </View>
)

DeckListItem.propTypes = {
  deckTitle: PropTypes.string.isRequired,
  deckCardCount: PropTypes.number.isRequired,
}

export default DeckListItem
