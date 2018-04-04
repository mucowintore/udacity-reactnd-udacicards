import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Button from './Button'


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
    this.setState({ isQuestionVisible: true })
  } 
  handleIncorrectClick = () => {
    this.props.incrementCurrentCardIndex()
    this.setState({ isQuestionVisible: true })
  }
  
  render() {
    const { answer, question } = this.props
    const { isQuestionVisible } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>{ isQuestionVisible ? question : answer}</Text>
          <TouchableOpacity onPress={this.handleTextButtonClick}>
            <Text style={styles.textBtn}>
              {isQuestionVisible ? 'Show Answer' : 'Show Question'}
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
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
  },
  textBtn:{
    fontSize: 15,
    color: 'red',
  },
})

export default QuizCard