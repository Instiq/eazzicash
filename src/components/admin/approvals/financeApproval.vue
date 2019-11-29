<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

      <div class="container ">
        <div class="row  p-1 mb-5" style="margin-top:-30px">
          <div class="col">
          <div class="row mt-5">
                <p class="text-success col-md-3 mt- h6 font-weight-bold">Finance Requests</p>
                <div class="col-md-4"></div>
                <div class="col-md-5 mb-3">
                  <div class="input-group">
                      <input type="search" placeholder="search by name, status, date, month or year" v-model="name" class="form-control" name="" id=""> 
                      <div class="input-group-append" style="cursor:pointer">
                        <div class="input-group-text"> <i class="fas fa-search"></i></div>
                      </div>
                  </div> 
                </div>
            </div>
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
                       <th  v-if="currentRoute == 'Finance Report'" scope="col" class="text-center">Print</th>
                      <th scope="col" class="text-center">Status</th>
                      <th scope="col" class="text-center">Date Applied</th>
                      <th v-if="currentRoute == 'Finance Approval'" scope="col" class="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody v-if="filteredFinanceRequests"   >
                    <tr v-for="(item, index) in filteredFinanceRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.financeAmount)}}  </td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                      <td v-if="currentRoute == 'Finance Report'" class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >Download</span></td>
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                      <td v-if="currentRoute == 'Finance Approval'" @click="userDetailsAdmin(index); deleteFinance()" class="text-center text-danger" style="cursor:pointer">   Delete </td>
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

 data () {
   return {
     name:""
   }
 },

 methods : {
    isActiveThree () {
        this.$store.dispatch('updateIsActive3')
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    moment (x) {
        return moment(x).format("DD/MM/YYYY")
     },
//function to update current finance details by admin
    userDetailsAdmin(n) {
        let newObject  = this.filteredFinanceRequests[n]
        this.$store.commit('setUserDetails', newObject);
    }, 

    //function to conditionally show finance details for a particulasr user
   userDetails(n) {
        let newObject  = this.filteredFinanceRequests[n]
        this.$store.commit('setUserDetails', newObject)
        this.$router.push('/adminProfile/approvals/financeDetails')
    }, 

    //delete finance request
    deleteFinance () {
       this.$store.commit('setLoading', true)
        this.$store.dispatch('deleteFinance')
    },

    // change first letter of search input to uppercase
    toUpperCase (name) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
 },

 computed : {
     currentRoute () {
        return this.$router.currentRoute.name
    },
    filteredFinanceRequests () {
       if (this.name=='') {
            return this.$store.state.userEntitiesAll.finance.sort().reverse()
        }

        else {
           this.toUpperCase()
            let result = this.$store.state.userEntitiesAll.finance.sort().reverse()
            
            return result.filter(value=> {
              let fullName = value.userDetails.firstName + " " +  value.userDetails.lastName;
              let fullNameReverse = value.userDetails.lastName + " " +  value.userDetails.firstName;
              let formattedTime = this.moment(value.createdAt);
              let check = moment(value.createdAt, 'YYYY/MM/DD');
              let month = check.format('M');              
              // let day   = check.format('D');
              let year  = check.format('YYYY');
              let monthAndYear = month + "/" + year


              return  value.userDetails.firstName.indexOf(this.name)==0 ||
                      value.userDetails.lastName.indexOf(this.name)==0 ||
                      value.approved.indexOf(this.name)==0 || 
                      fullName.indexOf(this.name) == 0 || 
                      fullNameReverse.indexOf(this.name) == 0 ||
                      formattedTime.indexOf(this.name) == 0 ||
                      year.indexOf(this.name) == 0 ||
                      month.indexOf(this.name) == 0 ||
                      // day.indexOf(this.name) == 0 ||
                      monthAndYear.indexOf(this.name) == 0
            } )
        }
       
    }
 },
  mounted () {
      this.$store.dispatch('getAllEntitiesAll');
      this.isActiveThree()
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

  ::placeholder {
   font-size: 13px
 }

</style>