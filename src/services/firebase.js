import Firebase from 'firebase'
import config from './firebase-config'

export const fb = Firebase.initializeApp(config)
export const auth = fb.auth()
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
  auth.onAuthStateChanged(callback)
  auth.signInWithEmailAndPassword(email, password)
    .catch(errorCallback)
}
export const logout = () => auth.signOut()
