import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class DeckForm extends React.Component {
  state = {
    deckTitle: ''
  }

  render () {
    return (
      <View>
        <Text style={styles.inputPrompt}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.inputField}
          placeholder='Deck Title'
          onChangeText={(text) => this.setState({ deckTitle: text })}
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
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
  inputPrompt: {
    fontSize: 50,
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
  },
  submitBtn: {
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
  submitBtnText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

export default DeckForm