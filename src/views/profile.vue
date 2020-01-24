<template>
    <div class="main-wrapper">

        <section  class="mb-5 d-flex  position-fixed header-nav" style="" >
          <p v-if="['dashboard'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold;   margin-left:25%">Dashboard</p>
          <p v-if="['loan'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">Loan</p>
          <p v-if="['pawn'].includes($route.name)" class="text-white  profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">Pawn</p>
          <p v-if="['finance'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">Finance</p>
          <p v-if="['investment'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">Investment</p>
          <div>
            <span waves class="hambger container text-black" @click="openNav">&#9776; </span>
            <!-- <span class="text-white" @click="openNav" style="font-size:22px; position:absolute; margin-left:55px; margin-top:18px; cursor:pointer">Dashboard</span>    -->
          </div>
  
          <div icon='envelope' right class="float-right py-4 px-5 d-flex" style="border:2px solid re;flex-direction:row">
            <mdb-dropdown>
              <mdb-dropdown-toggle slot="toggle" class="text-white mt-n2 small-screen-acc"><i class="fas fa-user mr-1"></i> <span class="d-none d-md-inline-block"> Account</span></mdb-dropdown-toggle>
              <mdb-dropdown-menu class="small-screen-menu mt-sm-1 mt-xl-3">
                <mdb-dropdown-item  @click="profile"> Profile</mdb-dropdown-item>
                 <div class="dropdown-divider"></div>
                <mdb-dropdown-item  @click="userSignOut"> Signout</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </div>       
        </section>

        <!--  side bar main -->

        <section id="mySidenav" class="sidenav" style="z-index:2">
            <div class="wrapper-head">
              <img class ='nav' src = "../assets/logomain.png" height="40px" />
              <span class='navheader sidenav-items'>MyEazziCash</span>
            </div>

          <!-- avatar image -->
            <div class="row mt-n4 avatar-main">
                <div class="col-6" >
                   <div class="">
                       <img v-if="profilePicture" :src="profilePicture" class="avatar rounded-pill" alt="">
                        <img v-if="!profilePicture" src="../assets/avatar2.jpg" class="avatar rounded-pill" alt="">
                   </div>
                
                </div>
                <div class="col-6">
                   <span class="avatar-welcome">Welcome! <br> {{name}}</span>
                </div>
            </div>

           <!-- closenav icon -->

            <a href="javascript:void(0)" class="closebtn sidenav-items" @click="closeNav">&times;</a>

            <!-- profile items -->
            <router-link to="/profile/dashboard"><img src="../assets/Home.svg" height="15vh" style="" alt=""> <span class="sidenav-items" style="margin-left:10px" >Dashboard</span></router-link>
            <a href="/profile/loan/apply"> <img src="../assets/Loan.svg" height="15vh" style="margin-left:3px" alt=""> <span class="sidenav-items" style="margin-left:15px">Loan</span></a>
            <a href="/profile/finance/precheck"> <img src="../assets/Finance.svg" height="13vh" style="" alt=""> <span class="sidenav-items" style="margin-left:11px">Finance</span></a>
            <a href="/profile/pawnshop/precheck"> <img src="../assets/Pawnshop.svg" height="14vh" style='' alt=""> <span class="sidenav-items" style="margin-left:8px">Pawn</span></a>
            <a href="/profile/investment/precheck"> <img src="../assets/Investments.svg" height="14vh" style="" alt=""> <span class="sidenav-items" style="margin-left:6.5px">Investment</span></a>
        </section>


         <div class="children-routes container d-none d-sm-block">
            <router-view> </router-view>
         </div> 

        
        <div class="children-routes container d-sm-none" @click="closeNav">
            <router-view> </router-view>
        </div>

        
    
    </div>
</template>

<script>
import{mdbNavbar,  mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
    name:'profile',
    components:{
    mdbNavbar,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbDropdown,
    mdbDropdownItem, 
    mdbDropdownMenu, 
    mdbDropdownToggle,
    },

    data () {
      return {
      }
    },
    methods : {
        openNav() {
        document.getElementById("mySidenav").style.width = "270px";
        document.querySelector('.avatar-welcome').style.display='block';
        let items = document.querySelectorAll('.sidenav-items');
        items.forEach((item, index)=>item.style.display='inline-block');
        document.querySelector('.avatar').style.marginLeft='15px';
        document.querySelector('.nav').style.marginLeft='0px';
        },

        closeNav() {
        document.getElementById("mySidenav").style.width = "120px"
        document.querySelector('.avatar-welcome').style.display='none';
        let items = document.querySelectorAll('.sidenav-items');
        items.forEach((item, index)=>item.style.display='none');
        document.querySelector('.avatar').style.marginLeft='7.5px';
         document.querySelector('.nav').style.marginLeft='25px';
        },

        userSignOut () {
         this.$store.dispatch('userSignOut')
        },

        profile () {
         this.$router.push('/profile_')
        },
    },
    computed : {
      name () {
        return this.$store.getters.name
      },
      profilePicture () {
        return this.$store.state.userProfile.displayPicture
      }
    },

    mounted () {
      this.openNav();
      this.$store.dispatch('getUserProfile');
     },
  
}
</script>

<style scope>

::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background:green;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
    body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:rgb(0, 85, 0);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color:gainsboro;
  display: block;
  transition: 0.3s;
  font-weight: bold
}

.sidenav a:hover {
  color: #f1f1f1;
  background: rgb(6, 58, 6);
}

.sidenav .closebtn:hover {
  color: #f1f1f1;
  background:none
}



.sidenav .closebtn {
  position: absolute;
  top: -3px;
  right: 10px;
  font-size: 37px;
  margin-left: 70px;
}

/* my custom styles */
.hambger{
    font-size: 30px;
    top: 15px;
    color: #222;
    position: absolute;
    cursor: pointer;
    left: 110px;
    height:0px;
}

 .nav {
  position: relative;
}

.header-nav{
  height:70px;
  width:100%;
  z-index:1; 
  box-shadow:20px 20px blur; 
  background:#424242; 
  justify-content:space-between
}
.navheader {
  position: relative;
  color:white;
  top:-31px;
  left:55px;
  font-weight: bold;
  font-size: 17px
} 

.wrapper-head{
  border: 2px solid gree;
  position: relative;
  top:-60px;
  height: 10.05vh;
  padding-top: 10px;
  background:rgb(6, 58, 6);
}

.avatar{
  height: 100px;
  margin-left: 15px
}

.avatar-welcome {
  position:relative;
  top:25px;
  font-weight:bold;
  color:gainsboro;
  font-size: 16px;

}

.avatar-main {
  border-bottom: 1px solid gainsboro;
  height:20vh;
  margin-bottom: 12px
}

.sidenav-icon {
  margin-right: 15px;
  font-size:15px
}

.sidenav-icon1 {
  margin-right: 10px;
  font-size:15px
}

.sidenav-icon01 {
  margin-right: 19.5px;
  font-size:15px
}

.sidenav-items {
  font-size:17px
}

.children-routes {
  position: absolute;
  left:15vw;
  /* border:2px solid black; */
  top:20vh;
  height:auto; 
  width:auto;
  margin-top: -50px;
  display: inline-block;
  /* margin: 0px 60vw; */
}


/* my custom styles */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

/* @media screen and (max-height: 750px) {
  .profileItems {
  margin-left:50% !important
}
} */

@media (max-width: 750px) {
  .profileItems {
  margin-left:50% !important
}
}

@media (max-width: 424px) {
  .small-screen-acc {
  top:-5px  !important;
  padding-bottom:0px !important;
  margin:0px -20px !important;
}
 .small-screen-menu {
  top:40px  !important;
  /* padding-bottom:0px !important; */
  margin:0px -20px !important;
}
}

@media (min-width: 425px) and (max-width:575px) {
  .small-screen-acc {
  top:5px  !important;
  padding-bottom:10px !important;
  margin:0px -20px !important;
}
 .small-screen-menu {
  top:40px  !important;
  /* padding-bottom:0px !important; */
  margin:0px -20px !important;
}
}


</style>