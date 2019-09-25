<template>
  <div class="containe">
     <div class="jumbotron">
         <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:8vh" src="../../assets/logomain.png" alt=""></a></div>
         <div  v-if="path=='expiredPasswordResetToken'">
            <p class="text-center" ><img class="img-fluid" style="height:10vh" src="../../assets/sad.svg" alt=""></p>
            <p class="text-center h5">Token Expired....You will be redirected in {{count}} seconds</p>
         </div>
         <div v-else>
             <h3 class="text-center mb-3">Reset Password</h3>
            <div class="text-center row mb-3"> 
               <div class="col-md-3"></div>
               <div class="col-md-6">
                   <form action=""  @submit.prevent='validateBeforeSubmit'>
                       <div class="form-group">
                            <input v-validate="'required|min:5'" name="password" type="password" class="mb-3 form-control" placeholder="enter new password" ref="password">
                                <div class="alert alert-danger" v-if="errors.has('password')">
                                <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i>  {{ errors.first('password') }}
                                </div>
                            <input v-model="password" v-validate="'required|confirmed:password'" name="password_confirmation" class="mb-2 form-control" type="password" placeholder="confirm new password" data-vv-as="password">
                                <div class="alert alert-danger" v-if="errors.has('password_confirmation')">
                                <i  class="fa fa-exclamation-triangle text-danger ml-2 mr-2"></i> {{ errors.first('password_confirmation') }}
                                </div>    
                       </div>

                        <p class="text-center"> <button type="submit" style="font-size:17px" class="btn btn-primary">Change Password <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button></p>
                   </form>
               </div>
               <div class="col-md-3"></div>
            </div>
          
        </div>
      </div>
   </div>
</template>

<script>
export default {
    name:"passwordResetLink",
    data () {
       return {
          loading:false,
          password:'',
          count:5
       }
    },
    computed : {
       token () {
           return this.$route.query.token
        },
       path () {
          return this.$route.query.path
       },
        isTokenExpired () {
            return this.$store.state.isTokenExpired
        },
    },
    methods : {

       timer () {
             this.count--  
       },
       changePassword () {
          this.loading = true
          this.$store.dispatch('changePassword', {
             token: this.token,
             password:this.password
           })
          .then(_ => this.loading=false)
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
            if (result) {
              this.changePassword() 
            }
          })
       },
    },
    watch : {
        isTokenExpired (newval) {
          setInterval(_ => this.timer(), 1000)
        }
    }
//    mounted () {
//      this.promise()
//      .then(val => console.log(val))
//      .catch(err => console.log(err))
//    }

}
</script>

<style scoped>

 input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }


</style>