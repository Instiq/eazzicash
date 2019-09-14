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
                                         <span class="mt h5" style="font-weight:bold">{{}}</span> 
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
                                         <span class="mt-5 h5" style="font-weight:bold">{{}}</span> 
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
                                         <span class="mt-5 h5" style="font-weight:bold">{{}}</span> 
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
                                         <span class=" h6" style="font-weight:500">Item : <span style="font-weight:300">{{}}</span></span> 
                                      </mdb-card-text>
                                      <mdb-card-text>
                                         <span class=" h6" style="font-weight:500">days left : <span style="font-weight:300">{{}}</span> </span> 
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
                                <mdb-list-group-item class="text-white  list-group-header" >Transaction History</mdb-list-group-item>
                                <mdb-list-group-item  v-for="star in 5" :key="star"><span>Pawn</span>     <mdb-badge :pill="true" class='badges' color="default-color">item: Mobile</mdb-badge>     <mdb-badge :pill="true" color="default-color">03/10/12</mdb-badge></mdb-list-group-item>
                                </mdb-list-group>
                            </div>
                                  
                      </mdb-card>
                      
                  </div>

                   <div class="col-md-12 major-col-2 mt-4" style="">
                        <mdb-card class="bg-">
                            <mdb-card-title class="borde bg-danger py-2 text-white text-center pending">Pending Requests <mdb-badge :pill="true" color="danger">03</mdb-badge></mdb-card-title>

                       <section>
                        <mdb-tbl striped>
                            <mdb-tbl-head>
                                <tr>
                                    <th>S/N</th>
                                    <th class="font-weight-bold h6">Type</th>
                                    <th class="font-weight-bold h6">Amount</th>
                                    <th class="font-weight-bold h6">Details</th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body>
                                <tr scope="row" v-for="star in 3" :key="star">
                                    <td>{{star}}</td>
                                    <td>Investment</td>
                                    <td>N400,000</td>
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