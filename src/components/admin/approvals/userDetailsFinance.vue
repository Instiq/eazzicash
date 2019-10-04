<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

<div class="container p-3 mb-5" style="margin-top:30px;margin-bottom:30px">
  <div class="row" style="margin-left:5%;margin-right:5%;">
    <div class="col">
      <p><a href="/adminProfile/approvals/finance"><i style='font-size:24px' class='fas'>&#xf060;</i></a></p>
      <p class="text-success font-weight-bold">Finance Request Details</p>
      
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
              <td class="col-sm-3">Finance Purpose</td>
              <td class="col-sm-3 text-success"> {{userDetails.financePurpose}}</td>
              <td class="col-sm-3">Finance Tenor</td>
              <td class="col-sm-3 text-success"> {{userDetails.financeTenor}}</td>
            </tr>
            <tr class="row">
              <td class="col-sm-3">Finance Amount</td>
              <td class="text-success col-sm-3"> &#8358; {{formatAmount(userDetails.financeAmount)}}</td>
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
                   <img class="img-fluid" :src="id" alt="id">
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
                                Guarantor {{index+1}} : 
                                <ul>
                                  <li>Status : {{userDetails.guarantors[index].status}}</li>
                                  <li>Name : {{userDetails.guarantors[index].firstName}} {{userDetails.guarantors[index].lastName}}</li>
                                  <li>Phone : {{userDetails.guarantors[index].phoneNumber}} </li>
                                  <li>Email :  {{userDetails.guarantors[index].email}}</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
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
                <td class="col-sm-3">Joint Receivable Account</td>
                <td class="col-sm-3 text-success"> {{userDetails.collateral.jointReceivableAccount}} </td>
                 <td class="col-sm-3">Contract Receivable Account</td>
                <td class="col-sm-3 text-success"> {{userDetails.collateral.contractReceivableAccount}} </td>
            </tr>
            <tr class="row">
                <td class="col-sm-6">Supporting Documents</td>
                <td class="col-sm-6">
                    <div class="form-group" style="height:auto; width:auto; border:2px solid whitesmoke">
                    <img  class="img-fluid" :src="supportingDocuments" alt="suporting documents">
                    </div>
                </td>
            </tr>
            <tr class="row" v-if="userDetails.collateral.otherDocuments">
                <td class="col-sm-6">Other Documents</td>
                <td class="col-sm-6">
                    <div class="form-group" style="height:auto; width:auto; border:2px solid whitesmoke">
                    <img  class="img-fluid" :src="otherDocuments" alt="other documents">
                    </div>
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
                  <button @click="updateFinanceAdmin"  class="btn btn-info" style="margin-left:30px; padding:10px 20px; font-size:15px; margin-top:25px"> Update  <span v-if="isLoading3"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>

              </div>
          </div>
     
      

      <div class="form-group">
          <textarea type="text" placeholder="comment...." class="form-control"></textarea>
      </div>

      <div class="text-center">
          <!-- <button  class="btn btn-success mr-5" ><span style="font-size:15px;  padding:10px 20px;">Approve</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
          <!-- <button  class="btn btn-danger "><span style="font-size:15px;  padding:10px 20px;">Decline</span> <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button> -->
           <button @click="updateFinanceStatusApprove" class="btn btn-success ml-n2" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Approve  <span v-if="isLoading1"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
           <button @click="updateFinanceStatusDecline"  class="btn btn-danger" style="margin-left:100px; padding:10px 20px; font-size:15px; margin-top:25px"> Decline  <span v-if="isLoading2"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span>   </button>
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
     add () {
           this.$store.dispatch('increment')
    },
    minus () {
           this.$store.dispatch('decrement')
    },
    updateFinanceAdmin () {
         this.isLoading3= true;
        this.$store.dispatch('updateFinanceAdmin')
            .then(_ => this.isLoading3=false)
            .catch(_ => this.isLoading3=false)
    },
    updateFinanceStatusApprove() {
        this.isLoading1= true;
         this.$store.commit('setLoading', true)
        this.$store.dispatch('updateFinanceStatusApprove')
            .then(_ => this.isLoading1=false)
            .catch(_ => this.isLoading1=false)
    },
    updateFinanceStatusDecline() {
         this.isLoading2= true;
         this.$store.dispatch('updateFinanceStatusDecline')
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
     supportingDocuments () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.collateral.supportingDocuments}`
     },
      otherDocuments () {
         return `https://still-bastion-19162.herokuapp.com/images/${this.userDetails.collateral.otherDocuments}`
     },
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

 mounted () {
     this.$store.commit('setPrincipal', (this.userDetails.financeAmount))
      this.$store.commit('setTenor', this.userDetails.financeTenor)

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