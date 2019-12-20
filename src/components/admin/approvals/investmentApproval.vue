<template>
  <div class="container">
      <section class="container main-container " style="height:auto">
        <div class="container ">
          <div class="row  p-1 mb-5" style="margin-top:-30px">
            <div class="col">
              <div class="row mt-5">
                  <p class="text-success col-md-3 mt- h6 font-weight-bold">Investment Requests</p>
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
            
              <div class="table-responsive">
                  <table class="table table-striped table-bordered">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col" class="text-center">Amount</th>
                          <th scope="col" class="text-center">Details</th>
                          <th  v-if="currentRoute == 'Investment Report'" scope="col" class="text-center">Print</th>
                          <th scope="col" class="text-center">Status</th>
                          <th scope="col" class="text-center">Date Applied</th>
                          <th v-if="currentRoute == 'Investment Approval'" scope="col" class="text-center">Delete</th>
                        </tr>
                      </thead>
                      <tbody v-if="filteredInvestmentRequests"   >
                        <tr v-for="(item, index) in filteredInvestmentRequests" :key="'a' + index">
                          <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                          <td class="text-center"> &#8358; {{formatAmount(item.investmentAmount)}}  </td>
                          <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                          <td v-if="currentRoute == 'Investment Report'" class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >Download</span></td>
                          <td class="text-center"> {{item.approved}} </td>
                          <td class="text-center"> {{moment(item.createdAt)}} </td>
                          <td v-if="currentRoute == 'Investment Approval'" @click="userDetailsAdmin(index); modal=true" class="text-center text-danger" disabled style="cursor:pointer">   Delete </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>

        <div class="modal-window">
          <mdb-modal :show="modal" @close="modal = false">
            <mdb-modal-header>
              <mdb-modal-title class="text-center font-weight-bold">Delete Request</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body>
              <div>
                <p>Are you sure? <span class="font-weight-bold "> This action cannot be reversed</span></p>
                <p>Enter the text <span class="text-danger" placeholder="enter text">'delete'</span> to confirm delete</p>
                <input type="text" class="form-control" v-model="confirm_delete">
              </div>
            </mdb-modal-body>
            <mdb-modal-footer>
              <mdb-btn color="secondary" @click.native="modal = false; confirm_delete=''">cancel</mdb-btn>
              <button class="btn bg-danger text-white" @click="deleteInvestment" v-show="confirm_delete == 'delete'" >Delete <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
            </mdb-modal-footer>
          </mdb-modal>
        </div>

        <div class="row d-flex justify-content-around">
            <div>Page {{pageNumberr}} of {{pageCount}}</div>
            <div class="btn btn-success" v-show='backward' @click="prevPage"> <i class="fas fa-angle-double-left"></i> Prev </div>
            <div class="btn btn-success" v-show='forward' @click="nextPage">Next <i class="fas fa-angle-double-right"></i> </div>
        </div>      
      </section>
  </div>
</template>

<script>
import moment from 'moment'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';

export default {
 name:'approvals',
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
     name:"",
     pageNumber:0,
     size:5,
     modal: false,
     confirm_delete:"",
     isLoading:false
   }
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
        let newObject  = this.filteredInvestmentRequests[n]
        this.$store.commit('setUserDetails', newObject);
    }, 

    //function to conditionally show investment details for a particulasr user
   userDetails(n) {
        let newObject  = this.filteredInvestmentRequests[n]
        this.$store.commit('setUserDetails', newObject)
        this.$router.push('/adminProfile/approvals/investmentDetails')
    }, 

    //delete investment request
    deleteInvestment () {
       this.isLoading = true
       this.$store.commit('setLoading', true)
        this.$store.dispatch('deleteInvestment')
        .then(_ => {
        this.isLoading = false;
        this.modal = false
      })
      .catch(_ => this.isLoading = false)
    },

     // change first letter of search input to uppercase
    toUpperCase (name) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },

    //pagination
    nextPage(){
        this.pageNumber++;
    },
    prevPage(){
        this.pageNumber--;
    },
 },

 computed : {
    pageNumberr () {
     if (this.pageCount == 0) return 0

     return this.pageNumber + 1
    },
    backward () {
     if (this.pageNumber==0) return false
     return true
    },
   forward () {
     if (this.pageNumber == this.pageCount-1 || this.pageCount==0) return false
     return true
    },
    pageCount () {
    let l = this.$store.state.userEntitiesAll.investment.length;
    let s = this.size;
    return Math.ceil(l/s);
   },
  paginatedData () {
    let start = this.pageNumber * this.size;
    let end = start + this.size;
    let order =  this.$store.state.userEntitiesAll.investment.sort((a, b) => moment(b.createdAt) - moment (a.createdAt)); //sort the array from the most recent date
    return order.slice(start, end)
 },
  currentRoute () {
        return this.$router.currentRoute.name
    },
  filteredInvestmentRequests () {
    if (this.name=='') {
        return this.paginatedData;
    }

    else {
        this.toUpperCase()
        let result = this.paginatedData;
        
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
      return final
    }
 },
  created () {
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

  ::placeholder {
   font-size: 13px
 }

</style>