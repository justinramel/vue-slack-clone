<template>
  <div class="buttom-input">
    <div class="input-box">
      <input
        type="text"
        class="input-box-text"
        placeholder="New message"
        @keyup.enter="onEnter"
        v-model="newMessage" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['currentUser'],
    data () {
      return {
        newMessage: null
      }
    },
    methods: {
      onEnter () {
        if (this.newMessage.length > 0) {
          this.$emit('sendMessage', this.newMessage, this.currentUser)
          this.newMessage = null
        }
      }
    }
  }
</script>
