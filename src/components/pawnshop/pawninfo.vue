<template>
  <div>
      
        <div class="main-container">
            <ValidationObserver v-slot="{ passes }">
                <form  @submit.prevent="passes(next_page)"> 
                    <span class="h5 mb-5 d-lg-none d-block ">Pawn Details</span>
                    <div class="row">
                        <div class="col-md-7">
                            <div class=" mb-3">
                               <ValidationProvider name="Item Category" rules="required" v-slot="{ errors }">
                                    <span class="m">Item Category  <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="itemCategory" name="Item Category" >
                                        <option value="Mobile Phones">Mobile Phones</option>
                                        <option value="Jewelries">Jewelries (pure Gold & Silver)</option>
                                        <option value="Camera">Digital Camera</option>
                                        <option value="Cars">Cars</option>
                                        <option value="Laptops">Laptops</option>
                                        <option value="TV">TV</option>
                                        <option value="Generators">Moveable Generators</option>
                                        <option value="Smart Watches">Smart Watches</option>
                                        <option value="Game Console">Game Console (Xbox/PS4)</option>
                                        <option value="Wrist Watch">Wrist Watch</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                 </ValidationProvider> 
                            </div>
                            <div class="mb-3">
                                <ValidationProvider name="Item Description" rules="required" v-slot="{ errors }">
                                    <span class="m">Item Description  <span class="text-danger">*</span> </span>
                                    <textarea rows="3" type="text"  name="Item Description" v-model="itemDescription" placeholder="e.g Samsung Galaxy S9" class="form-control"> </textarea>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>
                            <div class=" mb-3">
                               <ValidationProvider name="Year of Release" rules="required" v-slot="{ errors }">
                                    <span class="m">Year of Release  <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="releaseYear" name="Year of Release" >
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option> 
                                        <option value="2012">2012</option> 
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>  
                                        <option value="2009">2009</option>    
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                               </ValidationProvider>
                            </div> 
                            <div class="mb-3">
                                <ValidationProvider name="Condition of Item" rules="required" v-slot="{ errors }">
                                    <span class="m">Condition of Item  <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="itemCondition" name="Condition of Item">
                                    <option value="New">New</option>
                                    <option value="Used">Used</option>
                                    <option value="Refurbished">Refurbished</option>
                                    <option value="Inheritance">Inheritance</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                               </ValidationProvider> 
                            </div>
                            <div class=" mb-3">
                               <ValidationProvider name="Pawn Amount" rules="required" v-slot="{ errors }">
                                    <span class="m">Pawn Amount <span class="text-danger">*</span> </span>
                                    <div class="input-group mb-2">
                                         <div class="input-group-prepend">
                                            <div class="input-group-text"> &#8358;</div>
                                         </div>
                                         <input type="text"  v-model="pawnAmount"  name="Pawn Amount" class="form-control">
                                    </div>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>
                            <div class="mb-3">
                                <span class="m">Tenor</span>
                                <div class="input-group">
                                    <input type="text"  v-model="pawnTenor" name='Tenor' disabled class="form-control">
                                    <div class="input-group-append">
                                        <div  class="input-group-text" style="color:darkgray">days</div>
                                    </div>
                                </div>  
                            </div>
                            <div class="mb-3">
                                <ValidationProvider name="Account_Number" rules="required|numeric|min:10|max:10" v-slot="{ errors }">
                                    <label for="" class="d-inline">Account Number <span class="text-danger">*</span></label>
                                    <input name="Account_Number" v-model="accountNumber" type="text" class="form-control">
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                        <div class="mb-3">
                            <ValidationProvider name="Bank_Name" rules="required" v-slot="{ errors }">
                                <label for="" class="d-inline">Bank <span class="text-danger">*</span></label>
                                <select  class="browser-default custom-select" name="Bank_Name"  v-model="bankName">
                                <option >Choose</option>
                                <option selected value="access">Access Bank</option>
                                <option value="citibank">Citibank</option>
                                <option value="ecobank">Ecobank</option>
                                <option value="fidelity">Fidelity Bank</option>
                                <option value="fcmb">First City Monument Bank (FCMB)</option>
                                <option value="fsdh">FSDH Merchant Bank</option>
                                <option value="gtb">Guarantee Trust Bank (GTB)</option>
                                <option value="heritage">Heritage Bank</option>
                                <option value="Keystone">Keystone Bank</option>
                                <option value="rand">Rand Merchant Bank</option>
                                <option value="skye">Polaris Bank</option>
                                <option value="stanbic">Stanbic IBTC Bank</option>
                                <option value="standard">Standard Chartered Bank</option>
                                <option value="sterling">Sterling Bank</option>
                                <option value="suntrust">Suntrust Bank</option>
                                <option value="union">Union Bank</option>
                                <option value="uba">United Bank for Africa (UBA)</option>
                                <option value="unity">Unity Bank</option>
                                <option value="wema">Wema Bank</option>
                                <option value="zenith">Zenith Bank</option>
                                </select>
                            </ValidationProvider>
                        </div>
                        </div>
                        <div class="col-md-5">
                    
                        </div>
                     </div> 
                    
                           
                     <div class="row d-flex justify-content-between row2 borde">
                                <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mr-2 ml-2 mt-2 mt-md-5">
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                                     <button  @click="prev_page" class="btn btn-green">prev</button>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
                                 <!-- <div class="col-6 border"> -->
                                    <div class="div3">
                                        <div class="input-group mt-2 ml-2 mr-2 mt-md-5" >
                                            <ValidationProvider name="id" rules=""  v-slot="{validate, errors }">
                                                     <input type="submit" class="btn btn-green" value="next">
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                <!-- </div> -->
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
        this.$router.push('/profile/pawnshop/pawndetails/ownership')
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
           this.$store.commit('setItemReceipt', e.target.result)
           console.log(reader.result);;
        }
        reader.readAsDataURL(file)
    }    
  },

  computed : {
       itemReceipt () {
          return this.$store.getters.itemReceipt
      },
        itemCategory : {
          get () {
                return this.$store.getters.itemCategory
            },
          set (value) {
                this.$store.dispatch('updateItemCategory', value )
            }
       },
       pawnAmount : {
            get () {
                return this.$store.getters.pawnAmount
            },
            set (value) {
                this.$store.dispatch('updatePawnAmount', value )
            }
       },
       pawnTenor () {
           return this.$store.getters.pawnTenor
       },
       itemDescription : {
            get () {
                return this.$store.getters.itemDescription
            },
            set (value) {
                this.$store.dispatch('updateItemDescription', value )
            }
       },
       releaseYear : {
            get () {
                return this.$store.getters.releaseYear
            },
            set (value) {
                this.$store.dispatch('updateReleaseYear', value )
            }
       },
       itemCondition : {
            get () {
                return this.$store.getters.itemCondition
            },
            set (value) {
                this.$store.dispatch('updateItemCondition', value )
            }
       },
        accountNumber : {
           get () {
              return  this.$store.getters.accountNumber
           },
           set (value) {
              this.$store.dispatch('updateAccountNumber', value)
           }
       },
        bankName : {
           get () {
              return  this.$store.getters.bankName
           },
           set (value) {
              this.$store.dispatch('updateBankName', value)
           }
       }
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

::-webkit-input-placeholder { /* Edge */
  color: red !important;
  font-size: 13px
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red !important;
  font-size: 13px
}

::placeholder {
   color: red !important;
   font-size: 13px
}

@media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px;
 }

 .receipt {
     margin-left:-1vw
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