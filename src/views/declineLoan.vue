<template>
  <div class="container">
      <div class="jumbotron">
            <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
            <p class="text-center"> Reason for Rejection  <span class="text-danger">*</span></p> 
            <div class="form-row">

                <div class="col-md-3"></div>

                <div class="col-md-6">
                    <form @submit.prevent = 'declineGuarantor'>
                        <textarea style="background:whitesmoke" required v-model="rejectionReason" v-validate="'required'"  name="Loanpurpose" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <p class="text-center mt-4"> <button  type="submit" class="btn btn-danger"><span class="h6">Confirm Rejection</span></button> </p>
                    </form>
                </div>

                <div class="col-md-3"></div>
               
               
                <!-- <div class="mt-3" >
                        <i v-show="errors.has('Loanpurpose')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                        <span class="text-warning" v-show="errors.has('Loanpurpose')">{{ errors.first('Loanpurpose') }}</span>
                </div> -->
                  
            </div>
        </div>
        
     
  </div>
</template>

<script>
export default {
name:"getToken",
 computed : {
     loanToken () {
         return this.$route.query.token
     },
     guarantorId () {
         return this.$route.query.guarantorId
     }
 },

methods : {
    declineGuarantor () {
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('declineGuarantor')
    }
}
}
</script>

<style>

</style>