import Vue from 'vue'

import App from '@/App.vue'

import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '@/views/TodoList.vue'
import TodosIssues from '@/views/TodosIssues.vue'
import IssueList from '@/views/IssueList.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// ElementUI.
Vue.use(ElementUI);

new Vue({
  VueRouter,
  render: h => h(App)
}).$mount('#app')



Vue.use(VueRouter)
/* 
        <router-link to="/">Home</router-link> |
        <router-link to="/todo-list">TodoLists</router-link> |
        <router-link to="/issue-list">IssueList</router-link>|
        <router-link to="/todos-issues">TodosIssues</router-link> 
 */


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TodoList
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TodosIssues
  }, 
  {
    path: '/issue-list',
    name: 'IssueList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: IssueList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
