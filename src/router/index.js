import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blogs from '../views/Blogs.vue'
import NewBlog from '../components/NewBlog.vue'
import MyBlogs from '../components/MyBlogs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    children: [
      { path: '/', component: NewBlog },
      { path: 'myblogs', component: MyBlogs }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
