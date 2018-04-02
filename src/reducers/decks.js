import uuid from 'uuid/v4'

export default function reducer (decks = {}, action) {
  switch(action.type) {
    case ADD_DECK: {
      const { addedDeck } = action
      return {
        ...decks,
        [addedDeck.id]: addedDeck,
      }
    }
    default:
      return decks
  }
}

export const getDeckIds = (decks) => Object.keys(decks)


const ADD_DECK = 'ADD_DECK'

export const addDeck = ({ deckTitle }) => ({ 
  type: ADD_DECK, 
  addedDeck: { 
    deckTitle,
    deckCardCount: 0, 
    id: uuid() 
  }
})