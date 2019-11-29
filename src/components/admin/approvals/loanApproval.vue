<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

    <div class="container ">
      <div class="row  p-1 mb-5" style="margin-top:-30px">
        <div class="col">
         
          <div class="row mt-5">
               <p class="text-success col-md-2 mt- h6 font-weight-bold">Loan Requests</p>
              <div class="col-md-5"></div>
              <div class="col-md-5 mb-3">
                 <div class="input-group">
                    <input type="search" placeholder="search by name, status, date, month or year" v-model="name" class="form-control" name="" id=""> 
                    <div class="input-group-append" style="cursor:pointer">
                       <div class="input-group-text"> <i class="fas fa-search"></i></div>
                    </div>
                 
                 </div>
                
              </div>
          </div>
          
          <div class="table-responsive" ref="html">
              <!-- <span class="font-weight-bold">Monthly Report</span> -->
              <table class="table table-striped table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" class="text-center">Amount</th>
                      <th scope="col" class="text-center">Details</th>
                      <th  v-if="currentRoute == 'Loan Report'" scope="col" class="text-center">Print</th>
                      <th scope="col" class="text-center">Status</th>
                      <th scope="col" class="text-center">Date Applied</th>
                      <th  v-if="currentRoute == 'Loan Approval'" scope="col" class="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody v-if="filteredLoanRequests"   >
                    <tr v-for="(item, index) in filteredLoanRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.loanAmount)}}  </td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                      <td v-if="currentRoute == 'Loan Report'" class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >Download</span></td>
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                      <td v-if="currentRoute == 'Loan Approval'" @click="userDetailsAdmin(index); deleteLoan()" class="text-center text-danger" style="cursor:pointer">   Delete </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
   </div>

   <div class="row d-flex justify-content-around">
      <div class="btn btn-success" v-show='backward' @click="prevPage"> <i class="fas fa-angle-double-left"></i> Prev </div>
      
      <div class="btn btn-success" v-show='forward' @click="nextPage">Next <i class="fas fa-angle-double-right"></i> </div>
      
      <div class="btn btn-primary float-right" v-if="currentRoute == 'Loan Report'" @click="exportToPDF"> Download <i class="fa fa-download"></i></div>
   </div>   
  </section>  
  </div>


</template>

<script>
import moment from 'moment'
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
import html2pdf from 'html2pdf.js'

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
     name:"",
     demo:"<p style = 'color:red'> Ugonna </p>",
     pageNumber:0,
     size:5
   }
 },

 methods : {
    isActiveOne () {
        this.$store.dispatch('updateIsActive1')
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    moment (x) {
        return moment(x).format("DD/MM/YYYY")
     },
     
   //function to update current loan details by admin
    userDetailsAdmin(n) {
        let newObject  = this.filteredLoanRequests[n]
        this.$store.commit('setUserDetails', newObject);
    }, 

    //function to conditionally show loan details for a particulasr user
  async userDetails(n) {

        let newObject  = this.filteredLoanRequests[n]
        this.$store.commit('setUserDetails', newObject);
        this.$router.push('/adminProfile/approvals/loanDetails')
        
    }, 

    //delete loan request
    deleteLoan () {
       this.$store.commit('setLoading', true)
        this.$store.dispatch('deleteLoan')
    },

   // change first letter of search i nput to uppercase
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

    //download pdf

    exportToPDF () {
				html2pdf(this.$refs.html, {
					margin: 1,
					filename: 'document.pdf',
					image: { type: 'jpeg', quality: 0.98 },
					html2canvas: { dpi: 192, letterRendering: true },
					jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
				})
			},
   
 },

 computed : {
   backward () {
     if (this.pageNumber==0) return false
     return true
   },
   forward () {
     if (this.pageNumber == this.pageCount-1) return false
     return true
   },
    currentRoute () {
        return this.$router.currentRoute.name
    },
    pageCount () {
      let l = this.$store.state.userEntitiesAll.loan.length;
      let s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData () {
      let start = this.pageNumber * this.size;
      let end = start + this.size;
      let order =  this.$store.state.userEntitiesAll.loan;
      return order.slice(start, end)
   },
    filteredLoanRequests () {
       if (this.name=='') {
            return this.paginatedData
       }

        else {
           this.toUpperCase()
            let result = this.paginatedData.sort().reverse()
            
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

  created () {
      this.$store.dispatch('getAllEntitiesAll');
      this.isActiveOne();
      // setTimeout(_ => this.pageNumber=1, 3000)
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