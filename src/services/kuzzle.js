import Kuzzle from 'kuzzle-sdk'

export const kuzzle = new Kuzzle('localhost', {defaultIndex: 'klack'})

export const sendMessage = (message) => {
  kuzzle
    .dataCollectionFactory('messages')
    .createDocument(message)
}

export const subscribeMessages = (cb) => {
  kuzzle
    .dataCollectionFactory('messages')
    .subscribe({}, null, (error, notification) => {
      if (error) {
        console.log(error.message)
        return
      }
      cb({
        ...notification.result._source,
        id: notification.result._id
      })
    })
}
