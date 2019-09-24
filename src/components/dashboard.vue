<template>
  <div>


      <div class="container">
          <div class="container main-container">
              <div class="row">
                  <div class="col-lg-8 col-md-12 major-col-1">
                      <div class="row">
                          <div class="col-md-6 entities-card ">
                            
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                  <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:orange">
                                         Loan Running
                                        
                                      </mdb-card-title>
                                     
                                      <mdb-card-text>
                                         <span class="mt h5" v-if="filteredLoanApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredLoanApproved()[0].loanAmount)}}</span> 
                                         <span class="mt h5" v-else  style="font-weight:bold">0.00</span> 
                                      </mdb-card-text>
                                     
                                      </mdb-card-body>
                                       <div class="mx-4 pt-1 h6 text-muted"  v-if="filteredLoanApproved()[0]" style="height:25px; font-size:13.5px">Repayment Duration: {{filteredLoanApproved()[0].loanTenor}} months</div>
                                      
                              </mdb-card>
                          </div>
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                    <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:mediumseagreen">
                                          Investment Running
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5" v-if="filteredInvestmentApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredInvestmentApproved()[0].investmentAmount) }}</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                      <div class="mx-4 pt-1 h6 text-muted" v-if="filteredInvestmentApproved()[0]" style="height:25px; font-size:13.5px">Payment: Every {{filteredInvestmentApproved()[0].investmentTenor}} months</div>
                              </mdb-card>
                              
                          </div>  
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                   <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:deepskyblue">
                                         Finance
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5"  v-if="filteredFinanceApproved()[0]" style="font-weight:bold">&#8358; {{formatAmount(filteredFinanceApproved()[0].financeAmount)}}</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                      <div class="mx-4 pt-1 h6 text-muted"  v-if="filteredFinanceApproved()[0]" style="height:25px; font-size:13.5px">Repayment Duration: {{filteredFinanceApproved()[0].financeTenor}} months</div>
                              </mdb-card>
                              
                          </div>
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
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

                  
                  <div class="col-lg-4 col-12 major-col-2 transaction-card">
                      <mdb-card class="mt-3 mt-md-0 " style="height:auto; width:auto">
                            <div class=" " >
                                <mdb-list-group>
                                <mdb-list-group-item class="text-white h6 list-group-header" >Transaction History <mdb-badge class="trans-history-badge" style="" :pill="true" > {{checkTransactionHistory()}} </mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredPawnApproved()" :key=" 'a' + index"><span>{{item.type}}</span>     <mdb-badge :pill="true" class='badges' style="margin-left:15px" color="default-color">&#8358; {{formatAmount(item.pawnAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredLoanApproved()" :key="'b' + index"><span>{{item.type}}</span>     <mdb-badge :pill="true" class='badges' color="default-color">&#8358; {{formatAmount(item.loanAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredInvestmentApproved()" :key=" 'c' + index"><span class="small-screen-type">{{item.type}}</span>    <mdb-badge :pill="true" class='badges ml-n4 small-screen-history' style="margin-left" color="default-color">&#8358; {{formatAmount(item.investmentAmount)}} </mdb-badge>     <mdb-badge :pill="true" class="small-screen-history-date" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                <mdb-list-group-item   v-for="(item, index) in filteredFinanceApproved()" :key=" 'd' + index"><span class="small-screen-type-finance">{{item.type}}</span>     <mdb-badge :pill="true" class='badges' style="margin-left:-3px" color="default-color">&#8358; {{formatAmount(item.financeAmount)}} </mdb-badge>     <mdb-badge :pill="true" color="default-color">{{moment(item.createdAt)}}</mdb-badge></mdb-list-group-item>
                                </mdb-list-group>
                            </div>
                                  
                      </mdb-card>
                      
                  </div>

                   <div class="col-md-12 major-col-2 mt-4 pending-card" style="">
                        <mdb-card class="bg-">
                            <mdb-card-title class=" py-2 text-white text-center h6 pending">Pending Requests <mdb-badge :pill="true" color="danger"> {{totalPending().length}} </mdb-badge></mdb-card-title>

                       <section class="">
                        <mdb-tbl striped  class="table-responsive small-screen-table">
                            <mdb-tbl-head>
                                <tr>
                                    <th class="font-weight-bold h6">ID</th>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Amount</th>
                                    <!-- <th class="font-weight-bold h6">Status</th> -->
                                    <th class="font-weight-bold h6">Details</th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >

                                <tr scope="row" v-for="(item, index) in filteredPawnPending()" :key="'d' + index" >
                                    <td>{{text_truncate(item._id)}}</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.pawnAmount)}}</td>
                                     <!-- <td> {{item.approved}}</td> -->
                                    <td><span class="text-primary"  @click="pawnPend(index)" style="text-decoration:underline; cursor:pointer">View details</span></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredInvestmentPending()" :key="'a' + index">
                                    <td >{{text_truncate(item._id)}}</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.investmentAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><span class="text-primary" @click="investmentPend(index)" style="text-decoration:underline; cursor:pointer">View details</span></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredLoanPending()" :key=" 'b' + index">
                                    <td >{{text_truncate(item._id)}}</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.loanAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><span class="text-primary" @click="loanPend(index)"  style="text-decoration:underline; cursor:pointer">View details</span></td>
                                </tr>
                                 <tr scope="row" v-for="(item, index) in filteredFinancePending()" :key="'c' + index">
                                    <td>{{text_truncate(item._id)}}</td>
                                    <td>{{item.type}}</td>
                                    <td>&#8358; {{formatAmount(item.financeAmount)}}</td>
                                    <!-- <td> {{item.approved}}</td> -->
                                    <td><span class="text-primary" @click="financePend(index)"  style="text-decoration:underline; cursor:pointer">View details</span></td>
                                </tr>
                            </mdb-tbl-body>
                        </mdb-tbl>
                    </section>
                  </mdb-card> 
                  </div>
              </div>

                <!-- details about pawn start -->
                  <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Pawn Details</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                         <mdb-tbl striped  class="table-responsive small-screen-table">
                            <mdb-tbl-head>
                                <tr>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Value </th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >
                                <tr scope="row" >
                                    <td>ID</td>
                                    <td>{{pawnPending._id}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Status</td>
                                    <td>{{pawnPending.approved}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Pawn Amount</td>
                                    <td>{{pawnPending.pawnAmount}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Pawn Tenor</td>
                                    <td>{{pawnPending.pawnTenor}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Item Category</td>
                                    <td>{{pawnPending.itemCategory}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Pawn Item Description</td>
                                    <td>{{pawnPending.itemDescription}}</td>
                                </tr>
                                
                                 <tr scope="row" >
                                    <td>Item Condition</td>
                                    <td>{{pawnPending.itemCondition}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Item Purchase Date</td>
                                    <td>{{pawnPending.itemPurchaseDate}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Item Purchase Location</td>
                                    <td>{{pawnPending.itemPurchaseLocation}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Item Release Year</td>
                                    <td>{{pawnPending.itemReleaseYear}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Sworn Affidavit</td>
                                    <td>{{pawnPending.swornAffidavit}}</td>
                                </tr>

                            </mdb-tbl-body>
                        </mdb-tbl>    

                         
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12a = false">OK</mdb-btn>
                    <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                    </mdb-modal-footer>
                </mdb-modal>  
              
            <!-- details about pawn end   -->


             <!-- details about Loan Start -->
                  <mdb-modal :show="showModal12b" @close="showModal12b = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Loan Details</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                         <mdb-tbl striped  class="table-responsive small-screen-table">
                            <mdb-tbl-head>
                                <tr>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Value </th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >
                                <tr scope="row" >
                                    <td>ID</td>
                                    <td>{{loanPending._id}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Status</td>
                                    <td>{{loanPending.approved}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Loan Amount</td>
                                    <td>{{loanPending.loanAmount}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Loan Tenor</td>
                                    <td>{{loanPending.loanTenor}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Loan Purpose</td>
                                    <td>{{loanPending.loanPurpose}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Employment Type</td>
                                    <td>{{loanPending.employmentType}}</td>
                                </tr>
                                
                                 <tr scope="row" >
                                    <td>Company Name</td>
                                    <td>{{loanPending.companyName}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Guarantor Status</td>
                                    <td >
                                       <ul class="ml-n4" v-for="(item, index) in loanPending.guarantors" :key="index">
                                           <li>
                                              Guarantor {{index+1}} :  {{loanPending.guarantors[index].status}}
                                           </li>
                                       </ul>
                                    </td>
                                </tr>

                            </mdb-tbl-body>
                        </mdb-tbl>    

                         
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12b = false">OK</mdb-btn>
                    <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                    </mdb-modal-footer>
                </mdb-modal>  
              
            <!-- details about Loan end   --> 


               <!-- details about Investment start -->
                  <mdb-modal :show="showModal12c" @close="showModal12c = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Investment Details</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                         <mdb-tbl striped  class="table-responsive small-screen-table">
                            <mdb-tbl-head>
                                <tr>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Value </th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >
                                <tr scope="row" >
                                    <td>ID</td>
                                    <td>{{investmentPending._id}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Status</td>
                                    <td>{{investmentPending.approved}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Investment Amount</td>
                                    <td>{{investmentPending.investmentAmount}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Investment Tenor</td>
                                    <td>{{investmentPending.investmentTenor}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Source of Income</td>
                                    <td>{{investmentPending.incomeSource}}</td>
                                </tr>
                                <tr scope="row" >
                                    <td>Account Details</td>
                                    <td>
                                        <ul class="ml-n4">
                                             <li v-for="(value, name) in investmentPending.accountDetails" :key="value">
                                              {{name}} :  {{ value }}
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Next of Kin</td>
                                    <td>
                                        <ul class="ml-n4">
                                             <li v-for="(value, name)  in investmentPending.nextOfKin" :key="value">
                                              {{name}} :  {{ value }}
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                
                            

                            </mdb-tbl-body>
                        </mdb-tbl>    

                         
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12c = false">OK</mdb-btn>
                    <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                    </mdb-modal-footer>
                </mdb-modal>  
              
            <!-- details about Investment end   -->


               <!-- details about Finance Start -->
                  <mdb-modal :show="showModal12d" @close="showModal12d = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Finance Details</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                         <mdb-tbl striped  class="table-responsive small-screen-table">
                            <mdb-tbl-head>
                                <tr>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Value </th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body  >
                                <tr scope="row" >
                                    <td>ID</td>
                                    <td>{{financePending._id}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Status</td>
                                    <td>{{financePending.approved}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Finance Amount</td>
                                    <td>{{financePending.financeAmount}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Finance Tenor</td>
                                    <td>{{financePending.financeTenor}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Finance Purpose</td>
                                    <td>{{financePending.financePurpose}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Employment Type</td>
                                    <td>{{financePending.employmentType}}</td>
                                </tr>
                                
                                 <tr scope="row" >
                                    <td>Company Name</td>
                                    <td>{{financePending.companyName}}</td>
                                </tr>
                                 <tr scope="row" >
                                    <td>Guarantor Status</td>
                                    <td >
                                       <ul class="ml-n4" v-for="(item, index) in financePending.guarantors" :key="index">
                                           <li>
                                              Guarantor {{index+1}} :  {{financePending.guarantors[index].status}}
                                           </li>
                                       </ul>
                                    </td>
                                </tr>

                            </mdb-tbl-body>
                        </mdb-tbl>    

                         
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12d = false">OK</mdb-btn>
                    <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                    </mdb-modal-footer>
                </mdb-modal>  
              
            <!-- details about Finance end   --> 




              
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
    name:'dashboard',
    components:{
    mdbNavbar,
    mdbBtn,
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
    mdbModal, 
    mdbModalHeader, 
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter,
    mdbTbl,
     mdbTblHead,
      mdbTblBody,
    },
    data () {
        return {
            indexx:1,
            sum:'',
            showModal12a: false,
            showModal12b: false,
            showModal12c: false,
            showModal12d: false,
            pawnPending :{},
            loanPending:{},
            investmentPending:{},
            financePending:{}
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
       //truncate the id length to the first 10 characters
         text_truncate(str, length, ending) {
            if(length==null) {
                length=10;
            }
            if (ending==null) {
                ending= ''
            }
            if(str.length>length) {
                return str.substring(0, length) + ending
            }
            else {
                return str
            }
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
    //filter pawn  by approval status
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
      //filter Loan by approval status
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
      //filter Finance  by approval status
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
     },

//function to conditionally show  details of pending ppawn items
   pawnPend(n) {
      
        let newArray = this.filteredPawnPending()
        let newObject = newArray[n]
        this.pawnPending=newObject
        this.showModal12a = true
    },

   //function to conditionally show  details of pending loanitems
   loanPend(n) {
      
        let newArray = this.filteredLoanPending()
        let newObject = newArray[n]
        this.loanPending=newObject
        this.showModal12b = true
    }, 

     //function to conditionally show  details of pending investment items
   investmentPend(n) {
      
        let newArray = this.filteredInvestmentPending()
        let newObject = newArray[n]
        this.investmentPending=newObject
        this.showModal12c = true
    }, 

     //function to conditionally show  details of pending Finance items
   financePend(n) {
      
        let newArray = this.filteredFinancePending()
        let newObject = newArray[n]
        this.financePending=newObject
        this.showModal12d = true
    }, 


    },
     mounted () {
        this.$store.dispatch('getAllEntitiesOne')
       
    },

    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blu;
    width:auto;
    margin-left:6vw;
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
 }

 .card-footer {
     margin-top: -8px
 }



 @media (max-width:576px){ 
    .small-screen-table {
        padding: 0 5.5vw;

    } 

    .small-screen-entities-card{
       height:auto !important
    }

    .transaction-card{
        margin-left:6vw;
        width:auto
    } 

    .entities-card{
      margin-left:9.8vw;
    }
    .pending-card {
        margin-left:6vw;
    }
    .trans-history-badge{
        margin-left: 48vw !important;
        position: absolute;
    }
 }

 

  /* @media (max-width:420px){ 
    .small-screen-history {
        margin-left:11.5px !important
    }

     .small-screen-type-finance {
        width:15vw !important
    }
      .small-screen-type {
        width:12vw !important
    }
 } */


</style>