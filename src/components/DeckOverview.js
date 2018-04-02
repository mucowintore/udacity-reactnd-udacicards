import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

class DeckOverview extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckTitle
  })

  handleAddCard = () => {
    const { id } = this.props
    this.props.navigation.navigate('NewCardForm', { parentId: id })
  }

  handleStartQuiz = () => {
    const { id } = this.props
    this.props.navigation.navigate('QuizCards', { parentId: id })
  }

  render() {
    const { deckTitle, deckCardCount } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.container, {justifyContent: 'flex-end'}]}>
          <Text style={styles.deckTitle}>{deckTitle}</Text>
          <Text style={styles.deckCardCount}>{deckCardCount} cards</Text>
        </View>
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
          <TouchableOpacity 
            style={[styles.btn, { borderColor: 'black', borderWidth: 1}]} 
            onPress={this.handleAddCard}
          >
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.btn, { marginTop: 10, backgroundColor: 'black'}]}
            onPress={this.handleStartQuiz}>
            <Text style={[styles.btnText, { color: 'white'}]}>Start Quiz</Text>
          </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 40,
  },
  deckTitle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  deckCardCount: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gray'
  },
  btn: {
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 30,
    textAlign: 'center',
  },
})

function mapStateToProps ( { decks }, props) {
  const { id } = props.navigation.state.params
  return decks[id]
}
export default withNavigation(connect(mapStateToProps, null)(DeckOverview))
