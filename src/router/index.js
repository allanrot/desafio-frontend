import Vue from 'vue'
import VueRouter from 'vue-router'
import ListUsers from '../views/ListUsers.vue'
import ShowUser from '../views/ShowUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'listUsers',
    component: ListUsers
  },
  {
    path: '/user/:id',
    name: 'showUser',
    component: ShowUser
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
