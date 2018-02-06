<template>
  <div id="app">
    <headerItem></headerItem>
    <router-view/>
  </div>
</template>

<script>
import headerItem from './components/Common/Header'

export default {
  name: 'App',
  components: {
    headerItem
  }
}
</script>

<style>

</style>
