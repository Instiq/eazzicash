<template>
  <div>
      
          <div class="main-container">
                 <form  @submit.prevent="validateBeforeSubmit"> 
                     <div class="form-row first">
                          <div class="col-md-5 mb-3">
                            <span class="m">Item Category  <span class="text-danger">*</span></span>
                            <select class="browser-default custom-select" v-model="itemCategory" v-validate="'required'" name="Item Category" >
                            <option value="Mobile Phones">Mobile Phones</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                            <option value="Jewelries">Jewelries (pure Gold & Silver)</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                            <option value="Camera">Digital Camera</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                            <option value="Cars">Cars</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                              <option value="Laptops">Laptops</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                              <option value="TV">TV</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                              <option value="Generators">Moveable Generators</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                              <option value="Smart Watches">Smart Watches</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                              <option value="Game Console">Game Console (Xbox/PS4)</option>
                            <option disabled="disabled">-------------------------------------------------------- </option>
                             <option value="Wrist Watch">Wrist Watch</option>
                             <option disabled="disabled">-------------------------------------------------------- </option>
                            
                            </select>
                             <div class="mt-3" >
                                <i v-show="errors.has('Item Category')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Item Category')">{{ errors.first('Item Category') }}</span>
                             </div>
                          </div>
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Item Description  <span class="text-danger">*</span> </span>
                                <input type="text"  name="Item Description" v-model="itemDescription" v-validate="'required'" style="font-size:13px;" placeholder="e.g Samsung Galaxy S9" class="form-control">
                                <div class="mt-3" >
                                    <i v-show="errors.has('Item Description')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Item Description')">{{ errors.first('Item Description') }}</span>
                             </div>
                            </div>
                     </div>


                     <div class="form-row second">
                          <div class="col-md-5 mb-3">
                            <span class="m">Year of Release  <span class="text-danger">*</span></span>
                            <select class="browser-default custom-select" v-model="releaseYear" v-validate="'required'" name="Year of Release" >
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
                            <div class="mt-3" >
                                 <i v-show="errors.has('Year of Release')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Year of Release')">{{ errors.first('Year of Release') }}</span>
                            </div>
                          </div> 
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Condition of Item  <span class="text-danger">*</span></span>
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
                            <span class="m">Pawn Amount <span class="text-danger">*</span> </span>
                            <input type="text"  v-model="pawnAmount" v-validate="'required|numeric'" name="Pawn Amount" class="form-control">
                            <div class="mt-3" >
                                <i v-show="errors.has('Pawn Amount')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                <span class="text-warning" v-show="errors.has('Pawn Amount')">{{ errors.first('Pawn Amount') }}</span>
                            </div>
                          </div>
                          

                            <div class="col-md-2"></div>

                            <div class="col-md-5">
                                <span class="m">Tenor</span>
                                <input type="number"  v-model="pawnTenor" name='Tenor' disabled class="form-control">
                            </div>
                     </div>


                     <div class="col-md-5 ml-n3 mt-3">
                        <span class="mb-3">Receipt of Item <span class="text-danger">*</span></span>
                        <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid whitesmoke"> 
                            <img style="max-width:100%; height:auto" class="img-fluid" :src="itemReceipt"  alt=''>
                        </div>
                        
                        <div class="input-group mt-5">
                            <input type="file" class="mt-3 mt-md-0 mb-2 mb-md-1" v-validate="'required'"  name="item receipt" @change="onFileChange" id="inputGroupFile02">
                            <label class="" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"></label>
                        </div>
                        <div class="mt-2" >
                            <i v-show="errors.has('item receipt')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                            <span class="text-warning" v-show="errors.has('item receipt')">{{ errors.first('item receipt') }}</span>
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
            this.$router.push('/profile/pawnshop/pawndetails/ownership')
            }
    })
    } ,
    
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

 @media (min-width:1000px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }
}
 

 

</style>