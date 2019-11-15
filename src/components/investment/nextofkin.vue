<template>
  <div>
      
          <div class="main-container">
               <ValidationObserver v-slot="{ passes }">
                  <form  @submit.prevent="passes(next_page)"> 
                     <span class="h5 mb-5 d-lg-none d-block ">Next of Kin Details</span>
                     <div class="form-row first mt-lg-0 mt-5">
                             <div class="col-md-5 mb-3">
                                <ValidationProvider name="Next of kin Name" rules="required" v-slot="{ errors }">
                                     <label for="validationCustomUsername">Name <span class="text-danger">*</span></label>
                                     <input type="text" v-model="nokName" class="form-control"  placeholder=""  name="Next of kin Name"  >
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                             </div>

                             <div class="col-md-2"></div>

                              <div class="col-md-5 mb-3">
                                   <ValidationProvider name="Relationship with Next of kin" rules="required" v-slot="{ errors }">
                                      <label for="validationCustomUsername">Relationship <span class="text-danger">*</span></label>
                                      <input type="text" v-model="nokRelationship" class="form-control"  placeholder=""  name="Relationship with Next of kin"  >
                                      <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                  </ValidationProvider>                               
                             </div>
                     </div>

                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                  <ValidationProvider name="Next of kin Address" rules="required" v-slot="{ errors }">
                                      <label for="validationCustomUsername">Address <span class="text-danger">*</span></label>
                                      <input type="text" v-model="nokAddress" class="form-control"  placeholder=""   name="Next of kin Address"  >
                                      <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                  </ValidationProvider>  
                             </div>

                             <div class="col-md-2"></div>

                              <div class="col-md-5 mb-3">
                                   <ValidationProvider name="state" rules="required" v-slot="{ errors }">
                                            <label for="validationCustomUsername">State <span class="text-danger">*</span></label>
                                            <select name="state" :selected='state' v-model="nokState"  id="state" class="browser-default custom-select">
                                                <option value="" >Choose State</option>
                                                <option value='Abia'>Abia</option>
                                                <option value='Adamawa'>Adamawa</option>
                                                <option value='AkwaIbom'>AkwaIbom</option>
                                                <option value='Anambra'>Anambra</option>
                                                <option value='Bauchi'>Bauchi</option>
                                                <option value='Bayelsa'>Bayelsa</option>
                                                <option value='Benue'>Benue</option>
                                                <option value='Borno'>Borno</option>
                                                <option value='Cross River'>Cross River</option>
                                                <option value='Delta'>Delta</option>
                                                <option value='Ebonyi'>Ebonyi</option>
                                                <option value='Edo'>Edo</option>
                                                <option value='Ekiti'>Ekiti</option>
                                                <option value='Enugu'>Enugu</option>
                                                <option value='FCT'>FCT</option>
                                                <option value='Gombe'>Gombe</option>
                                                <option value='Imo'>Imo</option>
                                                <option value='Jigawa'>Jigawa</option>
                                                <option value='Kaduna'>Kaduna</option>
                                                <option value='Kano'>Kano</option>
                                                <option value='Katsina'>Katsina</option>
                                                <option value='Kebbi'>Kebbi</option>
                                                <option value='Kogi'>Kogi</option>
                                                <option value='Kwara'>Kwara</option>
                                                <option value='Lagos'>Lagos</option>
                                                <option value='Nasarawa'>Nasarawa</option>
                                                <option value='Niger'>Niger</option>
                                                <option value='Ogun'>Ogun</option>
                                                <option value='Ondo'>Ondo</option>
                                                <option value='Osun'>Osun</option>
                                                <option value='Oyo'>Oyo</option>
                                                <option value='Plateau'>Plateau</option>
                                                <option value='Rivers'>Rivers</option>
                                                <option value='Sokoto'>Sokoto</option>
                                                <option value='Taraba'>Taraba</option>
                                                <option value='Yobe'>Yobe</option>
                                                <option value='Zamfara'>Zamafara</option>
                                            </select>
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>
                             </div>
                     </div>

                     <div class="form-row">
                          <div class="col-md-5 mb-3">
                               <ValidationProvider name="Phone Number" rules="required|min:11|max:11|numeric" v-slot="{ errors }">
                                     <label for="validationCustomUsername">Phone Number <span class="text-danger">*</span></label>
                                     <input type="text" v-model="nokPhone" class="form-control"  placeholder="" name="Phone Number"  >
                                      <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
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
          state : ""
        }
    }, 
    methods: {
   next_page () {
        this.$router.push('/profile/investment/investdetails/signature')
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