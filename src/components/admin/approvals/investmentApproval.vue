<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

    <div class="container ">
      <div class="row  p-1 mb-5" style="margin-top:-30px">
        <div class="col">
          <p class="text-success mt-5 h6 font-weight-bold">Investment Requests</p>
          <!-- <div class="form-group has-search main">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search">
          </div> -->
          <div class="table-responsive">
              <table class="table table-striped table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" class="text-center">Amount</th>
                      <th scope="col" class="text-center">Details</th>
                      <th scope="col" class="text-center">Status</th>
                      <th scope="col" class="text-center">Date Applied</th>
                      <th scope="col" class="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody v-if="investmentRequests"   >
                    <tr v-for="(item, index) in investmentRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.investmentAmount)}}  </td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                      <td @click="userDetailsAdmin(index); deleteInvestment()" class="text-center text-danger" style="cursor:pointer">   Delete </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
</div>


           
      </section>
  </div>
</template>

<script>
import moment from 'moment'
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
 name:'approvals',
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
    isActiveTwo () {
        this.$store.dispatch('updateIsActive2')
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    moment (x) {
        return moment(x).format("DD/MM/YYYY")
     },
//function to update current investment details by admin
    userDetailsAdmin(n) {
        let newObject  = this.investmentRequests[n]
        this.$store.commit('setUserDetails', newObject);
    }, 

    //function to conditionally show investment details for a particulasr user
   userDetails(n) {
        let newObject  = this.investmentRequests[n]
        this.$store.commit('setUserDetails', newObject)
        this.$router.push('/adminProfile/approvals/investmentDetails')
    }, 

    //deleteinvestment request
    deleteInvestment () {
       this.$store.commit('setLoading', true)
        this.$store.dispatch('deleteInvestment')
    }
 },

 computed : {
   investmentRequests () {
        return this.$store.state.userEntitiesAll.investment
    },
 },
  mounted () {
      this.$store.dispatch('getAllEntitiesAll');
      this.isActiveTwo()
  }, 
}
</script>

<style scoped>
.main-container {
    border:2px solid blac;
    margin-left:0vw;
    height: auto;
    overflow-x: hidden
 }

</style>