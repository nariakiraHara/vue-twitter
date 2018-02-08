<template>
  <div class="editTweet">
    <p>ツイートの編集</p>
    <el-input type="textarea"
    :rows="10"
    placeholder="今あることをつぶやいてみよう"
    v-model="content">
    </el-input><br><br>
    <el-button type="primary" v-on:click="onSubmit">修正</el-button>
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
      tweet: [],
      content: ''
    }
  },
  created: function() {
    firebase.firestore().collection("Tweets").doc(this.$route.params.id).get().then((snapshot) => {
      this.tweet = snapshot
      this.content = this.tweet.data().content
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onSubmit: function() {
      firebase.firestore().collection("Tweets").doc(this.$route.params.id).update({
        content: this.content,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then((success) => {
        this.content = ''
        router.push({name: "Index"})
      })
    }
  }
}
</script>
<style>
  .editTweet {
    margin: 0 auto;
    width: 600px;
  }
</style>
