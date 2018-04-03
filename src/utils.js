const todayDate = () => {
  const date = new Date(Date.now())
  return {
    day: date.getDate(),
    month: date.getMonth() + 1, // getMonth() is 0-based
    year: date.getFullYear()
  }
}

const isToday = ({ year, month, day }) => {
  const today = todayDate()
  return year === today.year && month === today.month && day === today.day 
}