import {router} from '../main'
import {login, logout} from '../services/firebase'

export default {
  state: {
    errorMessage: null,
    username: null
  },
  login (email, password) {
    login(email, password, user => {
      this.state.errorMessage = null
      if (user) {
        this.state.username = user.email
        router.push({name: 'chat'})
      }
    }, error => {
      this.state.username = null
      this.state.errorMessage = error.message
    })
  },
  logout,
  isAuthenticated () {
    return Boolean(this.state.username)
  }
}
