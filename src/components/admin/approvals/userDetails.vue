<template>
  <div class="container">
      <section class="container main-container " style="height:auto; width:80vw">

        <div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
        <div class="row container" style="margin-left:5%;margin-right:5%;">
            <p class="text-primary" style="cursor:pointer;" @click="goBack"><i style='font-size:24px' class='fas'>&#xf060;</i></p>
            <p class="text-success font-weight-bold ml-3">User Details</p>
            
            <div class="container table-responsive">            
                <table class="table table-striped table-bordered">
                <tbody>
                    <tr class="row">
                    <td class="col-sm-1">ID</td>
                    <td class="col-sm-5 text-success"> {{userDetails._id}}</td>
                    <td class="col-sm-1">Name</td>
                    <td class="col-sm-5 text-success"> {{userDetails.firstName}} {{userDetails.lastName}}</td>
                    </tr>
                    <tr class="row">
                    <td class="col-sm-1">Email</td>
                    <td class="col-sm-5 text-success"> {{userDetails.email}}</td>
                    <td class="col-sm-1">Phone</td>
                    <td class="col-sm-5 text-success"> {{userDetails.phoneNumber}}</td>
                    </tr>
                    <!-- <tr class="row">
                    <td class="col-sm-2">Address</td>
                    <td class="text-success col-sm-5"> {{userDetails.address}}</td>
                    <td class="col-sm-1">State</td>
                    <td class="col-sm-4 text-success"> {{userDetails.state}} </td>
                    </tr>
                    <tr class="row">
                    <td class="col-sm-3">Country</td>
                    <td class="col-sm-3 text-success"> {{userDetails.country}}  </td>
                    <td class="col-sm-3">ID Attachment</td>
                    <td class="col-sm-3">
                        <form action="">
                        <div class="form-group" style= "width:auto; height:auto">
                        <img class="img-fluid" :src="id" alt="id">
                        </div>
                        </form>
                    </td>
                    </tr> -->
                </tbody>
                </table>
            </div> 
           </div>   
          </div> 
      </section>
  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
 name:'userDetails',
 components :{
    mdbIcon,
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

 data () {
     return {
         isLoading1:false,
         isLoading2:false,
         isLoading3:false
     }
 },

 methods : {
   goBack () {
       this.$router.go(-1)
   }
   
 },

 computed : {
     userDetails () {
        return this.$store.state.userDetails
     },
     id () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.displayPicture}`
     }
 },

}
</script>

<style scoped>
.main-container {
    border:2px solid blac;
    margin-left:-3vw;
    height: auto;
    overflow-x: hidden
 }
  textarea:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

  input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }



</style>