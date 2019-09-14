<template>
  <div>
      <div class="container">
          <div class="container main-container">

              <mdb-jumbotron class="jumbotron-fluid" style="height:auto; width:70vw">
                  <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Returns pre-check</span></div>

                    <section class="container  mt-3">
                        <div class="col-md-5">
                            <span class="m">Investment Amount (min:100k max:3m)</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> &#8358;</div>
                            </div>
                            <input type="number"  v-model.number="investPrincipal" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                            </div>
                        </div>

                        <div class="col-md-5 mb-2">
                            <span class="m">Repayment Duration</span>
                            <select class="browser-default custom-select" v-model="investTenor" required>
                            <option value="1">1 month</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                            </select>
                        </div>

                        <div class="col-md-5">
                            <span class="m">Interest rate (per month)</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">%</div>
                            </div>
                            <input type="text" style="background:whitesmoke" disabled v-model="investRate" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                            </div>
                            <p class="text-danger mb-2" style="font-size:15px; width:auto">please note that Interest rate is calculated on principal</p>
                        </div>

                         <div class="col-md-5">
                            <span class="m">Return on Investment </span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">&#8358;</div>
                            </div>
                            <input type="text" disabled v-model="investMra" class="form-control font-weight-bold py-0" style="background:whitesmoke" id="inlineFormInputGroup"  placeholder="amount">
                            </div>
                        </div>

                        <div class="col-md-6 mt-2 text-white float-right apply-btn" >
                          <router-link to="/profile/investment/investdetails"><button class="btn text-white " style="background:rgb(0, 85, 0);width:auto; padding:15px 20px; font-size:18px; border-radius:5px">INVEST NOW</button></router-link>  
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