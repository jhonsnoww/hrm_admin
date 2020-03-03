import VueRouter from 'vue-router'
import Home from '@/views/index.vue'
import Employees from '@/views/employees/index.vue'
import Create from '@/views/employees/create.vue'
import Edit from '@/views/employees/edit.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {path:"/",component:Home},
    {path:"/employees",component:Employees},
    {path:"/employees/create",component:Create},
    {path:"/employees/:id/edit",name:'EmployeeEditForm',component:Edit},
  ]
  const router = new VueRouter({
    routes
  })
export default router;  