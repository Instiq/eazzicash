<template>
  <div>
             <div class="main-container">
                <ValidationObserver v-slot="{ passes }">
                  <form  @submit.prevent="passes(next_page)">
                       <div class="container">
                          <div class="row">
                              <div class="col-md-6 borde">
                                    <div class="div1i mb-3">
                                        <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                                <label for="v">Current Address <span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <input type="text"  v-model="address" class="form-control"  placeholder=""  name="address"  >
                                                </div>
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="div2i mb-3">
                                        <ValidationProvider name="busstop" rules="required" v-slot="{ errors }">
                                                <label for="v">Nearest Bus-Stop <span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <input type="text"  v-model="busstop" class="form-control"  placeholder=""  name="busstop"  >
                                                </div>
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="div3i mb-3">
                                        <ValidationProvider name="yearsInAddress" rules="required" v-slot="{ errors }">
                                                <label for="v">Years lived in address <span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    
                                                    <input type="text"  v-model="yearsInAddress" class="form-control"  placeholder=""  name="yearsInAddress"  >
                                                </div>
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="div4i mb-3">
                                        <ValidationProvider name="state" rules="required" v-slot="{ errors }">
                                                <label for="" class="d-inline">State <span class="text-danger">*</span></label>
                                                <select name="state" :selected='statee' v-model="state"  id="state" class="browser-default custom-select">
                                                    <option value=""  >Choose State</option>
                                                    <option value='Abia'>Abia</option>
                                                    <option value='Adamawa'>Adamawa</option>
                                                    <option value='AkwaIbom'>AkwaIbom</option>
                                                    <option value='Anambra'>Anambra</option>
                                                    <option value='Bauchi'>Bauchi</option>
                                                    <option value='Bayelsa'>Bayelsa</option>
                                                    <option value='Benue'>Benue</option>
                                                    <option value='Borno'>Borno</option>
                                                    <option value='Cross River'>Cross River</option>
                                                    <option value='Delta'>Delta</option>
                                                    <option value='Ebonyi'>Ebonyi</option>
                                                    <option value='Edo'>Edo</option>
                                                    <option value='Ekiti'>Ekiti</option>
                                                    <option value='Enugu'>Enugu</option>
                                                    <option value='FCT'>FCT</option>
                                                    <option value='Gombe'>Gombe</option>
                                                    <option value='Imo'>Imo</option>
                                                    <option value='Jigawa'>Jigawa</option>
                                                    <option value='Kaduna'>Kaduna</option>
                                                    <option value='Kano'>Kano</option>
                                                    <option value='Katsina'>Katsina</option>
                                                    <option value='Kebbi'>Kebbi</option>
                                                    <option value='Kogi'>Kogi</option>
                                                    <option value='Kwara'>Kwara</option>
                                                    <option value='Lagos'>Lagos</option>
                                                    <option value='Nasarawa'>Nasarawa</option>
                                                    <option value='Niger'>Niger</option>
                                                    <option value='Ogun'>Ogun</option>
                                                    <option value='Ondo'>Ondo</option>
                                                    <option value='Osun'>Osun</option>
                                                    <option value='Oyo'>Oyo</option>
                                                    <option value='Plateau'>Plateau</option>
                                                    <option value='Rivers'>Rivers</option>
                                                    <option value='Sokoto'>Sokoto</option>
                                                    <option value='Taraba'>Taraba</option>
                                                    <option value='Yobe'>Yobe</option>
                                                    <option value='Zamfara'>Zamafara</option>
                                                </select>
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="div5i mb-3">
                                        <ValidationProvider name="meansOfId" rules="required" v-slot="{ errors }">
                                            <label for="">Means of Identification <span class="text-danger">*</span></label>
                                            <select name="meansOfId" @change="checkInput" v-model="meansOfId"  id="meansOfId" class="browser-default custom-select">
                                                <!-- <option value=""  >Choose State</option> -->
                                                <option value='International Passport'>International Passport</option>
                                                <option value="Voter's Card">Voter's Card</option>
                                                <option value="National (NIMC) ID CARD">National (NIMC) ID CARD</option>
                                                <option value="Driver's License">Driver's License</option> 
                                                <option value="Official ID Card">Official ID Card</option>
                                                <option value="Others (please specify)">Others (please specify)</option> 
                                            </select>
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="div6i mb-3" v-if="others" >
                                        <ValidationProvider name="otherId" rules="required" v-slot="{ errors }">
                                            <label for="v">Other ID Name <span class="text-danger">*</span></label>
                                            <div class="input-group">
                                                
                                                <input type="text"  v-model="otherId" class="form-control"  placeholder=""  name="Loan Amount"  >
                                            </div>
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                              </div>
                               <div class="col-md-6  borde">
                                    <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-9">
                                            <div class="div1 mb-5">
                                                <span class="mt-md-n4 mb-md-3">ID Attachment  <span class="text-danger">*</span> </span>
                                                <div class=" mb-4 mb-md-0 "  style="height:105px; width:170px;  border:1px solid blue"> 
                                                    <img style="max-width:100%; height:100px; width:auto"  class="img-fluid" :src="loanId"  alt=''>
                                                </div>
                                                 <span  style="font-size:13px; color:red">maximum file size : 2mb</span>

                                                <div class="input-group mt-2 mt-md-5">
                                                    <ValidationProvider name="idCard" rules="required|image|size:2000"  v-slot="{validate, errors }">
                                                            <label class="btn ml-n1 btn-info btn-file">
                                                                BROWSE  <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" style="display:none"  @change="onFileChange($event); validate($event)"  name="idCard" id="id">
                                                            </label> <br>
                                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                                    </ValidationProvider> 
                                                </div>
                                            </div>
                                            <div class="div2">
                                                <span class="mt-md-n4 mb-md-3">Signature <span class="text-danger">*</span> </span>
                                                <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                                    <img style="max-width:100%; height:100px;width:auto " class="img-fluid" :src="loanSign"  alt=''>
                                                </div>
                                                 <span  style="font-size:13px; color:red">maximum file size : 2mb</span>

                                                <div class="input-group mr-2 mt-2 mt-md-5">
                                                    <ValidationProvider name="signature" rules="required|image|size:2000"  v-slot="{validate, errors }">
                                                            <label class="btn ml-n1 btn-info btn-file">
                                                                BROWSE  <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"  @change="onFileChange1($event); validate($event)" style="display:none"  name="signature" id="signature">
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
                                <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mr-2 mt-2 mt-md-5">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                                     <button  @click="prev_page" class="btn btn-green">prev</button>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                                 <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mt-2 mt-md-5" style="margin:right">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <input type="submit" class="btn btn-green" value="next">
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
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
    name:'personalLoan',
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
            statee:'',
            others:false

        }
    }, 
    methods: {

    next_page () {
       if(this.$router.currentRoute.name == 'loan') return this.$router.push('/profile/loan/loandetails/loaninformation');
       if(this.$router.currentRoute.name == 'pawn') return this.$router.push('/profile/pawnshop/pawndetails/pawninfo')
    },

    prev_page () {
        this.$router.go(-1)
    },

    checkInput (e) {
       if (this.meansOfId=="Others (please specify)") return this.others=true

       this.others=false
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
          // console.log(reader.result);
        }
        reader.readAsDataURL(file)
    },
     onFileChange1(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage1(files[0])
    },
    createImage1 (file) {
        let image = new Image();
        let reader = new FileReader();
        // converts image to base64 and diaplays selected image to the client
        reader.onload = (e) => {
           this.$store.commit('setLoanSign', e.target.result)
           //console.log(reader.result);
        }
        reader.readAsDataURL(file)
    }
  },

  computed : {
      loanId : {
        get () {
              return this.$store.getters.loanId
        },
        set (value) {
            this.$store.commit('setLoanId', value)
        }
      },
      loanSign () {
          return this.$store.getters.loanSign
      },
       address : {
          get () {
                return this.$store.getters.address
            },
          set (value) {
                this.$store.dispatch('updateAddress', value )
            }
       },
       busstop : {
            get () {
                return this.$store.getters.busstop
            },
            set (value) {
                this.$store.dispatch('updateNearestBusstop', value )
            }
       },
       yearsInAddress : {
           get () {
              return this.$store.getters.yearsInAddress
           },
           set (checked) {
               this.$store.dispatch('updateYearsInAddress', checked)
           }
       },
       state : {
           get () {
              return  this.$store.getters.statee
           },
           set (value) {
              this.$store.dispatch('updateState', value)
           }
       },
       meansOfId : {
           get () {
              return  this.$store.getters.meansOfId
           },
           set (value) {
              this.$store.dispatch('updateMeansOfId', value)
           }
       },
        otherId : {
           get () {
              return  this.$store.getters.otherId
           },
           set (value) {
              this.$store.dispatch('updateOtherId', value)
           }
       }
    },
    watch : {
      
    },
    mounted () {
        if(this.$router.currentRoute.name == 'loan') return this.$store.dispatch('updateIsActive4')
        if(this.$router.currentRoute.name == 'pawn') return this.$store.dispatch('updateIsActive3P')
    }
}
</script>

<style scoped>

.parent {
display: grid;
grid-template-columns: repeat(1fr, 2);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { 
    grid-area: 1 / 1 / 2 / 2;
}

.div2 { 
    grid-area: 1 / 2 / 2 / 3;
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
     width:29vw!important
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