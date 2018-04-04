import { Permissions, Notifications } from 'expo'

export const scheduleNextNotification = async function () {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)

  if (status === 'granted') {
    let today = new Date()
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 20, 0)
    
    await Notifications.cancelAllScheduledNotificationsAsync()
    await Notifications.scheduleLocalNotificationAsync(
      createNotification(), {
      time: tomorrow,
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


