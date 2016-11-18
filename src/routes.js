import Chat from './Chat'
import Login from './Login'
import UserStore from './store/user'

export default [
  {path: '/', name: 'chat', component: Chat, meta: {requiresAuth: true}},
  {path: '/login', name: 'login', component: Login}
]

export const configure = (router) => {
  router.beforeEach(function (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (UserStore.isAuthenticated()) {
        next()
      } else {
        next({path: '/login', query: {redirect: to.fullPath}})
      }
    } else {
      next() // make sure to always call next()!
    }
  })
}
