<template>
  <div>
      <div class="container">
          <div class="container main-container">
               <mdb-jumbotron class="jumbotron-fluid small-screen-jumbo" style="height:auto; width:auto">
                   <div class="border py-4 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Investment Application Form</span></div>
                   <router-link to="/profile/investment/precheck">
                       <div class="back-arrow-div ml-lg-4 ml-xl-5 ml-md-4 small-screen-nav">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation container row small-screen-nav">
                        <router-link class="ml- col-md-3 text-dark loan-nav" to="#"> <div class="nav-items text-center small-screen-nav" style="border:2px solid blu; width:120px; margin-left:-2vw"  :class="{ active: isActive4I }" >Personal Details</div></router-link>
                       <router-link class="col-md-3 ml-lg-n2  text-dark loan-nav p-0 " to='#'><div class="nav-items text-center small-screen-nav" style="border:2px solid blu; width:140px;"  :class="{ active: isActive1I }" >Investment Details</div></router-link>
                       <router-link class="col-md-3 text-dark loan-nav " to="#"><div class=" nav-items text-center ml-xl-3  small-screen-nav" style="border:2px solid blu; width:150px;"  :class="{ active: isActive2I }"  >Settlement Account</div></router-link>
                       <router-link class="col-md-3 text-dark loan-nav"  to="#" ><div class="nav-items text-center nok small-screen-nav" style="border:2px solid blu; width:136px;"  :class="{ active: isActive3I }" >Next of Kin Details</div></router-link>
                       <!-- <router-link class="ml- col-md-3 text-dark loan-nav" to="#"> <div class="nav-items text-center ml-lg-5 signature small-screen-nav" style="border:2px solid blu; width:77px;"  :class="{ active: isActive4I }" >Signature</div></router-link>         -->
                   </div>

                   <div class="containe">

                       <div class="router-div" style="">
                         <router-view></router-view>
                       </div>

                   </div>

               </mdb-jumbotron>   
              
          </div>
      </div>
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';

export default {
    name:'loandetails',
    components:{
    mdbNavbar,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbJumbotron,
    mdbInput,
    mdbNumericInput
    },

    data () {
        return {
      
        }
    },

    methods : {
        isActiveOne () {
            this.$store.dispatch('updateIsActive1I')
        },
        isActiveTwo () {
            this.$store.dispatch('updateIsActive2I')
        },
        isActiveThree () {
            this.$store.dispatch('updateIsActive3I')
        },
        isActiveFour () {
           this.$store.dispatch('updateIsActive4I')
        }
    },
    
   computed : {
       isActive1I () {
         return this.$store.getters.isActive1I
       },
       isActive2I () {
         return this.$store.getters.isActive2I
       },
       isActive3I () {
         return this.$store.getters.isActive3I
       },
       isActive4I () {
         return this.$store.getters.isActive4I
       }
   },
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 5vw
 }
 .jumbotron-head {
     height: auto;
     margin-top:-11vh;
     background:rgb(208, 216, 224);

 }
 .jumbotron-head-text {
     font-size:20px
 }

 .loan-navigation {
     border-bottom : 2px solid gainsboro;
     position: relative;
     height: 6vh;
     margin:0px 9vw;
     /* width:50vw; */
     margin-left: 7vw;
     width:auto
 }

 .back-arrow-div {
     /* border: 2px solid blue; */
     position: relative;;
     height: 20px;
     background: dodgerblue;
     margin:0px 60px;
     width:20px;
     border-radius:60px;
     text-align: center;
     padding:-7vh;
     top:6vh
     
 }

 .nav-items {
     width:10.7vw;
     margin:1vw 0px;
     cursor:pointer;
     height:4vh

 }

 .active {
      border-bottom:4px solid green;
      color:green;
      font-weight:500
 }

  .small-screen-jumbo {
     margin-top: 50px!important
 }

 .router-div {
     border:2px solid gree;
     height:auto;
     margin:5vh 8vw;
     width: auto
 }

  .loan-nav {
     border : 2px solid blac;
     position: relative;
     top:-1px;
    
 } 



@media (min-width:990px){
   
     .loan-navigation {
     margin:0px 9vw;
     width:51vw
 }

 .nok {
     margin-left:30px
 }
 }

 @media (min-width:1200px){


 .small-screen-jumbo {
     /* margin-top:50px */
    /* width:70vw !important;
    height:auto !important */
} 

 }



  @media (max-width:991px){
   .small-screen-nav{
      display: none
    }
}


 @media (max-width:576px){ 
.main-container {
    border:2px solid blac;
    margin-left:15vw;
    height: auto;
    width:120vw;
    max-width:120vw
 }
.small-screen-jumbo {
    width:auto !important;
    height:auto !important
} 
  .jumbotron-head {
     height: auto;
     margin-top:-10vh;
     background:rgb(208, 216, 224);
     padding-top : 30px !important
 }
 }
</style>