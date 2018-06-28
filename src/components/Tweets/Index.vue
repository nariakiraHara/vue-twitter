<template>
  <div class="timeLine">
    <div class="contents"
    v-for="tweet in tweets"
    :key="tweet.id">
      <p>{{tweet.data().userName}}</p>
      <br><br>
      <p>{{tweet.data().content}}</p>
      <div class="operation" v-if="tweet.data().userId == user.uid">
          <router-link 
          id="edit"
          :to="{ name: 'TweetEdit', params: { id: tweet.id}}">編集</router-link>
          <a v-on:click="deleteTweet(tweet.id)">削除</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseApp from '../../firebaseApp.js'
import authenticateUser from '../../auth.js'
import router from '../../router'
export default {
  name: 'timeLine',
  data () {
    return {
      tweets: [],
      user: []
    }
  },
  created: function() {
    authenticateUser().then((userInfo) => {
      this.user = userInfo
    })
    firebase.firestore().collection("Tweets").orderBy("updatedAt", "desc").get().then((querySnapshot) => {
      this.tweets = querySnapshot.docs
    })
  },
  methods: {
    deleteTweet: function(tweetId) {
      this.$confirm('削除してもよろしいですか', '削除', {
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ',
        type: 'warning'
      }).then(() => {
        firebase.firestore().collection("Tweets").doc(tweetId).delete().then(function() {
          location.reload()
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .timeLine {
    margin: 0 auto;
    width: 250px;
  }
  .contents {
    margin: 0 auto;
    width: 400px;
    height: 200px;
    border: solid 1px;
  }
  .operation {
    text-align: right;
    text-decoration: overline;
  }
</style>
