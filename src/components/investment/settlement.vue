<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                      <span class="h5 mb-5 d-lg-none d-block ">Settlement Account</span>
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Account Number <span class="text-danger">*</span></label>
                                    <input type="text" v-model="accountNumber" class="form-control"  placeholder="" v-validate="'required|min:10|max:10|numeric'"  name="Account Number"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Account Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Account Number')">{{ errors.first('Account Number') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Account Name <span class="text-danger">*</span></label>
                                    <input type="text" v-model="accountName" class="form-control"  placeholder="" v-validate="'required'"  name="Account Name"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Account Name')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Account Name')">{{ errors.first('Account Name') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row">
                         <div class="col-md-5">
                                <span class="m">Bank Name <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" name="Bank Name" v-validate="'required'" v-model="bankName">
                                <option selected>Choose</option>
                                <option value="access">Access Bank</option>
                                <option value="citibank">Citibank</option>
                                <option value="ecobank">Ecobank</option>
                                <option value="fidelity">Fidelity Bank</option>
                                <option value="fcmb">First City Monument Bank (FCMB)</option>
                                <option value="fsdh">FSDH Merchant Bank</option>
                                <option value="gtb">Guarantee Trust Bank (GTB)</option>
                                <option value="heritage">Heritage Bank</option>
                                <option value="Keystone">Keystone Bank</option>
                                <option value="rand">Rand Merchant Bank</option>
                                <option value="skye">Polaris Bank</option>
                                <option value="stanbic">Stanbic IBTC Bank</option>
                                <option value="standard">Standard Chartered Bank</option>
                                <option value="sterling">Sterling Bank</option>
                                <option value="suntrust">Suntrust Bank</option>
                                <option value="union">Union Bank</option>
                                <option value="uba">United Bank for Africa (UBA)</option>
                                <option value="unity">Unity Bank</option>
                                <option value="wema">Wema Bank</option>
                                <option value="zenith">Zenith Bank</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Bank Name')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Bank Name')">{{ errors.first('Bank Name') }}</span>
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
import {mdbInput, mdbBtn, mdbContainer,mdbRow, mdbCol, } from 'mdbvue';

export default {
    name:'guarantor',
    components:{
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbInput,
    },
    
    data () {
        return {
          
        }
    }, 
    methods: {
    validateBeforeSubmit() {
    this.$validator.validateAll().then((result) => {
        if (result) {
        this.$router.push('/profile/investment/investdetails/nextofkin')
        }
    })
    }    
  },

  computed : {
         accountNumber : {
          get () {
                return this.$store.getters.accountNumber
            },
          set (value) {
                this.$store.dispatch('updateAccountNumber', value )
            }
       },
       accountName : {
          get () {
                return this.$store.getters.accountName
            },
          set (value) {
                this.$store.dispatch('updateAccountName', value )
            }
       },
       bankName : {
          get () {
                return this.$store.getters.bankName
            },
          set (value) {
                this.$store.dispatch('updateBankName', value )
            }
       },
    },
    mounted () {
        this.$store.dispatch('updateIsActive2I')
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