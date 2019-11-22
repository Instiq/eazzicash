<template>
    <div>
        <div class="container">
            <div class="container main-container">
                <mdb-jumbotron class="jumbotron-fluid small-screen-jumbo" style="height:auto; width:auto">
                  <div class="border py-3 px-3 text-muted jumbotron-head"> <span class="jumbotron-head-text h6 py-3">Finance Calculator</span></div>

                    <section class="container mt-3">
                       <div class="row">
                            <div class="col-12 mb-2">
                                <span class="m">Finance Amount (min: &#8358;100,000 max: &#8358;3,000,000)</span>
                                <label class="sr-only" for="inlineFormInputGroup"></label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"> &#8358;</div>
                                    </div>
                                    <input type="text"  v-model.number="principal" class="form-control py-0" id="inlineFormInputGroup" placeholder="amount">
                                </div>
                            </div>
                       </div>

                       <div class="row">
                            <div class="col-12 mb-2">
                            <span class="m">Repayment Duration (months)</span>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text" style="cursor:pointer" v-on:click="minus" >-</div>
                                </div>
                                <input type="text" @input='updateTenor'  style="background:whitesmoke" disabled v-model.number="tenor"  class="form-control py-0"  placeholder="months">

                                <div class="input-group-append">
                                    <div  class="input-group-text" style="color:darkgray">month(s)</div>
                                    <div class="input-group-text"  style="cursor:pointer" @click='add' >+</div>
                                </div>
                            </div>
                        </div>
                       </div>

                        <!-- <div class="col-xl-6 col-lg-9 col-md-10">
                            <span class="m">Interest rate (per month)</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">%</div>
                            </div>
                            <input type="text" style="background:whitesmoke" disabled v-model="rate" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                            </div>
                            <p class="text-danger mb-2" style="font-size:15px; width:auto">please note that Interest rate is calculated on principal</p>
                        </div> -->

                         <div class="row">
                             <div class="col-12">
                            <span class="m">Monthly Repayment Amount</span>
                            <label class="sr-only" for="inlineFormInputGroup"></label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">&#8358;</div>
                                </div>
                                <input type="text" disabled v-model="mra" class="form-control font-weight-bold py-0" style="background:whitesmoke" id="inlineFormInputGroup"  placeholder="amount">
                            </div>
                             <p class="text-danger mb-2" style="font-size:15px; width:auto"> Please note that the interest rate is fixed per month on the principal amount.</p>
                        </div>

                         </div>

                        <div class="row d-flex justify-content-around">
                             <div></div>
                             <div></div>
                            <div class="mt-3 text-white">
                                <router-link to="/profile/finance/loandetails"><button class="btn text-white " style="background:rgb(0, 85, 0); width:auto; padding:15px 20px; font-size:18px; border-radius:5px">Book Finance</button></router-link>  
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
            rate:5,    
        }
    },

    methods :{
      add () {
           this.$store.dispatch('increment')
        },
     minus () {
           this.$store.dispatch('decrement')
        },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
       },
    calculate () {
        let a = 13.5;
        let b = 16.7;
        let c = 19.96;
        let d = 23.28;
        let e = 26.66;
        let f = 30;

        let tenor = this.tenor;
        let principal = this.principal

        if (tenor==1) {
             let mra = Math.round((principal * ((a/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra)
        }
    
        if (tenor==2) {
             let mra = Math.round((principal * ((b/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra)
        }

        if (tenor==3) {
             let mra = Math.round((principal * ((c/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra) 
        }

        if (tenor==4) {
             let mra = Math.round((principal * ((d/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra)
        }

        if (tenor==5) {
             let mra = Math.round((principal * ((e/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra)
        }

        if (tenor==6) {
             let mra = Math.round((principal * ((f/100)+ 1))/tenor);
             let formattedMra = this.formatAmount(mra)   
             this.$store.dispatch('updateMra',formattedMra)
        }

       
    },
    formatAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },

    // updateTenor () {
    //     this.$store.dispatch('updateTenor')
    // }

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
       mra () {
        return this.$store.getters.mra
       }
    },

    watch :  {
        principal (newval) {
            this.calculate()
        },
        tenor (newval) {
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
    height: 80vh
 }

 .jumbotron-head {
     height: auto;
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

 input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 @media (max-width:1200px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw;
    height: auto;
    width:auto
 }
.small-screen-jumbo {
    width:auto!important;
    height:auto !important
} 
 }
 
 @media (min-width:1200px){ 
    .main-container {
    border:2px solid blac;
    margin-left:15vw !important;
    height: auto;
    width:auto
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
    width:120vw;
    max-width:120vw
 }
.small-screen-jumbo {
    width:auto!important;
    height:auto !important
} 
 }


 @media (max-width:576px){ 
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
  .jumbotron-head {
     height: auto;
     /* margin-top:-10vh; */
     background:rgb(208, 216, 224);
     padding-top : 60px !important
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
    height:72vh !important
} 
 .apply-btn {
     padding:10px 10vw;
     position: absolute;
     top:55vh;  
     border: 2px solid blu
 }

 }

</style>