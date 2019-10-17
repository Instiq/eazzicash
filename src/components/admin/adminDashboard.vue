<template>
  <div class="container">
      <section class="container main-container" style="height:auto">
         <div class="col-lg-8 col-md-12 major-col-1">
                      <div class="row">
                          <div class="col-md-6 entities-card ">
                            
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                  <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:orange">

                                       
                                         Total Loan Requests
                                        
                                        
                                      </mdb-card-title>
                                     
                                      <mdb-card-text>
                                         <span class="mt h5" v-if="loanEntities" style="font-weight:bold">{{loanEntities}} requests</span> 
                                         <span class="mt h5" v-else  style="font-weight:bold">0.00</span> 
                                      </mdb-card-text>
                                     
                                      </mdb-card-body>
                                       <div class="mt-5" style="border:2px solid orange"></div>
                                      
                              </mdb-card>
                          </div>
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                    <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:mediumseagreen">
                                         Total  Investment Requests
                                         
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5" v-if="investmentEntities" style="font-weight:bold">{{investmentEntities}} requests</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                       <div class="mt-5" style="border:2px solid mediumseagreen"></div>
                              </mdb-card>
                              
                          </div>  
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                   <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:deepskyblue">
                                        Total Finance Requests
                                        
                                      </mdb-card-title>
                                      <mdb-card-text>
                                         <span class="mt-5 h5"  v-if="financeEntities" style="font-weight:bold">{{financeEntities}} requests</span> 
                                         <span v-else class="mt-5 h5">0.00</span>
                                      </mdb-card-text>
                                      </mdb-card-body>
                                       <div class="mt-5" style="border:2px solid deepskyblue"></div>
                              </mdb-card>
                              
                          </div>
                          <div class="col-md-6 entities-card">
                              <mdb-card class="borde mb-5 small-screen-entities-card" style="height:26vh">
                                   <mdb-card-body class="col-one" >
                                      <mdb-card-title class="col-one-title" style="color:orangered">
                                       Total Pawn Requests
                                       
                                      </mdb-card-title>
                                    
                                      <mdb-card-text>
                                         <span class="h5 mt-5" v-if="pawnEntities" style="font-weight:bold">{{pawnEntities}} requests</span>
                                         <span  class="h5 mt-5" v-else style="font-weight:bold">0.00</span>
                                      </mdb-card-text>
                                      
                                      </mdb-card-body>
                                        <div class="" style="border:2px solid orangered"></div>
                              </mdb-card>
                              
                          </div>
                      </div>
                  </div>
      </section>

  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'

export default {
 name:'adminDashboard',
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
    
    computed : {
      loanEntities () {
        let requests = this.$store.state.userEntitiesAll.loan;
        let total = requests.length;
        return total;
      },
       pawnEntities () {
        let requests = this.$store.state.userEntitiesAll.pawn;
        let total = requests.length;
        return total;
      },
       investmentEntities () {
        let requests = this.$store.state.userEntitiesAll.investment;
        let total = requests.length;
        return total;
      },
       financeEntities () {
        let requests = this.$store.state.userEntitiesAll.finance;
        let total = requests.length;
        return total;
      }
    }
}
</script>

<style scoped>
.main-container {
    border:2px solid blac;
    margin-left:3vw;
    height: auto;
    overflow-x: hidden
 }
 .col-one-title {
     margin-bottom: 6vh;
     font-size:18px;
     font-weight: bold!important
 }

</style>