<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                          <div class="col-md-5 mb-3">
                            <span class="m">Item Category</span>
                            <select class="browser-default custom-select" v-model="itemCategoryr" v-validate="'required'" name="Item Category" >
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                            <option value="Refurbished">Refurbished</option>
                            <option value="Inheritance">Inheritance</option>
                            </select>
                             <div class="mt-3" >
                                <i v-show="errors.has('Item Category')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Item Category')">{{ errors.first('Item Category') }}</span>
                             </div>
                          </div>
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Model</span>
                                <select class="browser-default custom-select" v-model="itemModel" v-validate="'required'" name="Item Model">
                                <option value="1">pending</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Item Model')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Item Model')">{{ errors.first('Item Model') }}</span>
                             </div>
                            </div>
                     </div>


                     <div class="form-row second">
                          <div class="col-md-5 mb-3">
                            <span class="m">Year of Release</span>
                            <select class="browser-default custom-select" v-model="itemRelease" v-validate="'required'" name="Year of Release" >
                                <option value="1">pending</option>
                            </select>
                            <div class="mt-3" >
                                 <i v-show="errors.has('Year of Release')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Year of Release')">{{ errors.first('Year of Release') }}</span>
                            </div>
                          </div> 
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Condition of Item</span>
                                <select class="browser-default custom-select" v-model="itemCondition" v-validate="'required'" name="Condition of Item">
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                                <option value="Refurbished">Refurbished</option>
                                <option value="Inheritance">Inheritance</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Condition of Item')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Condition of Item')">{{ errors.first('Condition of Item') }}</span>
                                </div>
                          
                            </div>
                     </div>

                     
                     <div class="form-row second">
                          <div class="col-md-5 mb-3">
                            <span class="m">Loan Amount</span>
                            <select class="browser-default custom-select" v-model="loanAmount" v-validate="'required'" name="Loan Amount" >
                                <option value="1">pending</option>
                            </select>
                            <div class="mt-3" >
                                <i v-show="errors.has('Loan Amount')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Loan Amount')">{{ errors.first('Loan Amount') }}</span>
                            </div>
                          </div>
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Tenor</span>
                                <select class="browser-default custom-select" v-model="loanTenor" v-validate="'required'" name="Loan Tenor" >
                                 <option value="1">pending</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Loan Tenor')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Loan Tenor')">{{ errors.first('Loan Tenor') }}</span>
                                </div>
                            </div>
                     </div>


                     <div class="">
                        <div class="form-row">
                        <div class="col-md-5">
                        <div class="mb-3">Receipt of Item</div>
                        <div class="mb-3" style="height:25vh; border:2px solid gray"> </div>
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input"  name="Payment Evidence" v-validate="'required'" id="validatedCustomFile" >
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="mt-2" >
                            <i v-show="errors.has('Payment Evidence')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Payment Evidence')">{{ errors.first('Payment Evidence') }}</span>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-2"></div>
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
        alert('sucess')
        this.$router.push('/profile/pawnshop/pawndetails/ownership')
        }
        else {
            alert('Please Correct the errors!');
        }
    })
    }    
  },

  computed : {
       
    },
    mounted () {
        this.$store.dispatch('updateIsActive1P')
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