<template>
  <div class="container center">
    <h1>Authentication</h1>
    <hr>
    
    <div v-if="useQR">      
      <qrcode-reader
        @init="onInit"
        facingMode= "user"
        @decode="onDecode"
        @locate="onLocate"
        :paused="qrReaderStatus"><
        </qrcode-reader>
    </div>
    <div v-else>
      <label>Voter Id</label>
      <br>
      <input type="text" class="form-control" v-model="voterId" placeholder="Enter your voter id" />
      <br>
      <button class="btn btn-success" v-on:click="authenticate">Submit</button>
    </div>
    <br>
    <br>
    <button class="btn btn-default btn-lg" v-on:click="useQR=true" v-if="!useQR">
      <span class="glyphicon glyphicon-qrcode"></span>&nbsp;&nbsp;Use QR Scanner
    </button>
  </div>
</template>

<script>
import { QrcodeReader } from "vue-qrcode-reader";
import InitHandler from '@/mixins/InitHandler'
export default {
  name: "Auth",
  components: { QrcodeReader },
  mixins: [ InitHandler ],
  data() {
    return {
      useQR: false,
      qrReaderStatus: false,
      voterId: null
    };
  },

  methods: {
    
    authenticate(content) {
      alert(content);
      var authCode = this.$contract.authenticateVoter();
      if(authCode == 0){
        this.$router.push("/ballot");
      }else if(authCode == 1){
        alert("You have already voted");
      }else if(authCode == 2){
        alert("Voter not registered");
      }

    },

    useQRScanner() {
      this.takePhoto = true;
    },

    onDecode(content) {
      this.voterId = content;
      this.qrReaderStatus = true;
      this.useQR = false;
      this.authenticate(content);
    },

    onLocate() {
      console.log("located");
    },

    async onInit(promise) {
      // show loading indicator

      try {
        await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          // user denied camera access permisson
        } else if (error.name === "NotFoundError") {
          // no suitable camera device installed
        } else if (error.name === "NotSupportedError") {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === "NotReadableError") {
          // maybe camera is already in use
        } else if (error.name === "OverconstrainedError") {
          // passed constraints don't match any camera. Did you requested the front camera although there is none?
        } else {
          // browser is probably lacking features (WebRTC, Canvas)
        }
      } finally {
        // hide loading indicator
      }
    }
  },

  created: function() {}
};
</script>

<style scoped>
.qrcam {
  width: 200px;
  height: 200px;
}
</style>
