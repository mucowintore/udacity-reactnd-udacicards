import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DeckListItem = (props) => {
  // console.log(`DeckListItem instance props: ${props}`)
  const {
    deckTitle,
    deckCardCount,
    deckId,
    navigation
  } = props

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DeckOverview', { deckId })}>
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>{deckTitle}</Text>
        <Text style={styles.deckCardCount}>{deckCardCount} cards</Text>
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  )
}

function mapStateToProps ({ decks }, props) {
  // console.log(`DeckListItem mapStateToProps ownProps: ${JSON.stringify(props)}`)
  return decks[props.deckId]
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
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    width: Dimensions.get('window').width,
    backgroundColor: "#CED0CE",
  },
  deckCardCount: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  }
})

export default withNavigation(connect(mapStateToProps)(DeckListItem))
