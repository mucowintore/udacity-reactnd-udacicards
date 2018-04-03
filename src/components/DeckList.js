import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import { getDeckIds } from '../reducers/decks'
import DeckListItem from './DeckListItem'
import Button from './Button'

class DeckList extends React.Component {
  handleAddDeck = () => {
    this.props.navigation.navigate('NewDeckForm')
  }
  render() {
    const { decksData } = this.props
    
    return (
      <View style={styles.container}>
        {decksData.length
          ? <FlatList
              style={{flex: 1}}
              data={decksData}
              renderItem={({ item }) => <DeckListItem id={item.id}/>}
              ItemSeparatorComponent={this.renderSeparator}
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

function mapStateToProps ({ decks }) {
  return { 
    decksData: getDeckIds(decks).map(id => ({ key: id, id })),
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

export default withNavigation(connect(mapStateToProps)(DeckList))