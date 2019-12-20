<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
  <div class="row" style="margin-left:5%;margin-right:5%;">
    <div class="col">
       <div class="d-flex justify-content-between">
        <p><router-link to="/adminProfile/approvals/finance"><i style='font-size:24px' class='fas'>&#xf060;</i></router-link></p>
        <button @click="modal=true; confirm_confirmation=true" class="btn btn-info">Resend Confirmation  <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span> </button>
     </div>
     
      <p class="text-success font-weight-bold">Personal Details</p>
       <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
              <tr class="row">
                <td class="col-sm-3">Customer Firstname</td>
                <td class="col-sm-3 text-success"> {{userDetails.userDetails.firstName}}</td>
                <td class="col-sm-3">Customer Lastname</td>
                <td class="col-sm-3 text-success"> {{userDetails.userDetails.lastName}}</td>
              </tr>
             <tr class="row">
              <td class="col-sm-2">Customer Email</td>
              <td class="col-sm-5 text-success"> {{userDetails.userDetails.email}}</td>
              <td class="col-sm-3">Customer Phone</td>
              <td class="col-sm-2 text-success"> {{userDetails.userDetails.phoneNumber}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Address</td>
              <td class="text-success col-sm-3"> {{userDetails.personalDetails.address}}</td>
              <td class="col-sm-3">Years Lived in Address</td>
              <td class="col-sm-3 text-success"> {{userDetails.personalDetails.yearsInAddress}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Bus Stop</td>
              <td class="text-success col-sm-3">{{userDetails.personalDetails.busstop}}</td>
               <td class="col-sm-3">State</td>
              <td class="col-sm-3 text-success"> {{userDetails.personalDetails.state}} </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Means of Identification</td>
              <td class="col-sm-3 text-success"> {{userDetails.personalDetails.meansOfId}} </td>
              <td class="col-sm-2">ID Card</td>
              <td class="col-sm-4">
                  <form action="/action_page.php">
                    <div class="form-group" style= "width:auto; height:auto">
                    <a :href="userDetails.personalDetails.idCard" download=""><img class="img-fluid" :src="userDetails.personalDetails.idCard" alt="id"></a>
                    </div>
                </form>
              </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Other ID</td>
              <td class="col-sm-3 text-success"> {{userDetails.personalDetails.otherId}}  </td>
              <td class="col-sm-2">Signature</td>
              <td class="col-sm-4">
                 <form action="/action_page.php">
                    <div class="form-group" style= "width:auto; height:auto">
                    <a :href="userDetails.personalDetails.signature" download><img class="img-fluid" :src="userDetails.personalDetails.signature" alt="id"></a>
                    </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      
      
      <p class="text-success font-weight-bold">Finance Request Details</p>
      <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
            <tr class="row">
              <td class="col-sm-3">Finance Purpose</td>
              <td class="col-sm-3 text-success"> {{userDetails.financePurpose}}</td>
              <td class="col-sm-3">Finance Tenor</td>
              <td class="col-sm-3 text-success"> {{userDetails.financeTenor}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Finance Amount</td>
              <td class="text-success col-sm-3"> &#8358; {{formatAmount(userDetails.financeAmount)}}</td>
               <td class="col-sm-3">Other Comments</td>
              <td class="col-sm-3 text-success"> {{userDetails.workInformation.otherComments}} </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Any indebtedness?</td>
              <td class="col-sm-3 text-success"> {{userDetails.indebtedness}}  </td>
              <td class="col-sm-3">List indebtedness</td>
              <td class="col-sm-3"><b class="text-success">{{userDetails.listIndebtedness}}</b></td>
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
                <td class="col-sm-3">Employment Type</td>
                <td class="col-sm-3"><b class="text-success"> {{userDetails.workInformation.employmentType}}</b></td>
                <td class="col-sm-3">Company Name</td>
                <td class="col-sm-3 text-success"> {{userDetails.workInformation.companyName}} </td>
            </tr>
             <tr class="row">
                <td class="col-sm-3">Phone Number</td>
                <td class="col-sm-2 text-success"> {{userDetails.workInformation.companyPhone}} </td>
                <td class="col-sm-2">Official Email</td>
                <td class="col-sm-5 text-success"> {{userDetails.workInformation.officialEmail}} </td>
            </tr>
             <tr class="row">
                <td class="col-sm-3">Company Address</td>
                <td class="col-sm-3 text-success"> {{userDetails.workInformation.companyAddress}} </td>
                <td class="col-sm-3">Rc Number</td>
                <td class="col-sm-3"><b class="text-success"> {{userDetails.workInformation.rcNumber}}</b></td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Position</td>
              <td class="col-sm-3 text-success"> {{userDetails.workInformation.position}} </td>
            </tr>
             <tr class="row">
                <td class="col-sm-3">Salary Date</td>
                <td class="col-sm-3 text-success"> {{moment(userDetails.workInformation.salaryDate)}} </td>
                <td class="col-sm-3">Quarterly Date</td>
                <td class="col-sm-3 text-success" v-if="userDetails.workInformation.quarterlyDate"> {{moment(userDetails.workInformation.quarterlyDate)}} </td>
                <td class="col-sm-3" v-else ></td>
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
                  <td class="col-sm-3">Status</td>
                  <td class="col-sm-3 text-success">{{userDetails.guarantors[0].status}}</td>
                  <td class="col-sm-3">Name</td>
                  <td class="col-sm-3 text-success"> {{userDetails.guarantors[0].firstName}} {{userDetails.guarantors[0].lastName}}</td>
                </tr>

                <tr class="row">
                  <td class="col-sm-2">Email</td>
                  <td class="col-sm-5 text-success">{{userDetails.guarantors[0].email}}</td>
                  <td class="col-sm-3">Phone Number</td>
                  <td class="col-sm-2 text-success"> {{userDetails.guarantors[0].phoneNumber}}</td>
                </tr>

                 <tr class="row">
                  <td class="col-sm-6">Address</td>
                  <td class="col-sm-6 text-success"> {{userDetails.guarantors[0].address}}</td>
                </tr>  

                <tr class="row">
                  <td class="col-sm-3">ID Card</td>
                  <td class="col-sm-3 text-success">
                      <form action="/action_page.php">
                        <div class="form-group" style= "width:auto; height:auto">
                        <a :href="userDetails.guarantors[0].idCard" download><img class="img-fluid" :src="userDetails.guarantors[0].idCard" alt="id"></a>
                        </div>
                      </form>
                  </td>
                  <td class="col-sm-3">Signature</td>
                  <td class="col-sm-3 text-success">
                      <form action="/action_page.php">
                        <div class="form-group" style= "width:auto; height:auto">
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
     
      <p class="font-weight-bold text-success">Collateral details</p>
      <hr>
      <div class="container table-responsive">
        <table class="table table-striped table-bordered">
            <tbody>
            <tr class="row">
                <td class="col-sm-3">Collateral Type</td>
                <td class="col-sm-3"><b class="text-success"> {{userDetails.collateral.collateralType}}</b></td>
                 <td class="col-sm-3">Collateral Description</td>
                <td class="col-sm-3 text-success"> {{userDetails.collateral.collateralDescription}} </td>
            </tr>
            <tr class="row">
                <td class="col-sm-6">Collateral Title</td>
                <td class="col-sm-6"><b class="text-success"> {{userDetails.collateral.collateralTitle}}</b></td>
            </tr>
            <tr class="row">
                <td class="col-sm-3">Joint Receivable Account</td>
                <td class="col-sm-3 text-success" v-if="userDetails.collateral.jointReceivableAccount"> {{userDetails.collateral.jointReceivableAccount}} </td>
                <td class="col-sm-3" v-else></td>
                <td class="col-sm-3">Contract Receivable Account</td>
                <td class="col-sm-3 text-success" v-if="userDetails.collateral.contractReceivableAccount"> {{userDetails.collateral.contractReceivableAccount}} </td>
                <td class="col-sm-3" v-else></td>
            </tr>
             <tr class="row">
                <td class="col-sm-3">Contract Duration (From)</td>
                <td class="col-sm-3 text-success" v-if="userDetails.collateral.contractDuration.from"> {{moment(userDetails.collateral.contractDuration.from)}} </td>
                <td class="col-sm-3" v-else></td>
                <td class="col-sm-3">Contract Duration (To)</td>
                <td class="col-sm-3 text-success" v-if="userDetails.collateral.contractDuration.to"> {{moment(userDetails.collateral.contractDuration.to)}} </td>
                <td class="col-sm-3" v-else></td>
            </tr>
            <tr class="row">
                <td class="col-sm-6">Supporting Documents</td>
                <td class="col-sm-6">
                    <div class="form-group" style="height:auto; width:auto; border:2px solid whitesmoke">
                    <a :href="userDetails.collateral.supportingDocuments" download><img class="img-fluid" :src="userDetails.collateral.supportingDocuments" alt="suporting documents"></a>
                    </div>
                </td>
            </tr>
            <tr class="row" v-if="userDetails.collateral.otherDocuments">
                <td class="col-sm-6">Other Documents</td>
                <td class="col-sm-6">
                    <div class="form-group" style="height:auto; width:auto; border:2px solid whitesmoke">
                    <a :href="userDetails.collateral.otherDocuments" download><img class="img-fluid" :src="userDetails.collateral.otherDocuments" alt="other documents"></a>
                    </div>
                </td>
            </tr>
            </tbody>
      </table>
      </div>


      
          <div class="row mb-3">
           <div class="col-md-5 mb-3">
                <label for="validationCustomUsername">Final Finance Amount <span class="text-danger">*</span></label>
                <div class="input-group">
                    <div class="input-group-prepend" >
                    <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                    </div>
                    <input type="text" required v-model="principal" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000|max_value:3000000'"  name="Finance Amount"  >
                </div>
            </div>

             <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Final Finance Tenor <span class="text-danger">*</span></label>
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
                  <button @click="modal=true; confirm_update=true"  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update   </button>

              </div>
          </div>

           <div class="modal-window">
                <mdb-modal removeBackdrop :show="modal" @close="modal = false;confirm_confirmation=false; confirm_decline=false; confirm_approve=false; confirm_update=false">
                  <mdb-modal-header>
                    <div class="text-center font-weight-bold" v-show="confirm_approve">Approve Request</div>
                    <div class="text-center font-weight-bold" v-show="confirm_decline">Decline Request</div>
                    <div class="text-center font-weight-bold" v-show="confirm_update">Update Request</div>
                  </mdb-modal-header>
            
                  <mdb-modal-footer>
                    <mdb-btn color="secondary" @click.native="modal = false; confirm_decline=false; confirm_approve=false; confirm_update=false">cancel</mdb-btn>
                    <button class="btn bg-success text-white" @click="updateFinanceStatusApprove" v-show="confirm_approve" >Confirm Approval <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                    <button class="btn bg-danger text-white" @click="updateFinanceStatusDecline" v-show="confirm_decline" >Confirm Rejection <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                    <button class="btn bg-info text-white" @click="updateFinanceAdmin" v-show="confirm_update" >Confirm Update <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                     <button class="btn bg-info text-white" @click="resendConfirmation" v-show="confirm_confirmation" >Send Email<span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                  </mdb-modal-footer>
                </mdb-modal>
              </div>
    

      <div class="form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

      <div class="text-center">
          <!-- <button  class="btn btn-success mr-5" ><span style="font-size:15px;  padding:10px 20px;">Approve</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
          <!-- <button  class="btn btn-danger "><span style="font-size:15px;  padding:10px 20px;">Decline</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
           <button @click="modal=true; confirm_approve=true" class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve    </button>
           <button @click="modal=true; confirm_decline=true"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline    </button>
      </div>

    </div>
  </div>
</div>



          
               
      </section>
  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';
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
    updateFinanceAdmin () {
         this.isLoading= true;
        this.$store.dispatch('updateFinanceAdmin')
            .then(_ => this.isLoading=false)
            .catch(_ => this.isLoading=false)
    },
    updateFinanceStatusApprove() {
        this.isLoading= true;
         this.$store.commit('setLoading', true)
        this.$store.dispatch('updateFinanceStatusApprove')
            .then(_ => this.isLoading=false)
            .catch(_ => this.isLoading=false)
    },
    updateFinanceStatusDecline() {
         this.isLoading= true;
         this.$store.dispatch('updateFinanceStatusDecline')
            .then(_ => this.isLoading=false)
            .catch(_ => this.isLoading=false)
    },
     moment (date) {
            return moment(date).format('MMMM Do YYYY');
    },
     resendConfirmation () {
      this.isLoading = true;
      this.$store.dispatch('resendConfirmationFinance', this.userDetails._id)
      .then(_ => this.isLoading=false)
      .catch(_ => this.isLoading=false)
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

     ...mapState(['isSuccess', 'isError', 'successMsg', "errorMsg", 'userDetails' ]),

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
    },
  },

 mounted () {
     this.$store.commit('setPrincipal', (this.userDetails.financeAmount))
      this.$store.commit('setTenor', this.userDetails.financeTenor);
      this.$store.dispatch('updateIsActive3')

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

  input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }



</style>