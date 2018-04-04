import uuid from 'uuid/v4'

const ADD_CARD = 'ADD_CARD'

export default function reducer (cards = {}, action) {
  switch(action.type) {
    case ADD_CARD: {
      const { addedCard } = action
      return {
        ...cards,
        [addedCard.id]: addedCard,
      }
    }
    default:
      return cards
  }
}

export const getCardsFromDeck = (deckId, cards) => (
  Object.keys(cards)
    .filter(id => cards[id].parentId === deckId)
    .map(id => cards[id])
)

export const addCard = (parentId, question, answer) => ({ 
  type: ADD_CARD, 
  addedCard: { 
    id: uuid(),
    parentId,
    question,
    answer,
  }
})