import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import page001 from '@/components/page001'
import page002 from '@/components/page002'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/page001',
      name: 'page001',
      component: page001
    },
    {
      path: '/page002',
      name: 'page002',
      component: page002
    }
  ]
})
