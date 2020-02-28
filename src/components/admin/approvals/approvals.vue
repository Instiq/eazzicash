<template>
  <div class="container">
      <section class="container main-container" style="height:auto">
                <div class="card mb-5  text-muted jumbotron-head">
                    <div class="loan-navigation container row small-screen-nav">
                         <router-link   class="col-md-3 ml-n1 text-dark  loan-nav " to="/adminProfile/approvals/loan" ><div class="nav-items small-screen-nav text-center"  style="width: 142px" @click="isActiveOne" :class="{ active: isActive1 }" >Loan Approvals</div></router-link>
                         <router-link   class="col-md-3 text-dark p-0 loan-nav" to="/adminProfile/approvals/investment"> <div class=" nav-items  small-screen-nav ml-n1 ml-xl-1 text-center" style="width:193px" @click="isActiveTwo" :class="{ active: isActive2 }">Investment Approvals </div></router-link>  
                         <router-link   class="col-md-3 text-dark  loan-nav"  to="/adminProfile/approvals/finance"> <div  class="nav-items nok small-screen-nav text-center " style="width:163px" @click="isActiveThree" :class="{ active: isActive3 }" >Finance Approvals</div></router-link>
                         <router-link   class="col-md-3 text-purple loan-nav" to="/adminProfile/approvals/pawn"> <div  class="nav-items  signature small-screen-nav text-center "  style="width:143px" @click="isActiveFour" :class="{ active: isActive4 }">Pawn Approvals</div></router-link>         
                    </div>
                </div>

                <mdb-jumbotron class="jumbotron-fluid ">
    
                <div class="containr">
                    <div class="router-div" style="">
                        <router-view></router-view>
                    </div>
                </div>

               </mdb-jumbotron>   
      </section>
  </div>
</template>

<script>
import{ mdbTbl, mdbJumbotron, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
 name:'approvals',
 components :{
    mdbIcon,
    mdbJumbotron,
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

methods : {
        isActiveOne () {
            this.$store.dispatch('updateIsActive1')
        },
        isActiveTwo () {
            this.$store.dispatch('updateIsActive2')
        },
        isActiveThree () {
            this.$store.dispatch('updateIsActive3')
        },
        isActiveFour () {
           this.$store.dispatch('updateIsActive4')
        }
    },

computed : {
     currentRoute () {
        return this.$router.currentRoute.name
    },
    isActive1 () {
        return this.$store.getters.isActive1
    },
    isActive2 () {
        return this.$store.getters.isActive2
    },
    isActive3 () {
        return this.$store.getters.isActive3
    },
    isActive4 () {
        return this.$store.getters.isActive4
    }
}
}
</script>

<style scoped>
.main-container {
    border:2px solid blu;
    margin-left:3vw;
    height: auto;
    overflow-x: hidden
 }

 .jumbotron-fluid {
     height:auto; 
     width:auto; 
     overflow-x:hidden;
      margin-top:-20px;
      /* padding: 30px; */
      padding: 0px 0px;
      padding-top:7vh ;
      padding-bottom: 7vh;
      border: 2px solid none
 }

  .jumbotron-head {
     height:60px;
     /* margin-top:20vh; */
     width:auto;
     margin:0vh 00px
     /* background:rgb(208, 216, 224); */

  }
.active {
      border-bottom:4px solid  rgb(19, 95, 195);
      font-weight:600
 }

.loan-nav {
     border : 2px solid blac;
     position: relative;
 } 
  
 .router-div {
     border:2px solid gree;
     height:auto;
     margin:-7vh 0vw;
     width: auto
 }

 .nav-items {
     /* width:auto; */
     margin:1vw 0px;
     cursor:pointer;
     height:30px;
     text-align: center;
     /* font-weight: 400; */
     color: rgb(19, 95, 195);
     font-size:17.5px

 }

 .loan-navigation {
     position: relative;
     height: 1vh;
     margin:0vh 3vw;
     width:70vw;
 } 

 

</style>