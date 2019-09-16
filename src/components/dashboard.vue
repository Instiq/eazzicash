<template>
  <div>


      <div class="container">
          <div class="container main-container">
              <div class="row">
                  <div class="col-lg-8 col-md-12 major-col-1">
                      <div class="row">
                          <div class="col-md-6">
                            
                              <mdb-card class="borde mb-5" style="height:25vh">
                                  <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:orange">
                                         Loan Running
                                        
                                      </mdb-card-title>
                                     
                                      <mdb-card-text>
                                         <span class="mt h5" v-if="filteredLoanApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredLoanApproved()[0].loanAmount)}}</span> 
                                         <span class="mt h5" v-else  style="font-weight:bold">0.00</span> 
                                      </mdb-card-text>
                                     
                                      </mdb-card-body>
                                       <div class="mx-4 pt-1 h6 text-muted" style="height:25px; font-size:13.5px">Repayment Duration: 6 months</div>
                                      
                              </mdb-card>
                          </div>
                          <div class="col-md-6">
                              <mdb-card class="borde mb-5" style="height:25vh">
                                    <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:mediumseagreen">
                                          Investment Running
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5" v-if="filteredInvestmentApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredInvestmentApproved()[0].investmentAmount) }}</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                      <div class="mx-4 pt-1 h6 text-muted" style="height:25px; font-size:13.5px">Payment: Every 6 months</div>
                              </mdb-card>
                              
                          </div>  
                          <div class="col-md-6">
                              <mdb-card class="borde mb-5" style="height:25vh">
                                   <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:deepskyblue">
                                         Finance
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5"  v-if="filteredFinanceApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredFinanceApproved()[0].financeAmount)}}</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                      <div class="mx-4 pt-1 h6 text-muted" style="height:25px; font-size:13.5px">Repayment Duration: 6 months</div>
                              </mdb-card>
                              
                          </div>
                          <div class="col-md-6">
                              <mdb-card class="borde mb-5" style="height:25vh">
                                   <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:orangered; margin-bottom:20px">
                                        Pawn
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="h6" v-if="filteredPawnApproved()[0]" style="font-weight:500">Item : <span style="font-weight:300">{{filteredPawnApproved()[0].itemDescription}}</span></span> 
                                         <span class="h6" v-else style="font-weight:500">Item : <span style="font-weight:300">0.00</span></span> 
                                      </mdb-card-text>
                                      <mdb-card-text>
                                         <span class=" h6" v-if="filteredPawnApproved()[0]" style="font-weight:500">days left : <span style="font-weight:300">{{filteredPawnApproved()[0].pawnTenor}}</span> </span> 
                                         <span class=" h6" v-else style="font-weight:500">days left : <span style="font-weight:300">0.00</span> </span> 
                                      </mdb-card-text>
                                      </mdb-card-body>
                                      <!-- <div class="mx-4 pt-1 h6 text-muted" style="height:25px; font-size:13.5px">Running: 01</div> -->
                              </mdb-card>
                              
                          </div>
                      </div>
                  </div>

                  
                  <div class="col-lg-4 col-12 major-col-2">
                      <mdb-card class="mt-3 mt-md-0" style="height:auto">
                            <div class=" " >
                                <mdb-list-group>
                                <mdb-list-group-item class="text-white  list-group-header" >Transaction History <mdb-badge class="" style="margin-left:-30px" :pill="true" > {{checkTransactionHistory()}} </mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredPawnApproved()" :key="index"><span>{{item.type}}</span>     <mdb-badge :pill="true" class='badges' style="margin-left:15px" color="default-color">&#8358; {{formatAmount(item.pawnAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredLoanApproved()" :key="index"><span>{{item.type}}</span>     <mdb-badge :pill="true" class='badges' color="default-color">&#8358; {{formatAmount(item.loanAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredInvestmentApproved()" :key="index"><span>{{item.type}}</span>    <mdb-badge :pill="true" class='badges ml-n4' style="margin-left" color="default-color">&#8358; {{formatAmount(item.investmentAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredFinanceApproved()" :key="index"><span>{{item.type}}</span>     <mdb-badge :pill="true" class='badges' style="margin-left:-3px" color="default-color">&#8358; {{formatAmount(item.financeAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                </mdb-list-group>
                            </div>
                                  
                      </mdb-card>
                      
                  </div>

                   <div class="col-md-12 major-col-2 mt-4" style="">
                        <mdb-card class="bg-">
                            <mdb-card-title class="borde bg-danger py-2 text-white text-center pending">Pending Requests <mdb-badge :pill="true" color="danger"> {{totalPending().length}} </mdb-badge></mdb-card-title>

                       <section>
                        <mdb-tbl striped>
                            <mdb-tbl-head>
                                <tr>
                                    <th>S/N</th>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Amount</th>
                                    <!-- <th class="font-weight-bold h6">Status</th> -->
                                    <th class="font-weight-bold h6">Details</th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >

                                <tr scope="row" v-for="(item, index) in filteredPawnPending()" :key="index" >
                                    <td>#</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.pawnAmount)}}</td>
                                     <!-- <td> {{item.approved}}</td> -->
                                    <td><a class="text-primary" style="text-decoration:underline">View details</a></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredInvestmentPending()" :key="index">
                                    <td >#</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.investmentAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><a class="text-primary" style="text-decoration:underline">View details</a></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredLoanPending()" :key="index">
                                    <td >#</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.loanAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><a class="text-primary" style="text-decoration:underline">View details</a></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredFinancePending()" :key="index">
                                    <td>#</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.financeAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><a class="text-primary" style="text-decoration:underline">View details</a></td>
                                </tr>
                            </mdb-tbl-body>
                        </mdb-tbl>
                    </section>
                  </mdb-card> 
                  </div>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import{ mdbTbl, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
    name:'dashboard',
    components:{
    mdbNavbar,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbTbl,
     mdbTblHead,
      mdbTblBody,
    },
    data () {
        return {
            indexx:1,
            sum:''
        }
    },
   
    computed : {
        userEntitiesOne () {
            return this.$store.state.userEntitiesOne
        },
        
    },
    methods : {
        formatAmount (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
        },
        checkTransactionHistory () {
            let pawn = this.filteredPawnApproved().length
            let loan = this.filteredLoanApproved().length
            let finance = this.filteredFinanceApproved().length
            let investment = this.filteredInvestmentApproved().length

            let total = pawn + loan + finance + investment
            this.sum = total
            return total
        },
        totalPending () {
            let pawn = this.filteredPawnPending()
            let loan = this.filteredLoanPending()
            let finance = this.filteredFinancePending()
            let investment = this.filteredInvestmentPending()

            let total = pawn.concat(loan).concat(finance).concat(investment)
            return total
        },
        moment (x) {
        return moment(x).format("DD/MM/YYYY")
     },

     addOne () {
        let td = document.querySelectorAll('.td')
        td.forEach((item, index) => {
            return item
        })
                
               

        
     },
    //filter pawn  by approval ststus
     filteredPawnApproved () {
         let pawnItems = this.userEntitiesOne.pawn;
        let newPawnItem = pawnItems.filter(data => data.approved=='approved');
         return newPawnItem
     },

     filteredPawnPending () {
         let pawnItems = this.userEntitiesOne.pawn;
         let newPawnItem = pawnItems.filter(data => data.approved=='pending');
         return newPawnItem
     },
      //filter Loan by approval ststus
     filteredLoanApproved () {
         let loanItems = this.userEntitiesOne.loan;
        let newloanItem = loanItems.filter(data => data.approved=='approved');
         return newloanItem
     },

     filteredLoanPending () {
         let loanItems = this.userEntitiesOne.loan;
         let newLoanItem = loanItems.filter(data => data.approved=='pending');
         return newLoanItem
     },
      //filter Finance  by approval ststus
     filteredFinanceApproved () {
         let financeItems = this.userEntitiesOne.finance;
        let newFinanceItem = financeItems.filter(data => data.approved=='approved');
         return newFinanceItem
     },

     filteredFinancePending () {
         let financeItems = this.userEntitiesOne.finance;
         let newFinanceItem = financeItems.filter(data => data.approved=='pending');
         return newFinanceItem
     },
      //filter investment  by approval ststus
     filteredInvestmentApproved () {
         let investmentItems = this.userEntitiesOne.investment;
        let newInvestmentItem = investmentItems.filter(data => data.approved=='approved');
         return newInvestmentItem
     },

     filteredInvestmentPending () {
         let investmentItems = this.userEntitiesOne.investment;
         let newInvestmentItem = investmentItems.filter(data => data.approved=='pending');
         return newInvestmentItem
     }
       
        
    },
     mounted () {
        this.$store.dispatch('getAllEntitiesOne')
       
    },

    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    margin-left:3vw;
    height: auto;
    overflow-x: hidden
 }

 .col-one {
     border:1px solid blu;
 }
 
 .col-one-title {
     margin-bottom: 6vh;
     font-size:18px;
     font-weight: bold!important
 }

 .list-group-header{
     background:rgb(0, 85, 0);
     text-align: center !important;
 }

 .badges {
    color:red;
    margin:0px 20px;
    border:1px solid blu

 }
 .pending {
      background:rgb(0, 85, 0) !important;
      font-weight: bold;
      font-size: 18px
 }

 .card-footer {
     margin-top: -8px
 }

</style>