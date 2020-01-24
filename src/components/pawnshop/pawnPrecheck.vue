<template>
  <div>
      <div class="container">
          <div class="container main-container">

              <mdb-jumbotron class="jumbotron-fluid small-screen-jumbo" style="height:auto; width:auto">
                  <div class="border py-4 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6">Pawn Calculator</span></div>

                    <section class="container  mt-3">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <span class="m">Item Category</span>
                                <select class="browser-default custom-select" v-model="itemCategory"  name="Item Category" >
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
                            </div>
                             <div class="col-xl-6 col-lg-3 col-md-2 d-none d-md-block"></div>
                        </div>
                        <div class="row">
                             <div class="col-12 mb-2">
                                <span class="m">Present Item Worth</span>
                                <label class="sr-only" for="inlineFormInputGroup"></label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"> &#8358;</div>
                                    </div>
                                    <input type="text"  v-model.number="pawnWorth" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                                </div>
                                <!-- <p class="text-danger" style="font-size:14px; width:auto">Please Note: All pawn items are to be redeemed within 30 days as failure to do that will imply forfeiture of the item.  </p> -->
                             </div>
                              <div class="col-xl-6 col-lg-3 col-md-2 d-none d-md-block"></div>
                        </div>   
                            
                        <div class="row">
                             <div class="col-12 mb-2">
                                <span class="m">Estimated Pawn Amount (the amount you are eligible to receive)</span>
                                <label class="sr-only" for="inlineFormInputGroup"></label>
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"> &#8358;</div>
                                </div>
                                <input type="text" disabled v-model.number="pawnAmount" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                                </div>
                                <p class="text-danger" style="font-size:14px; width:auto">Please Note: All pawn items are to be redeemed within 30 days as failure to do so will imply forfeiture of the item.  </p>
                            </div>
                             <div class="col-xl-6 col-lg-3 col-md-2 d-none d-md-block"></div>
                        </div>

                         <div class="row ml-1 mb-3">
                            <button @click="calculate" class="btn btn-primary">
                                calculate
                            </button>
                        </div>

                        <div class="row">
                             <div class="col-12">
                                <span class="m">Estimated Repayment Amount</span>
                                <label class="sr-only" for="inlineFormInputGroup"></label>
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"> &#8358;</div>
                                </div>
                                <input type="text" disabled v-model.number="pawnMra" class="form-control font-weight-bold py-0" id="inlineFormInputGroup" placeholder="amount">
                                </div>
                             </div>
                             <div class="col-xl-6 col-lg-3 col-md-2 d-none d-md-block"></div>
                        </div>
                           
                        <div class="row d-flex justify-content-around">
                             <div></div>
                             <div></div>
                             <div class="mt-3  text-white  apply-bt" >
                                <router-link to="/profile/pawnshop/pawndetails"><button class="btn text-white " style="background:rgb(0, 85, 0); width:auto;  font-size:18px; border-radius:5px">Apply Now</button></router-link>  
                             </div>
                              <div></div>
                              <div></div>
                        </div>  
                     </section>  
              </mdb-jumbotron>  
          </div>
      </div>
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
    name:'apply',
    components:{
    mdbNavbar,
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
            investRate:18, 
            pawnWorth:0,
            pawnAmountt : 0 // this is to be used in the calculate() function for small screens instead of the computed 'pawnAmount'; which has been formatted to display commas in the values where necessary"
        }
    },

    methods :{
    calculatePawnAmount () {
        let presentWorth = this.pawnWorth
        let r = 0.4;
        let pawnAmount = r * presentWorth;
        this.pawnAmount = this.formatAmount(pawnAmount)
        this.pawnAmountt = pawnAmount
        return pawnAmount
    },
    calculate () {
        let r = 12.5;
        let pawnAmount;
        if(window.innerWidth>576) pawnAmount = this.calculatePawnAmount(); //this only works for screens greater than 576px
        if(window.innerWidth<=576) pawnAmount = this.pawnAmountt //this only works for screens less than 576px
        let mra = Math.round((pawnAmount * (r/100) )+ pawnAmount);
        let formattedMra = this.formatAmount(mra)   
        this.$store.dispatch('updatePawnMra',formattedMra)     
    },
    
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },

    },  
    computed : {
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
       pawnMra () {
           return this.$store.getters.pawnMra
       },
       screenWidth () {
           return window.innerWidth
       }
    },

    watch :  {
    //    pawnAmount (newval) {
    //        if(this.screenWidth<=576) return;
    //        this.calculate()
    //     },
        pawnWorth (newval) {
            this.calculatePawnAmount();
        }
    },

    mounted () {
        this.calculate()
    }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height:auto;
    margin-top: 70px 5vw
 }

 .jumbotron-head {
     height: auto;
     margin-top:-11vh;
     background:rgb(208, 216, 224)
 }
 .jumbotron-head-text {
     font-size:20px
 }

 /* .apply-btn {
     padding-left:200px;
     top:-70px;  
    
 } */

 input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 
 @media (max-width:1200px){ 
    .main-container {
    border:2px solid blac;
    margin-left:7vw;
    height: auto;
    width:auto
 }
.small-screen-jumbo {
    width:auto!important;
    height:auto !important;
    margin-top:50px
} 
 .apply-btn {
     padding:10px 7vw;
     position: absolute;
     top:52vh;  
 }
 }

  @media (min-width:1200px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw !important;
    height: auto;
    width:auto;
    margin-top:50px
 }
.small-screen-jumbo {
    width:auto !important;
    height:auto !important
} 
 }
 
 @media (max-width:767px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw;
    height: auto;
    padding:0px 0px;
    width:120vw;
    max-width:120vw
 }
.small-screen-jumbo {
    width:75vw!important;
    height:auto !important
} 
 .apply-btn {
     padding:10px 20vw;
     position: absolute;
     top:52vh;  
 }
 }


 @media (max-width:576px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw;
    height: auto;
    width:120vw;
    padding:0px 00px;
    max-width:120vw
 }
.small-screen-jumbo {
    width:auto !important;
    height:auto !important
} 
 .apply-btn {
     padding:10px 20vw;
     position: absolute !important;
     top:60vh;  
 }
  .jumbotron-head {
     height: auto;
     /* margin-top:-10vh; */
     background:rgb(208, 216, 224);
     padding-top : 30px !important
 }

 }

 @media (max-width:320px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw;
    height: auto;
   width:120vw;
    max-width:120vw
 }
.small-screen-jumbo {
    width:100vw !important;
    height:auto !important
} 

 }

</style>