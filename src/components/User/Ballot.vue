<template>
  <div class="container center">
    <br>
    <p class="lead">Voter id: {{voterId}}</p>
    <div class="ballot-paper">
      <div v-for="(c, i) in candidates" :key="i" v-on:click="selectCandidate(i)"
        :class="((c.selected === true)?'ballot-candidate ballot-candidate-selected':'ballot-candidate')">
        <img class="party-logo" :src="'static/images/'+ c.party + '.png'" />
      </div>
    </div>
    <br><br>
    <button class="btn btn-success btn-lg" v-on:click="submitVote">Submit Vote</button>
  </div>
</template>

<script>
export default {
  name: 'Ballot',
  data () {
    return {
      voterId: 34534534,
      candidates: [
        {
          id: '',
          party: 'amalay',
          selected: false,
        },
        {
          id: '',
          party: 'congress',
          selected: false,
        },
        {
          id: '',
          party: 'maoist',
          selected: false,
        },
        {
          id: '',
          party: 'janata',
          selected: false,
        },
        {
          id: '',
          party: 'nayashakti',
          selected: false,
        },
        {
          id: '',
          party: 'prajatantra',
          selected: false,
        }
      ]
    }
  },

  methods:{
    selectCandidate(index){
      for(var i=0; i<this.candidates.length; i++) this.candidates[i].selected = false;
      this.candidates[index].selected = true;
    },

    submitVote(){
      //if success
      this.$router.push('/');
    }
  },

  created: function(){    

    var candidates = this.$contract.getAllCandidates();
    candidates = candidates.map(function(c){
      return c.c[0];
    })
    console.log(candidates);
  }

}
</script>

<style scoped>
  .ballot-paper{
    width: 500px;
    height: 300px;
    padding: 10px;
    border-radius: 5px;
    background-color: whitesmoke;
    margin: 0 auto;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
  }

  .ballot-candidate{
    width: 95px;
    height: 95px;
    margin: 2px;
    float: left;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
    background-color: white;
    background-size: cover;
    cursor: pointer;
  }

  .ballot-candidate:hover{
    background-image: url("/static/images/swastik.png");  
  }

  .ballot-candidate-selected{
    background-image: url("/static/images/swastik.png");
  }

  .party-logo{
    height: 50%;
    width: 50%;
  }


</style>
