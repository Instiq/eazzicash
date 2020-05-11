<template>
  <div class="containe">
     <div class="jumbotron">
         <div class="mt-sm-n5" style="height:"><a href="/"><img class="img-fluid" style="height:8vh" src="../../assets/logomain.png" alt=""></a></div>
         <div>
             <h3 class="text-center mb-3">Change Password</h3>
            <div class="text-center row mb-3"> 
               <div class="col-md-3"></div>
               <div class="col-md-6">
                   <form action=""  @submit.prevent='changePassword'>
                       <div class="form-group">
                           <input v-model="oldPassword" name="password1" class="mb-2 form-control" type="password" placeholder="enter old password">
                            <input name="password" v-model="password1" type="password" class="mb-3 form-control" placeholder="enter new password">
                            <input v-model="password" name="password_confirmation" class="mb-2 form-control" type="password" placeholder="confirm new password">
                       </div>

                        <p class="text-center"> <button type="submit" :disabled="isDisabled" style="font-size:17px" class="btn btn-primary">Change Password <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button></p>
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
    name:"changePassword1",
    data () {
       return {
          loading:false,
          password1:'',
          password:'',
          oldPassword:"",
          isDisabled:true,
          count:5
       }
    },
    methods : {

       changePassword () {
          this.loading = true
          this.$store.dispatch('changePassword1', {
             password:this.oldPassword,
             newPassword:this.password
           })
          .then(_ => this.loading=false)
        },
    },
    watch : {
        password (newval) {
            if(newval == this.password1) {
             this.isDisabled = false;
            }

            else {
                this.isDisabled = true;
            }
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