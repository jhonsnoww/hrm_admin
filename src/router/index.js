import VueRouter from 'vue-router'
import Home from '@/views/index.vue'
import Employees from '@/views/employees/index.vue'
import Create from '@/views/employees/create.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {path:"/",component:Home},
    {path:"/employees",component:Employees},
    {path:"/employees/create",component:Create},
  ]
  const router = new VueRouter({
    routes
  })
export default router;  