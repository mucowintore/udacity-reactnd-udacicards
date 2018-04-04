import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { scheduleNextNotification } from '../utils'
import Button from './Button'
import OutlineButton from './OutlineButton'


class DeckOverview extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: deckTitle
    }
  }
  handleAddCard = () => {
    const { deckId } = this.props.navigation.state.params
    this.props.navigation.navigate('NewCardForm', { deckId })
  }

  handleStartQuiz = () => {
    const { deckId } = this.props.navigation.state.params
    scheduleNextNotification()
    this.props.navigation.navigate('Quiz', { deckId })
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
          <OutlineButton onPress={this.handleAddCard} style={{marginBottom: 10}}>
            Add Card
          </OutlineButton>
          { deckCardCount > 0 && (
            <Button onPress={this.handleStartQuiz}>
              Start a Quiz
            </Button>
          )}            
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
  }
})

function mapStateToProps ( { decks }, props) {
  const { deckId } = props.navigation.state.params
  return decks[deckId]
}

export default withNavigation(connect(mapStateToProps)(DeckOverview))
