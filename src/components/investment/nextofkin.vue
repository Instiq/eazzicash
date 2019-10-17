<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <span class="h5 mb-5 d-lg-none d-block ">Next of Kin Details</span>
                     <div class="form-row first mt-lg-0 mt-5">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Name <span class="text-danger">*</span></label>
                                    <input type="text" v-model="nokName" class="form-control"  placeholder="" v-validate="'required|max:50'"  name="Next of kin Name"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Next of kin Name')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Next of kin Name')">{{ errors.first('Next of kin Name') }}</span>
                                </div>
                             </div>

                             <div class="col-md-2"></div>

                              <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Relationship <span class="text-danger">*</span></label>
                                    <input type="text" v-model="nokRelationship" class="form-control"  placeholder="" v-validate="'required'"  name="Relationship with Next of kin"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Relationship with Next of kin')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Relationship with Next of kin')">{{ errors.first('Relationship with Next of kin') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Address <span class="text-danger">*</span></label>
                                    <input type="text" v-model="nokAddress" class="form-control"  placeholder="" v-validate="'required'"  name="Next of kin Address"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Next of kin Address')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Next of kin Address')">{{ errors.first('Next of kin Address') }}</span>
                                </div>
                             </div>

                             <div class="col-md-2"></div>

                              <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">State <span class="text-danger">*</span></label>
                                    <input type="text" v-model="nokState" class="form-control"  placeholder="" v-validate="'required'"  name="State"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('State')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('State')">{{ errors.first('State') }}</span>
                                </div>
                             </div>
                     </div>

                     <div class="form-row">
                          <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Phone Number <span class="text-danger">*</span></label>
                                    <input type="text" v-model="nokPhone" class="form-control"  placeholder="" v-validate="'required|min:11|max:11|numeric'"  name="Phone Number"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Phone Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Phone Number')">{{ errors.first('Phone Number') }}</span>
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
        this.$router.push('/profile/investment/investdetails/signature')
        }
    })
    }    
  },

  computed : {
      nokName : {
          get () {
                return this.$store.getters.nokName
            },
          set (value) {
                this.$store.dispatch('updateNokName', value )
            }
       },
        nokAddress : {
          get () {
                return this.$store.getters.nokAddress
            },
          set (value) {
                this.$store.dispatch('updateNokAddress', value )
            }
       },
        nokRelationship : {
          get () {
                return this.$store.getters.nokRelationship
            },
          set (value) {
                this.$store.dispatch('updateNokRelationship', value )
            }
       },
        nokPhone : {
          get () {
                return this.$store.getters.nokPhone
            },
          set (value) {
                this.$store.dispatch('updateNokPhone', value )
            }
       },
        nokState : {
          get () {
                return this.$store.getters.nokState
            },
          set (value) {
                this.$store.dispatch('updateNokState', value )
            }
       },
    },
    mounted () {
        this.$store.dispatch('updateIsActive3I')
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