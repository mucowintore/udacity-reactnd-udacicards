import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
  Dimensions,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import devToolsEnhancer from 'remote-redux-devtools'
import rootReducer from './src/reducers'
import { addDeck } from './src/reducers/decks'

import DeckOverview from './src/components/DeckOverview'
import DeckList from './src/components/DeckList'
import NewDeckForm from './src/components/NewDeckForm'
import NewCardForm from './src/components/NewCardForm'
import Button from './src/components/Button'
import QuizSummary from './src/components/QuizSummary'
import QuizCard from './src/components/QuizCard'
import OutlineButton from './src/components/OutlineButton'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


const store = createStore(rootReducer, devToolsEnhancer())
const decksData = [
  { key:'udacicards', deckTitle: 'udacicards', deckCardCount: 6 },
  { key:'udacifingers', deckTitle: 'udacifingers', deckCardCount: 3 },
  { key: 'udacisquares', deckTitle: 'udacisquares', deckCardCount: 4 },
  { key: 'udaciboats', deckTitle: 'udaciboats', deckCardCount: 989 },
  { key: 'udaciflowers', deckTitle: 'udaciflowers', deckCardCount: 232 },
  { key: 'udacishells', deckTitle: 'udacishells', deckCardCount: 33 },
  { key: 'udacicars', deckTitle: 'udacicars', deckCardCount: 44 },
]
// decksData.forEach(({ deckTitle }) => store.dispatch(addDeck(deckTitle)))

const deckData = { 
  deckTitle: 'udacicards', 
  deckCardCount: 4 
}

const DeckStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      header: null,
      backgroundColor: 'white'
    }
  },
  DeckOverview: {
    screen: DeckOverview,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      }
    }
  },
  NewCardForm: {
    screen: NewCardForm,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      }
    }
  },
  QuizQuestion: {
    screen: QuizCard,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      }
    }
  },
  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      }
    }
  },  
}, {
  navigationOptions: {
    header: null
  }
})

const Tabs = TabNavigator({
  DeckStack: {
    screen: DeckStack,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />,
    }
  },
  NewDeckForm: {
    screen: NewDeckForm,
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
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: 'black',
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
})




export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        {/* <View style={{ height: 20 }} /> */}
        {/* <DeckOverview deckTitle={deckData.deckTitle} deckCardCount={deckData.deckCardCount}/> */}
        {/* <DeckList decksData={dummyDecksData} /> */}
        {/* <DeckForm /> */}
        {/* <QuestionForm /> */}
        {/* <Button backgroundColor='black' textColor='white'></Button> */}
        {/* <QuizSummary /> */}
        {/* <QuizQuestion/> */}
          <Tabs />
        {/* <DeckList/> */}
        {/* <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <OutlineButton borderColor='black' textColor='black'>Button</OutlineButton>
        </View> */}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
