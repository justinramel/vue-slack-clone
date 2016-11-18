import {router} from '../main'

export default {
  state: {
    errorMessage: null,
    username: null
  },
  login (username, password) {
    this.state.username = username
    router.push({name: 'chat'})
  },
  isAuthenticated () {
    return Boolean(this.state.username)
  }
}
