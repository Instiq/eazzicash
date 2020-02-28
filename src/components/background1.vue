<template>
<div class="body">

      <section class='view image'>
            <div class="flex-center"  >
                <div class="text-white text-center px-4 mt-5">   
                    <div class="mb-5 small-screen-entities-div">
                        <h2  class="display-4 mb-3 font-weight-bold small-screen-entities-text"><strong>Pawn . Loan . Finance . Investment</strong></h2>
                    </div>
            
                    <div  style="width:100vw" class="text-white display-3 small-screen-card-container container box  position-relative ">
                        <mdb-row>
                           <!-- Green Div  -->
                            <mdb-col class="col-md-4 mb-3 border-rightt">
                               <router-link to="/">
                                    <div class="container">
                                        <mdb-card class="borderr small-screen-card" style="opacity:0.7; background:limegreen">
                                                <mdb-row>
                                                    <mdb-col class="col-md-1 ml-2 mt-n2">
                                                       <img  class="small-screen-home-icons" src="../assets/first.svg" style="height:7vh; top:4.5vh" alt="">
                                                    </mdb-col>
                                                    <mdb-col class="col-md-1 d-sm-none d-none d-lg-block "></mdb-col>
                                                    <mdb-col class="col-md-12 col-lg-6">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white card-content text-left item-text" style="height:60px; width:50vw">Pawn your valuable items for exchange to secure your loan.  </mdb-card-text>
                                                        </mdb-card-body>
                                                    </mdb-col>  
                                                </mdb-row>   
                                        </mdb-card>    
                                    </div>
                                </router-link>
                            </mdb-col>

                             <!-- blueDiv  -->

                           <mdb-col class="col-md-4 col-12 mb-3 border-rightt">
                                <router-link to="/">
                                    <div class="container" >
                                        <mdb-card class="borderr small-screen-card" style="opacity:0.7; background:deepskyblue">
                                                <mdb-row>
                                                    <mdb-col class="col-md-2 ml-2 mt-n2 ">
                                                        <img class=" small-screen-home-icons" src="../assets/second.svg" style="height:7vh; top:4.5vh" alt="">
                                                    </mdb-col>
                                                    <mdb-col class="col-md-1 d-sm-block d-none d-xl-block"></mdb-col>
                                                    <mdb-col class="col-md-12 col-lg-6">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white card-content item-text2 text-left" style="height:60px; width:50vw">Get quick Financial support for your personal and business needs at competitive interest rate. </mdb-card-text>
                                                        </mdb-card-body>
                                                    </mdb-col> 
                                                </mdb-row>  
                                        </mdb-card>    
                                    </div>
                                </router-link>
                            </mdb-col>

                            <mdb-col class="col-md-4 col-12 mb-3" >
                                <router-link to="/">
                                    <div class="container">
                                        <mdb-card class="borderr small-screen-card " style="opacity:0.7; background:#d3592e">
                                                <mdb-row>
                                                    <mdb-col class="col-md-2 ml-2 mt-n2">
                                                        <img class=" small-screen-home-icons" src="../assets/third.svg" style="height:7vh; top:4.7vh" alt="">
                                                    </mdb-col>
                                                     <mdb-col class="col-md-1 d-sm-block d-none d-xl-block"></mdb-col>
                                                    <mdb-col class="col-md-12 col-lg-6">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white card-content item-text3 text-left" style="height:60px; width:50vw">Get the loan with the best interest rate and convenient repayment plan.</mdb-card-text>
                                                        </mdb-card-body>
                                                    </mdb-col>  
                                                </mdb-row>   
                                        </mdb-card>    
                                    </div>
                                </router-link>
                            </mdb-col>
                        </mdb-row>
                    </div>
                 </div>
    


        </div>

         
    </section>





</div>

</template>

<script>
import {mdbView, mdbMask, mdbRow, mdbCol, mdbIcon, mdbCard, mdbCardBody, mdbCardText} from 'mdbvue'
export default {
    name:"background",
    components:{
        mdbView,
        mdbMask,
        mdbRow, 
        mdbCol,
        mdbIcon,
        mdbCard,
        mdbCardBody,
        mdbCardText
    }, 
    // mounted () {
    //     alert(screen.availHeight)
    // }
}
</script>

<style scoped>
.image{
    background: url('../assets/landing.png') center ;
    background-size:cover;
    height:100vh;
    background-repeat: no-repeat
  
}

.body{
    height: 100%
}

.borderr{
    border: 2px solid lightgrey;
    border-radius: 7px
}

.border-rightt{
    border-right: 1px
}

.box {
    top:190px
}

@media (min-width:1200px){
    .item-text {
        height: auto;
        width: 18vw !important
    }
     .item-text2 {
         /* height: auto; */
        width: 15vw !important
    }
    .item-text3 {
        height: auto;
        width: 15vw !important
    }
}

@media (max-width:1200px){
    .box {
        top:100px
    }
     .item-text {
        /* height: auto !important; */
        width: 12vw !important
    }
    .item-text2 {
        height: auto !important;
        width: 11vw !important
    }
     .item-text3 {
        height: auto !important;
        width: 14vw !important
    }
}


@media (max-width:992px){
    .box {
        top:100px
    }
    .item-text {
        width: 16vw !important
    }
     .item-text2 {
        /* height: 60px !important; */
        width: 16vw !important
    }
    .item-text3 {
        width: 16vw !important
    }
    .small-screen-home-icons{
      display: none;
      height: 5vh !important;
  }
}


@media (max-width:768px){
    .box {
        top:30px;
    }
    .item-text {
        width: 45vw !important
    }
     .item-text2 {
        /* height: 60px !important; */
        width: 45vw !important
    }
     .item-text3 {
        /* height: 60px !important; */
        width: 45vw !important
    }
}


@media (max-width:576px){
  .small-screen-entities-div{
      border:3px solid whit;
      margin-top:5vh ;
      position: absolute;
      width:100vw
  }
  .small-screen-entities-text{
      font-size:30px
  }
  .small-screen-home-icons{
      display: none;
      height: 5vh !important;
  }
  .small-screen-card{
      height: auto;
      position: relative;
      width:68vw;
      text-align: center;
      margin: 0px auto;

  }
  .small-screen-card-container{
      margin-top:18vh;
      border: 2px solid whit;
      width: auto;
      /* text-align: center */

  }
   .item-text {
        width: 50vw !important
    }
    .item-text2 {
        width: 50vw !important
    }
    .item-text3 {
        width: 50vw !important
    }
}

@media (min-width: 1400px) {
  
  .card-content {
    width: 175px !important;
  }
}



</style>

