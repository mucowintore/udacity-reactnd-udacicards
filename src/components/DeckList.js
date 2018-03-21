import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import DeckListItem from './DeckListItem'

class DeckList extends React.Component {
  static propTypes = {
    decksData: PropTypes.array.isRequired
  }

  renderSeparator = () => (
    <View style={styles.separator} />
  )
  render() {
    const { decksData } = this.props
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