<template>
  <div>
        <div class="main-container">
            <form  @submit.prevent="validateBeforeSubmit"> 
                 <section class="section-1 mb-3"> 
                    <span class="mb-3" style="color:blue; font-weight:400">Guarantor 1</span>
                    <div class="form-row one mt-3">
                        <div class="col-md-5 mb-3">
                                <span class="m">Title <span class="text-danger">*</span></span>
                                <select class="browser-default custom-select" v-model="title" name="title" v-validate="'required|included:Mr,Mrs,Miss'">
                                <option selected value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                                </select>
                                <div class="mt-3" >
                                    <i v-show="errors.has('title')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                              </div>
                            </div>  

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Phone Number <span class="text-danger">*</span></span>
                                <input type="text"  v-model="phone" name="phone" class="form-control" v-validate="'required|min:11|max:11|numeric'" placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('phone')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                              </div>
                            </div>         
                    </div>

                    <div class="form-row two">
                            <div class="col-md-5 mb-3">
                                <span class="m">First Name <span class="text-danger">*</span></span>
                                <input type="text"  v-model="firstname" class="form-control" v-validate="'required|alpha|max:50'" name="firstname"  placeholder="" require>
                                <div class="mt-3" >
                                    <i v-show="errors.has('firstname')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
                              </div>
                            </div>    

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Email Address <span class="text-danger">*</span></span>
                               <div class="input-group">
                                    <input type="text"  v-model="email" class="form-control"  placeholder=""   name='email' v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
                                     <div class="input-group-append">
                                       <span class="input-group-text" id="inputGroupAppend">@example.com</span>
                                    </div>
                                     <div class="vee-validate mt-2">
                                        <i v-show="errors.has('email')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                                       <span v-show="errors.has('email')" class="text-warning">{{ errors.first('email') }}</span>
                                    </div>
                                </div>
                            </div>         
                    </div>

                    <div class="form-row three">
                        
                            <div class="col-md-5 mb-3">
                                <span class="m">Last Name <span class="text-danger">*</span></span>
                                <input type="text"  v-model="lastname" class="form-control" name="lastname" v-validate="'required|alpha|max:50'" placeholder="">
                                 <div class="mt-3" >
                                    <i v-show="errors.has('lastname')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
                                </div>
                            </div>   

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Home Address <span class="text-danger">*</span></span>
                                <input type="text"  v-model="address" name="address" v-validate="'required|max:50'" class="form-control"  placeholder="">
                                <div class="mt-3" >
                                    <i v-show="errors.has('address')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('address')">{{ errors.first('address') }}</span>
                                </div>
                            </div>         
                    </div>

                </section>


                 <section class="section-2"> 
                    <span class="mb-3" style="color:blue; font-weight:400">Guarantor 2</span>
                    <div class="form-row one mt-3">
                        <div class="col-md-5 mb-3">
                                <span class="m">Title</span>
                                <select class="browser-default custom-select" v-model="title1" name="title1" v-validate="'included:Mr,Mrs,Miss'">
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                                </select>              
                                 <div class="mt-3" >
                                    <i v-show="errors.has('title1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('title1')">{{ errors.first('title1') }}</span>
                              </div>                
                            </div>  

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Phone Number</span>
                                <input type="text"  v-model="phone1" name="phone1" class="form-control" v-validate="'min:11|max:11|numeric'"   placeholder="" >
                                 <div class="mt-3" >
                                    <i v-show="errors.has('phone1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('phone1')">{{ errors.first('phone1') }}</span>
                              </div>
                            </div>         
                    </div>

                    <div class="form-row two">
                            <div class="col-md-5 mb-3">
                                <span class="m">First Name</span>
                                <input type="text"  v-model="firstname1" class="form-control" v-validate="'alpha|max:50'" name="firstname1" placeholder="" require> 
                                <div class="mt-3" >
                                    <i v-show="errors.has('firstname1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('firstname1')">{{ errors.first('firstname1') }}</span>
                              </div>                             
                            </div>    

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Email Address</span>
                                 <div class="input-group">
                                    <input type="text"  v-model="email1" class="form-control"  placeholder=""   name='email1' v-validate="'email'" :class="{'input': true, 'is-danger': errors.has('email') }">
                                     <div class="input-group-append">
                                       <span class="input-group-text" id="inputGroupAppend">@example.com</span>
                                    </div>
                                    <div class="vee-validate mt-2">
                                        <i v-show="errors.has('email1')" class="fa fa-exclamation-triangle text-warning ml-2 mr-2"></i>
                                       <span v-show="errors.has('email1')" class="text-warning">{{ errors.first('email1') }}</span>
                                    </div>
                                </div>
                            </div>         
                    </div>

                    <div class="form-row three">
                        
                            <div class="col-md-5 mb-3">
                                <span class="m">Last Name</span>
                                <input type="text"   v-model="lastname1" class="form-control" name="lastname1" v-validate="'alpha|max:50'" placeholder="" require>
                                  <div class="mt-3" >
                                    <i v-show="errors.has('lastname1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('lastname1')">{{ errors.first('lastname1') }}</span>
                                </div>
                            </div>   

                            <div class="col-md-2"></div>

                            <div class="col-md-5 mb-3">
                                <span class="m">Home Address</span>
                                <input type="text" v-model="address2" name="address1" class="form-control" v-validate="'max:50'" placeholder="">
                                  <div class="mt-3" >
                                    <i v-show="errors.has('address1')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('address1')">{{ errors.first('address1') }}</span>
                                  </div>
                            </div>         
                    </div>

                </section>

                <div class="form-row">
                      <div class="col-md-5"></div>
                      <div class="col-md-2"></div>
                      <div class="col-md-5">
                            <mdb-btn type="submit"  class="float-right btn-green mt-5" style="font-size:15px; border-radius:5px"> Next</mdb-btn>
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
    mdbNavItem, 
    mdbBtn,
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

    methods: {
     
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
            this.$router.push('/profile/loan/loandetails/signature')
            }
        })
      }
    },
    computed : {
        title : {
            get () {
                return this.$store.getters.title
            },
            set (value) {
                this.$store.dispatch('updateTitle', value)
            }
        },
        title1 : {
            get () {
                return this.$store.getters.title1
            },
            set (value) {
                this.$store.dispatch('updateTitle1', value)
            }
        },
        phone : {
            get () {
                return this.$store.getters.phone
            },
            set (value) {
                this.$store.dispatch('updatePhone', value)
            }
        },
        phone1 : {
            get () {
                return this.$store.getters.phone1
            },
            set (value) {
                this.$store.dispatch('updatePhone1', value)
            }
        },
        firstname : {
            get () {
                return this.$store.getters.firstname
            },
            set (value) {
                this.$store.dispatch('updateFirstName', value)
            }
        },
        firstname1 : {
            get () {
                return this.$store.getters.firstname1
            },
            set (value) {
                this.$store.dispatch('updateFirstName1', value)
            }
        },
        email : {
            get () {
                return this.$store.getters.email
            },
            set (value) {
                this.$store.dispatch('updateEmail', value)
            }
        },
        email1 : {
            get () {
                return this.$store.getters.email1
            },
            set (value) {
                this.$store.dispatch('updateEmail1', value)
            }
        },
        lastname : {
            get () {
                return this.$store.getters.lastname
            },
            set (value) {
                this.$store.dispatch('updateLastname', value)
            }
        },
        lastname1 : {
            get () {
                return this.$store.getters.lastname1
            },
            set (value) {
                this.$store.dispatch('updateLastname1', value)
            }
        },
        address : {
            get () {
                return this.$store.getters.address
            },    
            set (value) {
                this.$store.dispatch('updateAddress', value)
            }
        },
        address2 : {
            get () {
                return this.$store.getters.address2
            },
            set (value) {
                this.$store.dispatch('updateAddress2', value)
            }
        },


    },
    mounted () {
        this.$store.dispatch('updateIsActive3')
    }
    
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    /* height: auto; */
    width:auto;
    margin:0px 0vw
 }
 .jumbotron-head {
     height: 10vh;
     margin-top:-10vh;
     background:rgb(208, 216, 224);

 }
 .jumbotron-head-text {
     font-size:20px
 }

 input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 

</style>