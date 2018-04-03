const RECORD_QUIZ = 'RECORD_QUIZ'

export default function reducer(ui = {}, action) {
  switch(action.type) {
    case RECORD_QUIZ: {
      const { quizDate } = action
      return {
        ...ui,
        lastQuizDate: quizDate
      }
    }
    default:
      return ui
  }
}

export const recordQuiz = (quizDate) => ({
  type: RECORD_QUIZ,
  quizDate
})

