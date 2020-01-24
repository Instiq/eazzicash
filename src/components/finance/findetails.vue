<template>
  <div>
      <div class="container">
          <div class="container main-container">
               <mdb-jumbotron class="jumbotron-fluid small-screen-jumbo" style="height:auto; width:auto">
                   <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Finance Application Form</span></div>
                   <router-link to="/profile/loan/apply">
                       <div class="back-arrow-div ml-lg-4 ml-xl-5 ml-md-4 small-screen-nav">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation row small-screen-nav">
                        <router-link class="link col-md-2 ml-md-0 ml-lg-4 text-dark  loan-nav" to="#"> <div class="nav-items small-screen-nav"  style="border:2px solid blu; width:120px; margin-left:-2vw"  :class="{ active: isActive4 }" >Personal Details</div></router-link>        
                       <router-link class="col-md-2 ml-n1  ml-xl-3  text-dark  loan-nav " to='#' style="padding-left:3px"><div class="nav-items px-n3 small-screen-nav" style="border:2px solid blu; width:120px;" :class="{ active: isActive1 }" >Finance Details</div></router-link>
                       <router-link class="col-md-2 ml-4  text-dark  loan-nav" style="padding-left:20px" to=""><div class=" nav-items  small-screen-nav" :class="{ active: isActive2 }"  style="border:2px solid blu; width:80px" >Work Info</div></router-link>
                       <router-link class="col-md-2 ml-3  text-dark  loan-nav"  to="#" style="padding:0"><div class="nav-items ml-0 small-screen-nav"  style="border:2px solid blu; width:130px" :class="{ active: isActive3 }" >Guarantor Details</div></router-link>
                        <router-link class="col-md-2  text-dark ml-lg-4 ml-xl-4 pl-lg-4 loan-nav"  to="#" style="margin-left:30px; padding-left:18px" ><div class="nav-items ml-0 small-screen-nav"  style="border:2px solid blu; width:80px"  :class="{ active: isActive5 }" >Collateral</div></router-link>
                       <!-- <router-link class="link col-md-2 ml-md-0 ml-lg-4 text-dark  loan-nav" to="#"> <div class="nav-items small-screen-nav"  style="border:2px solid blu; width:80px"  :class="{ active: isActive4 }" >Signature</div></router-link>         -->
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
        //    isActive1 : true,
        //    isActive2 : false,
        //    isActive3 : false,
        //    isActive4 : false
        }
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
        },
         isActiveFive () {
           this.$store.dispatch('updateIsActive5')
        }
    },
    
   computed : {
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
       },
       isActive5 () {
         return this.$store.getters.isActive5
       }
   },
    // mounted () {
    //     this.isActiveOne()
    // }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:80px 5vw
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
     height: 43px;
     margin:0px 8vw;
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
     top:40px
     
 }

 .nav-items {
     width:10.7vw;
     margin:1vw 0px;
     cursor:pointer;
     /* height:4vh */

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
     top:13px;
     /* height: 6vh; */
     /* margin:0px 9vw;  */
    
 }

 .small-screen-nav {
    margin-top:0vh;
    /* position: relative; */
 }

 
  /* @media (min-width:1200px){
   .small-screen-jumbo {
    width:71vw !important;
    height:auto !important
} 
} */


  @media (max-width:991px){
   .small-screen-nav{
      display: none
    }
}


 @media (max-width:576px){ 
.small-screen-jumbo {
    width:auto !important;
    height:auto !important
} 
 .main-container {
    border:2px solid blac;
    margin-left:15vw !important;
    height: auto;
     width:120vw;
    max-width:120vw;
    margin:0px 1vw
 }
 .jumbotron-head {
     height: auto;
     margin-top:-10vh;
     background:rgb(208, 216, 224);
     padding-top: 30px !important
 }
 }
</style>