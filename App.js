import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
  Dimensions,
} from 'react-native'
import DeckOverview from './src/components/DeckOverview'
import DeckList from './src/components/DeckList'
import DeckForm from './src/components/DeckForm'
import QuestionForm from './src/components/QuestionForm'
import Button from './src/components/Button'
import QuizSummary from './src/components/QuizSummary'
import QuizQuestion from './src/components/QuizQuestion'

const dummyDecksData = [
  { key:'udacicards', deckTitle: 'udacicards', deckCardCount: 6 },
  { key:'udacifingers', deckTitle: 'udacifingers', deckCardCount: 3 },
  { key: 'udacisquares', deckTitle: 'udacisquares', deckCardCount: 4 },
  { key: 'udaciboats', deckTitle: 'udaciboats', deckCardCount: 989 },
  { key: 'udaciflowers', deckTitle: 'udaciflowers', deckCardCount: 232 },
  { key: 'udacishells', deckTitle: 'udacishells', deckCardCount: 33 },
  { key: 'udacicars', deckTitle: 'udacicars', deckCardCount: 44 },
]

const deckData = { 
  deckTitle: 'udacicards', 
  deckCardCount: 4 
}

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        {/* <DeckOverview deckTitle={deckData.deckTitle} deckCardCount={deckData.deckCardCount}/> */}
        {/* <DeckList decksData={dummyDecksData} /> */}
        {/* <DeckForm /> */}
        {/* <QuestionForm /> */}
        {/* <Button backgroundColor='black' textColor='white'></Button> */}
        {/* <QuizSummary /> */}
        <QuizQuestion/>
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
