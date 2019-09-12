<template>
  <div>
      
          <div class="main-container">
               
            <form   @submit.prevent="validateBeforeSubmit">

                <div class="form-row"> <div class="mb-3">Applicant's Signature <span class="text-danger">*</span></div> </div>
                <div class="ml-n3 col-md-5 mb-3 mt-3 mt-md-0">
                       <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                            <img style="max-width:100%; height:auto" class="img-fluid" :src="loanSign"  alt=''>
                       </div>
                </div>

                <div class="custom-file form-row col-md-5 mb-3">
                    <input type="file" class=" mt-3 ml-n2 mt-md-0 mb-2 mb-md-1 "  @change="onFileChange"   name="file" v-validate="'required'" id="validatedCustomFile" >
                    <label class="" for="validatedCustomFile"></label>
                    <div class="mt-2" >
                       <i v-show="errors.has('file')" class="fa fa-exclamation-triangle text-danger mr-2"></i> 
                        <span class="text-danger" v-show="errors.has('file')">{{ errors.first('file') }}</span>
                    </div>
                </div>

                <div class="form-group">
                        <div class="mt-3 ">
                            <label class="checkbox">
                                <input name="terms" v-validate="'required'"  @change="isChecked" v-model="checked" type="checkbox"  >
                                <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree to the </span> 
                            </label>
                            <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span>
                            <div class="mt-1 ml-2" >
                                <i v-show="errors.has('terms')" class="fa fa-exclamation-triangle text-danger mr-2"></i> 
                                <span class="text-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
                            </div>
                       </div>
                 
                 </div>

                <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Terms & Conditions</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12a = false">Done</mdb-btn>
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
            </form>
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbJumbotron, mdbContainer,mdbRow, mdbCol,mdbIcon } from 'mdbvue';

export default {
    name:'guarantor',
    components:{
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbBtn,
    mdbJumbotron,
    mdbInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter
    },

    data () {
        return  {
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            showModal12a: false,
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

    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.$store.commit('setLoading', true);
                this.postFinance()
            }
        })
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

     postFinance () {
        this.$store.dispatch('postFinance')
    }

},

    computed : {
        loanSign () {
            return this.$store.getters.loanSign
        },
         loading () {
            return this.$store.state.loading
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
    margin:0px 0vw
 }


 .valid {
     color:green !important
 }

 .invalid {
     color:red
 }
 

 
 @media (min-width:1000px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }
}

 

</style>