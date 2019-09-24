<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Investment Amount <span class="text-danger">*</span></label>
                                <div class="input-group mt-n1">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                    </div>
                                    <input type="text" v-model.number="investPrincipal" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000'"  name="Investment Amount"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Investment Amount')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Investment Amount')">{{ errors.first('Investment Amount') }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2"></div>

                             <div class="col-md-5">
                                <span class="m">Investment Tenor <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="investTenor" required>
                                <option value="1">1 month</option>
                                <option value="3">3 months</option>
                                <option value="6">6 months</option>
                                <option value="12">12 months</option>
                                </select>
                            </div>
                     </div>


                     <div class="form-row second">
                        <div class="col-md-5 mt-4"> 
                             <span class="m">Source of Income <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="incomeSource" v-validate="'required|included:Salary,Gift,Business,Inheritance'" name="Source of income">
                                <option value="Salary">Salary</option>
                                <option value="Gift">Gift</option>
                                <option value="Business">Business proceeds</option>
                                <option value="Inheritance">Inheritance</option>
                                </select>
                                 <div class="mt-3" >
                                    <i v-show="errors.has('Source of income')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Source of income')">{{ errors.first('Source of income') }}</span>
                                </div>
                        </div>

                         <div class="col-md-2"></div>

                        <div class="col-md-5 mb-3">
                            <label for="exampleFormControlTextarea1">Other Information</label>
                            <textarea style="background:whitesmoke" v-model="otherInfo"   name="Loan Indebtedness" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>    
                     </div>

                     <div class="">
                         <div class="form-row">
                        <div class="col-md-5">
                        <span class="mb-3">Evidence of Payment <span class="text-danger">*</span></span>
                         <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                            <img style="max-width:100%; height:auto" class="img-fluid" :src="paymentEvidence"  alt=''>
                         </div>
                        <div class="mr-2 mt-2 mt-md-5">
                            <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" @change="onFileChange"  name="Payment Evidence" v-validate="'required'" id="validatedCustomFile" >
                            <label class="" for="validatedCustomFile"></label>
                            <div class="mt-2" >
                            <i v-show="errors.has('Payment Evidence')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Payment Evidence')">{{ errors.first('Payment Evidence') }}</span>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-2"></div>

                        <div class="col-md-5">
                        <span class="mb-3">ID Attachment <span class="text-danger">*</span></span>
                         <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                            <img style="max-width:100%; height:auto" class="img-fluid" :src="investId"  alt=''>
                         </div>
                        <div class="mr-2 mt-2 mt-md-5">
                            <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" @change="onFileChange2"  name="ID" v-validate="'required'" id="validatedCustomFile" >
                            <label class='' for="validatedCustomFile"></label>
                            <div class="mt-2" >
                            <i v-show="errors.has('ID')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('ID')">{{ errors.first('ID') }}</span>
                            </div>
                        </div>
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
    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
            this.$router.push('/profile/investment/investdetails/settlement')
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
           this.$store.commit('setPaymentEvidence', e.target.result)
           console.log(reader.result);
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
           this.$store.commit('setInvestId', e.target.result)
           console.log(reader.result);;
        }
        reader.readAsDataURL(file)
    },

  },

  computed : {
       paymentEvidence () {
          return this.$store.getters.paymentEvidence
      },
       investId () {
          return this.$store.getters.investId
      },
       investTenor : {
          get () {
                return this.$store.getters.investTenor
            },
          set (value) {
                this.$store.dispatch('updateInvestTenor', value )
            }
       },
       investPrincipal : {
            get () {
                return this.$store.getters.investPrincipal
            },
            set (value) {
                this.$store.dispatch('updateInvestPrincipal', value )
            }
       },
        incomeSource : {
            get () {
                return this.$store.getters.incomeSource
            },
            set (value) {
                this.$store.dispatch('updateIncomeSource', value )
            }
        },   
        otherInfo: {
            get () {
                return this.$store.getters.otherInfo
            },
            set (value) {
                this.$store.dispatch('updateOtherInfo', value )
            }
       },
    },
    mounted () {
        this.$store.dispatch('updateIsActive1I')
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

 @media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:25vw!important
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
     width:55vw
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