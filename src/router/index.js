import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Euler from "../views/Euler";
import Dnumeric from "../views/Dnumeric";
import Newton from "../views/Newton";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dnumeric',
    name: 'Dnumeric',
    component:Dnumeric
  },
  {
    path: '/euler',
    name: 'Euler',
    component:Euler
  },
  {
    path: '/newton',
    name: 'Newton',
    component:Newton
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/not-found",
    name:"NotFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
