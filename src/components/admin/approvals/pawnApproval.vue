<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

    <div class="container ">
      <div class="row  p-1 mb-5" style="margin-top:-30px">
        <div class="col">
          <div class="row mt-5">
               <p class="text-success col-md-2 mt- h6 font-weight-bold">Pawn Requests</p>
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
                  <tbody v-if="pawnRequests"   >
                    <tr v-for="(item, index) in pawnRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.pawnAmount)}}  </td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                      <td @click="userDetailsAdmin(index); deletePawn()" class="text-center text-danger" style="cursor:pointer">   Delete </td>
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
    isActiveFour () {
        this.$store.dispatch('updateIsActive4')
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    moment (x) {
        return moment(x).format("DD/MM/YYYY")
     },
//function to update current pawn details by admin
    userDetailsAdmin(n) {
        let newObject  = this.pawnRequests[n]
        this.$store.commit('setUserDetails', newObject);
    }, 

    //function to conditionally show pawn details for a particulasr user
   userDetails(n) {
        let newObject  = this.pawnRequests[n]
        this.$store.commit('setUserDetails', newObject)
        this.$router.push('/adminProfile/approvals/pawnDetails')
    }, 

    //delete pawn request
    deletePawn () {
       this.$store.commit('setLoading', true)
        this.$store.dispatch('deletePawn')
    },

    // change first letter of search input to uppercase
    toUpperCase (name) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },

  // filter pawn requests by search paameter
    // filtered () {
    //    if (this.name=='') {
    //         return  this.$store.state.userEntitiesAll.pawn.sort().reverse()
    //     }

    //     else{
    //         this.toUpperCase()
    //         let result = this.$store.state.userEntitiesAll.pawn.sort().reverse()
            
    //         let final = result.filter(value=> {
    //           let fullName = value.userDetails.firstName + " " +  value.userDetails.lastName;
    //           let fullNameReverse = value.userDetails.lastName + " " +  value.userDetails.firstName;
    //           let formattedTime = this.moment(value.createdAt);
    //           let check = moment(value.createdAt, 'YYYY/MM/DD');
    //           let month = check.format('M');              
    //           // let day   = check.format('D');
    //           let year  = check.format('YYYY');
    //           let monthAndYear = month + "/" + year

    //           return  value.userDetails.firstName.indexOf(this.name) == 0 ||
    //                   value.userDetails.lastName.indexOf(this.name) == 0 ||
    //                   value.approved.indexOf(this.name) == 0 || 
    //                   fullName.indexOf(this.name) == 0 || 
    //                   fullNameReverse.indexOf(this.name) == 0 ||
    //                   formattedTime.indexOf(this.name) == 0 ||
    //                   year.indexOf(this.name) == 0 ||
    //                   month.indexOf(this.name) == 0 ||
    //                   // day.indexOf(this.name) == 0 ||
    //                   monthAndYear.indexOf(this.name) == 0
    //         } )
    //         return final
    //     }
    // }
 },

 computed : {
    pawnRequests () {
        return this.$store.state.userEntitiesAll.pawn.sort().reverse()
    },
 },
  mounted () {
      this.$store.dispatch('getAllEntitiesAll');
      this.isActiveFour()
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