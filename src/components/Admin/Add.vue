<template>
  <div class="container">
    <h1> 
      Add candidates and voters
    </h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <div class="well">
          <p class="lead">Add Candidate</p>
          <input type="text" class="form-control" placeholder="Name" v-model="candidate.name" />
          <br>
          <input type="text" class="form-control" placeholder="Party" v-model="candidate.party" />     
          <br>
          <button class="btn btn-success btn-sm" v-on:click="submitCandidate">Submit</button>     
        </div>
      </div>
      <div class="col-md-6">
        <div class="well">
          <p class="lead">Add Voter</p>
          <input type="text" class="form-control" placeholder="Name" v-model="voter.name" />
          <input type="text" class="form-control" placeholder="Address" v-model="voter.address" />
          <input type="text" class="form-control" placeholder="Date Of Birth" v-model="voter.dob" />
          <br>
          <button class="btn btn-success btn-sm" v-on:click="submitVoter">Submit</button>
        </div>
        <div class="voter-card" v-if="voter.hash">
          <VueQrcode :value="voter.hash" :options="{ size: 50 }"></VueQrcode>
          <br>
          <label>Voter Id: </label> {{voter.id}}
          <br>
          <label>Name: </label> {{voter.name}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VueQrcode from '@xkeshi/vue-qrcode'
export default {
  name: 'Add',
  components: {VueQrcode},
  data () {
    return {
      voter: {
        name: null,
        address: null,
        dob: null,
        hash: '',
      },
      candidate: {
        id: null,
        name: null,
        party: null
      }
    }
  },

  methods:{
    submitVoter(){
      if(this.voter.name.length > 0){
        this.voter.hash = this.voter.name;
        this.$contract.addVoter(this.random(1000, 10000));
      }      
    },

    submitCandidate(){
      this.candidate.id = this.random(1000, 10000);
      this.$contract.addCandidate(1, "asdasd", "asdasd");
    },

    random(min, max){
	    return Math.floor(Math.random() * (max - min + 1)) + min;	
	  }
  },

  created: function(){

  }

}
</script>

<style scoped>
  .voter-card{
    background-color: whitesmoke;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
    width: 400px;
    height: 200px;
    padding: 5px;
  }
</style>
