import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar, 
  Dimensions,
  AsyncStorage
} from 'react-native'
import { Provider } from 'react-redux' 
import { createStore } from 'redux'
// import devToolsEnhancer from 'remote-redux-devtools'
import { Permissions } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/configureStore'

import rootReducer from './src/reducers'
import DeckList from './src/components/DeckList'
import NewDeckForm from './src/components/NewDeckForm'
import DeckOverview from './src/components/DeckOverview'
import NewCardForm from './src/components/NewCardForm'
import Quiz from './src/components/Quiz'
import QuizSummary from './src/components/QuizSummary'
import LoadingView from './src/components/LoadingView'


const DeckStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      header: null
    }
  },
  DeckOverview: {
    screen: DeckOverview,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  NewCardForm: {
    screen: NewCardForm,
    navigationOptions: {
      headerTitle: 'Add New Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: {
      headerTitle: 'Quiz Summary',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
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
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false
})




export default class App extends React.Component {
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  }
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <Tabs/>
        </PersistGate>
      </Provider>
    )
  }
}