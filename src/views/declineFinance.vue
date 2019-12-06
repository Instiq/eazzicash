<template>
  <div class="container">
      <div class="jumbotron-fluid">
            <div class="mt-5 mb-3" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
       
            
         <section class="container table" style="width:70%">
            <reviewLoan/>
        </section>

            <p class="text-center"> Reason for Rejection  <span class="text-danger">*</span></p> 
            <div class="form-row">

                <div class="col-md-3"></div>

                <div class="col-md-6">
                    <form @submit.prevent = 'declineGuarantor'>
                        <textarea style="background:whitesmoke" required v-model="rejectionReason"  name="Loanpurpose" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <p class="text-center mt-4"> <button  type="submit" class="btn btn-danger"><span class="h6">Confirm Rejection <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></span></button> </p>
                    </form>
                </div>

                <div class="col-md-3"></div>
                  
            </div>
        </div>
        
     
  </div>
</template>

<script>
import {mdbTbl, mdbTblHead, mdbTblBody,} from 'mdbvue';
import reviewLoan from '../components/reviewLoanDetails.vue';


export default {
name:"declineLoan",
 components:{
     mdbTbl,
     mdbTblHead,
     mdbTblBody,
     reviewLoan
 },
 data () {
     return {
         isLoading:false,
         rejectionReason:""
     }
 },
 computed : {
     loanToken () {
         return this.$route.query.token
     },
     guarantorId () {
         return this.$route.query.guarantorId
     },
      loanId () {
         return this.$route.query.financeId
     },
     financeDetailsOne () {
         return this.$store.state.loanDetailsOne
     },
 },

methods : {
    declineGuarantor () {
        this.isLoading = true
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('declineFinanceGuarantor', this.rejectionReason)
        .then(_ => this.isLoading = false)
        .catch(_ => this.isLoading = false)
    },
    //function to format loan amount
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
},
mounted () {
    this.$store.commit('setLoanId', this.loanId);
    this.$store.dispatch('getFinanceDetailsOne');
}
}
</script>

<style scoped>
 @media (max-width:576px){
   .table {
     margin:0 20px
 }
}
</style>