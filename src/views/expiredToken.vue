<template>
  <div class="container">
      <div class="jumbotron">
            <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:10vh" src="../assets/logomain.png" alt=""></a></div>
           <p class="text-center" ><img class="img-fluid" style="height:10vh" src="../assets/sad.svg" alt=""></p> 
           <p class="h4 text-center">Token Expired.. You will be redirected in {{count}} seconds</p>
      </div>
     
  </div>
</template>

<script>
//import { setTimeout } from 'timers';
export default {
name:"expiredToken",
data () {
    return {
        count : 5
    }
},
 
methods : {
    timer () {
        this.count--
    }
},
mounted () {
    setInterval(_ => this.timer(), 1000);
    setTimeout(_ => this.$router.push('/'), 5000)
}
}
</script>

<style>

</style>