import { combineReducers } from 'redux'
import decks from './decks'
import cards from './cards'
import ui from './ui'

const rootReducer = combineReducers({
  decks,
  cards,
  ui
})

export default rootReducer