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
        <input
          class="user-menu-username input-box-text"
          type="text"
          placeholder="Username"
          v-model="UserStore.state.username">
        </input>
      </div>
    </div>
  </div>
</template>

<script>
import InputBar from './components/InputBar'
import Messages from './components/Messages'
import MessageStore from './store/messages'
import UserStore from './store/user'

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
  created () {
    MessageStore.subscribeMessages()
  }
}
</script>

<style></style>
