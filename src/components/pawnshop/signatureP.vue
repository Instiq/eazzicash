<template>
  <div>
      
          <div class="main-container">
                <ValidationObserver v-slot="{ passes }">
                    <form  @submit.prevent="passes(postPawn)">
                        <span class="h5 mb-5 d-lg-none d-block ">Signature</span>
                        <div class="form-row"> <div class="mb-3 ml-1">Applicant's Signature <span class="text-danger">*</span></div> </div>
                        <div class="ml-n3 col-md-5 mb-3 mt-3 mt-md-0">
                            <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid white"> 
                                <img style="max-width:100%; height:auto" class="img-fluid" :src="pawnSign"  alt=''>
                            </div>
                        </div>

                        <div class="custom-file form-row col-md-5 mb-3 ml-n3">
                             <ValidationProvider name="signature" rules="required|image"  v-slot="{validate, errors }">
                                 <label class="btn ml-n1 btn-info btn-file">
                                    Choose File <input @change="onFileChange($event); validate($event)" type="file" name="signature"  style="display: none;"> 
                                  </label> <br>
                                  
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="form-group">
                                <div class="mt-3 ">
                                    <ValidationProvider name="id" rules="required"  v-slot="{validate, errors }">
                                           <label class="checkbox">
                                                <input name="terms"  @change="isChecked" v-model="checked" type="checkbox"  >
                                                <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree to the </span> 
                                            </label>
                                           <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                    </ValidationProvider>  
                                    <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span>
                                   
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



                        <div class="form-row">
                            <div class="col-md-5"></div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <mdb-btn type="submit" :disabled='isCheckedd' class="float-right btn-green mt-5" style="font-size:15px; border-radius:5px">Submit <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
                            </div> 
                        </div>
                            <mdb-alert color="danger" v-if="isError"  class="mt-2" leaveAnimation="fadeOut"  @closeAlert="retfalse" dismiss> <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i>Please check your internet connection and try again</mdb-alert>
                    </form>
             </ValidationObserver>  
          </div>
     
  </div>
</template>

<script>

import{mdbNavbar,mdbInput,mdbAlert, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbJumbotron, mdbContainer,mdbRow, mdbCol,mdbIcon } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'guarantor',
    components:{
    mdbRow,
    mdbIcon,
    mdbAlert,
    mdbCol,
    mdbBtn,
    mdbJumbotron,
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
        return  {
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            showModal12a: false,
            isLoading:false
        }
    },

     methods: {
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
     
      retfalse () {
            this.$store.commit('setIsError', false)
        },

    onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0])
    },
    createImage (file) {
        let image = new Image();
        let reader = new FileReader();
        //converts image to base 64 and displays selecte image to the client
        reader.onload = (e) => {
           this.$store.commit('setPawnSign', e.target.result);
           console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file)
  
    },

     postPawn () {
        this.isLoading = true;
        this.$store.dispatch('postPawn')
        .then(_ => this.isLoading= false)
        .catch(_ => this.isLoading= false)
    }
  
  },

   computed : {
        pawnSign () {
            return this.$store.getters.pawnSign
        },
        loading () {
            return this.$store.state.loading
        },
          isError () {
          return this.$store.state.isError
      }
    },

    mounted () {
        this.$store.dispatch('updateIsActive3P');
    }
    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw
 }


 .valid {
     color:green !important
 }
 .invalid {
     color:red
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
     width:25vw!important
 }
}

@media (min-width:1200px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:auto!important
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
     width:50vw
 }

  .main-container {
    border:2px solid bla;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
    padding: 0 10px !important
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
     width:60vw
 }

  .main-container {
    border:2px solid bla;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
    padding: 0 10px !important
 }
}

 
 

 

</style>