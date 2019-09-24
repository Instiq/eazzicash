<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                          <div class="col-md-5 mb-3">
                                <span class="m">Finance  Type <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="financeType" v-validate="'required'" name="Finance Type">
                                <option value="LPO Finance">LPO Finance</option>
                                <option value="Asset" >Asset</option>
                                <option value="Contract">Contract</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('Finance Type')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('Finance Type')">{{ errors.first('Finance Type') }}</span>
                                </div>
                           </div>  
                            

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <label for="validationCustom02">Finance Tenor <span class="text-danger">*</span></label>
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
                               Any Indebtedness? <span class="text-danger">*</span>
                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isPicked" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="indebtedness" v-validate="'included:yes,no|required'" >
                                 <label class="custom-control-label" for="invalidCheck">Yes</label> 
                            </div>

                            <div class="custom-control custom-radio ml-2 d-inline"> 
                                <input type="radio" v-model="isPicked" value='no' class="custom-control-input" id="customControlValidation3" name="indebtedness" >
                                 <label class="custom-control-label"  for="customControlValidation3">No</label>    
                            </div>

                             <div class="mt-3" >
                                    <i v-show="errors.has('indebtedness')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('indebtedness')">{{ errors.first('indebtedness') }}</span>
                            </div>
                        </div>

                         <div class="col-md-2"></div>

                          <div class="col-md-5 mb-3">
                                <label for="validationCustomUsername">Finance Amount (min:100k max:3m) <span class="text-danger">*</span></label>
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

                     </div>

                    <div class="form-row third">
                         <div class="col-md-5 mb-3">
                            <label for="exampleFormControlTextarea1">List Indebtednes</label>
                            <textarea style="background:whitesmoke" v-model="loanIndebtedness" v-validate="''"  name="Loan Indebtedness" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                         <div class="mt-3" >
                            <i v-show="errors.has('Loan Indebtedness')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                            <span class="text-warning" v-show="errors.has('Loan Indebtedness')">{{ errors.first('Loan Indebtedness') }}</span>
                        </div>
                        </div>
                       

                         <div class="col-md-2"></div>

                        <div class="col-md-5 mt-4">
                            <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                                 <img style="max-width:100%; height:auto" class="img-fluid" :src="loanId"  alt=''>
                             </div>

                            <div class="input-group mr-2 mt-5">
                                 <span class="mt-md-n4 mb-md-3">Upload ID  <span class="text-danger">*</span> </span>
                                <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" v-validate="'required'"  name="id" @change="onFileChange" id="inputGroupFile02">
                                <label class="" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"></label>
                            </div>

                             <div class="mt-3" >
                                <i v-show="errors.has('id')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('id')">{{ errors.first('id') }}</span>
                             </div>
                        </div>
                    </div>

                    <div class="form-row fourth">
                        <div class="col-md-5 small-screen-pp">
                            <label for="exampleFormControlTextarea1">Finance Purpose <span class="text-danger">*</span></label>
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
            this.$router.push('/profile/finance/loandetails/workinfo')
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
           this.$store.commit('setLoanId', e.target.result)
           console.log(reader.result);;
        }
        reader.readAsDataURL(file)
    }    
  },

  computed : {
      loanId () {
          return this.$store.getters.loanId
      },
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
       },

         financeType : {
           get () {
              return  this.$store.getters.financeType
           },
           set (selected) {
              this.$store.dispatch('updateFinanceType', selected)
           }
       },
       
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

@media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:29vw!important
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
     width:75vw
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