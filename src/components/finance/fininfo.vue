<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                             <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Finance Amount (min:100k max:3m)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">&#8358;</span>
                                    </div>
                                    <input type="text"  v-model="principal" class="form-control"  placeholder="Enter Amount" v-validate="'required|min_value:100000|max_value:3000000'"  name="Loan Amount"  >
                                    <div class="mt-3" >
                                    <i v-show="errors.has('Loan Amount')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Loan Amount')">{{ errors.first('Loan Amount') }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <label for="validationCustom02">Finance Tenor</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" style="cursor:pointer" v-on:click="minus" id="inputGroupPrepend">-</span>
                                    </div>
                                    <input type="text" class="form-control" style="background:whitesmoke" disabled v-model.number="tenor" id="validationCustom02" placeholder="Duration (months)" aria-describedby="inputGroupPrepend" required>
                                    <div class="input-group-append">
                                    <span class="input-group-text" style="cursor:pointer" @click='add' id="inputGroupAppend">+</span>
                                    </div>
                                </div>
                            </div>
                     </div>


                     <div class="form-row second">
                        <div class="col-md-5 mt-4"> 
                               Any Indebtedness?
                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isPicked" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="radio-stack" v-validate="'required|included:yes,no'" >
                                 <label class="custom-control-label" for="invalidCheck">Yes</label> 
                            </div>

                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isPicked" value='no' class="custom-control-input" id="customControlValidation3" name="radio-stack" >
                                 <label class="custom-control-label"  for="customControlValidation3">No</label>    
                            </div>

                             <div class="mt-3" >
                                    <i v-show="errors.has('radio-stack')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('radio-stack')">{{ errors.first('radio-stack') }}</span>
                            </div>
                        </div>

                         <div class="col-md-2"></div>

                     </div>

                    <div class="form-row third">
                         <div class="col-md-5 mb-3">
                            <label for="exampleFormControlTextarea1">List Indebtednes</label>
                            <textarea style="background:whitesmoke" v-model="loanIndebtedness" v-validate="'required'"  name="Loan Indebtedness" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                         <div class="mt-3" >
                            <i v-show="errors.has('Loan Indebtedness')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                            <span class="text-warning" v-show="errors.has('Loan Indebtedness')">{{ errors.first('Loan Indebtedness') }}</span>
                        </div>
                        </div>
                       

                         <div class="col-md-2"></div>

                        <div class="col-md-5">
                             <div class="col-md- mb-3 " style="height:25vh; border:2px solid gray"> </div>

                            <div class="input-group mr-2 mt-5">
                                <div class="custom-file">
                                <input type="file" class="custom-file-input" v-validate="'required'"  name="id" id="inputGroupFile02">
                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload valid Id</label>
                                </div>
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('id')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('id')">{{ errors.first('id') }}</span>
                             </div>
                        </div>
                    </div>

                    <div class="form-row fourth">
                        <div class="col-md-5 small-screen-pp" style="margin-top:-100px">
                            <label for="exampleFormControlTextarea1">Finance Purpose</label>
                            <textarea style="background:whitesmoke" v-model="loanPurpose" v-validate="'required'"  name="Loanpurpose" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div class="mt-3" >
                                    <i v-show="errors.has('Loanpurpose')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Loanpurpose')">{{ errors.first('Loanpurpose') }}</span>
                        </div>
                        </div>

                        

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
        alert('sucess')
        this.$router.push('/profile/finance/loandetails/workinfo')
        }
        else {
            alert('Please Correct the errors!');
        }
    })
    }    
  },

  computed : {
       tenor : {
          get () {
                return this.$store.getters.tenor
            },
          set (value) {
                this.$store.dispatch('updateTenor', value )
            }
       },
       principal : {
            get () {
                return this.$store.getters.principal
            },
            set (value) {
                this.$store.dispatch('updatePrincipal', value )
            }
       },
       isPicked : {
           get () {
              return this.$store.getters.isPicked
           },
           set (checked) {
               this.$store.dispatch('updateIsPicked', checked)
           }
       },
       loanIndebtedness : {
           get () {
              return  this.$store.getters.loanIndebtedness
           },
           set (value) {
              this.$store.dispatch('updateLoanIndebtedness', value)
           }
       },
        loanPurpose : {
           get () {
              return  this.$store.getters.loanPurpose
           },
           set (value) {
              this.$store.dispatch('updateLoanPurpose', value)
           }
       }
    },
    mounted () {
        this.$store.dispatch('updateIsActive1')
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

 

 

</style>