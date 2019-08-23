<template>
  <div>
      <div class="container">
          <div class="containe main-container">
               <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:auto">
                   <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Investment Application Form</span></div>
                   <router-link to="/profile/investment/precheck">
                       <div class="back-arrow-div small-screen-nav">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation container row small-screen-nav">
                       <router-link class="col-md-3 text-dark " to='/profile/investment/investdetails/investinfo'><div class="nav-items small-screen-nav" @click="isActiveOne" :class="{ active: isActive1I }" >Investment Details</div></router-link>
                       <router-link class="col-md-3 text-dark" to="/profile/investment/investdetails/settlement"><div class=" nav-items small-screen-nav" @click="isActiveTwo" :class="{ active: isActive2I }" style="padding-left:2px" >Settlement Account</div></router-link>
                       <router-link class="col-md-3 text-dark"  to="/profile/investment/investdetails/nextofkin" ><div class="nav-items ml-0 small-screen-nav" @click="isActiveThree" :class="{ active: isActive3I }" >Next of Kin Details</div></router-link>
                       <router-link class="link col-md-3 text-dark" to="/profile/investment/investdetails/signature"> <div class="nav-items small-screen-nav" @click="isActiveFour" :class="{ active: isActive4I }" >Signature</div></router-link>        
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