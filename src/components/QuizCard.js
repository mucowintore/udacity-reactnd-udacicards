import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Button from './Button'

const props = {
  correct: 3,
  total: 8,
  question: 'Does React work with Android?',
  answer: 'Yes',
  answerShown: false,
}

class QuizCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {flex: 1, alignSelf: 'flex-start'}]}>
          <Text style={styles.score}>{props.correct}/{props.total}</Text>
        </View>
        <View style={[styles.container, {flex: 3}]}>
          <Text style={styles.text}>{props.answerShown ? props.answer : props.question}</Text>
          <TouchableOpacity>
            <Text style={styles.textBtn}>{props.answerShown ? 'Question' : 'Answer'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, {flex: 3}]}>
          <Button style={{marginBottom: 5}} backgroundColor='green' textColor='white'>
            Correct
          </Button>
          <Button 
            backgroundColor='red' textColor='white'
            onPress={() => this.props.navigation.navigate('QuizSummary')}
          >
            Incorrect
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    margin: 20,
    textAlign: 'center',
  },
  textBtn:{
    fontSize: 20,
    color: 'red',
  },
  score: {
    fontSize: 30,
  }
})

export default withNavigation(QuizCard)