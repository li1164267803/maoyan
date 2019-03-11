import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home/Home'
import Homeshang from 'pages/Home-shang/Home-shang'
import Moive from 'pages/Moive/Moive'
import My from 'pages/My/My'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',name: 'Home',component: Home},
    {path: '/homeshang',name: 'Homeshang',component: Homeshang},
    {path: '/moive',name: 'Moive',component: Moive},
    {path: '/my',name: 'My',component: My},

    {path: '/',redirect:'/homere'},
    {path: '**',component:Home},
  ]
})
