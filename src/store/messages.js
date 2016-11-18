// import {sendMessage, subscribeMessages} from '../services/kuzzle'
import {sendMessage, subscribeMessages} from '../services/firebase'

export default {
  state: {
    messages: []
  },
  sendMessage (content, user) {
    const message = {content, user, date: Date.now()}
    sendMessage(message)
  },
  subscribeMessages () {
    subscribeMessages(data => {
      this.state.messages.push(data)
    })
  }
}
