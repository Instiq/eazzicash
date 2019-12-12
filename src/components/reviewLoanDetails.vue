<template>
 <div class="" style="width:auto" >

             <span class="h5" v-if="currentRoute == 'approveLoan' || currentRoute == 'declineLoan'">Review Loan Details</span>
              <span class="h5" v-else>Review Finance Details</span>
                <div class="table-responsive">
                    <div class="table">
                        <mdb-tbl class="mt-5" striped bordered>
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
                                    <td v-if="currentRoute == 'approveLoan' || currentRoute == 'declineLoan'">Loan Amount</td>
                                    <td v-if="currentRoute == 'approveLoan' || currentRoute == 'declineLoan'"> <span style="font-weight:normal">&#8358;{{formatAmount(loanDetailsOne.loanAmount)}} </span></td>
                                    <td v-if="currentRoute == 'approveFinance' || currentRoute == 'declineFinance' ">Finance Amount</td>
                                    <td v-if="currentRoute == 'approveFinance' || currentRoute == 'declineFinance' "> <span style="font-weight:normal">&#8358;{{formatAmount(loanDetailsOne.financeAmount)}} </span></td>
                                </tr>
                                <tr >
                                    <td>4</td>
                                    <td v-if="currentRoute == 'approveLoan' || currentRoute == 'declineLoan'">Loan Tenor</td>
                                    <td v-if="currentRoute == 'approveLoan' || currentRoute == 'declineLoan'">{{loanDetailsOne.loanTenor}}</td>
                                    <td v-if="currentRoute == 'approveFinance' || currentRoute == 'declineFinance'">Finance Tenor</td>
                                    <td v-if="currentRoute == 'approveFinance' || currentRoute == 'declineFinance'">{{loanDetailsOne.financeTenor}}</td>
                                </tr>
                                <tr >
                                    <td>5</td>
                                    <td>Indebtedness</td>
                                    <td>{{loanDetailsOne.indebtedness}}</td>
                                </tr>
                            </mdb-tbl-body>
                        </mdb-tbl>
                    </div>
                </div>

 </div>
  
</template>

<script>
import {mdbTbl, mdbTblHead, mdbTblBody,} from 'mdbvue';


export default {
 name:"reviewLoanDetails",
 components:{
     mdbTbl,
     mdbTblHead,
     mdbTblBody,
 },

 computed : {
     loanDetailsOne () {
         return this.$store.state.loanDetailsOne
     },
     currentRoute () {
         return this.$router.currentRoute.name
     }
 },

methods : {
    //function to format loan amount
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
},
mounted () {
    console.log(this.currentRoute);
    
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