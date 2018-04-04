import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'


class DeckListItem extends React.Component {
  handleClick = () => {
    const { deckId, deckTitle } = this.props
    this.props.navigation.navigate('DeckOverview', { deckId, deckTitle })
  }
  render() {
    const {
      deckTitle,
      deckCardCount
    } = this.props

    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>{deckTitle}</Text>
          <Text style={styles.deckCardCount}>{deckCardCount} cards</Text>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    )
  }
}

const { width } = Dimensions.get('window')
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
  deckCardCount: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  },
  separator: {
    height: 1,
    width: width,
    backgroundColor: "#CED0CE",
  }
})

export default withNavigation(DeckListItem)
