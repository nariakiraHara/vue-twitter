import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Tweets/Index'
import TweetNew from '@/components/Tweets/New'
import TweetEdit from '@/components/Tweets/Edit'

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
      name: 'TweetNew',
      component: TweetNew
    },
    {
      path: '/tweets/:id/edit',
      name: 'TweetEdit',
      component: TweetEdit
    }
  ]
})
