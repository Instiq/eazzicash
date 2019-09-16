<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <span class="m">Collateral Type <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="collateralType" v-validate="'required'" name="Collateral Type">
                                <option value="LPO Finance">Moveable Asset</option>
                                <option disabled="disabled">-------------------------------------------------------- </option>
                                <option value="Asset" >Contract Agreement</option>
                                <option disabled="disabled">---------------------------------------------------------</option>
                                <option value="Contract">Joint Account</option>
                                 <option disabled="disabled">---------------------------------------------------------</option>
                                <option value="Contract">Direct Payment to EazziCash</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Collateral Type')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Collateral Type')">{{ errors.first('Collateral Type') }}</span>
                                </div>
                        </div>  

                            <div class="col-md-2"></div>

                             <div class="col-md-5 mb-3">
                                <span class="m">Collateral Description <span class="text-danger">*</span></span>
                                <input type="text"  v-model="collateralDescription" name="Collateral Description" class="form-control" v-validate="'required'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('Collateral Description')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Collateral Description')">{{ errors.first('Collateral Description') }}</span>
                              </div>
                            </div>     
                     </div>


                     <div class="form-row second">
                          <div class="col-md-5 mb-3">
                                <span class="m">Contract Receivable Account Number <span class="text-danger">*</span></span>
                                <input type="text"  v-model="contractAccount" name="Contract Receivable Account Number" class="form-control" v-validate="'required|min:11|max:11|numeric'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('Contract Receivable Account Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Contract Receivable Account Number')">{{ errors.first('Contract Receivable Account Number') }}</span>
                              </div>
                            </div>     

                         <div class="col-md-2"></div>

                           <div class="col-md-5 mb-3">
                                <span class="m">Joint Receivable Account Number</span>
                                <input type="text"  v-model="jointAccount" name="JOint Receivable Account Number" class="form-control" v-validate="'min:11|max:11|numeric'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('JOint Receivable Account Number')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('JOint Receivable Account Number')">{{ errors.first('JOint Receivable Account Number') }}</span>
                              </div>
                            </div>     

                     </div>

                    <div class="form-row third">

                        <div class="col-md-5">
                              <span class="mt-md-n4 mb-md-3">Attach supporting Documents <span class="text-danger">*</span> </span>
                            <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                                <img style="max-width:100%; height:auto" class="img-fluid" :src="supportingDocs"  alt=''>
                            </div>

                            <div class="input-group mr-2 mt-3">
                                
                                <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1" v-validate="'required'"  @change="onFileChange" name="Supporting documents" id="inputGroupFile02">
                                <label class="" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"></label>
                            
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('Supporting documents')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Supporting documents')">{{ errors.first('Supporting documents') }}</span>
                             </div>
                        </div>

                        <div class="col-md-2"></div>

                         <div class="col-md-5">
                              <span class="mt-md-n4 mb-md-3">Other Documents </span>
                            <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                                <img style="max-width:100%; height:auto" class="img-fluid" :src="otherDocs"  alt=''>
                            </div>

                            <div class="input-group mr-2 mt-3">
                                
                                <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1" v-validate="''"  @change="onFileChange2"  name="id1" id="inputGroupFile03">
                                <label class="" for="inputGroupFile03" aria-describedby="inputGroupFileAddon02"></label>
                                
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('id1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('id1')">{{ errors.first('id1') }}</span>
                             </div>
                        </div>
                    </div>

                    <div class="form-row fourth">
                         
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
import{mdbNavbar,mdbInput, mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';

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
    mdbNumericInput
    },
    
    data () {
        return {
            selected:''
        }
    }, 
    methods: {
    add () {
           this.$store.dispatch('increment')
        },
    minus () {
           this.$store.dispatch('decrement')
        },
    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
            this.$router.push('/profile/finance/loandetails/signature')
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
        // converts image to base64 and diaplays selected image to the client
        reader.onload = (e) => {
           this.$store.commit('setSupportingDocs', e.target.result)
           console.log(reader.result);;
        }
        reader.readAsDataURL(file)
    },

      onFileChange2(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage2(files[0])
    },
    createImage2 (file) {
        let image = new Image();
        let reader = new FileReader();
        // converts image to base64 and diaplays selected image to the client
        reader.onload = (e) => {
           this.$store.commit('setOtherDocs', e.target.result)
           console.log(reader.result);;
        }
        reader.readAsDataURL(file)
    },

    
    
    

  },

  computed : {
      otherDocs () {
          return this.$store.getters.otherDocs
      },
       supportingDocs () {
          return this.$store.getters.supportingDocs
      },
      collateralType : {
          get () {
                return this.$store.getters.collateralType
            },
          set (value) {
                this.$store.dispatch('updateCollateralType', value )
            }
       },
      collateralDescription : {
            get () {
                return this.$store.getters.collateralDescription
            },
            set (value) {
                this.$store.dispatch('updateCollateralDescription', value )
            }
       },
      contractAccount : {
           get () {
              return this.$store.getters.contractAccount
           },
           set (value) {
               this.$store.dispatch('updateContractAccount', value)
           }
       },
      jointAccount : {
           get () {
              return  this.$store.getters.jointAccount
           },
           set (value) {
              this.$store.dispatch('updateJointAccount', value)
           }
       },

    },
    mounted () {
        this.$store.dispatch('updateIsActive5')
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

 

 @media (max-width:767px){
   .small-screen-pp{
       margin-top: 15px !important
    }
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