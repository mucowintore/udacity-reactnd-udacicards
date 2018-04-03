import React from 'react'
import { 
  Text, 
  View,
  StyleSheet, 
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
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
        <View style={[styles.container, { flex: 2, justifyContent: 'center' }]}>
          <Text style={styles.inputPrompt}>What is the title of your new deck?</Text>
          <TextInput
            style={[styles.inputField]}
            placeholder='Deck Title'
            onChangeText={(text) => this.setState({ deckTitle: text })}
          />
        </View>
        <View style={[styles.container, { flex: 1, justifyContent: 'center' }]}>
          <Button backgroundColor='black' textColor='white' onPress={this.handleSubmit}>Submit</Button>
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
  inputPrompt: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  inputField: {
    height: 60,
    padding: 10,
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: width * 0.85,
  },
})

export default connect(null, { addDeck })(NewDeckForm)