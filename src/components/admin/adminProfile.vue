<template>
    <div class="">

        <section class="mb-5 d-flex position-fixed" style="height:10vh;width:100%;z-index:1; box-shadow:20px 20px blur; background:#424242; justify-content:space-between" >
             <p v-if="['adminDashboard'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold;   margin-left:25%">Dashboard</p>
            <p v-if="['approvals'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">Approvals</p>
            <p v-if="['userManagement'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">User Management</p>
             <p v-if="['userDetails'].includes($route.name)" class="text-white profileItems" style="font-size:19px; margin-top:24px;  font-weight:bold; margin-left:25%">User Management</p>
            
            <div>
              <span waves class="hambger container text-black" @click="openNav">&#9776; </span>
              <!-- <span class="text-white" @click="openNav" style="font-size:22px; position:absolute; margin-left:55px; margin-top:18px; cursor:pointer">Dashboard</span>    -->
            </div>
    
            <div icon='envelope' right class="float-right py-4 d-flex" style="border:2px solid blu;flex-direction:row">
              <!-- <a href="#" icon='envelope' class="mr-5 text-white"> <i class="fas fa-envelope mr-1"></i> <span class="d-none d-sm-inline-block" >Contact</span></a> -->
              
              <a  @click="userSignOut" class="mr-5  text-white"><i class="fas fa-sign-out-alt mr-1"></i><span class="d-none d-sm-inline-block">Logout</span></a>
              
              <!-- <a href="#" class="mr-5   text-white" ><i class="fas fa-user mr-1"></i><span class="d-none d-sm-inline-block"> Account</span></a> -->
            </div>       
        </section>

        <!--  side bar main -->

        <section id="mySidenav" class="sidenav" style="z-index:2">
            <div class="wrapper-head">
              <img class ='nav' src = "./adminIcons/logomain.png" height="40px" />
              <span class='navheader sidenav-items'>MyEazziCash</span>
            </div>

          <!-- avatar image -->
            <div class="row mt-n4 avatar-main">
                <div class="col-6">
                <img src="./adminIcons/avatar3.jpg" class="avatar rounded-pill" alt=""> 
                </div>
                <div class="col-6">
                   <span class="avatar-welcome">Welcome <br> {{name}}</span>
                </div>
            </div>

           <!-- closenav icon -->

            <a href="javascript:void(0)" class="closebtn sidenav-items" @click="closeNav">&times;</a>

            <!-- profile items -->
            <router-link to="/adminProfile/adminDashboard"> <img src="./adminIcons/Home.svg" height="15vh" style="" alt=""> <span class="sidenav-items" style="margin-left:16px">Dashboard</span></router-link>
            <a href="/adminProfile/userManagement">   <i class="fas fa-user"></i><span class="sidenav-items" style="margin-left:18px">User Management</span></a>
            <a href="/adminProfile/approvals"> <i class="fas fa-check"></i> <span class="sidenav-items" style="margin-left:15px"> Approvals</span></a>
            <a href="#"> <img src="./adminIcons/Investments.svg" height="14vh" style="" alt=""> <span class="sidenav-items" style="margin-left:9px">Reports</span></a>
    
        </section>

        <!-- <img src=".../assets/Home.svg" height="15vh" style="" alt=""> 
         <img src="../assets/Investments.svg" height="14vh" style="" alt="">
            <img src=".../assets/Loan.svg" height="15vh" style="margin-left:3px" alt="">
            <img src="..../assets/Finance.svg" height="13vh" style="" alt="">
             <img src=".../assets/Pawnshop.svg" height="14vh" style='' alt=""> -->


        <div class="children-routes container">
            <router-view> </router-view>
        </div>

        
    
    </div>
</template>

<script>
import{mdbNavbar, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
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
    mdbCol
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
        document.getElementById("mySidenav").style.width = "120px";
        document.querySelector('.avatar-welcome').style.display='none';
        let items = document.querySelectorAll('.sidenav-items');
        items.forEach((item, index)=>item.style.display='none');
        document.querySelector('.avatar').style.marginLeft='7.5px';
        document.querySelector('.nav').style.marginLeft='25px';
        },

        userSignOut () {
         this.$store.dispatch('userSignOut')
        }
        
    },
    computed : {
      name () {
        return this.$store.getters.name
      }
    },

    mounted () {
      this.openNav()
     },
  
}
</script>

<style>
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
  /* border:2px solid balck; */
  left:15vw;
  top:20vh;
  height:auto; 
  width:auto;
  display: inline-block;
  /* margin: 0px 60vw; */
}

/* my custom styles */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>