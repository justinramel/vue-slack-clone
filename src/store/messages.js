import kuzzle from '../services/kuzzle'

export default {
  state: {
    messages: []
  },
  sendMessage (content) {
    const message = {content, date: Date.now()}
    kuzzle
      .dataCollectionFactory('messages')
      .createDocument(message)
  },
  subscribeMessages () {
    kuzzle
      .dataCollectionFactory('messages')
      .subscribe({}, null, (error, notification) => {
        if (error) {
          console.log(error.message)
          return
        }
        this.state.messages.push({
          ...notification.result._source,
          id: notification.result._id
        })
      })
  }
}
