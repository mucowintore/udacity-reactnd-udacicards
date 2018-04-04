import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { getCardsFromDeck } from '../reducers/cards'

import QuizCard from './QuizCard'
import Button from './Button'
import QuizSummary from './QuizSummary';

const props = {
  correct: 3,
  total: 8,
  question: 'Does React work with Android?',
  answer: 'Yes',
  answerShown: false,
}

class Quiz extends Component {
  state = {
    currentCardIndex: 0,
    correct: 0
  }

  incrementCorrectCount = () => this.setState((state) => ({ correct: state.correct + 1}))
  incrementCurrentCardIndex = () => this.setState((state) => ({ currentCardIndex: state.currentCardIndex + 1}))
  restartQuiz = () => this.setState({ currentCardIndex: 0, correct: 0 })

  render() {
    const { cards } = this.props
    const { currentCardIndex, correct } = this.state
    const { deckId } = this.props.navigation.state.params

    const card = cards[currentCardIndex]

    return (
      <View style={styles.container}>        
        { currentCardIndex < cards.length 
          ? <View style={styles.container}>
              <View style={styles.container}>
                <Text style={styles.score}>{currentCardIndex + 1}/{cards.length}</Text>
              </View>
              <View style={[styles.container, { flex: 5}]}>
                <QuizCard 
                  question={card.question} 
                  answer={card.answer} 
                  incrementCorrectCount={this.incrementCorrectCount}
                  incrementCurrentCardIndex={this.incrementCurrentCardIndex}
                />
              </View>              
            </View> 
          : <QuizSummary 
              correct={correct} 
              total={cards.length} 
              deckId={deckId}
              handleRestartQuiz={this.restartQuiz}/>
        }
      </View>
    )
  }
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    fontSize: 30,
  }
})

const mapStateToProps = ({ cards }, ownProps) => {
  const { deckId } = ownProps.navigation.state.params
  return {
    cards: getCardsFromDeck(deckId, cards)
  }
}
export default withNavigation(connect(mapStateToProps)(Quiz))