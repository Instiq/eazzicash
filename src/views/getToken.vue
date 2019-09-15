<template>
  <div class="container">
      <div class="jumbotron" v-if="isTokenExpired">
            <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
           <p class="text-center" ><img class="img-fluid" style="height:10vh" src="../assets/sad.svg" alt=""></p> 
           <p class="h4 text-center">Token Expired.. You will be redirected in {{count}} seconds</p>
      </div>
     
  </div>
</template>

<script>
export default {
name:"getToken",
data () {
    return {
        count : 5,
    }
},
 created () {
   // get query string parameter and commit to setEmailVerification mutation
    this.$store.commit('setEmailVerificationToken', this.$route.query.token);
    this.$store.dispatch('updateEmailVerification') 
},
methods : {
    timer () {
        this.count--
    }
},
computed : {
    isTokenExpired () {
       return this.$store.state.isTokenExpired
    }
},
watch : {
    isTokenExpired (newval) {
        if (newval) {
        setInterval(_ => this.timer(), 1000)
    }
    }
},

}
</script>

<style>

</style>