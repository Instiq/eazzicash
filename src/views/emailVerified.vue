<template>
  <div class="container">
 
      <div class="jumbotron">
         <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div> 
          <div class="container mt-n3">
            <p class="text-center" style="font-size:50px"> 🎉</p>
            <p class="h3 text-center" v-if="path!='verifyEmail'">Email Verified</p>
            <p class="h3 text-center" v-if="path=='verifyEmail'" >Email  already  Verified</p>
            <p class="text-center">Congratulations! Your email has been successfully verified.</p>
            <p class="text-center"><a href="/signin"><button class="btn btn-primary h4 p-3"> <i class="fas fa-arrow-left" style="font-size:16px"></i>  <span class="h6 ml-2">Back to Login</span></button></a> </p>
          </div>
      </div>

  </div>
</template>

<script>
export default {
 name:'emailVerified',
  computed : {
   path () {
     return this.$route.query.path
   }
 }
}
</script>

<style>

</style>