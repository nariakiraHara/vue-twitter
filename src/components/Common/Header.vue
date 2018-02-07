<template>
  <div class="header">
    <el-menu
      id="menu"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import router from '../../router'

  export default {
    data() {
      return {
        activeIndex2: '1'
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
  .header {
    background-color: #409EFF;
  }
  #menu {
    background-color: #409EFF;
    color: #fff;
  }
</style>
