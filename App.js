import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
} from 'react-native'
import DeckListItem from './src/components/DeckListItem'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <DeckListItem deckTitle='Udacicards' deckCardCount={5} />
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
