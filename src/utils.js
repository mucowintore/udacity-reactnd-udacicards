import { Permissions, Notifications } from 'expo'

export async function scheduleNextNotification () {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)

  if (status === 'granted') {
    let nextDay = new Date()
    nextDay.setDate(nextDay.getDate() + 1)
    nextDay.setHours(20)
    nextDay.setMinutes(0)

    await Notifications.cancelAllScheduledNotificationsAsync()
    await Notifications.scheduleLocalNotificationAsync(
      createNotification(), {
      time: nextDay,
      repeat: 'day'
    })
  }
}

const createNotification = () => ({
  title: `Quiz Time!`,
  body: `Don't forget to review your decks today!`,
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',

    sticky: false,
    vibrate: true,
  }
})


