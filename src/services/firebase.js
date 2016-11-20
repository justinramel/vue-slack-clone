import Firebase from 'firebase'
import config from './firebase-config'

export const fb = Firebase.initializeApp(config)
export const db = fb.database()
export const table = (name) => db.ref(name)
export const messages = table('messages')
export const sendMessage = (message) => messages.push(message)
export const subscribeMessages = (cb) => {
  messages.on('child_added', data => {
    cb({
      id: data.key,
      user: data.val().user || {username: 'Anon'},
      content: data.val().content,
      date: data.val().date ? new Date(data.val().date).getTime() : Date.now()
    })
  })
}
export const login = (email, password, callback, errorCallback) => {
  fb.auth().onAuthStateChanged((user, x, y) => {
    callback(user)
  })

  fb.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      errorCallback(error)
    })
}
export const logout = () => {
  fb.auth().signOut()
}
