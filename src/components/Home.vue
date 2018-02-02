<template>
  <div class="container center">
    
    <h1> General Election Nepal, 2073 </h1>
    <br>
    <hr>

    <div id="clock"></div>

    <br>

    <p class="lead">
      <label>{{numVotes}}</label> of  <label>{{numVoters}}</label> have already voted.
    </p>

    <p class="lead">Choose and vote for any of the party you like.</p>

    <router-link class="btn btn-success btn-lg" to="/auth">Cast your Vote</router-link>
  
  </div>
</template>

<script> 
export default {
  name: "Home",
  data() {
    return {
      numVoters: 5679,
      numVotes: 0,
      endTime:213123123123,
      message: "",
      messageInput: ""
    };
  },

  methods: {
    setMessage(msg){
      // this.$contract.setMessage(msg);
    }
  },

  created: function() {
    console.log(this.$contract);
    this.$web3.eth.defaultAccount = this.$web3.eth.accounts[1];

    //total number of voters
    this.numVoters = this.$contract.totalVoters().c[0];

    //total number of votes
    this.numVotes = this.$contract.totalVotes().c[0];

    var votedEvt = this.$contract.Voted();
    var self = this;
    votedEvt.watch(function(error, result){
      if(error) console.log(error);
      else{
        console.log(result.args.total.c[0]);
      }
    });


    
    // var evt = this.$contract.MsgEvent();
    // var self = this;
    // evt.watch(function(error, result){
    //   if(error) console.log(error);
    //   else{
    //     console.log(result.args.message);
    //     // console.log();
    //   }
    // });

    // this.setMessage("Hello");
    

    // var clock = $(this.$refs.clock).FlipClock(3600*24*10, {
    //     countdown: true,
    //     clockFace: 'Counter',
		// 		autoStart: true
    // });


  },

  mounted(){
    var clock = $('#clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: function() {
            $('.message').html('The clock has stopped!')
          }
        }
    });
        
    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();
  }
};
</script>

<style scoped>
  #clock{
    width: 650px;
    margin: 0 auto !important;
    transform-origin: 0 0;
    transform: scale(.75);
    /* -ms-transform: scale(.25);
    -webkit-transform-origin: 0 0;
    -webkit-transform: scale(.25);
    -o-transform-origin: 0 0;
    -o-transform: scale(.25);
    -moz-transform-origin: 0 0;
    -moz-transform: scale(.25); */
  }
</style>