<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                          <div class="col-md-5 mb-3">
                            <span class="m">Date of Purchase <span class="text-danger">*</span></span>
                             <input type="date" v-validate="'required'" v-model="itemDate" class="form-control">
                             <div class="mt-3" >
                                <i v-show="errors.has('Date of Purchase')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Date of Purchase')">{{ errors.first('Date of Purchase') }}</span>
                             </div>
                          </div>
                          

                        <div class="col-md-2"></div>
                            <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Purchase Location <span class="text-danger">*</span></label>
                                    <input type="text" v-model="purchaseLocation" class="form-control mt-n2"  placeholder="" v-validate="'required'"  name="Purchase Location"  >
                                    <div class="mt-3" >
                                        <i v-show="errors.has('Purchase Location')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                        <span class="text-warning" v-show="errors.has('Purchase Location')">{{ errors.first('Purchase Location') }}</span>
                                    </div>
                            </div>
                     </div>


                     <div class="form-row second">
                         
                     </div>

                     <div class="form-row">
                         <div class="col-md-5 mt-4"> 
                              Sworn Affidavit done? <span class="text-danger">*</span>
                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isSworn" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="radio-stack" v-validate="'required|included:yes,no'" >
                                 <label class="custom-control-label" for="invalidCheck">Yes</label> 
                            </div>

                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isSworn" value='no' class="custom-control-input" id="customControlValidation3" name="radio-stack" >
                                 <label class="custom-control-label"  for="customControlValidation3">No</label>    
                            </div>

                             <div class="mt-3" >
                                    <i v-show="errors.has('radio-stack')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('radio-stack')">{{ errors.first('radio-stack') }}</span>
                            </div>
                        </div>
                     </div>


                      <div class="form-row">
                         <div class="col-md-5"></div>
                         <div class="col-md-2"></div>
                         <div class="col-md-5">
                              <mdb-btn type="submit" class="float-right btn-green mt-5"  style="font-size:15px; border-radius:5px"> Next</mdb-btn>
                          </div>
                     </div>

                 </form>
               
              
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';

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
    
    data () {
        return {
            selected:''
        }
    }, 
    methods: {
    validateBeforeSubmit() {
    this.$validator.validateAll().then((result) => {
        if (result) {
        this.$router.push('/profile/pawnshop/pawndetails/signature')
        }
    })
    }    
  },

  computed : {
        itemDate : {
            get () {
                return this.$store.getters.itemDate
            },
            set (value) {
                this.$store.dispatch('updateItemDate', value )
            }
       },
       purchaseLocation : {
            get () {
                return this.$store.getters.purchaseLocation
            },
            set (value) {
                this.$store.dispatch('updatePurchaseLocation', value )
            }
       },
       isSworn : {
            get () {
                return this.$store.getters.isSworn
            },
            set (value) {
                this.$store.dispatch('updateIsSworn', value )
            }
       },
    },
    mounted () {
        this.$store.dispatch('updateIsActive2P')
    }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0vh 0vw
 }

 input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 

 

</style>