<template >
    <div style="height:100%; width:100%" >
         <section  class=' view image'>
            <div class="flex-center" style="height:100%">
                <section class="one">
                    <mdb-navbar  >
                       <mdb-navbar-brand href="#" >
                          <router-link to="/"> <img class ='nav' src = "../assets/logomain.png" height="50px" /></router-link>
                       </mdb-navbar-brand>
                    </mdb-navbar>
                </section>
        </div>
           
       

        
          <section class="2" style="margin-top:-65vh">
                    <div class="container">
                        <mdb-row class="small-screen">
                            <mdb-col class="col-md-8 col-12">
                                <p class="text-white mb-4 small-screen-intro" style="font-size:3.8vw">
                                    Introducing <span style=" font-weight:bold">Pawnshop</span> <img src="../assets/logomain.png" class='rounded-circle d-none ml-2 small-screen-pawn' style="height:50px;width:50px"   alt="">
                                </p>

                                <p class="text-white h5 font-weight-light small-screen-text" style="width:40vw;">
                                    You can now pawn items such as mobile phones, Tv, cars e.t.c and receive money as exchange.
                                    The value of the item will determine the amount to be cashed out.
                                </p>  
                            </mdb-col>

                            <mdb-col class="col-md-4 col-10">
                                 <div class = 'card small-screen-card px-2 mt-n5'>
                                     <ValidationObserver v-slot="{ passes }">
                                        <form  @submit.prevent="passes(userSignIn)">

                                            <mdb-alert color="danger" v-if="isEmailorPasswordCorrect" class="mt-2" leaveAnimation="fadeOut"  @closeAlert="retfalse" dismiss> <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i>Invalid email or password</mdb-alert>
                                        
                                            <mdb-card-body >
                                                    <section>
                                                        <mdb-row>
                                                            <mdb-col >
                                                                <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                                                                     <mdb-input type="text" name ='email' v-model="email" label="Email" bg size="lg" />
                                                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                                                </ValidationProvider> 

                                                                 <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                                                                      <mdb-input type="password" name ='password' v-model="password" label="Password" bg size="lg" />
                                                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                                                </ValidationProvider> 
                                                               
                                                                <router-link to="/passwordResetLink"> <span class="float-right mt-1 mb-4" style="color:orange; cursor:pointer">Forgot password?</span></router-link>
                                                            </mdb-col>
                                                        </mdb-row>
                                                    </section>

                                                    <div class="text-center mb-4">
                                                        <button  type='submit'  class="btn btn-block"><span class="login-size text-white"> Login <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span> </span></button>
                                                    </div>

                                                    <p class="text-center small-screen-txt" style="color:darkslateblue"> Don't have an account yet? <a href="/signup" style="color:limegreen; font-weight:bold"> SIGNUP</a> </p>
                                            </mdb-card-body>
                                        </form>  
                                     </ValidationObserver>  
                                </div>  
                            </mdb-col>
                        </mdb-row>
                    </div>
            </section>  
        </section>
    </div>
</template>


<script>
import {mdbView, mdbMask, mdbRow, mdbCol, mdbIcon, mdbCard, mdbCardBody, mdbCardText, mdbNavbar, mdbNavbarBrand, mdbInput, mdbAlert} from 'mdbvue'
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
    name:'signin',
    components : {
        mdbView,
        mdbMask,
        mdbRow, 
        mdbCol,
        mdbIcon,
        mdbCard,
        mdbCardBody,
        mdbCardText,
        mdbNavbar,
        mdbNavbarBrand,
        mdbInput,
        mdbAlert,
        ValidationObserver,
        ValidationProvider 
    },
    data () {
        return {
            email:'',
            password:'',
            isLoading:false

        }
    },

    computed :{
        isEmailorPasswordCorrect () {
        return this.$store.state.isEmailorPasswordCorrect;
        },
        loading () {
            return this.$store.state.loading
        }
    },

    methods : {
        userSignIn () {
            this.isLoading = true;
            this.$store.dispatch('userSignIn', {
                email:this.email,
                password:this.password
            })
            .then(_ => this.isLoading = false)
            .catch(_ => this.isLoading= false)
        },
        retfalse () {
            this.$store.commit('setIsEmailorPasswordCorrect', false)
        },
    },

     created () {
           this.$store.commit('setIsEmailorPasswordCorrect', false);
       }
}
</script>


<style scoped>

.image{
    background: url('../assets/money.png') center ;
    background-size:cover;
    height:100vh;
    background-repeat: no-repeat;
}

.nav {
    /* border:2px solid white; */
    margin-top: -45vh;
    margin-left:80vw
}

.login-size, .btn{
    font-size: 18px;
    background: limegreen

}

@media (max-width:1000px){
    .box {
        top:100px
    }
}

@media (max-width:768px){
    .small-screen {
        margin-top: -110vh !important;
    }

    .image {
         min-height:120vh;
    }
    .nav {
         margin-top: -55vh;
    }
    .small-screen-card{
        height:auto !important;
        margin-left:-25px;
        margin-top:5px !important
       
    }
    .small-screen-txt {
        color: white !important
    }
    .small-screen-pawn {
        height: 50px !important;
        width: 50px !important;
    }
     .small-screen-intro {
        font-size: 35px !important
    }
    .small-screen-text {
        width:60vw !important
    }
}

@media (max-width:700px){
    /* .small-screen {
        margin-top: -23vh;
    } */

    .image {
         height:120vh;
    }
    .nav {
         margin-top: -55vh;
    }
    .small-screen-text {
        width:75vw !important;
    }
    .small-screen-card{
        margin-top: 12px;
        height:56vh;
        margin-left: 7px;
        border: 2px solid white
       
    }
    .small-screen-txt {
        color: darkslateblue !important
    }
    .small-screen-intro {
        font-size: 6vw !important
    }
    .small-screen-pawn {
        height: 50px !important;
        width: 50px !important;
    }
}

@media (max-width:576px){ 
    .nav {
    /* border:2px solid white; */
    margin-top: -55vh;
    margin-left:80vw
}
.small-screen-text {
        width:85vw !important;
        font-size:16.5px !important
    }
.signin-card {
    height: 10vh !important;
}
    
}



</style>