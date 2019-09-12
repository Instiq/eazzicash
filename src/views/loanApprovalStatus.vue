<template>
  <div class="container">
     <div class="jumbotron">
        <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
         <p  v-if="path=='approveLoan'|| path=='declineLoan'" style="font-size:50px" class="text-center"> 🎉 </p>
        <p v-if="path=='approveLoan'" class="text-center h5"> Approval Success </p>
        <p v-if="path=='declineLoan'" class="text-center h5">Declined Successfully </p>
         <p v-if="path=='404'" class="text-center h5"> 404!<br> Request not found </p>
     </div>


  </div>
</template>

<script>
export default {
    name:"loanApprovalStatus",
    computed : {
       path () {
          return this.$route.query.path
       }
    }

}
</script>

<style>

</style>