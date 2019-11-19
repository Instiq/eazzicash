<template>
  <div>
      
          <div class="main-container">
               <ValidationObserver v-slot="{ passes }">
                 <form  @submit.prevent="passes(next_page)"> 
                      <span class="h5 mb-5 d-lg-none d-block ">Settlement Account</span>
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <ValidationProvider name="Account Number" rules="required|min:10|max:10|numeric" v-slot="{ errors }">
                                     <label for="validationCustomUsername">Account Number <span class="text-danger">*</span></label>
                                     <input type="text" v-model="accountNumber" class="form-control"  placeholder=""  name="Account Number"  >
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
                             </div>
                     </div>

                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                 <ValidationProvider name="Account Name" rules="required" v-slot="{ errors }">
                                    <label for="validationCustomUsername">Account Name <span class="text-danger">*</span></label>
                                    <input type="text" v-model="accountName" class="form-control"  placeholder=""  name="Account Name"  >
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                             </div>
                     </div>

                     <div class="form-row mb-3">
                         <div class="col-md-5">
                               <ValidationProvider name="Bank Name" rules="required" v-slot="{ errors }">
                                    <span class="m">Bank Name <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" name="Bank Name"  v-model="bankName">
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
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                     </div>
                     <div class="row d-flex justify-content-between row2 borde">
                                <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mr-2 ml-3 mt-2 mt-md-5">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                                     <button  @click="prev_page" class="btn btn-green">prev</button>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                                 <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mt-2 mr-3 mt-md-5" style="margin:right">
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
import {mdbInput, mdbBtn, mdbContainer,mdbRow, mdbCol, } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'guarantor',
    components:{
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbInput,
    ValidationObserver,
    ValidationProvider
    },
    
    data () {
        return {
          
        }
    }, 
    methods: {
        next_page () {
            this.$router.push('/profile/investment/investdetails/nextofkin')
        },
        prev_page () {
            this.$router.go(-1)
        },
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