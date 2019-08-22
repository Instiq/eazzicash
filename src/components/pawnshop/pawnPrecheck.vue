<template>
  <div>
      <div class="container">
          <div class="container main-container">

              <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:auto">
                  <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Pawn Repayment pre-check</span></div>

                    <section class="container  mt-3">

                          <div class="col-md-5 mb-3">
                            <span class="m">Item Category</span>
                            <select class="browser-default custom-select" v-model="itemCategoryr" required>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                            <option value="Refurbished">Refurbished</option>
                            <option value="Inheritance">Inheritance</option>
                            </select>
                          </div>


                        <div class="col-md-5 mb-3">
                            <span class="m">Specify the worth</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> &#8358;</div>
                            </div>
                            <input type="number"  v-model="itemWorth" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                            </div>
                            <span class="text-danger" style="font-size:14px">Please Note: All pawn items are to be redeemed within 30 days. Failure to do so, will result in forfeiture of the item.  </span>
                        </div>

                      
                         <div class="col-md-5">
                            <span class="m">Expected Repayment Amount</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> &#8358;</div>
                            </div>
                            <input type="number" disabled v-model="pawnAmount" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                            </div>
                        </div>

                       

                        <div class="col-md-6 mt-2 text-white float-right apply-btn" >
                          <router-link to="/profile/pawnshop/pawndetails"><button class="btn text-white " style="background:rgb(0, 85, 0); font-size:18px; border-radius:5px">Apply for Pawn</button></router-link>  
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
        let r = 18;

        let tenor = this.investTenor;
        let principal = this.investPrincipal

        if (tenor==1) {
             let mra = Math.round((principal * (r/100) * (30/360)) + principal);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateInvestMra',formattedMra)
        }
    
        if (tenor==3) {
            let mra = Math.round((principal * (r/100) * (90/360)) + principal);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateInvestMra',formattedMra)
        }

        if (tenor==6) {
             let mra = Math.round((principal * (r/100) * (180/360)) + principal);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateInvestMra',formattedMra) 
        }

        if (tenor==12) {
              let mra = Math.round((principal * (r/100) )+principal);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateInvestMra',formattedMra)
        }   
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },

    },  
    computed : {
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
       investMra () {
           return this.$store.getters.investMra
       }
    },

    watch :  {
        investPrincipal (newval) {
            this.calculate()
        },
        investTenor () {
             this.calculate()
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