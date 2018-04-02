import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import Button from './Button'
import { addDeck } from '../reducers/decks'

class NewDeckForm extends React.Component {
  state = {
    deckTitle: ''
  }

  handleSubmit = () => {
    const { deckTitle } = this.state

    this.props.addDeck(deckTitle)
    Keyboard.dismiss()
    this.props.navigation.navigate('DeckList')
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.inputPrompt}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.inputField, { marginBottom: 30}]}
          placeholder='Deck Title'
          onChangeText={(text) => this.setState({ deckTitle: text })}
        />
        <Button backgroundColor='black' textColor='white' onPress={this.handleSubmit}>Create Deck</Button>
        {/* <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity> */}
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
  inputPrompt: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    margin: 20,
    marginBottom: 50,
  },
  inputField: {
    height: 50,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: width * 0.85,
  },
})

export default connect(null, { addDeck })(NewDeckForm)