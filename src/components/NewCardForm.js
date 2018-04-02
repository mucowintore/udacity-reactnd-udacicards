import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { addCard } from '../reducers/cards'
import { incrementDeckCardCount } from '../reducers/decks'

export class NewCardForm extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { parentId } = this.props.navigation.state.params

    this.props.addCard(parentId, question, answer)
    this.props.incrementDeckCardCount(parentId)

    Keyboard.dismiss()

    this.props.navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
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
            onChangeText={(text) => this.setState({ question: text })}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={this.handleSubmit}>
          <Text style={styles.addBtnText}>Add Card</Text>
        </TouchableOpacity>
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
    fontSize: 15,
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
  addBtn: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

export default withNavigation(connect(null, { addCard, incrementDeckCardCount })(NewCardForm))