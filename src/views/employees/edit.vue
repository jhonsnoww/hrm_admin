<template>
  <div>
    <template>
      <h3>Edit Employee</h3>
      <label for>Name</label>
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="email" placeholder="email" />
      <button @click="editEmployee">Edit</button>
    </template>
    <template>Loading ....</template>
  </div>
</template>
<script>
import store from "@/store";
export default {
  computed: {
    employee() {
      return store.getters.getEmployee;
    }
  },
  created() {
    store.dispatch("getEmployee", this.$route.params.id);
  },

  methods: {
    editEmployee() {
      store.dispatch("getEmployee");
    }
  },

  data() {
    return {
      // name: null,
      // email: null,
      id: null
    };
  }
};
</script>

<style>
</style>