<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
  <div class="row" style="margin-left:5%;margin-right:5%;">
    <div class="col">
      <p><a href="/adminProfile/approvals/pawn"><i style='font-size:24px' class='fas'>&#xf060;</i></a></p>
      
       <p class="text-success font-weight-bold">Personal Details</p>
       <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
             <tr class="row">
              <td class="col-sm-3">Customer Email</td>
              <td class="col-sm-3 text-success"> {{userDetails.userDetails.email}}</td>
              <td class="col-sm-3">Customer Phone</td>
              <td class="col-sm-3 text-success"> {{userDetails.userDetails.phoneNumber}}</td>
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
                    <a :href="userDetails.personalDetails.idCard" download><img class="img-fluid" :src="userDetails.personalDetails.idCard" alt="id"></a>
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

      <p class="text-success font-weight-bold">Pawn Request Details</p>
      <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
            <tr class="row">
              <td class="col-sm-3">Pawn Amount</td>
              <td class="text-success col-sm-3"> &#8358; {{formatAmount(userDetails.pawnAmount)}}</td>
              <td class="col-sm-3">Pawn Tenor</td>
              <td class="col-sm-3 text-success"> {{userDetails.pawnTenor}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Item category</td>
              <td class="text-success col-sm-3">{{userDetails.itemCategory}}</td>
               <td class="col-sm-3">Item Description</td>
              <td class="col-sm-3 text-success"> {{userDetails.itemDescription}} </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Item Condition</td>
              <td class="col-sm-3 text-success"> {{userDetails.itemCondition}}  </td>
              <td class="col-sm-3">Item Release Year</td>
              <td class="col-sm-3"><b class="text-success">{{userDetails.itemReleaseYear}}</b></td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Item Purchase Date</td>
              <td class="col-sm-3 text-success"> {{moment(userDetails.itemPurchaseDate)}}  </td>
              <td class="col-sm-3">Item Purchase Location</td>
              <td class="col-sm-3"><b class="text-success">{{userDetails.itemPurchaseLocation}}</b></td>
            </tr>

            <tr class="row">
                 <td class="col-sm-2">Sworn Afidavit?</td>
                  <td class="col-sm-1">{{userDetails.swornAffidavit}}</td>
              <td class="col-sm-3">Item Receipt</td>
              <td class="col-sm-6">
                <form action="/action_page.php">
                  <div class="form-group" style= "width:auto; height:auto">
                  <a :href="userDetails.itemReceipt" download> <img class="img-fluid" :src="userDetails.itemReceipt" alt="id"></a>
                  </div>
                </form>
              </td>
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
                  <button @click="updatePawnAdmin"  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update  <span v-if="isLoading3"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>

              </div>
          </div>
     
      

      <div class="form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

      <div class="text-center">
          <!-- <button  class="btn btn-success mr-5" ><span style="font-size:15px;  padding:10px 20px;">Approve</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
          <!-- <button  class="btn btn-danger "><span style="font-size:15px;  padding:10px 20px;">Decline</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
           <button @click="updatePawnStatusApprove" class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve  <span v-if="isLoading1"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
           <button @click="updatePawnStatusDecline"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline  <span v-if="isLoading2"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
      </div>

    </div>
  </div>
</div>



          
               
      </section>
  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
import moment from 'moment';

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
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    updatePawnAdmin () {
         this.isLoading3= true;
         this.$store.dispatch('updatePawnAdmin')
            .then(_ => this.isLoading3=false)
            .catch(_ => this.isLoading3=false)
    },
    updatePawnStatusApprove() {
        this.isLoading1= true;
         this.$store.commit('setLoading', true)
        this.$store.dispatch('updatePawnStatusApprove')
            .then(_ => this.isLoading1=false)
            .catch(_ => this.isLoading1=false)
    },
    updatePawnStatusDecline() {
         this.isLoading2= true;
         this.$store.dispatch('updatePawnStatusDecline')
            .then(_ => this.isLoading2=false)
            .catch(_ => this.isLoading2=false)
    },
    moment (date) {
            return moment(date).format('MMMM Do YYYY');
        },
 },

 computed : {
     userDetails () {
        return this.$store.state.userDetails
     },
    pawnAmount : {
        get () {
            return this.$store.getters.pawnAmount
        },
        set (value) {
            this.$store.dispatch('updatePawnAmount', value )
        }
    },
 },

 mounted () {
     this.$store.commit('setPawnAmount', (this.userDetails.pawnAmount))
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