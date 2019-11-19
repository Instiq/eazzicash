<template>
  <div>
      
          <div class="main-container">
               <ValidationObserver v-slot="{ passes }">
                  <form  @submit.prevent="passes(postInvestment)"> 
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

                    <div class="form-group">
                        <div class="mt-3 ">
                            <ValidationProvider name="id" rules="required"  v-slot="{errors }">
                                    <label class="checkbox">
                                        <input name="terms"  @change="isChecked" v-model="checked" type="checkbox"  >
                                        <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree that I have read and accepted the </span> 
                                    </label>
                                     <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span> <br>      
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>  
                           
                        </div>           
                    </div>

                    <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                            <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                            <mdb-modal-title >Terms & Conditions</mdb-modal-title>
                            </mdb-modal-header>
                            <mdb-modal-body>
                                <p class="font-weight-bold"> GENERAL TERMS AND CONDITIONS</p>
                                    <p>The below Terms and Conditions stated herein governs this investment Agreement between MyEazzi Solution Limited (“the Lender”) and the Borrower.  It is important that the Borrower carefully reads and keep these terms and conditions especially for future reference.</p>
                            </mdb-modal-body>
                            <mdb-modal-footer>
                            <mdb-btn color="info" @click.native="showModal12a = false">Done</mdb-btn>
                            <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                            </mdb-modal-footer>
                    </mdb-modal> 


                      <div class="row d-flex justify-content-between row2 borde">
                                <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mr-2 ml-2 mt-2 mt-md-5">
                                            <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                                     <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                                     <button  @click="prev_page" class="btn btn-green">prev</button>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                                 <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mt-2 ml- mr-4 mt-md-5" >
                                            <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                                      <mdb-btn type="submit" :disabled='isCheckedd' class="btn-green" style="font-size:15px; border-radius:5px">Submit <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
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
import {mdbInput, mdbBtn, mdbContainer,mdbRow, mdbCol, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'guarantor',
    components:{
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter,
    ValidationObserver, 
    ValidationProvider
    },
    
    data () {
        return {
            state : "",
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            showModal12a: false,
            isLoading : false
        }
    }, 
    methods: {
        next_page () {
                this.$router.push('/profile/investment/investdetails/signature')
        },
        prev_page () {
          this.$router.go(-1)
        },
        isChecked () {
         if (this.checked=='') {
           //failed
             this.isInvalid=true;
             this.isCheckedd=true; 
             this.isValid=false

         }

         else if (this.checked!='')  {
            //passed
              this.isValid=true
              this.isInvalid=false;
              this.isCheckedd=false
         }
       }, 
        showToastrSuccess () {
                this.$toastr.defaultProgressBar = false;
                this.$toastr.defaultStyle = { "background-color": "limegreen" };
                this.$toastr.s( "<strong class='h6'>Success</strong> <br> Submitted Sucessfully!");
                this.$store.commit('setIsSuccess', false)
            },
        showToastrError () {
            this.$toastr.defaultProgressBar = false;
            this.$toastr.defaultStyle = { "background-color": "firebrick" };
            this.$toastr.e(`<strong class='h6'>Error</strong><br>${this.errorMsg}`);
            this.$store.commit('setIsError', false)
        }, 
        postInvestment () {
            this.isLoading = true
            this.$store.dispatch('postInvestment')
            .then(_ => this.isLoading=false)
            .catch(_ => this.isLoading=false)
    }
  },

  computed : {
        isSuccess () {
            return this.$store.state.isSuccess
        },
        isError () {
            return this.$store.state.isError
        },
        errorMsg () {
            return this.$store.state.errorMsg
        },
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
    watch : {
          isSuccess (newval) {
             if(newval==true) return this.showToastrSuccess()
        },
        
        isError (newval) {
            if(newval==true) return this.showToastrError()
        }
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