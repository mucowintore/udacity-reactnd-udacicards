import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import { getDeckIds } from '../reducers/decks'
import DeckListItem from './DeckListItem'
import Button from './Button'

class DeckList extends React.Component {
  renderSeparator = () => (
    <View style={styles.separator} />
  )
  render() {
    // console.log(`DeckList instance props: ${JSON.stringify(this.props)}`)
    const { decksData } = this.props
    
    return (
      <View style={styles.container}>
        {decksData.length
          ? <FlatList
              style={{flex: 1}}
              data={decksData}
              renderItem={({ item }) => <DeckListItem deckId={item.id}/>}
              ItemSeparatorComponent={this.renderSeparator}
            />
          : <View>
              <View style={[styles.container, {flex: 1, justifyContent: 'flex-end'}]}>
                <Text style={styles.noDeckText}>You don't have any deck!</Text>
              </View>
              <View style={[styles.container, {flex: 1, justifyContent: 'flex-start'}]}>
                <Button 
                  onPress={() => this.props.navigation.navigate('NewDeckForm')}
                  backgroundColor='black' textColor='white' style={styles.btn}
                >
                  Add Deck
                </Button>
              </View>
              
              
            </View>
        }
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return { 
    decksData: getDeckIds(decks).map(id => ({ key: id, id })),
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  noDeckText: {
    textAlign: 'center',
    fontSize: 50,
    // fontWeight: 'bold',
    color: 'grey',
    marginBottom: 20,
  },
  btn: {
    margin: 20
  }
})

export default withNavigation(connect(mapStateToProps)(DeckList))