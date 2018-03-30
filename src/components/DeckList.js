import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import DeckListItem from './DeckListItem'

const props = {
  decksData: [
    { key:'udacicards', deckTitle: 'udacicards', deckCardCount: 6 },
    { key:'udacifingers', deckTitle: 'udacifingers', deckCardCount: 3 },
    { key: 'udacisquares', deckTitle: 'udacisquares', deckCardCount: 4 },
    { key: 'udaciboats', deckTitle: 'udaciboats', deckCardCount: 989 },
    { key: 'udaciflowers', deckTitle: 'udaciflowers', deckCardCount: 232 },
    { key: 'udacishells', deckTitle: 'udacishells', deckCardCount: 33 },
    { key: 'udacicars', deckTitle: 'udacicars', deckCardCount: 44 },
  ]
}

class DeckList extends React.Component {

  renderSeparator = () => (
    <View style={styles.separator} />
  )
  render() {
    const { decksData } = props
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={decksData}
          renderItem={({ item }) => <DeckListItem deckTitle={item.deckTitle} deckCardCount={item.deckCardCount} />}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  separator: {
    height: 1,
    width: Dimensions.get('window').width,
    backgroundColor: "#CED0CE",

  }
})

export default DeckList