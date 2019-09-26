<template>
  <div class="container">
      <div class="jumbotron-fluid">
            <div class="mt-sm-n5 mb-3 mb-sm-0" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
       
            
         <section class="container table" style="width:70%">
             <h4 class="text-center mb-3">Review Finance Details</h4>
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
                            <td>{{financeDetailsOne.userId.firstName}} {{financeDetailsOne.userId.lastName}}</td>
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>Email</td>
                            <td>{{financeDetailsOne.userId.email}}</td>
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>Finance Amount</td>
                            <td> <span style="font-weight:normal">&#8358;{{formatAmount(financeDetailsOne.financeAmount)}} </span></td>
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>Finance Tenor</td>
                            <td>{{financeDetailsOne.financeTenor}}</td>
                        </tr>
                        <tr >
                            <td>5</td>
                            <td>Indebtedness</td>
                            <td>{{financeDetailsOne.indebtedness}}</td>
                        </tr>
                    </mdb-tbl-body>
                </mdb-tbl>
        </section>



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
import {mdbTbl, mdbTblHead, mdbTblBody,} from 'mdbvue'
export default {
name:"declineLoan",
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
         return this.$route.query.financeId
     },
     financeDetailsOne () {
         return this.$store.state.loanDetailsOne
     },
 },

methods : {
    declineGuarantor () {
        this.$store.commit('setLoanToken', this.loanToken);
        this.$store.commit('setGuarantorId', this.guarantorId);
        this.$store.dispatch('declineFinanceGuarantor')
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