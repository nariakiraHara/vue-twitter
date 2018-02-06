<template>
  <div class="timeLine">
    <div class="contents" v-for="listContent in listContents"
    :key="listContent.key">
        {{listContent.userName}}<br><br>
        {{listContent.content}}
    </div>
    <el-button type="primary" v-on:click="newTweet">ツイートする</el-button>
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
      listContents: [],
      userName: '',
      userInfo: [],
      userId: ''
    }
  },
  created: function() {
    authenticateUser().then((userInfo) => {
      this.userName = userInfo.displayName
      this.userId = userInfo.uid
      this.userInfo = userInfo
    })
    firebase.firestore().collection("Tweets").get().then((querySnapshot) => {
      // this.listContents = querySnapshot.docs
      console.log(querySnapshot.docs)
      querySnapshot.forEach((doc) => {
        this.listContents.push(doc.data())
      })
      console.log(this.listContents)
    })
  },
  methods: {
    newTweet: function() {
      router.push({name:'New'})
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
    width: 100px;
    height: 100px;
  }

</style>
