import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Button from './Button'

const props = {
  correct: 3,
  total: 8,
  question: 'Does React work with Android?',
  answer: 'Yes',
  answerShown: false,
}

class QuizCard extends React.Component {
  state = {
    isQuestionVisible: true
  }

  handleTextButtonClick = () => (
    this.setState({ isQuestionVisible: !this.state.isQuestionVisible})
  )
  handleCorrectClick = () => {
    this.props.incrementCorrectCount()
    this.props.incrementCurrentCardIndex()
  } 
  handleIncorrectClick = () => {
    this.props.incrementCurrentCardIndex()
  }
  
  render() {
    const { answer, question } = this.props
    const { isQuestionVisible } = this.state

    return (
      <View style={[styles.container, {flex: 5}]}>
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <Text style={styles.text}>{ isQuestionVisible ? question : answer}</Text>
          <TouchableOpacity onPress={this.handleTextButtonClick}>
            <Text style={styles.textBtn}>
              {isQuestionVisible ? 'Answer' : 'Question'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
          <Button 
            onPress={this.handleCorrectClick}
            style={{marginBottom: 5}} backgroundColor='green' textColor='white'>
            Correct
          </Button>
          <Button 
            onPress={this.handleIncorrectClick}
            backgroundColor='red' textColor='white'
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
})
// const QuizCard = ({ question, answer }) => (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
//     <Text>{question}</Text>
//     <Text>{answer}</Text>
//   </View> 
// )

export default QuizCard