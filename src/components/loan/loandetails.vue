<template>
  <div>
      <div class="container">
          <div class="container main-container">
               <div class=" jumbotron jumbotron-fluid small-screen-jumbo borde" style="height:auto; width:auto">
                   <div class="borde py-4 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Loan Application Form</span></div>
                   <router-link to="/profile/loan/apply">
                       <div class="back-arrow-div  ml-lg-4 ml-xl-5 small-screen-nav">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation container row small-screen-nav">
                       <router-link class="col-md-3 text-dark  loan-nav" to="#"> <div class="nav-items  text-center signature small-screen-nav "  style=" width:120px; margin-left:-2vw"  :class="{ active: isActive4 }" >Personal Details</div></router-link>        
                       <router-link class="col-md-3 m text-dark p-0 loan-nav " to='#'><div class="nav-items text-center small-screen-nav"  style=" width:100px; " :class="{ active: isActive1 }" >Loan Details</div></router-link>
                       <router-link class="col-md-3 text-dark p-0 loan-nav" to="#"><div class=" nav-items  small-screen-nav ml-n1 ml-xl-1 text-center" style=" width:140px;" :class="{ active: isActive2 }">Work Information</div></router-link>
                       <router-link class="col-md-3 text-dark  loan-nav"  to="#" ><div class="nav-items text-center nok text-center small-screen-nav " style=" width:135px;"  :class="{ active: isActive3 }" >Guarantor Details</div></router-link>
                       <!-- <router-link class="col-md-3 text-dark  loan-nav" to="#"> <div class="nav-items  text-center signature small-screen-nav "  style=" width:80px;"  :class="{ active: isActive4 }" >Signature</div></router-link>         -->
                   </div>

                   <div class="containe">

                       <div class="router-div" style="">
                         <router-view></router-view>
                       </div>

                   </div>

               </div>   
              
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
    margin:70px 5vw
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
     height:45px;
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
     /* height:4vh; */
     /* border:2px solid black */

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
     border:0px solid none;
     height:auto;
     margin:5vh 10vw;
     width: auto
 }

.loan-nav {
     border : 2px solid bl;
     position: relative; 
 } 

 
@media (min-width:992px){
   
    .loan-navigation {
     margin:0px 9vw;
     width:auto
 }

 .nok {
     margin-left:10px
 }

 .signature {
     margin-left: 40px
 }
 
  .loan-nav {
     top:1.5px;
  }
 }

  @media (min-width:1200px){
   
    .small-screen-jumbo {
        width:69vw !important;
        height:auto !important;
        margin-top:50px
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