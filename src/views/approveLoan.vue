<template>
 <div class="container mt-3" style="background:whitesmoke; border:2px solid grey; border-radius:5px">
     <div class="jumbotron-fluid">
        <div class="mt-md-5 mb-3" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
            <section class="container" style="width:80%">
                <guarantor class="mb-3" :isLoading='isLoading' message="Guarantor Details" @guarantorInputs="approveGuarantor"/>


                <!-- this code doesnt do anything, i dont understand why if i remove it, the page rendering scatters  -->
                <tr class="d-none" >
                    <td> <span style="font-weight:normal">&#8358;{{formatAmount(loanDetailsOne.loanAmount)}} </span></td>
                </tr>     
             </section>
     </div>
 </div>
  
</template>

<script>
import {mdbTbl, mdbTblHead, mdbTblBody,} from 'mdbvue';
import guarantor from '../components/guarantorDetails.vue';

export default {
 name:"approveLoan",
 components:{
     mdbTbl,
     mdbTblHead,
     mdbTblBody,
     guarantor,
 },

data () {
     return {
         isLoading : false
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
         return this.$route.query.loanId
     },
     loanDetailsOne () {
         return this.$store.state.loanDetailsOne
     },
 },

methods : {
    
    approveGuarantor (data) {
        this.isLoading = true
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('approveLoanGuarantor', data)
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
    this.$store.dispatch('getLoanDetailsOne');
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