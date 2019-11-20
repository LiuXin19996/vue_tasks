import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from "../views/TodoList";
import Login from "../views/Login";
import * as process from "shelljs";


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'登录页',
    component:Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:'/todo999',
    name:'todo',
    component: TodoList
  },
  {

    path: '/card789',
    name:'cardList',
    component:function ( ) {

      return import('../views/CardList.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
