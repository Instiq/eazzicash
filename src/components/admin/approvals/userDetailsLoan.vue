<template>
  <div class="container wrapper">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-3" style="margin-top:30px;margin-bottom:30px">
  <div class="\" style="margin-left:5%;margin-right:5%;">
    <div class="col">
     <div class="d-flex justify-content-between">
        <p><router-link to="/adminProfile/approvals/loan"><i style='font-size:24px' class='fas'>&#xf060;</i></router-link></p>
        <button @click="modal=true; confirm_confirmation=true" class="btn btn-info">Resend Confirmation </button>
     </div>
      
       <p class="text-success font-weight-bold">Personal Details</p>
       <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
             <tr class="row">
              <td class="col-sm-2">First Name</td>
              <td class="col-sm-2 text-success"> {{userDetails.userDetails.firstName}}</td>
              <td class="col-sm-2">Last Name</td>
              <td class="col-sm-2 text-success"> {{userDetails.userDetails.lastName}}</td>
              <td class="col-sm-2">Phone Number</td>
              <td class="col-sm-2 text-success"> {{userDetails.userDetails.phoneNumber}}</td>
            </tr>
             <tr class="row">
              <td class="col-sm-2">Email</td>
              <td class="col-sm-5 text-success"> {{userDetails.userDetails.email}}</td>
               <td class="col-sm-3">Years Lived in Address</td>
              <td class="col-sm-2 text-success"> {{userDetails.personalDetails.yearsInAddress}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-1">Address</td>
              <td class="text-success col-sm-4"> {{userDetails.personalDetails.address}}</td>
               <td class="col-sm-1">BusStop</td>
              <td class="text-success col-sm-3">{{userDetails.personalDetails.busstop}}</td>
              <td class="col-sm-1">State</td>
              <td class="col-sm-2 text-success"> {{userDetails.personalDetails.state}} </td>
            </tr>
            <tr class="row">
               <td class="col-sm-3">Means of Identification</td>
              <td class="col-sm-3 text-success"> {{userDetails.personalDetails.meansOfId}} </td>
               <td class="col-sm-2">ID Card</td>
              <td class="col-sm-4">
                  <form action="/action_page.php">
                    <div class="form-group" style= "width:auto; height:80px">
                    <a :href="userDetails.personalDetails.idCard" download><img class="img-fluid"  :src="userDetails.personalDetails.idCard" alt="id"></a>
                    </div>
                </form>
              </td>
            </tr>
            <tr class="row">
              <td class="col-sm-2" v-if="userDetails.personalDetails.otherId">Other ID</td>
              <td class="col-sm-4 text-success" v-if="userDetails.personalDetails.otherId"> 
                <form action="/action_page.php">
                    <div class="form-group" style= "width:auto; height:80px">
                    <a :href="userDetails.personalDetails.otherId" download><img class="img-fluid"  :src="userDetails.personalDetails.otherId" alt="id"></a>
                    </div>
                </form> 
              </td>
              <td class="col-sm-2">Signature</td>
              <td class="col-sm-4">
                 <form action="/action_page.php">
                    <div class="form-group" style= "width:auto; height:80px">
                    <a :href="userDetails.personalDetails.signature" download><img class="img-fluid" :src="userDetails.personalDetails.signature" alt="id"></a>
                    </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      
      <p class="text-success font-weight-bold">Loan Request Details</p>
      <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
            <tr class="row">
               <td class="col-sm-2">Loan Amount</td>
               <td class="text-success col-sm-2" v-if="!userDetails.updates.updatedLoanAmount"> &#8358; {{formatAmount(userDetails.loanAmount)}}</td>
              <td class="text-success col-sm-2" v-else> &#8358; {{formatAmount(userDetails.updates.updatedLoanAmount)}}</td>
              <td class="col-sm-2">Loan Purpose</td>
              <td class="col-sm-2 text-success"> {{userDetails.loanPurpose}}</td>
              <td class="col-sm-2">Loan Tenor</td>
              <td class="col-sm-2 text-success" v-if="!userDetails.updates.updatedLoanTenor"> {{userDetails.loanTenor}}</td>
              <td class="col-sm-2 text-success" v-else> {{userDetails.updates.updatedLoanTenor}}</td>
            </tr>
            <tr class="row">
               <td class="col-sm-2">Other Comments</td>
              <td class="col-sm-2 text-success"> {{userDetails.workInformation.otherComments}} </td>
               <td class="col-sm-2">Any indebtedness?</td>
              <td class="col-sm-2 text-success"> {{userDetails.indebtedness}}  </td>
              <td class="col-sm-2">List indebtedness</td>
              <td class="col-sm-2"><b class="text-success">{{userDetails.listIndebtedness}}</b></td>
            </tr>
            <tr class="row">
              <td class="col-sm-2">Repayment Mode</td>
              <td class="col-sm-2 text-success"> {{userDetails.repaymentMode}}  </td>
              <td class="col-sm-2">Account Number</td>
              <td class="col-sm-2"><b class="text-success">{{userDetails.accountNumber}}</b></td>
              <td class="col-sm-2">Bank Name</td>
              <td class="col-sm-2"><b class="text-success">{{userDetails.bankName}}</b></td>
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
                <td class="col-sm-2">Employment Type</td>
                <td class="col-sm-2"><b class="text-success"> {{userDetails.workInformation.employmentType}}</b></td>
                <td class="col-sm-2">Company Name</td>
                <td class="col-sm-2 text-success"> {{userDetails.workInformation.companyName}} </td>
                <td class="col-sm-2">Phone Number</td>
                <td class="col-sm-2 text-success"> {{userDetails.workInformation.companyPhone}} </td>
            </tr>
             <tr class="row">
                <td class="col-sm-2">Official Email</td>
                <td class="col-sm-5 text-success"> {{userDetails.workInformation.officialEmail}} </td>
                <td class="col-sm-2">Company Address</td>
                <td class="col-sm-3 text-success"> {{userDetails.workInformation.companyAddress}} </td>
               
            </tr>
             <tr class="row">
                 <td class="col-sm-2">Position</td>
                <td class="col-sm-2 text-success"> {{userDetails.workInformation.position}} </td>
                 <td class="col-sm-2">Salary Date</td>
                <td class="col-sm-2 text-success"> {{moment(userDetails.workInformation.salaryDate)}} </td>
                <td class="col-sm-2">Quarterly Date</td>
                <td class="col-sm-2 text-success" v-if="userDetails.workInformation.quarterlyDate"> {{moment(userDetails.workInformation.quarterlyDate)}} </td>
                <td class="col-sm-2" v-else></td>
            </tr>
             <tr class="row">
                <td class="col-sm-3">Monthly Income</td>
                <td class="col-sm-3 text-success"> &#8358;{{formatAmount(userDetails.workInformation.monthlyIncome)}} </td>
                <td class="col-sm-3">Annual Income</td>
                <td class="col-sm-3 text-success"> &#8358;{{formatAmount(userDetails.workInformation.annualIncome)}} </td>
            </tr>
            </tbody>
      </table>
      </div>

      <p class="font-weight-bold text-success">Guarantor Details</p><hr>
       <div class="container table-responsive">
         <table class="table table-striped table-bordered">
            <tbody>
                <tr class="row">
                  <td class="col-sm-2">Status</td>
                  <td class="col-sm-2 text-success">{{userDetails.guarantors[0].status}}</td>
                  <td class="col-sm-2">Name</td>
                  <td class="col-sm-2 text-success"> {{userDetails.guarantors[0].firstName}} {{userDetails.guarantors[0].lastName}}</td>
                   <td class="col-sm-2">Phone Number</td>
                  <td class="col-sm-2 text-success"> {{userDetails.guarantors[0].phoneNumber}}</td>
                </tr>

                <tr class="row">
                  <td class="col-sm-2">Email</td>
                  <td class="col-sm-5 text-success">{{userDetails.guarantors[0].email}}</td>
                  <td class="col-sm-2">Address</td>
                  <td class="col-sm-3 text-success"> {{userDetails.guarantors[0].address}}</td>
                 
                </tr>
                <tr class="row">
                  <td class="col-sm-3">ID Card</td>
                  <td class="col-sm-3 text-success">
                      <form action="/action_page.php">
                        <div class="form-group" style= "width:auto; height:80px">
                        <a :href="userDetails.guarantors[0].idCard" download><img class="img-fluid" :src="userDetails.guarantors[0].idCard" alt="id"></a>
                        </div>
                      </form>
                  </td>
                  <td class="col-sm-3">Signature</td>
                  <td class="col-sm-3 text-success">
                      <form action="/action_page.php">
                        <div class="form-group" style= "width:auto; height:80px">
                        <a :href="userDetails.guarantors[0].signature" download><img class="img-fluid" :src="userDetails.guarantors[0].signature" alt="id"></a>
                        </div>
                      </form>
                  </td>
                </tr>   
                 <tr class="row" v-if="userDetails.guarantors[0].rejectionReason">
                  <td class="col-sm-4">Reason for Rejection</td>
                  <td class="col-sm-6 text-success">{{userDetails.guarantors[0].rejectionReason}}</td>
                </tr>        
              </tbody>
            </table>
          </div>

      
          <div class="row mb-3">
           <div class="col-md-5 mb-3">
                <label for="validationCustomUsername">Final Loan Amount <span class="text-danger">*</span></label>
                <div class="input-group">
                    <div class="input-group-prepend" >
                    <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                    </div>
                    <input type="text" required v-model="principal" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000|max_value:3000000'"  name="Loan Amount"  >
                </div>
            </div>

             <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Final Loan Tenor <span class="text-danger">*</span></label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        <span class="input-group-text" style="cursor:pointer" v-on:click="minus" id="inputGroupPrepend">-</span>
                        </div>
                        <input type="text" class="form-control" style="background:whitesmoke" disabled v-model.number="tenor" id="validationCustom02" placeholder="Duration (months)" aria-describedby="inputGroupPrepend" required>
                        <div class="input-group-append">
                        <span class="input-group-text" style="cursor:pointer" @click='add' id="inputGroupAppend">+</span>
                        </div>
                    </div>
              </div>

              <div class="col-md-3">
                  <button @click="modal=true; confirm_update=true; confirm_approve=false;"  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update   </button>

              </div>
          </div>

        <div class="modal-window">
          <mdb-modal removeBackdrop :show="modal" @close="modal = false;confirm_confirmation=false; confirm_decline=false; confirm_approve=false; confirm_update=false">
            <mdb-modal-header>
              <div class="text-center font-weight-bold" v-show="confirm_approve">Approve Request</div>
              <div class="text-center font-weight-bold" v-show="confirm_decline">Decline Request</div>
              <div class="text-center font-weight-bold" v-show="confirm_update">Update Request</div>
               <div class="text-center font-weight-bold" v-show="confirm_confirmation">Resend  Confirmation</div>
            </mdb-modal-header>
      
            <mdb-modal-footer>
              <mdb-btn color="secondary" @click.native="modal = false; confirm_decline=false; confirm_approve=false; confirm_update=false">cancel</mdb-btn>
              <button class="btn bg-success text-white" @click="updateLoanStatusApprove" v-show="confirm_approve" >Confirm Approval <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
              <button class="btn bg-danger text-white" @click="updateLoanStatusDecline" v-show="confirm_decline" >Confirm Rejection <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
              <button class="btn bg-info text-white" @click="updateLoanAdmin" v-show="confirm_update" >Confirm Update <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
               <button class="btn bg-info text-white" @click="resendConfirmation" v-show="confirm_confirmation" >Send Email<span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
            </mdb-modal-footer>
          </mdb-modal>
        </div>
     
      

      <div class="form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

    </div>
  </div>
</div>
           
      </section>
       <div class="text-center">
           <button @click="modal=true; confirm_approve=true"  class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve   </button>
           <button @click="modal=true; confirm_decline=true"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline</button>
      </div>
  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
import moment from 'moment';
import {mapState} from 'vuex'

export default {
 name:'userDetails',
 components :{
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn

 },

 data () {
     return {
         modal: false,
         confirm_approve:"",
         confirm_decline:"",
         confirm_update:"",
         confirm_confirmation:"",
         isLoading:false,

     }
 },

 methods : {
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
     add () {
           this.$store.dispatch('increment')
    },
    minus () {
           this.$store.dispatch('decrement')
    },
    updateLoanAdmin () {
        this.isLoading= true;
        this.$store.dispatch('updateLoanAdmin')
            .then(_ => {
              this.successMsg = "Updated Successfully!"
              this.isLoading=false;
              this.modal = false;
              })
            .catch(_ => {
              this.isLoading=false;
              this.modal = false
              })
    },
    updateLoanStatusApprove() {
        this.isLoading= true;
        this.$store.commit('setLoading', true)
        this.$store.dispatch('updateLoanStatusApprove')
            .then(_ => {
              this.isLoading=false;
              this.modal = false;
              this.successMsg = "Approved Successfully!"
              })
            .catch(_ => {
              this.isLoading=false;
              this.modal = false
              })
    },
    updateLoanStatusDecline() {
         this.isLoading= true;
         this.$store.dispatch('updateLoanStatusDecline')
            .then(_ => {
              this.isLoading=false;
              this.modal = false;
              this.successMsg = "DEclined Successfully!"
            })
            .catch(_ => {
              this.isLoading=false;
              this.modal = false
            })
    },
    moment (date) {
            return moment(date).format('MMMM Do YYYY');
    },
    resendConfirmation () {
      this.isLoading = true;
      this.$store.dispatch('resendConfirmationLoan', this.userDetails._id)
      .then(_ =>  {
        this.isLoading=false;
        this.modal = false;
        this.confirm_confirmation=false;
        this.successMsg = "Resent Successfully!"
        })
      .catch(_ => {
        this.isLoading=false;
        this.modal = false
        })
    },
    showToastrSuccess () {
        this.$toastr.defaultProgressBar = false;
        this.$toastr.defaultStyle = { "background-color": "limegreen" };
        this.$toastr.s( `<strong class='h6'>Success</strong> <br> ${this.successMsg}`);
        this.$store.commit('setIsSuccess', false)
     },
    showToastrError () {
        this.$toastr.defaultProgressBar = false;
        this.$toastr.defaultStyle = { "background-color": "firebrick" };
        this.$toastr.e(`<strong class='h6'>Error</strong><br>${this.errorMsg}`);
        this.$store.commit('setIsError', false)
     },
 
 },

 computed : {

     ...mapState(['isSuccess', 'isError', "errorMsg", 'successMsg', 'userDetails' ]),

     tenor : {
          get () {
                return this.$store.getters.tenor
            },
          set (value) {
                this.$store.dispatch('updateTenor', value )
            }
       },
    principal : {
        get () {
            return this.$store.getters.principal
        },
        set (value) {
            this.$store.dispatch('updatePrincipal', value )
        }
    }, 
 },

  watch : {
     isSuccess (newval) {
        if(newval==true) return this.showToastrSuccess()
     },
    
    isError (newval) {
        if(newval==true) return this.showToastrError()
    }
 },

 mounted () {
    if(!this.userDetails.updates.updatedLoanAmount) {
      this.$store.commit('setPrincipal', (this.userDetails.loanAmount))
    }
    else {
      this.$store.commit('setPrincipal', (this.userDetails.updates.updatedLoanAmount))
    }
    if(!this.userDetails.updates.updatedLoanTenor) {
       this.$store.commit('setTenor', this.userDetails.loanTenor);
    }
    else {
      this.$store.commit('setTenor', (this.userDetails.updates.updatedLoanTenor))
    }
    this.$store.dispatch('updateIsActive1')

 }
}
</script>

<style scoped>
.wrapper {
  border: 2px solid blu;
  padding: 0px
}
.img-fluid {
  height: 80px;
}
.main-container {
    border:2px solid blac;
    margin-left:-3vw;
    max-height: 520px;
    overflow-y: auto;
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