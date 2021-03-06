import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import OutlineButton from './OutlineButton'

const scoreInPercent = (correct, total) => Math.floor(correct / total * 100)
const B = ({ children }) => (
  <Text style={{fontWeight: 'bold'}}>{children}</Text>
)


class QuizSummary extends Component {
  handleBackToDeck = () => {
    const { deckId } = this.props
    this.props.navigation.goBack()
  }
  render() {
    const { correct, total, handleRestartQuiz } = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.container, {marginTop: 20}]}>
          <Text style={styles.completionText}>You've completed the quiz!</Text>
          <Text style={[styles.score, {fontWeight: 'bold'}]}>Your Score</Text>
          <Text style={styles.score}>
            <B>{scoreInPercent(correct, total)}%</B> (<B>{correct}</B> correct out of <B>{total})</B>
          </Text>
        </View>
        <View style={styles.container}>
          <OutlineButton 
            borderColor='black' textColor='black' style={{ marginBottom: 10 }}
            onPress={handleRestartQuiz}
          >
            Restart Quiz
          </OutlineButton>
          <OutlineButton 
            borderColor='black' textColor='black' 
            onPress={this.handleBackToDeck}
          >
              Back to Deck
          </OutlineButton>
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

export default withNavigation(QuizSummary)