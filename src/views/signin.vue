<template>
    <div style="height:100vh; background:red">
         <section class='view image small-screen'>
            <div class="mask flex-center" style="background:black; opacity:0.8">
                <section class="one">
                    <mdb-navbar  >
                       <mdb-navbar-brand href="#" >
                           <img class ='nav' src = "../assets/logomain.png" height="50px" />
                       </mdb-navbar-brand>
                    </mdb-navbar>
                </section>
            </div>
         </section>

          <section class="2" style="margin-top:-450px">
                    <div class="container">
                        <mdb-row>
                            <mdb-col class="col-md-8 col-12 small-screen">
                                <p class="text-white mb-4 small-screen-intro" style="font-size:3.8vw">
                                    Introducing <span style=" font-weight:bold">Pawnshop</span> <img src="../assets/pawn.jpg" class='rounded-circle ml-2 small-screen-pawn' style="height:80px;width:80px"   alt="">
                                </p>

                                <p class="text-white h5 font-weight-light small-screen-text" style="width:40vw;">
                                    You can now bring items such as mobile phones, Tv, cars e.t.c.. and receive money as exchange.
                                    The value of the item will determine the amount to be cashed out.
                                </p>
                                
                            </mdb-col>

                            <mdb-col class="col-md-4 col-10">
                                 <div class = 'card small-screen-card px-2 mt-n5'>
                                    <form >
                                       
                                        <mdb-card-body >
                                                <section>
                                                    <mdb-row>
                                                        <mdb-col >
                                                            <mdb-input type="text" label="Username" bg size="lg" />
                                                            <mdb-input type="password" label="Password" bg size="lg" />
                                                            <span class="float-right mt-n3 mb-4" style="color:orange">Forgot password?</span>
                                                        </mdb-col>
                                                    </mdb-row>
                                                </section>

                                                <div class="text-center mb-4">
                                                    <mdb-btn  class="btn btn-block" @click="userSignIn"><span class="login-size text-white"> Login </span></mdb-btn>
                                                </div>

                                                <p class="text-center small-screen-txt" style="color:darkslateblue"> Don't have an account yet? <a href="/signup" style="color:limegreen; font-weight:bold"> SIGNUP</a> </p>
                                        </mdb-card-body>
                                    </form>    
                                </div>  
                            </mdb-col>
                        </mdb-row>
                    </div>
            </section>
    </div>
</template>


<script>
import {mdbView, mdbMask, mdbRow, mdbCol, mdbIcon, mdbCard, mdbCardBody, mdbCardText, mdbNavbar, mdbNavbarBrand, mdbInput} from 'mdbvue'
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
        mdbInput
    },

    methods : {
        userSignIn () {
            this.$router.push('/profile')
        }
    }
}
</script>


<style scoped>

.image{
    background: url('../assets/naira1.jpg') center ;
    background-size:cover;
    height:100%;
  
}

.nav {
    /* border:2px solid white; */
    margin-top: -300px;
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
        margin-top: -23vh;
    }

    .image {
         min-height:120vh;
    }
    .nav {
         margin-top: -220px;
    }
    .small-screen-card{
        height:0vh;
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
        width:65vw !important
    }
}

@media (max-width:700px){
    .small-screen {
        margin-top: -23vh;
    }

    .image {
         height:120vh;
    }
    .nav {
         margin-top: -223px;
    }
    .small-screen-text {
        width:88vw !important;
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

</style>