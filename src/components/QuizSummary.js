import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from './Button'

const props = {
  correct: 7,
  total: 10,
}

const toPercent = (num, dem) => Math.floor(num / dem * 100)
const Bold = ({ children }) => (
  <Text style={{fontWeight: 'bold'}}>{children}</Text>
)

class QuizSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {marginTop: 20}]}>
          <Text style={styles.completionText}>You've completed the quiz!</Text>
          <Text style={[styles.score, {fontWeight: 'bold'}]}>Your Score</Text>
          <Text style={styles.score}>
            <Bold>{toPercent(props.correct, props.total)}%</Bold> (<Bold>{props.correct}</Bold> correct out of <Bold>{props.total})</Bold>
          </Text>
        </View>
        <View style={styles.container}>
          <Button backgroundColor='black' textColor='white' style={{ marginBottom: 15 }}>Back to Deck</Button>
          <Button backgroundColor='black' textColor='white'>Back to Decks</Button>
        </View>
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
  completionText: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  score: {
    fontSize: 20,
  }
})

export default QuizSummary