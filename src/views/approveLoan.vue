<template>
 <div class="container">
     <div class="jumbotron-fluid">
        <div class="mt-sm-n5 mb-3 mb-sm-0" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>

         <section class="container table" style="width:70%">
             <h4 class="text-center mb-3 mb-sm-0">Review Loan Details</h4>
                <mdb-tbl striped bordered>
                    <mdb-tbl-head>
                        <tr>
                            <th>S/N</th>
                            <th class="font-weight-bold h6">Type</th>
                            <th class="font-weight-bold h6">Value</th>
                        </tr>
                    </mdb-tbl-head>
                     
                    <mdb-tbl-body scope="row" >
                        <tr >
                            <td>1</td>
                            <td>Name</td>
                            <td>{{loanDetailsOne.userId.firstName}} {{loanDetailsOne.userId.lastName}}</td>
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>Email</td>
                            <td>{{loanDetailsOne.userId.email}}</td>
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>Loan Amount</td>
                            <td> <span style="font-weight:normal">&#8358;{{formatAmount(loanDetailsOne.loanAmount)}} </span></td>
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>Loan Tenor</td>
                            <td>{{loanDetailsOne.loanTenor}}</td>
                        </tr>
                        <tr >
                            <td>5</td>
                            <td>Indebtedness</td>
                            <td>{{loanDetailsOne.indebtedness}}</td>
                        </tr>
                    </mdb-tbl-body>
                </mdb-tbl>
        </section>




         <p class="text-center"> <button class="btn btn-success" @click="approveGuarantor" ><span class="h6">Confirm Approval</span></button></p>
     </div>
   

 </div>
  
</template>

<script>
import {mdbTbl, mdbTblHead, mdbTblBody,} from 'mdbvue'
export default {
 name:"approveLoan",
 components:{
     mdbTbl,
     mdbTblHead,
     mdbTblBody,
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
    approveGuarantor () {
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('approveLoanGuarantor')
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