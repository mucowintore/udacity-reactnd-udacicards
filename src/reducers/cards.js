import uuid from 'uuid/v4'

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


const ADD_CARD = 'ADD_CARD'

export const addCard = (parentId, question, answer) => ({ 
  type: ADD_CARD, 
  addedCard: { 
    parentId,
    question,
    answer,
    id: uuid() 
  }
})