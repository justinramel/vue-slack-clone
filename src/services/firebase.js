import Firebase from 'firebase'
import config from './firebase-config'

export const fb = Firebase.initializeApp(config)
export const db = fb.database()
export const table = function (name) {
  return db.ref(name)
}

export const messages = table('messages')
export const sendMessage = (message) => messages.push(message)
export const subscribeMessages = (cb) => {
  messages.on('child_added', (data, d2, d3) => {
    cb({
      id: data.key,
      content: data.val().content,
      date: data.val().date ? new Date(data.val().date).getTime() : Date.now()
    })
  })
}
