<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

        <div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
          <div class="row" style="margin-left:5%;margin-right:5%;">
            <div class="col">
              <p><router-link to="/adminProfile/approvals/pawn"><i style='font-size:24px' class='fas'>&#xf060;</i></router-link></p>
              
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

              <p class="text-success font-weight-bold">Pawn Request Details</p>
              <div class="container table-responsive">            
                <table class="table table-striped table-bordered">
                  <tbody>
                    <tr class="row">
                      <td class="col-sm-2">Pawn Amount</td>
                      <td class="text-success col-sm-2" v-if="!userDetails.updates.updatedPawnAmount"> &#8358; {{formatAmount(userDetails.pawnAmount)}}</td>
                       <td class="text-success col-sm-2" v-else> &#8358; {{formatAmount(userDetails.updates.updatedPawnAmount)}}</td>
                      <td class="col-sm-2">Pawn Tenor</td>
                      <td class="col-sm-2 text-success"> {{userDetails.pawnTenor}}</td>
                      <td class="col-sm-2">Item category</td>
                      <td class="text-success col-sm-2">{{userDetails.itemCategory}}</td>
                    </tr>
                    <tr class="row">
                      <td class="col-sm-2">Item Description</td>
                      <td class="col-sm-2 text-success"> {{userDetails.itemDescription}} </td>
                      <td class="col-sm-2">Item Condition</td>
                      <td class="col-sm-2 text-success"> {{userDetails.itemCondition}}  </td>
                      <td class="col-sm-2">Item Release Year</td>
                      <td class="col-sm-2"><b class="text-success">{{userDetails.itemReleaseYear}}</b></td>
                    </tr>
                    <tr class="row">
                      
                    </tr>
                    <tr class="row">
                      <td class="col-sm-2">Item Purchase Date</td>
                      <td class="col-sm-2 text-success"> {{moment(userDetails.itemPurchaseDate)}}  </td>
                      <td class="col-sm-2">Item Purchase Location</td>
                      <td class="col-sm-2"><b class="text-success">{{userDetails.itemPurchaseLocation}}</b></td>
                      <td class="col-sm-2">Item Receipt</td>
                      <td class="col-sm-2">
                        <form action="/action_page.php">
                          <div class="form-group" style= "width:auto; height:80px">
                          <a :href="userDetails.itemReceipt" download> <img class="img-fluid" :src="userDetails.itemReceipt" alt="id"></a>
                          </div>
                        </form>
                      </td>
                    </tr>

                    <tr class="row">
                      <td class="col-sm-2">Account Number</td>
                      <td class="col-sm-3 text-success"> {{(userDetails.accountNumber)}}  </td>
                      <td class="col-sm-2">Bank Name</td>
                      <td class="col-sm-2"><b class="text-success">{{userDetails.bankName}}</b></td>
                       <td class="col-sm-2">Sworn Afidavit?</td>
                          <td class="col-sm-1">{{userDetails.swornAffidavit}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
              <div class="row mb-3">
              <div class="col-md-5 mb-3">
                    <label for="validationCustomUsername">Final Pawn Amount <span class="text-danger">*</span></label>
                    <div class="input-group">
                        <div class="input-group-prepend" >
                        <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                        </div>
                        <input type="text" required v-model="pawnAmount" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000|max_value:3000000'"  name="Loan Amount"  >
                    </div>
                </div>

                  <div class="col-md-3">
                      <button @click='modal=true; confirm_update=true'  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update </button>

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
                    <button class="btn bg-success text-white" @click="updatePawnStatusApprove" v-show="confirm_approve" >Confirm Approval <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                    <button class="btn bg-danger text-white" @click="updatePawnStatusDecline" v-show="confirm_decline" >Confirm Rejection <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                    <button class="btn bg-info text-white" @click="updatePawnAdmin" v-show="confirm_update" >Confirm Update <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
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
            <!-- <button  class="btn btn-success mr-5" ><span style="font-size:15px;  padding:10px 20px;">Approve</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
            <!-- <button  class="btn btn-danger "><span style="font-size:15px;  padding:10px 20px;">Decline</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
            <button @click="modal=true; confirm_approve=true" class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve   </button>
            <button @click="modal=true; confirm_decline=true"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline   </button>
        </div>
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
        isLoading:false,
     }
 },

 methods : {
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    updatePawnAdmin () {
      this.isLoading= true;
      this.$store.dispatch('updatePawnAdmin')
        .then(_ =>  {
          this.isLoading=false;
          this.modal = false;
          })
        .catch(_ => {
          this.isLoading=false;
          this.modal = false;
          })
    },
    updatePawnStatusApprove() {
        this.isLoading= true;
        this.$store.commit('setLoading', true)
        this.$store.dispatch('updatePawnStatusApprove')
            .then(_ =>  {
              this.isLoading=false;
              this.modal = false;
              })
            .catch(_ => {
              this.isLoading=false;
              this.modal = false;
              })
    },
    updatePawnStatusDecline() {
         this.isLoading= true;
         this.$store.dispatch('updatePawnStatusDecline')
            .then(_ =>  {
              this.isLoading=false;
              this.modal = false;
              })
            .catch(_ => {
              this.isLoading=false;
              this.modal = false;
              })
    },
    moment (date) {
            return moment(date).format('MMMM Do YYYY');
    },
     showToastrSuccess () {
        this.$toastr.defaultProgressBar = true;
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
  
    pawnAmount : {
          get () {
              return this.$store.getters.pawnAmount
          },
          set (value) {
              this.$store.dispatch('updatePawnAmount', value )
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
     if(!this.userDetails.updates.updatedPawnAmount) {
      this.$store.commit('setPawnAmount', (this.userDetails.pawnAmount))
    }
    else {
      this.$store.commit('setPawnAmount', (this.userDetails.updates.updatedPawnAmount))
    }
 }
}
</script>

<style scoped>
.main-container {
    border:2px solid blac;
    margin-left:-3vw;
    overflow-x: hidden;
     max-height: 520px;
    overflow-y: auto;
 }
 .img-fluid {
  height: 80px;
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