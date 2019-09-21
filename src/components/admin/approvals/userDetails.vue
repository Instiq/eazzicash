<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
  <div class="row" style="margin-left:5%;margin-right:5%;">
    <div class="col">
      <p><a href="/adminProfile/approvals/loan"><i style='font-size:24px' class='fas'>&#xf060;</i></a></p>
      <p class="text-success font-weight-bold">Loan Request Details</p>
      
      <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
            <tr class="row">
              <td class="col-sm-3">Loan Purpose</td>
              <td class="col-sm-3 text-success"> {{userDetails.loanPurpose}}</td>
              <td class="col-sm-3">Loan Tenor</td>
              <td class="col-sm-3 text-success"> {{userDetails.loanTenor}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Loan Amount</td>
              <td class="text-success col-sm-3"> &#8358; {{formatAmount(userDetails.loanAmount)}}</td>
               <td class="col-sm-3">Other Comments</td>
              <td class="col-sm-3 text-success"> {{userDetails.otherComments}} </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Any indebtedness?</td>
              <td class="col-sm-3 text-success"> {{userDetails.indebtedness}}  </td>
              <td class="col-sm-3">List indebtedness</td>
              <td class="col-sm-3"><b class="text-success">{{userDetails.listIndebtedness}}</b></td>
            </tr>
            <tr class="row">
              <td class="col-sm-6">ID Attachment</td>
              <td class="col-sm-6">
                <form action="/action_page.php">
                  <div class="form-group" style= "width:auto; height:auto">
                   <img class="img-fluid" :src="image" alt="id">
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="font-weight-bold text-success">Work Information</p>
      <hr>
      <div class="container table-responsive">
        <table class="table table-striped table-bordered">
            <tbody>
            <tr class="row">
                <td class="col-sm-6">Employment Type</td>
                <td class="col-sm-6"><b class="text-success"> {{userDetails.employmentType}}</b></td>
            </tr>
            <tr class="row">
                <td class="col-sm-6">Company Name</td>
                <td class="col-sm-6 text-success"> {{userDetails.companyName}} </td>
            </tr>
            </tbody>
      </table>
      </div>
      <p class="font-weight-bold text-success">Guarantor Details</p><hr>
       <div class="container table-responsive">
         <table class="table table-striped table-bordered">
            <tbody>
                <tr class="row">
                    <td class="col-sm-4">Guarantors </td>
                    <td class="col-sm-8">
                        <ul class="ml-n4" v-for="(item, index) in userDetails.guarantors" :key="index">
                            <li>
                                Guarantor {{index+1}} :  {{userDetails.guarantors[index].status}}
                            </li>
                        </ul>
                    </td>
                </tr>
        </tbody>
      </table>
       </div>
      <p class="font-weight-bold text-success">Signatures</p><hr>
      <table class="table table-borderless">
        <tbody>
          <tr class="row">
            <td class="col-sm-6">Applicant's Signature</td>
            <td class="col-sm-6">
             
                <div class="form-group" style="height:auto; width:auto; border:2px solid whitesmoke">
                    <img src="" alt="signature">
                </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

      <div class="text-center">
          <button type="button" class="btn btn-success mr-5" ><span class="h6">Approve</span></button>
          <button type="button" class="btn btn-danger "><span class="h6" >Decline</span></button>
      </div>

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

 methods : {
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
 },

 computed : {
     userDetails () {
        return this.$store.state.userDetails
     },
     image () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.signature}`
     }
 }
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


</style>