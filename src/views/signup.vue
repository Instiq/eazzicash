<template >

    <div style="height:100%; background:whitesmoke">

            <section class="mb-5">
                <mdb-navbar expand="small" position="top" class="navbar" style="background:rgb(5, 80, 6)" >
                <mdb-navbar-brand waves class="ml-5" > <router-link to="/"><img src = "../assets/logomain.png" height="50px" /></router-link> </mdb-navbar-brand> <span class="font-weight-bold ml-n5 ml-sm-0 h4 text-white" > Sign Up</span>
                </mdb-navbar>
            </section>
         
            <mdb-jumbotron  style=" box-shadow:0px 0px; height:100%; background:whitesmoke">
                <section class="sec2 container">
                    <ValidationObserver v-slot="{ passes }">
                      <form  @submit.prevent="passes(userSignUp)"> 
                      
                        <mdb-row>
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <mdb-col class=" col-12 "> 
                                  <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
                                             <mdb-input type="text" size="lg" v-model='userFirstname'  name='firstname' label="First name" style="background:white" class="input-field" outline />      
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                  </ValidationProvider>   
                                  
                               </mdb-col>

                            <div class="col-md-6"></div>

                            <mdb-col class=" col-12">
                                 <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
                                             <mdb-input type="text" size="lg" v-model="userLastname"  label="Last name" name='lastname' style="background:white" outline />      
                                            <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                  </ValidationProvider>                       
                            </mdb-col>

                            <div class="col-md-6"></div>

                    
                            <mdb-col class=" col-12" >
                                <!-- Material input -->
                                <ValidationProvider name="phone number" rules="required|min:11|max:15" v-slot="{ errors }">
                                     <mdb-input class="input-field" type="number" label='Phone number' size="lg"  id="numberExample" v-model="userPhone" name='phone number' style="background:white" outline />      
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>               
                            </mdb-col>

                              <div class="col-md-6"></div>
                            <!-- email -->
                            <mdb-col class=" col-12">
                                 <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                    <mdb-input  size="lg" v-model="userEmail" name='email'  label="Email address" ref="email" style="background:white" outline />       
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
                            </mdb-col>

                              <div class="col-md-6"></div>
                            <!-- confirm email -->
                              <!-- <mdb-col class=" col-12">
                                  <ValidationProvider name="emails" rules="required|confirmed:email" v-slot="{ errors }">
                                     <mdb-input  size="lg" v-model="userEmail1" name='emails' data-vv-as="email" label="Confirm Email address"  style="background:white" outline />        
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                  </ValidationProvider>  
                            </mdb-col> -->

                              <div class="col-md-6"></div>

                            <!-- password -->
                            <mdb-col class=" col-12">
                                 <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
                                     <mdb-input type="password" size="lg" v-model="userPassword" name='password' label="Password" ref="password"  style="background:white" outline />         
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                 </ValidationProvider>  
                            </mdb-col>

                              <div class="col-md-6"></div>
                              
                            <!-- confirm password -->
                            <mdb-col class=" col-12" >
                                 <ValidationProvider name="passwords" rules="required|confirmed:password" v-slot="{ errors }">
                                     <mdb-input type="password" size="lg"  v-model="userPassword1" name="passwords"  data-vv-as="password" label="Confirm Password"  style="background:white" outline />         
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                 </ValidationProvider>
                              
                            </mdb-col>

                              <div class="col-md-6"></div>
                          
                            <!-- <mdb-col class=" col-12">
                                  <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                     <mdb-input type="text" size="lg" v-validate="'required'" v-model="userAddress" label="Home address" name='address'  style="background:white" outline />         
                                     <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                 </ValidationProvider>
                            </mdb-col> -->
                            <div class="col-md-6"></div>

                            <!-- <mdb-col class=" col-12 mt-4 small-screen-select" >
                                <select name="state"  v-validate="'required'" v-model="userState"  id="state" class="browser-default custom-select">
                                    <option value="" selected='selected' >Choose State</option>
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
                                    <div class="mt-3" >
                                    <i v-show="errors.has('state')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('state')">{{ errors.first('state') }}</span>
                                </div>
                            </mdb-col>
                        </mdb-row> -->


                        <!-- <mdb-row>
                            <mdb-col class=" col-12 mt-1">
                            <select   v-validate="'required'" name="country" v-model="userCountry" class="custom-select">
                                <option value="" selected='selected' >Choose Country</option>
                                    <option value="Nigeria" >Nigeria</option>
                                    <option value="Åland Islands" >Åland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option selected value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                            <div class="mt-3" >
                                    <i v-show="errors.has('country')" class="fa fa-exclamation-triangle text-warning mr-2"></i> 
                                    <span class="text-warning" v-show="errors.has('country')">{{ errors.first('country') }}</span>
                                </div>
                            </mdb-col> -->

                            

                            <!-- <mdb-col class="col-md-6 col-12">
                                <mdb-input type="text" size="lg"  style="background:white" label="Zip code" outline /> 
                            </mdb-col> -->

                            

                            <mdb-col class="col-12 small-screen-btn">
                                <button type='submit' style="font-size:20px;font-weight:bold; background:rgb(5, 80, 6)" class="btn btn-block text-white mt-4">Sign Up <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span> </button>
                            </mdb-col>
                            </div>
                            <div class="col-md-3"></div>
                          
                        </mdb-row>


                      
                      </form> 
                    </ValidationObserver>  
                </section>
        </mdb-jumbotron> 
       

    </div>

</template>


<script>
import {mdbView, mdbMask, mdbRow, mdbJumbotron,mdbCol, mdbIcon, mdbBtn,  mdbCard, mdbCardBody, mdbAlert, mdbCardText, mdbNavbar, mdbNavbarBrand, mdbInput} from 'mdbvue'
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'signup',
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
        mdbJumbotron,
        mdbBtn,
        mdbAlert,
        ValidationObserver,
        ValidationProvider 
    },

    data () {
        return {
            // userFirstname:'',
            // userLastname:'',
            // userEmail:'',
             userPassword:'',
             userPassword1:'',
             p1:true,
             isLoading:false
            
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

         userFirstname : {
          get () {
                return this.$store.getters.userFirstname
            },
          set (value) {
                value =  value.charAt(0).toUpperCase() + value.slice(1);
                this.$store.dispatch('updateUserFirstname', value )
            }
         },
          userLastname : {
          get () {
                return this.$store.getters.userLastname
            },
          set (value) {
                value =  value.charAt(0).toUpperCase() + value.slice(1);
                this.$store.dispatch('updateUserLastname', value )
            }
         },
          userPhone : {
          get () {
                return this.$store.getters.userPhone
            },
          set (value) {
                this.$store.dispatch('updateUserPhone', value )
            }
         },
          userEmail : {
          get () {
                return this.$store.getters.userEmail
            },
          set (value) {
                this.$store.dispatch('updateUserEmail', value )
            }
         },
          userAddress : {
          get () {
                return this.$store.getters.userAddress
            },
          set (value) {
                this.$store.dispatch('updateUserAddress', value )
            }
         },
        //   userCountry : {
        //   get () {
        //         return this.$store.getters.userCountry
        //     },
        //   set (value) {
        //         this.$store.dispatch('updateUserCountry', value )
        //     }
        //  },
        //   userState : {
        //   get () {
        //         return this.$store.getters.userState
        //     },
        //   set (value) {
        //         this.$store.dispatch('updateUserState', value )
        //     }
        //  },
    },

    watch : {
         isSuccess (newval) {
             if(newval==true) return this.showToastrSuccess()
        },
        
        isError (newval) {
            if(newval==true) return this.showToastrError()
        }
    },
    methods: {

        retfalse () {
                this.$store.commit('setIsEmailRegistered', false)
        },
    
        userSignUp () {
            this.isLoading = true;
            this.$store.dispatch ('userSignUp', {
                email:this.userEmail,
                password:this.userPassword,
                firstName:this.userFirstname,
                lastName:this.userLastname,
                // state:this.userState,
                // country:this.userCountry,
                phoneNumber:this.userPhone,
                address:this.userAddress
            })
            .then(_ => this.isLoading = false)
            .catch(_ => this.isLoading = false)
        },

         showToastrSuccess () {
                this.$toastr.defaultProgressBar = false;
                this.$toastr.defaultStyle = { "background-color": "limegreen" };
                this.$toastr.s( "<strong class='h6'>Success</strong> <br> Submitted Sucessfully!");
                this.$store.commit('setIsSuccess', false)
            },
        showToastrError () {
            this.$toastr.defaultProgressBar = false;
            this.$toastr.defaultStyle = { "background-color": "firebrick" };
            this.$toastr.e(`<strong class='h6'>Error</strong><br>${this.errorMsg}`);
            this.$store.commit('setIsError', false)
        },
    },

       



}
</script>

<style scoped>
@media (max-width:576px){
   .small-screen-select{
       margin-top: 0px
    }
   .small-screen-btn{
       margin-bottom: 20px
   }
    /* .input-field:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8) !important;
     box-shadow: 0 0 5px rgb(75, 148, 8, 1) !important;
     outline: 0 none !important;
 } */

 
/* 
  input[type=text]:focus:not([readOnly])+ label {
     box-shadow: 0 1px 0 0 green;
     border: 1px solid green;
     color:green
 }
 */

}




     
</style>