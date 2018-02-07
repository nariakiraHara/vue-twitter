import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Tweets/Index'
import New from '@/components/Tweets/New'
import Edit from '@/components/Tweets/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/tweets',
      name: 'New',
      component: New
    },
    {
      path: '/tweets/:id/editTweet',
      name: 'Edit',
      component: Edit
    }
  ]
})
