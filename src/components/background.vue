<template>
<div class="body">

      <section class='view image'>
            <div class="mask pattern- rgba-black-strong flex-center"  >
                <div class="text-white text-center px-4 mt-5">   
                    <div class="mb-5">
                        <h2 class="display-4 mb-3 font-weight-bold"><strong>Pawn . Loan . Finance . Investment</strong></h2>
                    </div>
            
                    <div  style="width:100vw" class="text-white display-3 container box position-relative ">
                        <mdb-row>
                            <mdb-col class="col-md-4 col-12 mb-3 border-right">
                               <router-link to="/">
                                    <div class="container">
                                        <mdb-card class="borderr bg-dange" style="opacity:0.8; background:limegreen">
                                                <mdb-row>
                                                    <mdb-col class="col-md-1 ml-2 mt-n2">
                                                        <i class="fas fa-angle-double-left text-white" style="font-size:30px"></i> 
                                                    </mdb-col>
                                                    <mdb-col class="col-md-10">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white text-left" style="height:60px; width:200px ">Bring your valued minimal items and use for exchange in cash. </mdb-card-text>
                                                        </mdb-card-body>
                                                    </mdb-col>  
                                                </mdb-row>   
                                        </mdb-card>    
                                    </div>
                                </router-link>
                            </mdb-col>

                           <mdb-col class="col-md-4 col-12 mb-3 border-right">
                                <router-link to="/">
                                    <div class="container" >
                                        <mdb-card class="borderr bg-dange" style="opacity:0.8; background:deepskyblue">
                                                <mdb-row>
                                                    <mdb-col class="col-md-1 ml-2 mt-n2">
                                                        <i class="fas fa-angle-double-left text-white" style="font-size:30px"></i> 
                                                    </mdb-col>
                                                    <mdb-col class="col-md-10">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white text-left" style="height:60px; width:200px">Get your business financed at a good financial rate and interest</mdb-card-text>
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
                                        <mdb-card class="borderr bg-danger" style="opacity:0.8">
                                                <mdb-row>
                                                    <mdb-col class="col-md-1 ml-2 mt-n2">
                                                        <i class="fas fa-angle-double-left text-white" style="font-size:30px"></i> 
                                                    </mdb-col>
                                                    <mdb-col class="col-md-10">
                                                        <mdb-card-body>
                                                            <mdb-card-text class="text-white text-left" style="height:60px; width:200px">Get up to 3 million naira loan  instantly. Best interest offer is avialable for comfortable repayment</mdb-card-text>
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
    
}
</script>

<style scoped>
.image{
    background: url('../assets/man.jpg') center ;
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

.box {
    top:190px
}

@media (max-width:1000px){
    .box {
        top:100px
    }
}

@media (max-width:768px){
    .box {
        top:30px;
    }
}


</style>

