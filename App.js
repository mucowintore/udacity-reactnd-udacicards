import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
  Dimensions,
} from 'react-native'
import DeckOverview from './src/components/DeckOverview'
import DeckList from './src/components/DeckList'
import DeckForm from './src/components/DeckForm'
import QuestionForm from './src/components/QuestionForm'
import Button from './src/components/Button'
import QuizSummary from './src/components/QuizSummary'
import QuizQuestion from './src/components/QuizQuestion'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


const deckData = { 
  deckTitle: 'udacicards', 
  deckCardCount: 4 
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />,
    }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add' size={30} color={tintColor} />

    }
  }
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      height: 56,
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
  animationEnabled: true,
  swipeEnabled: true,
})

const MainStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      header: null,
    }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green',
      }
    }
  }
}, {
  navigationOptions: {
    header: null,
  }
})


export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        {/* <DeckOverview deckTitle={deckData.deckTitle} deckCardCount={deckData.deckCardCount}/> */}
        {/* <DeckList decksData={dummyDecksData} /> */}
        {/* <DeckForm /> */}
        {/* <QuestionForm /> */}
        {/* <Button backgroundColor='black' textColor='white'></Button> */}
        {/* <QuizSummary /> */}
        {/* <QuizQuestion/> */}
        <Tabs />
        {/* <DeckList/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
