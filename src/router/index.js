import Vue from 'vue'
import Router from 'vue-router'
import EgoHome from '@/components/EgoHome'
import BaseMessages from '@/components/base/Messages'
import BaseProfile from '@/components/base/Profile'
import BaseExplore from '@/components/base/Explore'
import BaseHistory from '@/components/base/History'
import AccountLogin from '@/components/account/Login'
import AccountSignup from '@/components/account/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'EgoHome',
      component: EgoHome
    },
    {
      path: '/base/messages',
      name: 'BaseMessages',
      component: BaseMessages
    },
    {
      path: '/base/profile',
      name: 'BaseProfile',
      component: BaseProfile
    },
    {
      path: '/base/explore',
      name: 'BaseExplore',
      component: BaseExplore
    },
    {
      path: '/base/history',
      name: 'BaseHistory',
      component: BaseHistory
    },
    {
      path: '/account/login',
      name: 'AccountLogin',
      component: AccountLogin
    },
    {
      path: '/account/signup',
      name: 'AccountSignup',
      component: AccountSignup
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
