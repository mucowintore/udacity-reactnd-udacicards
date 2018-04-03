import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import { getDecksArray } from '../reducers/decks'
import DeckListItem from './DeckListItem'
import Button from './Button'
import OutlineButton from './OutlineButton'

class DeckList extends React.Component {
  handleAddDeck = () => {
    this.props.navigation.navigate('NewDeckForm')
  }
  render() {
    const { decks } = this.props
    
    return (
      <View style={styles.container}>
        {decks.length
          ? <FlatList
              style={{flex: 1}}
              data={decks}
              renderItem={({ item }) => <DeckListItem deckTitle={item.deckTitle} deckCardCount={item.deckCardCount} deckId={item.id}/>}
              keyExtractor={(item, index) => item.id}
            />
          : <View>
              <View style={[styles.container, {justifyContent: 'flex-end'}]}>
                <Text style={styles.noDeckText}>You don't have any deck!</Text>
              </View>
              <View style={[styles.container, {justifyContent: 'flex-start', marginTop: 20}]}>
                <Button onPress={this.handleAddDeck}>
                  Add Deck
                </Button>
              </View>
            </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDeckText: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
})

function mapStateToProps ({ decks }) {
  return {
    decks: getDecksArray(decks)
  }
}

export default withNavigation(connect(mapStateToProps)(DeckList))