<template>
  <div class="main">
    <div class="messages">
      <messages :messages="MessageStore.state.messages"></messages>
      <input-bar
        @sendMessage="MessageStore.sendMessage"
        :current-user="UserStore.state"></input-bar>
    </div>
    <div class="footer">
      <div class="user-menu">
        <span class="user-menu-username">
          {{UserStore.state.username}}
        </span>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputBar from './components/InputBar'
import Messages from './components/Messages'
import MessageStore from './store/messages'
import UserStore from './store/user'
import {router} from './main'

export default {
  data () {
    return {
      MessageStore,
      UserStore
    }
  },
  components: {
    InputBar,
    Messages
  },
  methods: {
    logout () {
      UserStore.logout()
      router.push({name: 'login'})
    }
  },
  created () {
    MessageStore.subscribeMessages()
  }
}
</script>

<style></style>
