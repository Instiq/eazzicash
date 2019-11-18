<template>
  <div>
      
          <div class="main-container">
               <ValidationObserver v-slot="{ passes }">
                  <form  @submit.prevent="passes(postPawn)"> 
                       <span class="h5 mb-5 d-lg-none d-block ">Proof of Ownership</span>
                       <div class="form-row first">
                            <div class="col-md-6">
                                <div class=" mb-3">
                                    <ValidationProvider name="Date of Purchase" rules="required" v-slot="{ errors }">
                                            <span class="m">Date of Purchase <span class="text-danger">*</span></span>
                                            <div class="example mt-2">  
                                                 <datepicker id ='date' style="border:1px solid blu; border-radius:3px;" placeholder="" :format='customFormatter' v-model="itemDate"></datepicker>
                                                <label class="btn ml-n1  btn-primary" for="date">
                                                   Select Date
                                                </label> 
                                            </div> 
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                </div>
                                <div class="mb-3">
                                        <ValidationProvider name="Purchase Location" rules="required" v-slot="{ errors }">
                                            <label for="validationCustomUsername">Purchase Location <span class="text-danger">*</span></label>
                                            <input type="text" v-model="purchaseLocation" class="form-control mt-n2"  placeholder=""  name="Purchase Location">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                </div>
                                <div class="mb-3"> 
                                        <ValidationProvider name="Sworn Affidavit" rules="required" v-slot="{ errors }">
                                                Sworn Affidavit? <span class="text-danger">*</span>
                                                <div class="custom-control custom-radio ml-2 d-inline"> 
                                                    <input type="radio" v-model="isSworn" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="radio-stack" >
                                                    <label class="custom-control-label" for="invalidCheck">Yes</label> 
                                                </div>

                                                <div class="custom-control custom-radio ml-2 d-inline"> 
                                                    <input type="radio" v-model="isSworn" value='no' class="custom-control-input" id="customControlValidation3" name="radio-stack" >
                                                    <label class="custom-control-label"  for="customControlValidation3">No</label>    
                                                </div> <br>
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                </div>
                            </div>  
                            <div class="col-md-6">
                                <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-9">
                                    <div class="" >
                                        <span class="mb-3">Receipt/Sworn Affidavit<span class="text-danger">*</span></span>
                                        <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                            <img style="max-width:100%; height:100px" class="img-fluid" :src="itemReceipt"  alt=''>
                                        </div>
                                        
                                        <div class="input-group mt-5">
                                            <ValidationProvider name="Item Receipt" rules="required|image"  v-slot="{validate, errors }">
                                                <label class="btn btn-info btn-file">
                                                    Choose File <input @change="onFileChange($event); validate($event)" type="file" name="Item Receipt"  style="display: none;"> 
                                                </label> <br>
                                                <!-- <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"  @change="onFileChange($event); validate($event)"  name="ITem Receipt" id="id"> -->
                                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                </div>
                             </div>
                            </div>
                       </div>

                    <div class="form-group second">
                        <div class="mt-3">
                              <ValidationProvider name="isChecked" rules="required"  v-slot="{errors }">
                                    <div class="checkbo form-chec">
                                        <input name="terms" class="form-check-inpu" v-model="isChecked"  type="checkbox"  >
                                        <span class="ml-2 text-success" style="color:red"> I hereby confirm that this item belongs to me, I am not under any duress to pawn the item in exchange for loan. Where I am unable to repay back the loan within 30days, the items would be forfeited to Eazzicash (A division of My Eazzicash Solution Limited). </span> 
                                    </div>    
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
                                    <p>The below Terms and Conditions stated herein governs this Pawn Agreement between MyEazzi Solution Limited (“the Lender”) and the Borrower.  It is important that the Borrower carefully reads and keep these terms and conditions especially for future reference.</p>
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
import{mdbNavbar,mdbInput, mdbBtn,  mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter} from 'mdbvue';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'guarantor',
    components:{
     Datepicker,
    mdbNavbar,
    mdbBtn, 
    mdbInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter, 
    mdbBtn,
    ValidationObserver,
    ValidationProvider
    },
    
    data () {
        return {
            selected:'',
            showModal12a: false,
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            isLoading:false

        }
    }, 

    methods: {
        next_page () {
             this.$router.push('/profile/pawnshop/pawndetails/signature')
        },
        prev_page () {
          this.$router.go(-1)
        },
        customFormatter(date) {
            return moment(date).format('MMMM Do YYYY');
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
        postPawn () {
            this.isLoading = true;
            this.$store.dispatch('postPawn')
            .then(_ => this.isLoading= false)
            .catch(_ => this.isLoading= false)
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
            this.$store.commit('setItemReceipt', e.target.result)
            console.log(reader.result);;
            }
            reader.readAsDataURL(file)
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
        itemReceipt () {
            return this.$store.getters.itemReceipt
        },
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

    watch : {
        isSuccess (newval) {
             if(newval==true) return this.showToastrSuccess()
        },
        
        isError (newval) {
            if(newval==true) return this.showToastrError()
        }
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

  input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

::-webkit-input-placeholder { /* Edge */
  color: red !important;
  font-size: 13px
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red !important;
  font-size: 13px
}
::placeholder {
   color: red !important;
   font-size: 13px
}

.valid {
     color:green !important
 }
 .invalid {
     color:red
 }
 





 

 

</style>