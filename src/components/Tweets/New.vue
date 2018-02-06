<template>
  <div class="newTweet">
    <p>自分の今の状況をつぶやいてみよう</p>
    <el-input type="textarea"
    :rows="5"
    placeholder="今あることをつぶやいてみよう"
    v-model="content">
    </el-input><br><br>
    <el-button type="primary" v-on:click="tweet">ツイート</el-button>
  </div>
</template>
<script>
import firebase from 'firebase'
import firebaseApp from '../../firebaseApp.js'
import authenticateUser from '../../auth.js'
export default {
  name: 'newTweet',
  data() {
    return {
      userInfo: [],
      content: ''
    }
  },
  created: function() {
    console.log(this.$moment().format('YYYY/MM/DD HH:mm:ss'))
    authenticateUser().then((userInfo) => {
      this.userInfo = userInfo
      console.log(this.userInfo.uid)
    })
  },
  methods: {
    tweet: function() {
      firebase.firestore().collection("Tweets").add({
        userId: this.userInfo.uid,
        userName: this.userInfo.displayName,
        content: this.content,
        registrationTime: this.$moment().format('YYYY/MM/DD HH:mm:ss'),
        lastUpdateTime: this.$moment().format('YYYY/MM/DD HH:mm:ss')
      }).then((success) => {
        console.log(success)
        this.content = ''
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
  .newTweet {
    margin: 0 auto;
    width: 600px;
  }
</style>
