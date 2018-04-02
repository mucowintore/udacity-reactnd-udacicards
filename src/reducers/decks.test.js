import { getDeckIds } from './decks'

describe('Deck Reducer', () => {
  it('`getDeckIds`: returns an array containing the ids of all the decks in the store', () => {
    const decks = {
      '3b64075a-7e1b-4194-9d7f-40c4c3965244': {
        id: '3b64075a-7e1b-4194-9d7f-40c4c3965244',
        deckTitle: 'udaciFish',
        deckCardCount: 6,
      },
      '3b64075a-7e1b-4194-9d7g-40c4c3965244': {
        id: '3b64075a-7e1b-4194-9d7g-40c4c3965244',
        deckTitle: 'udaciCats',
        deckCardCount: 2,
      },
      '3b64075a-7e1b-4194-9d7a-40c4c3965244': {
        id: '3b64075a-7e1b-4194-9d7a-40c4c3965244',
        deckTitle: 'udaciDogs',
        deckCardCount: 8,
      },      
    }

    const expected = [
      '3b64075a-7e1b-4194-9d7f-40c4c3965244',
      '3b64075a-7e1b-4194-9d7g-40c4c3965244',
      '3b64075a-7e1b-4194-9d7a-40c4c3965244'
    ]
    expect(getDeckIds(decks)).toEqual(expected)
  })
})