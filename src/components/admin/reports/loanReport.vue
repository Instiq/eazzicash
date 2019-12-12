<template>
  <div class="container">
      <section class="container main-container " style="height:auto">

    <div class="container ">
      <div class="row  p-1 mb-5" style="margin-top:-30px">
        <div class="col">
          <!-- for Reports -->
          <div class="row mt-5">
            <div class="col-md-2">
              <p  class="text-success h6 font-weight-bold">Loan Requests</p>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-5">
                <div class="input-group">
                    <input type="search" placeholder="search by name, status, date, month or year" v-model="name" class="form-control" name="" id=""> 
                    <div class="input-group-append" style="cursor:pointer">
                      <div class="input-group-text"> <i class="fas fa-search"></i></div>
                    </div>
                </div>
            </div>
          </div>
          
          <div class="row mt-5"> 
              <div class="col-md-5">
                <div class="input-group">
                   <span class="mr-3">From</span>   <datepicker v-model="fromDate" id ='date1' style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" ></datepicker>
                    <div class="input-group-append">
                        <span class="input-group-text" style="height:30px" id="inputGroupPrepend"><i class="fa fa-calendar-alt" aria-hidden="true"></i></span>
                    </div>
                </div>
              </div>
 
               <div class="col-md-4 mb-3">
                <div class="input-group">
                   <span class="mr-3">To</span>  <datepicker v-model="toDate" id ='date2' style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" ></datepicker>
                    <div class="input-group-append">
                        <span class="input-group-text" style="height:30px" id="inputGroupPrepend"><i class="fa fa-calendar-alt" aria-hidden="true"></i></span>
                    </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                 <input type="submit" @click="reset" class="btn-primary" value="Reset" name="" id="">
              </div>
          </div>
          
          <div class="table-responsive" ref="html" id="html" >
              <span v-if="fromDate && toDate" class="font-weight-bold"> Loan Report from {{customFormatter(fromDate)}} to {{customFormatter(toDate)}}</span>
              <table class="table table-striped table-bordered mt-3">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" class="text-center">Amount</th>
                      <!-- <th scope="col" class="text-center">Details</th> -->
                      <!-- <th scope="col" class="text-center">Print</th> -->
                      <th scope="col" class="text-center">Status</th>
                      <th scope="col" class="text-center">Date Applied</th>
                    </tr>
                  </thead>
                  <tbody v-if="downloadLoanRequests"   >
                    <tr v-for="(item, index) in downloadLoanRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.loanAmount)}}  </td>
                      <!-- <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td> -->
                      <!-- <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >Download</span></td> -->
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                    </tr>
                  </tbody>
                </table>
            </div>

             <!-- <div class="table-responsive" ref="html">
              <span v-if="fromDate && toDate" class="font-weight-bold">Loan Report from {{customFormatter(fromDate)}} to {{customFormatter(toDate)}}</span>
              <table class="table table-striped table-bordered mt-2">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" class="text-center">Amount</th>
                      <th scope="col" class="text-center">Details</th>
                      <th scope="col" class="text-center">Print</th>
                      <th scope="col" class="text-center">Status</th>
                      <th scope="col" class="text-center">Date Applied</th>
                    </tr>
                  </thead>
                  <tbody v-if="downloadLoanRequests"   >
                    <tr v-for="(item, index) in downloadLoanRequests" :key="'a' + index">
                      <th scope="row" class="text-success">{{item.userDetails.firstName}} {{item.userDetails.lastName}}</th>
                      <td class="text-center"> &#8358; {{formatAmount(item.loanAmount)}}  </td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                      <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >Download</span></td>
                      <td class="text-center"> {{item.approved}} </td>
                      <td class="text-center"> {{moment(item.createdAt)}} </td>
                    </tr>
                  </tbody>
                </table>
            </div> -->
        </div>
      </div>
   </div>

   <div class="row d-flex justify-content-around">
      <!-- <div>Page {{pageNumberr}} of {{pageCount}}</div>
      <div class="btn btn-success" v-show='backward' @click="prevPage"> <i class="fas fa-angle-double-left"></i> Prev </div>
      
      <div class="btn btn-success" v-show='forward' @click="nextPage">Next <i class="fas fa-angle-double-right"></i> </div> -->
      <div class="btn btn-primary float-right" v-show="pageCount>0"  @click="exportTableToExcel('html')"> Download excel <i class="fa fa-download"></i></div>
     <div class="btn btn-primary float-right" v-show="pageCount>0"  @click="exportToWord('html')"> Download Word <i class="fa fa-download"></i></div>
      <div class="btn btn-primary float-right" v-show="pageCount>0"  @click="exportToPDF"> Download pdf <i class="fa fa-download"></i></div>
   </div>   
  </section>  
  </div>


</template>

<script>
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';
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
    Datepicker
 },

 data () {
   return {
     name:"",
     fromDate : "",
     toDate :"",
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
       return moment(x).format("YYYY-MM-DD")
     },

     customFormatter(date) {
        return moment(date).format('MMMM Do YYYY');
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

    //download html as  pdf
    exportToPDF () {
        html2pdf(this.$refs.html, {
            margin: 1,
            filename: 'loan report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        })
      },

    //download html as excel
    exportTableToExcel (tableID, filename = 'loan report'){
    let downloadLink;
    let dataType = 'application/vnd.ms-excel';
    let tableSelect = document.querySelector(`#${tableID}`)
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        const blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
},

 //download html as word
 exportToWord(element, filename = 'loan report'){
    let preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    let postHtml = "</body></html>";
    let html = preHtml+document.querySelector(`#${element}`).innerHTML+postHtml;

    let blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.docx':'document.doc';
    
    // Create download link element
    let downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
},
      
    //filter data by date
     sortedDataByDate () {

     if (this.fromDate=="" || this.toDate=="") return this.$store.state.userEntitiesAll.loan;

     if (this.moment(this.fromDate) > this.moment(this.toDate)) {
       alert('heyy, don\'t you think the To date should be greater than the From Date? :) ');
       return this.$store.state.userEntitiesAll.loan; 
     }

     let data =  this.$store.state.userEntitiesAll.loan;
     let filtered = data.filter(item => {
       let filteredDate = ((this.moment(item.createdAt) >= this.moment(this.fromDate)) && (this.moment(item.createdAt) <=this.moment(this.toDate)))
       return filteredDate
      })
        
     return filtered;
     
   },

   //clear date fields
   reset () {
     this.fromDate = "";
     this.toDate = "";
   }
   
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
      let l = this.sortedDataByDate().length;
      let s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData () {
      let start = this.pageNumber * this.size;
      let end = start + this.size;
      let order =  this.sortedDataByDate().sort((a, b) => moment(b.createdAt) - moment (a.createdAt));
//    let ordered = array.sort(function(a,b){
//   return new Date(b.date) - new Date(a.date);
// });
      return order.slice(start, end)
   },
  
    filteredLoanRequests () {
       if (this.name=='') {
            return this.paginatedData
       }

        else {
           this.toUpperCase()
            let result = this.paginatedData
            
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
        
    },

    //same as above function but with all the data in one array
     downloadLoanRequests () {
       if (this.name=='') {
            return this.sortedDataByDate().sort((a, b) => moment(b.createdAt) - moment (a.createdAt));
       }

        else {
           this.toUpperCase()
            let result = this.sortedDataByDate().sort((a, b) => moment(b.createdAt) - moment (a.createdAt));
            
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