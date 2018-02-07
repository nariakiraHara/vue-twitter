<template>
  <div class="timeLine">
    <div class="contents"
    v-for="(listContent, index) in listContents"
    :index="index"
    :key="listContent.id">
        {{listContent.data().userName}}<br><br>
        {{listContent.data().content}}

        <div class="userOperation" v-if="listContent.data().userId == userInfo.uid">
           <router-link 
           id="edit"
           :to="{ name: 'Edit', params: { id: listContent.id, content: listContent.data().content}}">編集</router-link>
           <el-button id="edit" type="plain" v-on:click="deleteTweet">削除</el-button>
        </div>
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
      userInfo: []
    }
  },
  created: function() {
    authenticateUser().then((userInfo) => {
      this.userInfo = userInfo
    })
    firebase.firestore().collection("Tweets").get().then((querySnapshot) => {
      this.listContents = querySnapshot.docs
    })
  },
  methods: {
    newTweet: function() {
      router.push({name:'New'})
    },
    deleteTweet: function() {

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
    height: 400px;
    border: solid 1px;
  }
  .userOperation {
    margin-top: 290px;
    text-align: right;
    width: 400px;
    border: solid 1px;
  }
  #edit {
    display: inline;
  }
</style>
