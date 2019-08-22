<template>
  <div>
      <div class="container">
          <div class="containe main-container">
               <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:auto">
                   <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Loan Application Form</span></div>
                   <router-link to="/profile/loan/apply">
                       <div class="back-arrow-div">
                         <i class="fas fa-arrow-left text-white"></i>   
                       </div>
                   </router-link>
                   <div class="loan-navigation container row">
                       <router-link class="col-md-3 text-dark " to='/profile/loan/loandetails/loaninformation'><div class="nav-items" @click="isActiveOne" :class="{ active: isActive1 }" >Loan Details</div></router-link>
                       <router-link class="col-md-3 text-dark" to="/profile/loan/loandetails/workinfo"><div class=" nav-items" @click="isActiveTwo" :class="{ active: isActive2 }" style="padding-left:2px" >Work Information</div></router-link>
                       <router-link class="col-md-3 text-dark"  to="/profile/loan/loandetails/guarantor" ><div class="nav-items ml-0" @click="isActiveThree" :class="{ active: isActive3 }" >Guarantor Details</div></router-link>
                       <router-link class="link col-md-3 text-dark" to="/profile/loan/loandetails/signature"> <div class="nav-items" @click="isActiveFour" :class="{ active: isActive4 }" >Signature</div></router-link>        
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
    // mounted () {
    //     this.isActiveOne()
    // }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blak;
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

</style>