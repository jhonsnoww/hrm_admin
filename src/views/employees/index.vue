<template>
  <div>
    <h3> Employee List</h3>
    <table>
      <thead>
           <th>Id</th>
            <th>Name</th>
            <th>Email</th>
           <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{item.id}} </td>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>
            <button @click="onDelete">Delete</button> :
            <router-link :to="{name:'EmployeeEditForm',params:{id:item.id}}> Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '@/store'
export default {
computed:{
  items(){
    return store.getters.employees;
  }
},
    created:function(){
    this.getEmployees();
    },
      methods:{
        getEmployees(){
          store.dispatch("getEmployees")
        },
        onDelete(id){
          store.dispatch("deleteEmployee",id)
        }
      }
      }
</script>

<style>

</style>