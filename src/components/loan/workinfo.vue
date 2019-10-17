<template>
  <div>
      
          <div class="main-container">
              <form  @submit.prevent="validateBeforeSubmit"> 
                   <span class="h5 mb-5 d-lg-none d-block ">Work Information</span>
                  <div class="form-row">
                       <div class="col-md-5 mb-3">
                            <span class="m">Employment Type <span class="text-danger">*</span></span>
                            <select class="browser-default custom-select" v-model="employmentType" v-validate="'required|included:Self-Employed,Private-Sector,Public-Sector'" name="Employment-Type">
                            <option value="Self-Employed">Self Employed</option>
                            <option value="Private-Sector">Private Sector</option>
                            <option value="Public-Sector">Public Sector</option>
                            </select>
                           <div class="mt-3" >
                                <i v-show="errors.has('Employment-Type')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Employment-Type')">{{ errors.first('Employment-Type') }}</span>
                            </div>
                        </div>  
                  </div>

                  <div class="form-row">
                        <div class="col-md-5 mb-3">
                            <label for="validationCompanyName">Company Name <span class="text-danger">*</span></label>
                            <input type="text"  v-model="companyName" class="form-control" v-validate="'required'" name="Company-name" id="validationCompanyName" placeholder=""  >
                            <div class="mt-3" >
                                <i v-show="errors.has('Company-name')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Company-name')">{{ errors.first('Company-name') }}</span>
                            </div>
                        </div>
                  </div>

                  <div class="form-row">
                       <div class="col-md-5">
                            <label for="exampleFormControlTextarea1">Other comments (optional)</label>
                            <textarea style="background:whitesmoke" v-model="otherComments" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                  </div>


                  <div class="form-row">
                      <div class="col-md-5"></div>
                      <div class="col-md-2"></div>
                      <div class="col-md-5">
                            <mdb-btn type="submit" class="float-right btn-green mt-5" style="font-size:15px; border-radius:5px"> Next</mdb-btn>
                          </div>
                  </div>

              </form>    
              
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput,mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';

export default {
    name:'guarantor',
    components:{
    mdbNavbar,
    mdbBtn,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbJumbotron,
    mdbInput,
    mdbNumericInput
    },
    methods: {
     validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
            this.$router.push('/profile/loan/loandetails/guarantor')
            }
        })
    }    
  },

  computed : {
      employmentType : {
          get () {
             return  this.$store.getters.employmentType
          },
          set(selected) {
              this.$store.dispatch('updateEmploymentType', selected)
          }
      },
     companyName : {
          get () {
             return this.$store.getters.companyName
          },
          set(value) {
              this.$store.dispatch('updateCompanyName', value)
          }
      },
      otherComments : {
          get () {
             return this.$store.getters.otherComments
          },
          set(value) {
              this.$store.dispatch('updateOtherComments', value)
          }
      }
  },

  mounted () {
      this.$store.dispatch('updateIsActive2')
  }
    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw
 }
 input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 @media (max-width: 576px) {
    .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin-left:-5vw;
    padding: 0 10px !important
 }
}


 

</style>