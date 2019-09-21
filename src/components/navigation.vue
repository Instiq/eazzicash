<template>
    

     <section class="demo-section mt-5">
      <section>
        <mdb-navbar expand="medium" position="top" class="navbar"  dark color="" >
          <mdb-navbar-brand waves href="#" class="ml-5 small-screen-div" > <img src = "../assets/logomain.png" height="50px" class="small-screen-logo" /> <span style="font-family: 'Montserrat', sans-serif; font-size: 38px;" class="font-weight-bold small-screen-title">EazziCash</span></mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav right>
              <mdb-nav-item href="/signin" class ='borderr py- mr-4' active>Sign in</mdb-nav-item>
              <mdb-nav-item href="#" class="mr-5 borderr2">About</mdb-nav-item>
              
    
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
       </section>


   
    
</template>

<script>
import{mdbNavbar, mdbContainer, mdbNavItem, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
name:'navigation',
components:{
    mdbNavbar,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
}
}
</script>

<style scoped>

.navbar {
    box-shadow: 0px 0px
}
.borderr{
    border: 2px solid lightgrey;
    border-radius: 7px
}
@media (max-width:576px){
  .small-screen-div{
      border:3px solid whit;
      margin: 0 auto;
      text-align:center;
      width:61vw
  }
  .small-screen-title{
      font-size:24px !important
  }
  .small-screen-logo{
      height:38px !important;
      margin-top:-6px
  }
  .borderr, .borderr2{
    border: 0px solid ;
    border-radius: 0px;
    float:right
}
}



</style>

