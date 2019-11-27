<template>
  <div>
      
          <div class="main-containe">
               <ValidationObserver v-slot="{ passes }">
                    <form @submit.prevent="passes(next_page)"> 
                        <span class="h5 mb-5 d-lg-none d-block ">Work Information</span>
                        <div class="form-row">
                            <div class="col-md-5 mb-3">
                                 <ValidationProvider name="Employment Type" rules="required" v-slot="{ errors }">
                                        <span class="m">Employment Type <span class="text-danger">*</span></span>
                                        <select class="browser-default custom-select" v-model="employmentType" name="Employment Type">
                                            <option value="Self-Employed">Self Employed</option>
                                            <option value="Private-Sector">Private Sector</option>
                                            <option value="Public-Sector">Public Sector</option>
                                        </select>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>        
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5 mb-3">
                                    <ValidationProvider name="Company name" rules="required" v-slot="{ errors }">
                                        <label for="validationCompanyName">Company Name <span class="text-danger">*</span></label>
                                        <input type="text"  v-model="companyName" class="form-control" name="Company name" id="validationCompanyName"  placeholder="">
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                            </div>
                        </div>    

                        <div class="form-row">
                                <div class="col-md-5 mb-3">
                                    <ValidationProvider name="Company Address" rules="required" v-slot="{ errors }">
                                        <label for="validationCompanyAddress">Company Address <span class="text-danger">*</span></label>
                                        <textarea  type="text"  v-model="companyAddress" class="form-control" name="Company Address" id="validationCompanyName" rows="3" placeholder=""> </textarea>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                                <div class="col-md-2"></div>
                                <div class="col-md-5 mb-3">
                                    <ValidationProvider name="Official Address" rules="required|email" v-slot="{ errors }">
                                        <label for="validationCompanyOfficial">Official Email Address <span class="text-danger">*</span></label>
                                        <input type="email"  v-model="officialEmail" class="form-control" name="Official Address" id="validationCompanyName" placeholder=""  >
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                        </div>

                         <div class="form-row mb-3">
                                <div class="col-md-5 mb-2">
                                    <ValidationProvider name="Phone Number" rules="required|numeric|min:11|max:15" v-slot="{ errors }">
                                        <label for="validationCompanyPhone">Phone Number <span class="text-danger">*</span></label>
                                        <input type="number"  v-model="phoneNumber" class="form-control" name="Phone Number" id="validationCompanyName" placeholder=""  >
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                                <div class="col-md-2"></div>
                                <div class="col-md-5">
                                     <ValidationProvider name="position" rules="required" v-slot="{ errors }">
                                        <label for="validationCompanyPhone">Position <span class="text-danger">*</span></label>
                                        <input type="text"  v-model="position" class="form-control" name="position" id="validationCompanyName" placeholder=""  >
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                        </div>

                         <div class="form-row mb-3">
                                <div class="col-md-5 mb-2">
                                    <ValidationProvider name="Salary Payment" rules="required" v-slot="{ errors }">
                                        <label for="validationCompanyPhone">Salary Payment Date <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <datepicker id ='date' class="date-picker" placeholder="Select Date" :format='customFormatter' v-model="salaryDate"></datepicker>
                                            <div class="input-group-append">
                                              <span class="input-group-text" style="height:30px" id="inputGroupPrepend"><i class="fa fa-calendar-alt" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                                <div class="col-md-2"></div>
                                <div class="col-md-5">
                                    <ValidationProvider name="Quarterly Payment" rules="required" v-slot="{ errors }">
                                        <label for="validationCompanyPhone">Quarterly Payment Date <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <datepicker id ='date' class="date-picker" placeholder="Select Date" :format='customFormatter' v-model="quarterlyDate"></datepicker>
                                            <div class="input-group-append">
                                              <span class="input-group-text" style="height:30px" id="inputGroupPrepend"><i class="fa fa-calendar-alt" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                   </ValidationProvider> 
                                </div>
                        </div>

                        <div class="form-row">
                             <div class="col-md-5 mb-3">
                                <ValidationProvider name="Monthly Income" rules="required" v-slot="{ errors }">
                                        <label for="">Monthly Income <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                            </div>
                                            <input type="text"  v-model="monthlyIncome" class="form-control"  placeholder=""  name="Monthly Income"  >
                                        </div>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>
                            <div class="col-md-2"></div>
                             <div class="col-md-5 mb-3">
                                <ValidationProvider name="Annual Income" rules="required" v-slot="{ errors }">
                                        <label for="v">Annual Income <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                            </div>
                                            <input type="text"  v-model="annualIncome" class="form-control"  placeholder=""  name="Annual Income"  >
                                        </div>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>

                        </div>

                        <div class="form-row">
                            <div class="col-md-5">
                                    <label for="exampleFormControlTextarea1">Other comments (optional)</label>
                                    <textarea  v-model="otherComments" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3" v-if="currentRoute == 'finance'">
                                <ValidationProvider name="RC Number" rules="numeric" v-slot="{ errors }">
                                    <label for="validationCompanyPhone">RC Number</label>
                                    <input type="text"  v-model="rcNumber" class="form-control" name="RC Number" id="validationCompanyName" placeholder=""  >
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>
                        </div>

                      
                        <div class="row d-flex justify-content-between row2 borde">
                                <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group ml-3 mt-2 mt-md-5">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                                     <button  @click="prev_page" class="btn btn-green">prev</button>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                                 <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mt-2 mr-3 ml-3 mt-md-5" style="margin:right">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <input type="submit" class="btn btn-green" value="next">
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                           </div>
                    </form>   
               </ValidationObserver>   
              
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput,mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
    name:'guarantor',
    components:{
    Datepicker,
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
    mdbNumericInput,
    ValidationObserver,
    ValidationProvider 
    },
    methods: {
      next_page () {
         if (this.currentRoute == 'loan')  return this.$router.push('/profile/loan/loandetails/guarantor')
          if (this.currentRoute == 'finance')  return this.$router.push('/profile/finance/loandetails/guarantor')
      },
      prev_page () {
        this.$router.go(-1)
    },
    customFormatter(date) {
        return moment(date).format('MMMM Do YYYY');
    },
  },

  computed : {
      currentRoute () {
          return this.$router.currentRoute.name

      },
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
     companyAddress : {
          get () {
             return this.$store.getters.companyAddress
          },
          set(value) {
              this.$store.dispatch('updateCompanyAddress', value)
          }
      },
    officialEmail : {
          get () {
             return this.$store.getters.officialEmail
          },
          set(value) {
              this.$store.dispatch('updateOfficialEmail', value)
          }
      },
    phoneNumber : {
          get () {
             return this.$store.getters.phoneNumber
          },
          set(value) {
              this.$store.dispatch('updatePhoneNumber', value)
          }
      },
    rcNumber : {
          get () {
             return this.$store.getters.rcNumber
          },
          set(value) {
              this.$store.dispatch('updateRcNumber', value)
          }
      },
      otherComments : {
          get () {
             return this.$store.getters.otherComments
          },
          set(value) {
              this.$store.dispatch('updateOtherComments', value)
          }
      },
       position : {
          get () {
             return this.$store.getters.position
          },
          set(value) {
              this.$store.dispatch('updatePosition', value)
          }
      },
       monthlyIncome : {
          get () {
             return this.$store.getters.monthlyIncome
          },
          set(value) {
              this.$store.dispatch('updateMonthlyIncome', value)
          }
      },
       annualIncome : {
          get () {
             return this.$store.getters.annualIncome
          },
          set(value) {
              this.$store.dispatch('updateAnnualIncome', value)
          }
      },
       salaryDate : {
          get () {
             return this.$store.getters.salaryDate
          },
          set(value) {
              this.$store.dispatch('updateSalaryDate', value)
          }
      },
       quarterlyDate : {
          get () {
             return this.$store.getters.quarterlyDate
          },
          set(value) {
              this.$store.dispatch('updateQuarterlyDate', value)
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

.date-picker  {
    display: non;
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