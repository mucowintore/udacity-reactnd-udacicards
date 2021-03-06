import uuid from 'uuid/v4'

export default function reducer (decks = {}, action) {
  switch(action.type) {
    case ADD_DECK: {
      const { addedDeck } = action
      return {
        [addedDeck.id]: addedDeck,
        ...decks,        
      }
    }
    case INCREMENT_DECK_CARD_COUNT: {
      const { deckId } = action
      return {
        ...decks,
        [deckId]: {
          ...decks[deckId],
          deckCardCount: decks[deckId].deckCardCount + 1
        }
      }
    }
    default:
      return decks
  }
}

export const getDecksArray = (decks) => (
    Object.keys(decks)
    .map(id => decks[id])
)

const ADD_DECK = 'ADD_DECK'
const INCREMENT_DECK_CARD_COUNT = 'INCREMENT_DECK_CARD_COUNT'

export const addDeck = (deckTitle) => ({ 
  type: ADD_DECK, 
  addedDeck: { 
    deckTitle,
    deckCardCount: 0, 
    id: uuid() 
  }
})

export const incrementDeckCardCount = (deckId) => ({ 
  type: INCREMENT_DECK_CARD_COUNT, 
  deckId 
})