<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
            <p class="lead">List of candidates</p>
            <!-- Here goes the list of candidate with name, votes Count and party logo -->
        </div>
        <div class="col-md-6">
            <!-- End time, Total votes casted, Total Voters, Remaining voters -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  components: {},
  data() {
    return {};
  },

  methods: {
  },

  created: function() {   

    var candidates = this.$contract.getAllCandidates();
    var self = this;
    candidates = candidates.map(function(c){
      var id = c.c[0];
      var candidate = self.$contract.getCandidate(id);
      return candidate;
    })
    console.log(candidates);


  }

};
</script>

<style scoped>

</style>
