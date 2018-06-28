<template>
  <div class="newTweet">
    <p>自分の今の状況をつぶやいてみよう</p>
    <el-input type="textarea"
    :rows="10"
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
import router from '../../router'
export default {
  name: 'newTweet',
  data() {
    return {
      user: [],
      content: ''
    }
  },
  created: function() {
    authenticateUser().then((userInfo) => {
      this.user = userInfo
    })
  },
  methods: {
    tweet: function() {
      firebase.firestore().collection("Tweets").add({
        userId: this.user.uid,
        userName: this.user.displayName,
        content: this.content,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then((success) => {
        this.content = ''
        router.push({name: "Index"})
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
