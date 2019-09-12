<template>
 <div class="container">
     <div class="jumbotron">
        <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
         <p class="text-center"> <button class="btn btn-success" @click="approveGuarantor" ><span class="h6">Confirm Approval</span></button></p>
     </div>
   

 </div>
  
</template>

<script>
export default {
 name:"approveLoan",
 computed : {
     loanToken () {
         return this.$route.query.token
     },
     guarantorId () {
         return this.$route.query.guarantorId
     }
 },

methods : {
    approveGuarantor () {
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('approveGuarantor')
    }
}
}
</script>

<style>

</style>