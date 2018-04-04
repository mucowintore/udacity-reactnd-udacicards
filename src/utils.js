import { Permissions, Notifications } from 'expo'

export async function scheduleNextNotification () {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)

  if (status === 'granted') {
    let nextTime = new Date()
    nextTime.setDate(nextTime.getDate() + 1)
    nextTime.setHours(20)
    nextTime.setMinutes(0)

    await Notifications.cancelAllScheduledNotificationsAsync()
    await Notifications.scheduleLocalNotificationAsync(
      createNotification(), {
      time: nextTime,
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


