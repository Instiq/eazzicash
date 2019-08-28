<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <span class="m">Collateral Type <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="collateralType" v-validate="'required'" name="Collateral Type">
                                <option value="LPO Finance">LPO Finance</option>
                                <option disabled="disabled">-------------------------------------------------------- </option>
                                <option value="Asset" >Asset</option>
                                <option disabled="disabled">---------------------------------------------------------</option>
                                <option value="Contract">Contract</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Collateral Type')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Collateral Type')">{{ errors.first('Collateral Type') }}</span>
                                </div>
                        </div>  

                            <div class="col-md-2"></div>

                             <div class="col-md-5 mb-3">
                                <span class="m">Collateral Description <span class="text-danger">*</span></span>
                                <input type="text"  v-model="collateralDescription" name="Collateral Description" class="form-control" v-validate="'required'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('Collateral Description')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Collateral Description')">{{ errors.first('Collateral Description') }}</span>
                              </div>
                            </div>     
                     </div>


                     <div class="form-row second">
                          <div class="col-md-5 mb-3">
                                <span class="m">Contract Receivable Account Number <span class="text-danger">*</span></span>
                                <input type="text"  v-model="contractAccount" name="Contract Receivable Account Number" class="form-control" v-validate="'required|min:11|max:11|numeric'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('phone')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Contract Receivable Account Number')">{{ errors.first('Contract Receivable Account Number') }}</span>
                              </div>
                            </div>     

                         <div class="col-md-2"></div>

                           <div class="col-md-5 mb-3">
                                <span class="m">Joint Receivable Account Number</span>
                                <input type="text"  v-model="jointAccount" name="JOint Receivable Account Number" class="form-control" v-validate="'min:11|max:11|numeric'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('JOint Receivable Account Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('JOint Receivable Account Number')">{{ errors.first('JOint Receivable Account Number') }}</span>
                              </div>
                            </div>     

                     </div>

                    <div class="form-row third">

                        <div class="col-md-5">
                            Attach supporting Documents <span class="text-danger">*</span>
                             <div class="col-md- mb-3 " style="height:25vh; border:2px solid gray"> </div>

                            <div class="input-group mr-2 mt-5">
                                <div class="custom-file">
                                <input type="file" class="custom-file-input" v-validate="'required'"  name="id" id="inputGroupFile02">
                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload valid Id</label>
                                </div>
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('id')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('id')">{{ errors.first('id') }}</span>
                             </div>
                        </div>

                        <div class="col-md-2"></div>

                         <div class="col-md-5">
                              Other Documents
                             <div class="col-md- mb-3 " style="height:25vh; border:2px solid gray"> </div>

                            <div class="input-group mr-2 mt-5">
                                <div class="custom-file">
                                <input type="file" class="custom-file-input" v-validate="''"  name="" id="inputGroupFile03">
                                <label class="custom-file-label" for="inputGroupFile03" aria-describedby="inputGroupFileAddon02">Upload valid Id</label>
                                </div>
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('id1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('id1')">{{ errors.first('id1') }}</span>
                             </div>
                        </div>
                    </div>

                    <div class="form-row fourth">
                         
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
    add () {
           this.$store.dispatch('increment')
        },
    minus () {
           this.$store.dispatch('decrement')
        },
    validateBeforeSubmit() {
    this.$validator.validateAll().then((result) => {
        if (result) {
        alert('sucess')
        this.$router.push('/profile/finance/loandetails/workinfo')
        }
        else {
            alert('Please Correct the errors!');
        }
    })
    }    
  },

  computed : {
      collateralType : {
          get () {
                return this.$store.getters.collateralType
            },
          set (value) {
                this.$store.dispatch('updateCollateralType', value )
            }
       },
      collateralDescription : {
            get () {
                return this.$store.getters.collateralDescription
            },
            set (value) {
                this.$store.dispatch('updateCollateralDescription', value )
            }
       },
      contractAccount : {
           get () {
              return this.$store.getters.contractAccount
           },
           set (value) {
               this.$store.dispatch('updateContractAccount', value)
           }
       },
      jointAccount : {
           get () {
              return  this.$store.getters.jointAccount
           },
           set (value) {
              this.$store.dispatch('updateJointAccount', value)
           }
       },

    },
    mounted () {
        this.$store.dispatch('updateIsActive5')
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

 @media (max-width:767px){
   .small-screen-pp{
       margin-top: 15px !important
    }
 }

 

 

</style>