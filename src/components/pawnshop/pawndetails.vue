<template>
  <div>
      <div class="container">
          <div class="containe main-container">
               <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:auto">
                   <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Pawn Application Form</span></div>
                   <router-link to="/profile/pawnshop/precheck">
                       <div class="back-arrow-div small-screen-nav">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation container row small-screen-nav">
                       <router-link class="col-md-4 text-dark " to='/profile/pawnshop/pawndetails/pawninfo'><div class="nav-items small-screen-nav" @click="isActiveOne" :class="{ active: isActive1P }"> Pawn Details</div></router-link>
                       <router-link class="col-md-4 text-dark"  to="/profile/pawnshop/pawndetails/ownership"><div class=" nav-items small-screen-nav" @click="isActiveTwo" :class="{ active: isActive2P }" style="padding-left:2px" >Proof of Ownership</div></router-link>
                       <router-link class="col-md-4 text-dark"  to="/profile/pawnshop/pawndetails/signature" ><div class="nav-items ml-0 small-screen-nav" @click="isActiveThree" :class="{ active: isActive3P }" >Signature</div></router-link>
                   </div>

                   <div class="">

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
            this.$store.dispatch('updateIsActive1P')
        },
        isActiveTwo () {
            this.$store.dispatch('updateIsActive2P')
        },
        isActiveThree () {
            this.$store.dispatch('updateIsActive3P')
        }
    },
    
   computed : {
       isActive1P () {
         return this.$store.getters.isActive1P
       },
       isActive2P () {
         return this.$store.getters.isActive2P
       },
       isActive3P () {
         return this.$store.getters.isActive3P
       },
   } 
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:70vw;
    margin:0px 5vw
 }
 .jumbotron-head {
     height: 10vh;
     margin-top:-10vh;
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
     width:50vw
 }

 .back-arrow-div {
     /* border: 2px solid blue; */
     position:absolute;
     height: 20px;
     background: dodgerblue;
     margin:0px 60px;
     width:20px;
     border-radius:60px;
     text-align: center;
     padding:-7vh;
     top:13.5vh
     
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

 .router-div {
     border:2px solid gree;
     height:auto;
     margin:5vh 8vw;
     width: auto
 }

 @media (max-width:767px){
   .small-screen-nav{
      display: none
    }
}
</style>