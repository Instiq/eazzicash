<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
  <div class="row" style="margin-left:5%;margin-right:5%;">
    <div class="col">
      <p><a href="/adminProfile/approvals/investment"><i style='font-size:24px' class='fas'>&#xf060;</i></a></p>
      <p class="text-success font-weight-bold">Investment Request Details</p>
      
      <div class="container table-responsive">            
        <table class="table table-striped table-bordered">
          <tbody>
            <tr class="row">
              <td class="col-sm-3">Investment Amount</td>
              <td class="col-sm-3 text-success"> &#8358; {{formatAmount(userDetails.investmentAmount)}}</td>
              <td class="col-sm-3">Investment Tenor</td>
              <td class="col-sm-3 text-success"> {{userDetails.investmentTenor}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Source of Income</td>
              <td class="text-success col-sm-3">{{userDetails.incomeSource}}</td>
               <td class="col-sm-3">OtherInformation</td>
              <td class="col-sm-3 text-success"> {{userDetails.otherInformation}} </td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">ID Attachment</td>
              <td class="col-sm-3">
                <form action="">
                  <div class="form-group" style= "width:auto; height:auto">
                   <img class="img-fluid" :src="id" alt="id">
                  </div>
                </form>
              </td>
               <td class="col-sm-3">Payment Evidence</td>
              <td class="col-sm-3">
                <form action="">
                  <div class="form-group" style= "width:auto; height:auto">
                   <img class="img-fluid" :src="evidence" alt="id">
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr>
      <p class="font-weight-bold text-success">Account Details</p><hr>
       <div class="container table-responsive">
         <table class="table table-striped table-bordered">
            <tbody>
                <tr class="row">
                    <td class="col-sm-4">Account </td>
                    <td class="col-sm-8">
                        <ul class="ml-n4" v-for="(item, name) in userDetails.accountDetails" :key="item">
                            <li>
                                {{name}}: {{item}}
                            </li>
                        </ul>
                    </td>
                </tr>
        </tbody>
      </table>
       </div>
       <p class="font-weight-bold text-success">Next of Kin Details</p><hr>
       <div class="container table-responsive">
         <table class="table table-striped table-bordered">
            <tbody>
                <tr class="row">
                    <td class="col-sm-4">Next of Kin</td>
                    <td class="col-sm-8">
                        <ul class="ml-n4" v-for="(item, name) in userDetails.nextOfKin" :key="item">
                            <li>
                                {{name}}: {{item}}
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
                    <img  class="img-fluid" :src="signature" alt="signature">
                </div>
            </td>
          </tr>
        </tbody>
      </table>

      
          <div class="row mb-3">
           <div class="col-md-5 mb-3">
                <label for="validationCustomUsername">Final Investment Amount <span class="text-danger">*</span></label>
                <div class="input-group">
                    <div class="input-group-prepend" >
                    <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                    </div>
                    <input type="text" required v-model="investPrincipal" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000|max_value:3000000'"  name="Loan Amount"  >
                </div>
            </div>

             <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Final Investment Tenor <span class="text-danger">*</span></label>
                        <select class="browser-default custom-select" v-model="investTenor" required>
                            <option value="1">1 month</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                        </select>
              </div>

              <div class="col-md-3">
                  <button @click="updateInvestAdmin"  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update  <span v-if="isLoading3"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>

              </div>
          </div>
     
      

      <div class="form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

      <div class="text-center">
          <!-- <button  class="btn btn-success mr-5" ><span style="font-size:15px;  padding:10px 20px;">Approve</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
          <!-- <button  class="btn btn-danger "><span style="font-size:15px;  padding:10px 20px;">Decline</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
           <button @click="updateInvestStatusApprove" class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve  <span v-if="isLoading1"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
           <button @click="updateInvestStatusDecline"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline  <span v-if="isLoading2"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
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
    updateInvestAdmin () {
         this.isLoading3= true;
        this.$store.dispatch('updateInvestAdmin')
            .then(_ => this.isLoading3=false)
            .catch(_ => this.isLoading3=false)
    },
    updateInvestStatusApprove() {
        this.isLoading1= true;
         this.$store.commit('setLoading', true)
        this.$store.dispatch('updateInvestStatusApprove')
            .then(_ => this.isLoading1=false)
            .catch(_ => this.isLoading1=false)
    },
    updateInvestStatusDecline() {
         this.isLoading2= true;
         this.$store.dispatch('updateInvestStatusDecline')
            .then(_ => this.isLoading2=false)
            .catch(_ => this.isLoading2=false)
    }
 },

 computed : {
     userDetails () {
        return this.$store.state.userDetails
     },
     id () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.id}`
     },
     signature () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.signature}`
     },
     evidence () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.paymnetEvidence}`
     },
    investTenor : {
        get () {
            return this.$store.getters.investTenor
        },
        set (value) {
            this.$store.dispatch('updateInvestTenor', value )
        }
    },
    investPrincipal : {
        get () {
            return this.$store.getters.investPrincipal
        },
        set (value) {
            this.$store.dispatch('updateInvestPrincipal', value )
        }
    },
    
 },

 mounted () {
     this.$store.commit('setInvestPrincipal', (this.userDetails.investmentAmount))
      this.$store.commit('setInvestTenor', this.userDetails.investmentTenor)

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