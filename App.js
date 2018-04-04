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
import { Permissions } from 'expo'
import rootReducer from './src/reducers'
import { addDeck } from './src/reducers/decks'

import DeckOverview from './src/components/DeckOverview'
import DeckList from './src/components/DeckList'
import NewDeckForm from './src/components/NewDeckForm'
import NewCardForm from './src/components/NewCardForm'
import Button from './src/components/Button'
import QuizSummary from './src/components/QuizSummary'
import Quiz from './src/components/Quiz'
import OutlineButton from './src/components/OutlineButton'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


const store = createStore(rootReducer, devToolsEnhancer())

const DeckStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      header: null,
    }
  },
  DeckOverview: {
    screen: DeckOverview,
    navigationOptions: {
      header: null,
    }
  },
  NewCardForm: {
    screen: NewCardForm,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      header: null,
    }
  },
  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: {
      header: null,
    }
  },
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
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  }
  render () {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Tabs/>
        </View>
      </Provider>
    )
  }
}