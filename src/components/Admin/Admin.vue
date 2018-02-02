<template>
  <div class="container">
    <h1> 
      Admin Panel
    </h1>
    <hr>

    <router-link to="/admin/add" class="btn btn-primary"> Add candidate and voters </router-link>
    <br><br><br>
    <router-link to="/admin/stats" class="btn btn-primary"> View Election Stats </router-link>

  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {}
  },

  methods:{
   
  },

  created: function(){

  }

}
</script>

<style scoped>

</style>
