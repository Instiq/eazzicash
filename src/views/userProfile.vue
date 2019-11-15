<template>
    <div class="container">
         <div class="container main-container">
            <div class="jumbotron" style="background:whitesmoke">
               <div class="mt-lg-n5">
                  <span class="h5"> PROFILE</span>
                  <div class="row">
                      <div class="col-md-2 ">
                  
                      </div>
                   
                        <div class="col-md-8">
                            <ValidationObserver v-slot="{ passes }">
                                <form action=""   @submit.prevent="passes(updateProfile)">
                                    <span class="h6" > Personal Details</span>
                                    <div class="form-group mt-3">
                                        <ValidationProvider name="firstname" rules="required|min:3" v-slot="{ errors }">
                                            <label for="" class="d-inline">First Name</label>
                                            <input v-model="firstname" name="firstname" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="form-group">
                                         <ValidationProvider name="lastname" rules="required|min:3" v-slot="{ errors }">
                                            <label for="" class="d-inline">Last Name</label>
                                            <input  v-model="lastname" name="lastname" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="form-group">
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <label for="" class="d-inline">Email</label>
                                            <input  v-model="email" name="email" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>                                      
                                    </div>

                                    <div class="form-group">
                                        <ValidationProvider name="phone number" rules="required|numeric|min:11|max:11" v-slot="{ errors }">
                                            <label for="" class="d-inline">Phone</label>
                                            <input v-model="phone" name="phone number" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>    
                                    </div>

                                    <div class="form-group">
                                        <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                            <label for="" class="d-inline">Address</label>
                                            <input v-model="address" name="address" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                    </div>

                                    <!-- <div class="form-group">
                                         <ValidationProvider name="bus-stop" rules="required" v-slot="{ errors }">
                                             <label for="" class="d-inline">Nearest bus-stop</label>
                                             <input v-model="bus_stop" name="bus-stop" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                    </div> -->

                                    <!-- <div class="form-group">
                                         <ValidationProvider name="duration" rules="required" v-slot="{ errors }">
                                            <label for="" class="d-inline">Duration lived in Address</label>
                                            <input v-validate="'min:2'" v-model="duration" name="address" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>  
                                    </div> -->

                                    <!-- <div class="form-group">
                                        <ValidationProvider name="state" rules="required" v-slot="{ errors }">
                                            <label for="" class="d-inline">State</label>
                                            <select name="state" :selected='state' v-model="state"  id="state" class="browser-default custom-select">
                                                <option value=""  >Choose State</option>
                                                <option value='Abia'>Abia</option>
                                                <option value='Adamawa'>Adamawa</option>
                                                <option value='AkwaIbom'>AkwaIbom</option>
                                                <option value='Anambra'>Anambra</option>
                                                <option value='Bauchi'>Bauchi</option>
                                                <option value='Bayelsa'>Bayelsa</option>
                                                <option value='Benue'>Benue</option>
                                                <option value='Borno'>Borno</option>
                                                <option value='Cross River'>Cross River</option>
                                                <option value='Delta'>Delta</option>
                                                <option value='Ebonyi'>Ebonyi</option>
                                                <option value='Edo'>Edo</option>
                                                <option value='Ekiti'>Ekiti</option>
                                                <option value='Enugu'>Enugu</option>
                                                <option value='FCT'>FCT</option>
                                                <option value='Gombe'>Gombe</option>
                                                <option value='Imo'>Imo</option>
                                                <option value='Jigawa'>Jigawa</option>
                                                <option value='Kaduna'>Kaduna</option>
                                                <option value='Kano'>Kano</option>
                                                <option value='Katsina'>Katsina</option>
                                                <option value='Kebbi'>Kebbi</option>
                                                <option value='Kogi'>Kogi</option>
                                                <option value='Kwara'>Kwara</option>
                                                <option value='Lagos'>Lagos</option>
                                                <option value='Nasarawa'>Nasarawa</option>
                                                <option value='Niger'>Niger</option>
                                                <option value='Ogun'>Ogun</option>
                                                <option value='Ondo'>Ondo</option>
                                                <option value='Osun'>Osun</option>
                                                <option value='Oyo'>Oyo</option>
                                                <option value='Plateau'>Plateau</option>
                                                <option value='Rivers'>Rivers</option>
                                                <option value='Sokoto'>Sokoto</option>
                                                <option value='Taraba'>Taraba</option>
                                                <option value='Yobe'>Yobe</option>
                                                <option value='Zamfara'>Zamafara</option>
                                            </select>
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div> -->
                                    
                                <span class="h6"> Account Details</span>

                                    <div class="form-group mt-3">
                                         <ValidationProvider name="Account_Name" rules="required" v-slot="{ errors }">
                                            <label for="" class="d-inline">Name</label>
                                            <input v-model="Account_Name" v-validate="'min:3'" name="Account_Name" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider> 
                                    </div>
                                    <div class="form-group">
                                        <ValidationProvider name="Bank_Name" rules="required" v-slot="{ errors }">
                                            <label for="" class="d-inline">Bank</label>
                                            <select  class="browser-default custom-select" name="Bank_Name"  v-model="Bank_Name">
                                            <option >Choose</option>
                                            <option selected value="access">Access Bank</option>
                                            <option value="citibank">Citibank</option>
                                            <option value="ecobank">Ecobank</option>
                                            <option value="fidelity">Fidelity Bank</option>
                                            <option value="fcmb">First City Monument Bank (FCMB)</option>
                                            <option value="fsdh">FSDH Merchant Bank</option>
                                            <option value="gtb">Guarantee Trust Bank (GTB)</option>
                                            <option value="heritage">Heritage Bank</option>
                                            <option value="Keystone">Keystone Bank</option>
                                            <option value="rand">Rand Merchant Bank</option>
                                            <option value="skye">Polaris Bank</option>
                                            <option value="stanbic">Stanbic IBTC Bank</option>
                                            <option value="standard">Standard Chartered Bank</option>
                                            <option value="sterling">Sterling Bank</option>
                                            <option value="suntrust">Suntrust Bank</option>
                                            <option value="union">Union Bank</option>
                                            <option value="uba">United Bank for Africa (UBA)</option>
                                            <option value="unity">Unity Bank</option>
                                            <option value="wema">Wema Bank</option>
                                            <option value="zenith">Zenith Bank</option>
                                            </select>
                                        </ValidationProvider>

                                        <!-- Selected : {{Bank_Name}} -->
                                        
                                    </div>
                                    <div class="form-group">
                                         <ValidationProvider name="Account_Number" rules="required|numeric|min:10|max:10" v-slot="{ errors }">
                                            <label for="" class="d-inline">Number</label>
                                            <input name="Account_Number" v-model="Account_Number" type="text" class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group">
                                         <ValidationProvider name="Account_Type" rules="" v-slot="{ errors }">
                                            <label for="" class="d-inline">Type</label>
                                            <input  name="Account_Type" v-model="Account_Type" type="text" placeholder="e.g savings, current...." class="form-control">
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group  float-right">
                                        <button type="submit" class="btn btn-primary">Save Changes  <span v-if="isLoading1"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                                    </div> <br> <br> <br> 
                                </form> <br> <br> <br> <br>

                            </ValidationObserver>

                            <form action="" class="col-row"  @submit.prevent="updateProfileImage">
                                <div class="border mb-2"></div>
                                <span class="h6">Display Picture</span> <br>

                                 <div style="width:200px; height:auto">
                                    <img v-if="!displayPicture" src="../assets/avatar2.jpg" class="img-fluid" alt="">
                                    <img v-if="displayPicture" :src="displayPicture" class="img-fluid" alt="">
                                </div>
                                
                                <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE <input @change="onFileChange" type="file"  style="display: none;">
                                </label>

                                 <div class="form-group  float-right">
                                    <button type="submit" class="btn btn-primary">Update  <span v-if="isLoading2"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                                </div>  <br> <br> <br> 
                                
                            </form>  <br> <br> <br> <br>

                             <!-- <form action="" class="col-row"  @submit.prevent="updateIdentityCard">
                                <div class="border mb-2"></div>
                                <span class="h6">Identity Card</span> <br>
                                
                                <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE <input @change="onFileChange3" type="file"  style="display: none;">
                                </label>

                                 <div class="form-group  float-right">
                                    <button type="submit" class="btn btn-primary">Update  <span v-if="isLoading3"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                                </div>  <br> <br> <br> 
                                
                            </form>  <br> <br> <br> <br> -->

                            <form action="" class="col-row"  @submit.prevent="updateProfileSignature">
                                <div class="border mb-2"></div>
                                <span class="h6">Signature</span> <br>
                                <div style="width:200px; height:auto">
                                    <img v-if="!signature" src="" class="img-fluid" alt="">
                                    <img v-if="signature" :src="signature" class="img-fluid" alt="">
                                </div>
                                
                                <label class="btn ml-n1 btn-info btn-file">
                                    BROWSE <input @change="onFileChange2"  type="file" style="display: none;">
                                </label>
                                <div class="form-group  float-right">
                                    <button type="submit" class="btn btn-primary">Update  <span v-if="isLoading4"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></button>
                                </div>  <br> <br> <br> 
                            </form>
                        </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
</template>

<script>
import {mdbAlert} from 'mdbvue';
import {mapState} from 'vuex';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
 name:'userProfile',
 components : {
     mdbAlert,
     ValidationObserver,
     ValidationProvider 
 },

 data () {
     return {
         isLoading1:false,
         isLoading2:false,
         isLoading3:false,
         isLoading4:false,
         Name:"",
         Number:"",
         Bank:"",
         Type:"",
         displayPicture_:"",
         signature_:"",
         state:""
     }
 },

 computed : {
     isSuccess () {
         return this.$store.state.isSuccess
     },
     isError () {
          return this.$store.state.isError
     },
     errorMsg () {
          return this.$store.state.errorMsg
     },
     getUser () {
         return this.$store.state.userProfile
     },

     firstname : {
         get () {
             return this.getUser.firstName
         },
         set (value) {
           this.getUser.firstName=value
         }
     },
     lastname : {
         get () {
             return this.getUser.lastName
         },
         set (value) {
             this.getUser.lastName=value
         }
     },
    email : {
         get () {
             return this.getUser.email
         },
         set (value) {
            this.getUser.email=value
         }
     },
    phone : {
         get () {
             return this.getUser.phoneNumber
         },
         set (value) {
           this.getUser.phoneNumber = value
         }
     },
     address : {
         get () {
             return this.getUser.address
         },
         set (value) {
           this.getUser.address = value
         }
     },
    Account_Name : {
         get  () {
            if (this.getUser.accountDetails) return this.getUser.accountDetails.Name

            return  this.Name
         },
         set (value) {
            if(this.getUser.accountDetails) return this.getUser.accountDetails.Name = value;
            
            return this.Name = value
         }
     },
    Account_Number : {
         get () {
            if (this.getUser.accountDetails) return this.getUser.accountDetails.Number
             
            return  this.Number
        },
         set (value) {
            if(this.getUser.accountDetails)  return this.getUser.accountDetails.Number = value
       
            return this.Number = value
       }
     },
    Account_Type : {
         get () {
             if (this.getUser.accountDetails) return this.getUser.accountDetails.Type
        
             return this.Type
        },
         set (value) {
             if(this.getUser.accountDetails) this.getUser.accountDetails.Type=value
        
             return this.Type = value
        }
     },
    Bank_Name : {
         get () {
             if (this.getUser.accountDetails) return this.getUser.accountDetails.Bank;

             return this.Bank
         },
         set (value) {
              if (this.getUser.accountDetails) this.getUser.accountDetails.Bank=value;

              return this.Bank = value
         }
     },
    displayPicture : {
         get () {
             if (this.getUser.displayPicture) return this.getUser.displayPicture

             return this.displayPicture_
         }
     },
    signature : {
         get () {
            if (this.getUser.signature) return this.getUser.signature

            return this.signature_
         }
     }

 },

 watch : {
     isSuccess (newval) {
        if(newval==true) return this.showToastrSuccess()
     },
    
    isError (newval) {
        if(newval==true) return this.showToastrError()
    },

    firstname (newval) {
        this.getUser.firstName = this.getUser.firstName.charAt(0).toUpperCase() + this.getUser.firstName.slice(1);
    },

    lastname (newval) {
        this.getUser.lastName = this.getUser.lastName.charAt(0).toUpperCase() + this.getUser.lastName.slice(1);
    }
 },

 methods : {
   
     updateProfile () {
        this.isLoading1=true
        this.$store.dispatch('updateUserProfile', {
             firstName:this.firstname,
             lastName:this.lastname,
             phoneNumber:this.phone,
             address:this.address,
             email:this.email,
             Name:this.Account_Name,
             Bank:this.Bank_Name,
             Number:this.Account_Number,
             Type:this.Account_Type,
        })
        .then(_ =>  this.isLoading1=false)
        .catch(_ => this.isLoading1=false)
     },

     updateProfileImage () {
        this.isLoading2=true
        this.$store.dispatch('updateUserProfile1', {
            displayPicture:this.displayPicture,
        })
        .then(_ =>  this.isLoading2=false)   
        .catch(_ => this.isLoading2=false)
     },

     updateProfileSignature () {
           this.isLoading3=true
           this.$store.dispatch('updateUserProfile2', {
            signature:this.signature,
         })   
         .then(_ =>  this.isLoading3=false)  
         .catch(_ => this.isLoading3=false)
     },

     showToastrSuccess () {
        this.$toastr.defaultProgressBar = false;
        this.$toastr.defaultStyle = { "background-color": "limegreen" };
        this.$toastr.s( "<strong class='h6'>Success</strong> <br> Updated Sucessfully!");
        this.$store.commit('setIsSuccess', false)
     },
     showToastrError () {
        this.$toastr.defaultProgressBar = false;
        this.$toastr.defaultStyle = { "background-color": "firebrick" };
        this.$toastr.e(`<strong class='h6'>Error</strong><br>${this.errorMsg}`);
        this.$store.commit('setIsError', false)
     },
 
     onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0])
    },
    createImage (file) {
        let image = new Image();
        let reader = new FileReader();
        // converts image to base64 and displays selected image to the client
        reader.onload = (e) => {
            if (this.getUser.displayPicture) return this.getUser.displayPicture = e.target.result;
            
            return this.displayPicture_ = e.target.result;
        }
        reader.readAsDataURL(file)
    },

      onFileChange2(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage2(files[0])
    },
    createImage2 (file) {
        let image = new Image();
        let reader = new FileReader();
        // converts image to base64 and diaplays selected image to the client
        reader.onload = (e) => {
          if (this.getUser.signature) return this.getUser.signature = e.target.result;
         
          return this.signature_ = e.target.result;
        }
        reader.readAsDataURL(file)
    },
 },

  mounted () {
     this.$store.dispatch('getUserProfile');
 },
}
</script>

<style scoped>
 .main-container {
    border:2px solid blu;
    width:auto;
    margin-left:6vw;
    height: auto;
    overflow-x: hidden
 }

 ::-webkit-input-placeholder { /* Edge */
  color: red !important;
  font-size: 13px
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red !important;
  font-size: 13px
}

::placeholder {
   color: red !important;
   font-size: 13px
}

</style>