import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin/Admin'
import Add from '@/components/Admin/Add'
import Stats from '@/components/Admin/Stats'
import Ballot from '@/components/User/Ballot'
import Auth from '@/components/User/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:'home', component: Home },
    { path: '/auth', name:'auth', component: Auth },
    { path: '/ballot', name:'ballot', component: Ballot },
    { path: '/admin', name:'admin', component: Admin },       
    { path: '/admin/add', name:'add', component: Add },
    { path: '/admin/stats', name:'stats', component: Stats },          
  ]
})
