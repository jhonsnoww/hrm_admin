<template>
  <div>
    <h3> Employee List</h3>
    <ul >
     <li v-for="item in items" :key="item.id">{{item.id}} : {{item.name}} : {{item.email}}</li>
    </ul>
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
  }
}
}
</script>

<style>

</style>