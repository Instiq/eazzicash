<template>
    <div>
        <div class="main-container">
            <ValidationObserver v-slot="{ passes }">
                <form  @submit.prevent="passes(next_page)"> 
                    <span class="h5 mb-5 d-lg-none d-block ">Investment Details</span>
                    <div class="form-row first">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider name="investPrincipal" rules="required|min_value:100000" v-slot="{ errors }">
                                        <label for="validationCustomUsername">Investment Amount (min:  &#8358;100,000) <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                            </div>
                                        <input type="text" v-model.number="investPrincipal" class="form-control"  placeholder="Enter Amount"  name="Investment Amount"  >
                                        </div>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>
                            <div class="mb-3">
                                <ValidationProvider name="tenor" rules="required" v-slot="{ errors }">
                                    <span class="m">Investment Tenor <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" name="tenor" v-model="investTenor">
                                    <option value="1">1 month</option>
                                    <option value="3">3 months</option>
                                    <option value="6">6 months</option>
                                    <option value="12">12 months</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3"> 
                                <ValidationProvider name="Source of Income" rules="required" v-slot="{ errors }">
                                    <span class="m">Source of Income <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="incomeSource"  name="Source of income">
                                    <option value="Salary">Salary</option>
                                    <option value="Gift">Gift</option>
                                    <option value="Business">Business proceeds</option>
                                    <option value="Inheritance">Inheritance</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1">Other Information</label>
                                <textarea  v-model="otherInfo"   name="Loan Indebtedness" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div> 

                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-9">
                                    <div class="">
                                        <span class="mb-3">Evidence of Payment <span class="text-danger">*</span></span>
                                        <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                            <img style="max-width:100%; height:100px; width:auto" class="img-fluid" :src="paymentEvidence"  alt=''>
                                        </div>
                                        <span  style="font-size:13px; color:red">maximum file size : 2mb</span>
                                        <div class="mr-2 mt-2">
                                            <ValidationProvider name="payment Evidence" rules="required|image|size:2000"  v-slot="{validate, errors }">
                                                <label class="btn ml-n1 btn-info btn-file">
                                                    Choose File <input @change="onFileChange($event); validate($event)" type="file" name="Payment Evidence"  style="display: none;"> 
                                                </label> <br>
                                                
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   

                    <div class="row d-flex justify-content-between row2 borde">
                            <div class="div3">
                                <div class="input-group mr-2 ml-2 mt-2 mt-md-5">
                                    <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                        <button  @click="prev_page" class="btn btn-green">prev</button>
                                    </ValidationProvider> 
                                </div>
                            </div>
                            <div class="div3">
                                <div class="input-group mt-2 mr-2 mt-md-5" style="margin:right">
                                    <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                        <input type="submit" class="btn btn-green" value="next">
                                    </ValidationProvider> 
                                </div>
                            </div>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";

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
    mdbNumericInput,
    ValidationObserver, 
    ValidationProvider
    },
    
    data () {
        return {
            selected:''
        }
    }, 
    methods: {
    next_page () {
        this.$router.push('/profile/investment/investdetails/settlement')
    },
    prev_page () {
        this.$router.go(-1)
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