<template>
  <div>
      
          <div class="main-container">
                 <ValidationObserver v-slot="{ passes }">
                    <form   @submit.prevent="passes(postLoan)" enctype="multipart/form-data">
                    <span class="h5 mb-5 d-lg-none d-block ">Signature</span>

                        <div class="form-row"> <div class="mb-3">Applicant's Signature <span class="text-danger">*</span></div> </div>
                        <div class="ml-n3 col-md-5 mb-3 mt-3 mt-md-0">
                            <div class=" mb-4 mb-md-0 " style="height:auto; width:auto; border:1px solid white"> 
                                <img style="max-width:100%; height:auto" class="img-fluid" :src="loanSign"  alt=''>
                            </div>
                        </div>

                        <div class="custom-file form-row col-md-5 ml-n4 mb-3">
                             <ValidationProvider name="signature" rules="required|image"  v-slot="{validate, errors }">
                                    <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"  @change="onFileChange($event); validate($event)"  name="signature" id="id">
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>  
                        </div>

                        <div class="form-group">
                                <div class="mt-3 ml-n1 ">
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

                        



                        <div class="form-row">
                            <div class="col-md-5"></div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <mdb-btn type="submit" :disabled='isCheckedd' class="float-right btn-green mt-5" style="font-size:15px; border-radius:5px">Submit <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
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
    mdbCol,
    mdbBtn,
    mdbAlert,
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
           this.$store.commit('setLoanSign', e.target.result);
           console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file)
    },
    postLoan () {
        this.isLoading = true
        this.$store.dispatch('postLoan')
        .then(_ => this.isLoading = false)
        .catch(_ => this.isLoading = false)
    }
  
  },

  computed : {
       loanSign () {
          return this.$store.getters.loanSign
      },
       loading () {
        return this.$store.state.loading
      },
      isError () {
          return this.$store.state.isError
      }
  },

    mounted () {
        this.$store.dispatch('updateIsActive4')
    }
    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
    padding: 0 10px
 }


 .valid {
     color:green !important
 }
 .invalid {
     color:red
 }
 

 input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(90, 105, 76);
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