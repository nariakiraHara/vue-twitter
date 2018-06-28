<template>
  <div class="headerIcon">
    <img id="tweetIcon" :src="require('../../assets/icon/tweet.png')">
    <a href="http://localhost:8080/#/tweets"><img id="newTweetIcon" :src="require('../../assets/icon/NewTweet.png')">
    </a>    
  </div>
</template>
<script>
import router from '../../router'

  export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    newTweet: function() {
      router.push({name:'New'})
    }
  }
</script>
<style>
  .headerIcon {
    text-align: center;
    background-color: #409EFF;
  }
  #tweetIcon {
    width: 60px;
    height: 60px;
  }
  #newTweetIcon {
    width: 50px;
    height: 50px;
  }
</style>
