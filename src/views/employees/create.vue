<template>
  <div>
   <h3>Create Employee</h3>
   <label for="">Name</label>
   <input type="text" name="" v-model="name" id="" placeholder="Name">
   <input type="text" name="" v-model="email" id="" placeholder="email">
   <button  @click="createEmployee">Create</button>
  </div>
</template>

<script>
import store from '@/store'
export default {

methods:{
  createEmployee(){
        store.dispatch("getEmployee")
  }
},
  
  data(){
    return {
        name:null,
        email:null,
        id:null 
    }

    
  }

}
</script>

<style>

</style>