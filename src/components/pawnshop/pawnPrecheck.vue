<template>
  <div>
      <div class="container">
          <div class="container main-container">

              <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:70vw">
                  <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Pawn Repayment pre-check</span></div>

                    <section class="container  mt-3">

                          <div class="col-md-5 mb-3">
                            <span class="m">Item Category</span>
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
                          </div>


                        <div class="col-md-5 mb-3">
                            <span class="m">Pawn Amount (the amount you want to borrow)</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> &#8358;</div>
                            </div>
                            <input type="text"  v-model.number="pawnAmount" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                            </div>
                            <p class="text-danger" style="font-size:14px; width:auto">Please Note: All pawn items are to be redeemed within 30 days. Failure to do so, will result in forfeiture of the item.  </p>
                        </div>

                      
                         <div class="col-md-5">
                            <span class="m">Estimated Repayment Amount</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> &#8358;</div>
                            </div>
                            <input type="text" disabled v-model.number="pawnMra" class="form-control font-weight-bold py-0" id="inlineFormInputGroup" placeholder="amount">
                            </div>
                        </div>

                       

                        <div class="col-md-6 mt-2 text-white float-right apply-btn" >
                          <router-link to="/profile/pawnshop/pawndetails"><button class="btn text-white " style="background:rgb(0, 85, 0); width:auto; padding:15px 20px; font-size:18px; border-radius:5px">Apply for Pawn</button></router-link>  
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
        }
    },

    methods :{
    calculate () {
        let r = 12.5;
        let pawnAmount = this.pawnAmount
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
       }
    },

    watch :  {
       pawnAmount (newval) {
            this.calculate()
        },
    },

    mounted () {
        this.calculate()
    }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    margin-left:3vw;
    height:auto
 }

 .jumbotron-head {
     height: 10vh;
     margin-top:-10.3vh;
     background:rgb(208, 216, 224)
 }
 .jumbotron-head-text {
     font-size:20px
 }

 .apply-btn {
     padding-left:200px;
     top:-70px;  
    
 }

</style>