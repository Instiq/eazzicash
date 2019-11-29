<template>
  <div>
      
          <div class="main-containe">
                <ValidationObserver v-slot="{ passes }">
                  <form  @submit.prevent="passes(next_page)">
                     <span class="h5 mb-5 d-lg-none d-block ">Loan Details</span> 
                     <div class="form-row first">
                            <div class="col-md-5 mb-3">
                                <ValidationProvider name="principal" rules="required|min_value:100000|max_value:3000000" v-slot="{ errors }">
                                        <label for="v">Loan Amount<span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                            </div>
                                            <input type="text"  v-model="principal" class="form-control"  placeholder="Enter Amount"  name="Loan Amount"  >
                                        </div>
                                         <span class="text-success" style="font-size:15px"> (min: &#8358;100,000 max: &#8358;3,000,000) </span> <br>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <label for="validationCustom02">Loan Tenor <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" style="cursor:pointer" v-on:click="minus" id="inputGroupPrepend">-</span>
                                    </div>
                                    <input type="text" class="form-control" style="background:whitesmoke" disabled v-model.number="tenor" id="validationCustom02" placeholder="Duration (months)" aria-describedby="inputGroupPrepend" required>
                                    <div class="input-group-append">
                                        <span class="input-group-text" style="cursor:pointer" @click='add' id="inputGroupAppend">+</span>
                                    </div>
                                </div>
                            </div>
                     </div>


                     <div class="form-row second">
                        <div class="col-md-5 mt-3 mb-3"> 
                               Any Indebtedness? <span class="text-danger">*</span>
                                <ValidationProvider name="" rules="required" v-slot="{ errors }">
                                      <div class="custom-control custom-radio ml-2 d-inline"> 
                                        <input type="radio" v-model="isPicked" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="indebtedness" >
                                        <label class="custom-control-label" for="invalidCheck">Yes</label> 
                                      </div>

                                      <div class="custom-control custom-radio ml-2 d-inline"> 
                                        <input type="radio" v-model="isPicked" value='no' class="custom-control-input" id="customControlValidation3" name="indebtedness" >
                                        <label class="custom-control-label"  for="customControlValidation3">No</label>    
                                      </div> <br>
                                      <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                        </div>

                        <div class="col-md-2"></div>

                        <div class="col-md-5 mb-3">
                            <ValidationProvider name="Repayment Mode" rules="required" v-slot="{ errors }">
                                    <span class="m">Repayment Mode <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="repaymentMode" name="Repayment Mode">
                                        <option value="Bank-Transfer">Bank Transfer</option>
                                        <option value="Direct-Debit">Direct Debit</option>
                                        <option value="Postdated-Cheques">Postdated Cheques</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>        
                        </div>

                     </div>


                    <div class="form-row third mb-3">
                         <div class="col-md-5 mb-3 mt-3"  v-if='isPickedd'>
                             <ValidationProvider name="Loan Indebtedness" rules="required" v-slot="{ errors }">
                                        <label for="exampleFormControlTextarea1">List Indebtednes <span class="text-danger">*</span> </label>
                                        <textarea v-model="loanIndebtedness"  name="Loan Indebtedness" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                             </ValidationProvider> 
                            
                        </div>

                        <div class="col-md-5 mt-3" v-else>
                            <ValidationProvider name="loanPurpose" rules="required" v-slot="{ errors }">
                                <label for="exampleFormControlTextarea1">Loan Purpose <span class="text-danger">*</span></label>
                                <textarea v-model="loanPurpose" name="loanPurpose" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider> 
                        </div>
                       

                        <div class="col-md-2"></div>

                        <div class="col-md-5 mt-3 loanPurpose" v-if='isPickedd'>
                            <ValidationProvider name="loanPurpose" rules="required" v-slot="{ errors }">
                                <label for="exampleFormControlTextarea1">Loan Purpose <span class="text-danger">*</span></label>
                                <textarea v-model="loanPurpose" name="loanPurpose" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider> 
                        </div>

                      
                    </div>

                    <div class="form-row">
                        <div class="col-md-5 mb-3">
                            <ValidationProvider name="Account_Number" rules="required|numeric|min:10|max:10" v-slot="{ errors }">
                                <label for="" class="d-inline">Account Number <span class="text-danger">*</span></label>
                                <input name="Account_Number" v-model="accountNumber" type="text" class="form-control">
                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="col-md-2"></div>

                        <div class="col-md-5">
                            <ValidationProvider name="Bank_Name" rules="required" v-slot="{ errors }">
                                <label for="" class="d-inline">Bank <span class="text-danger">*</span></label>
                                <select  class="browser-default custom-select" name="Bank_Name"  v-model="bankName">
                                <option >Choose</option>
                                <option selected value="access">Access Bank</option>
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
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-between row2 borde">
                            <div class="div3">
                                <div class="input-group mt-2 ml-3 mt-md-5">
                                    <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                        <button  @click="prev_page" class="btn btn-green">prev</button>
                                    </ValidationProvider> 
                                </div>
                            </div>
                            <div class="div3">
                                <div class="input-group mt-2  mr-3 ml-3 mt-md-5">
                                    <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                         <input type="submit" class="btn btn-green" value="next">
                                    </ValidationProvider> 
                                </div>
                            </div>
                    </div>
                </form>
             </ValidationObserver>   
        </div>
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";

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
    mdbNumericInput,
    ValidationObserver,
    ValidationProvider 
    },
    
    data () {
        return {
            selected:'',
            isPickedd:false
        }
    }, 
    methods: {

    add () {
           this.$store.dispatch('increment')
        },
    minus () {
           this.$store.dispatch('decrement')
        },

    next_page () {
         this.$router.push('/profile/loan/loandetails/workinfo')
    },

    prev_page () {
        this.$router.go(-1)
    },
   
    onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0])
    },
    createImage (file) {
        let image = new Image();
        let reader = new FileReader();
        // converts image to base64 and diaplays selected image to the client
        reader.onload = (e) => {
           this.$store.commit('setLoanId', e.target.result)
           console.log(reader.result);
        }
        reader.readAsDataURL(file)
    }
  },

  computed : {
      loanId () {
          return this.$store.getters.loanId
      },
       tenor : {
          get () {
                return this.$store.getters.tenor
            },
          set (value) {
                this.$store.dispatch('updateTenor', value )
            }
       },
       principal : {
            get () {
                return this.$store.getters.principal
            },
            set (value) {
                this.$store.dispatch('updatePrincipal', value )
            }
       },
       isPicked : {
           get () {
              return this.$store.getters.isPicked
           },
           set (checked) {
               this.$store.dispatch('updateIsPicked', checked)
           }
       },
       loanIndebtedness : {
           get () {
              return  this.$store.getters.loanIndebtedness
           },
           set (value) {
              this.$store.dispatch('updateLoanIndebtedness', value)
           }
       },
        loanPurpose : {
           get () {
              return  this.$store.getters.loanPurpose
           },
           set (value) {
              this.$store.dispatch('updateLoanPurpose', value)
           }
       },
        accountNumber : {
           get () {
              return  this.$store.getters.accountNumber
           },
           set (value) {
              this.$store.dispatch('updateAccountNumber', value)
           }
       },
        repaymentMode : {
           get () {
              return  this.$store.getters.repaymentMode
           },
           set (value) {
              this.$store.dispatch('updateRepaymentMode', value)
           }
       },
        bankName : {
           get () {
              return  this.$store.getters.bankName
           },
           set (value) {
              this.$store.dispatch('updateBankName', value)
           }
       }
    },
    watch : {
        isPicked (newval) {
           
            if (newval=='yes') return  this.isPickedd=true;
            
            if (newval=='no')   return  this.isPickedd=false;
        }
    },
    mounted () {
        this.$store.dispatch('updateIsActive1')
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

  input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }


@media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:29vw!important
 }
}



@media (max-width:767px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }

 .small-screen-id {
     width:75vw
 }
}

 @media (max-width:576px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }

 .small-screen-id {
     width:70vw
 }
}


 

 

</style>