<template>
  <div class="container">
 
      <div class="jumbotron">
        <div class="mt-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
         <p class="text-center" ><img class="img-fluid" style="height:10vh" src="../assets/email.svg" alt=""></p> 
          <p class="text-center h5" v-if="path=='signup'" >A verification email has been sent to you. Kindly check your inbox.</p>
           <p class="text-center h5" v-if="path=='signin'" >Kindly verify your email to continue</p>
          <p class="text-center h5" v-if="path=='getToken'" >Click the link below to resend verification email</p>
         <p class="text-center"><button  @click="resendVerificationEmail" class="btn btn-primary text-center">Resend verification</button></p> 
      </div>

  </div>
</template>

<script>
export default {
 name:'verifyEmail',
 methods : {
   resendVerificationEmail () {
     this.$store.dispatch('resendEmailVerification')
   }
 },
 computed : {
   path () {
     return this.$route.query.path
   }
 }
 
 
}
</script>

<style>

</style>