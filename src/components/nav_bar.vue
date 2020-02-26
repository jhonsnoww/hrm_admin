<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">HRM ADMIN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
           
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Employees
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div>
                <router-link class="nav-link" to="/employees">Employe List</router-link>
            </div>
         <div>
                <router-link class="nav-link" to="/employees/create">Add Employee</router-link>
         </div>
        
         
        </div>
      </li>
    
    </ul>
  
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>