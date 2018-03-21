import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
  Dimensions,
} from 'react-native'
import DeckList from './src/components/DeckList'

const dummyDecksData = [
  { key:'udacicards', deckTitle: 'udacicards', deckCardCount: 6 },
  { key:'udacifingers', deckTitle: 'udacifingers', deckCardCount: 3 },
  { key: 'udacisquares', deckTitle: 'udacisquares', deckCardCount: 4 },
  { key: 'udaciboats', deckTitle: 'udaciboats', deckCardCount: 989 },
  { key: 'udaciflowers', deckTitle: 'udaciflowers', deckCardCount: 232 },
  { key: 'udacishells', deckTitle: 'udacishells', deckCardCount: 33 },
  { key: 'udacicars', deckTitle: 'udacicars', deckCardCount: 44 },
]

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        <DeckList decksData={dummyDecksData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
