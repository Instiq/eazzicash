<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Account Number</label>
                                    <input type="text" v-model="accountNumber" class="form-control"  placeholder="" v-validate="'required|min:10|max:10|numeric'"  name="Account Number"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Account Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Account Number')">{{ errors.first('Account Number') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Account Name</label>
                                    <input type="text" v-model="accountName" class="form-control"  placeholder="" v-validate="'required'"  name="Account Name"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Account Name')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Account Name')">{{ errors.first('Account Name') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row">
                         <div class="col-md-5">
                                <span class="m">Bank Name</span>
                                <select class="browser-default custom-select" name="Bank Name" v-validate="'required'" v-model="bankName">
                                <option value="Access">Access Bank</option>
                                <option value="Zenith">Zenith Bank</option>
                                <option value="First">First Bank</option>
                                <option value="Polaris">Polaris Bank</option>
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
        alert('sucess')
        this.$router.push('/profile/investment/investdetails/nextofkin')
        }
        else {
            alert('Please Correct the errors!');
        }
    })
    }    
  },

  computed : {
      
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