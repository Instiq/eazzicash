<template>
  <div class="containe">
     <div class="jumbotron">
         <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:8vh" src="../../assets/logomain.png" alt=""></a></div>
         <div v-if="path=='resetSuccess'">
            <p class="text-center" ><img class="img-fluid" style="height:10vh" src="../../assets/email.svg" alt=""></p>
            <p class="text-center h5">Reset Link sent succesfully..kindly check your inbox</p>
         </div>
         <div class="mb-3" v-if="path=='wrongEmail'" >
            <p class="h4 text-center" style="color:crimson">  We couldn't find any account with that email address</p>
            <p class="h6 text-center" style="color:crimson">please try again with your registered email</p>
         </div>
         <div v-if="path!='resetSuccess' && path!='passwordChangeSuccess'">
             <h3 class="text-center mb-3">Reset Password</h3>
            <div class="text-center row mb-3"> 
               <div class="col-md-3"></div>
               <div class="col-md-6">
                  <input type="text" v-model="email" placeholder="Enter Email" class="form-control">
               </div>
               <div class="col-md-3"></div>
            </div>
          <p class="text-center"> <button style="font-size:17px" @click='sendResetLink' class="btn btn-primary">Send Reset Link <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button></p>
        </div>

        <div v-if="path=='passwordChangeSuccess'">
           <p class="text-center h5"> Password Updated Successfully </p>
           <p class="text-center"><button class="btn text-white btn-primary"><a href="/signin"><span class="h6 text-white"><i class="fas fa-arrow-left ml-n2" style="font-size:15px"></i> Login</span></a></button></p>
        </div>
      </div>
   </div>
</template>

<script>
export default {
    name:"passwordResetLink",
    data () {
       return {
          email:'',
          loading:false
       }
    },
    computed : {
       path () {
          return this.$route.query.path
       },
    },
    methods : {
       sendResetLink () {
          this.loading = true
          this.$store.dispatch('sendResetLink', this.email )
          .then(_ => this.loading=false)
        }
    }

}
</script>

<style scoped>

 input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }


</style>