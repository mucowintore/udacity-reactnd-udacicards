import React, { Component } from 'react'
import { 
  Text, 
  KeyboardAvoidingView, 
  View, 
  StyleSheet, 
  TextInput,
  Dimensions, 
  Keyboard 
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { addCard } from '../reducers/cards'
import { incrementDeckCardCount } from '../reducers/decks'

import Button from './Button'

class NewCardForm extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { deckId } = this.props.navigation.state.params

    this.props.addCard(deckId, question, answer)
    this.props.incrementDeckCardCount(deckId)

    Keyboard.dismiss()

    this.props.navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={[styles.container, { justifyContent: 'flex-end'}]}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Question</Text>
            <TextInput 
              style={styles.inputField}
              onChangeText={(text) => this.setState({ question: text })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Answer</Text>
            <TextInput 
              style={styles.inputField}
              onChangeText={(text) => this.setState({ answer: text })}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Button onPress={this.handleSubmit}>
            Submit
          </Button>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: width * 0.85,
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  inputField: {
    height: 50,
    padding: 10,
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
})

export default withNavigation(connect(
  null, 
  { addCard, incrementDeckCardCount }
)(NewCardForm))