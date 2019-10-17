<template>
  <div>
      
          <div class="main-container">
               
            <form   @submit.prevent="validateBeforeSubmit">
                <span class="h5 mb-5 d-lg-none d-block ">Signature</span>

                <div class="form-row"> <div class="mb-3">Applicant's Signature <span class="text-danger">*</span></div> </div>
                <div class="ml-n3 col-md-5 mb-3 mt-3 mt-md-0">
                       <div class=" mb-4 mb-md-0 " style="height:auto; border:1px solid white"> 
                            <img style="max-width:100%; height:auto" class="img-fluid" :src="loanSign"  alt=''>
                       </div>
                </div>

                <div class="custom-file form-row col-md-5 mb-3">
                    <input type="file" class=" mt-3 ml-n3 mt-md-0 mb-2 mb-md-1 small-screen-id "  @change="onFileChange"   name="file" v-validate="'required'" id="validatedCustomFile" >
                    <label class="" for="validatedCustomFile"></label>
                    <div class="mt-2" >
                       <i v-show="errors.has('file')" class="fa fa-exclamation-triangle text-danger mr-2"></i> 
                        <span class="text-danger" v-show="errors.has('file')">{{ errors.first('file') }}</span>
                    </div>
                </div>

                <div class="form-group">
                        <div class="mt-3 ">
                            <label class="checkbox">
                                <input name="terms" v-validate="'required'"  @change="isChecked" v-model="checked" type="checkbox"  >
                                <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree to the </span> 
                            </label>
                            <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span>
                            <div class="mt-1 ml-2" >
                                <i v-show="errors.has('terms')" class="fa fa-exclamation-triangle text-danger mr-2"></i> 
                                <span class="text-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
                            </div>
                       </div>
                 
                 </div>

                <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                    <mdb-modal-title >Terms & Conditions</mdb-modal-title>
                    </mdb-modal-header>
                    <mdb-modal-body>
                    
                    <p class="font-weight-bold"> USE OF CREDIT BUREAU</p>
 <p>Upon filling of MyEazzi Solution loan application form, the Borrower agrees that MyEazzi Solution Limited will:</p>

 <p>a.  Approach dedicated Credit Reference Agencies for a credit report of the Borrower upon considering any application for credit.</p>
  <p>b.access any information  as provided by the Credit Agencies.</p>
  <p>c. The Borrower also agrees that its details and the make loan application decision will be registered with the Credit Agencies.</p>
 <p>d. Advise and  contact details of the relevant credit agencies if the Borrower wishes to access the credit report  and the Borrower waives any claims against the Lender in respect of such disclosure.</p>


<p class="font-weight-bold">RIGHTS AND OBLIGATION OF THE BORROWER AND THE CO -SIGNATORY.</p>
<p>a. The Borrower has the right to receive and use the loan as stipulated in the terms and conditions.</p>
 <p>b.	The installments must be paid as at when due by paying in any of the conventional Lenders.</p>
<p>c.	The Borrower must not use the loan for a different purpose as against the stipulated purpose provided in the application form.</p>
<p>d.	The Borrower has to inform the Lender immediately in event that there is change in Business/residential address, home, change of business activity and/or other change that is significant to the loan.</p>
<p>e.	The Borrower  needs the Lender’s express and written approval when:</p>
<ul>
    <li>Selling partly or entirely his/her fixed business assets </li>
<li>Pledging or selling any of the collaterals.</li>
</ul>

<p class="font-weight-bold">REPRESENTATIONS AND WARRANTIES</p>
<p> The Borrower represents and warrants that:</p>
<p>a.	The Borrower agrees to accept this facility and has executed the offer letter herein without duress after reading and understanding the contents of same.</p>
<p>b.	The Borrower agrees to accept this facility and has taken all necessary actions to authorize same upon executing the offer letter herein.</p>
<p>c.	The Lender is not in default or under any obligation in respe respect of any borrowed money that the acceptance of this facility will be or result in breach of or default under any provision of any other agreement to which the Borrower is a party.</p>
<p>d.	The information given to MyEazzi Solution Limited verbally or in writing in the formal loan application form is true and accurate.</p>
<p>e.	The Borrower will utilize the loan for the purpose(s) for which it intimated MyEazzi Solution Limited about in their application for the loan.</p>
<p>f.	The Borrower agrees that MyEazzi Solution Limited will not be held liable for the postdated cheques provided by the Borrower upon approval of the loan facility; in any event that such loan is declined subsequently.</p>
<p>g.	The Borrower agrees that MyEazzi Solution Limited can decline an already approved loan applications at any stage and at its discretion.</p>
<p>h.	 MyEazzi Solution Limited will not be held liable for any damage claim whatsoever.</p>
<p>i.	The Borrower agrees that in the event this loan application is declined by MyEazzi Solution Limited, application documents shall not be returned. The Borrower hereby acknowledges and concedes that the Lender’s books and accounts shall be evidence of the sum due or which the Borrower is bound to pay in respect of the credit.</p>	

<p>J.	The invalidity of any part of this offer of credit facility [“offer letter”] will not and shall not be deemed to affect the validity of any other part. In the event that any provision or clause of this offer letter is held to be invalid, the parties agree that the remaining provisions shall be deemed to be in full force and effect as if they had been executed by both parties subsequent to the expungement of the invalid provision; and If at any time any term or provision in this Offer letter shall be held to be illegal, invalid or unenforceable, in whole or in part, under any rule of law or enactment or by judicial pronouncement, such term or provision or part shall to that extent be deemed not to form part of this Offer letter, but the enforceability of the remainder of this Offer letter shall not be affected.</p>
<p>K.	This offer letter shall constitute the entire offer letter between the parties. Any prior understanding or representation of any kind preceding the date of this offer letter shall not be binding on either party except to the extent incorporated in this offer letter; and it is hereby expressly agreed by parties to this offer letter that no Party has entered into this Offer letter under any form of duress or in reliance upon any representation, warranty, indemnity, covenant or undertaking of any other Party which is not expressly set out in this Offer letter. WHEREBY IT IS HEREBY EXPRESSLY AND MUTUALLY AGREED THAT THE “COLLATERAL EVALUATION”, Borrower’s Means of Identification, Borrower’s passport photograph and all documents submitted to the Lender by the Borrower and accepted by the Lender for the purpose of approving this loan form part of this agreement.</p>
<p>l.  Any modification of this offer letter or additional obligation assumed by either party in connection with this offer letter shall be binding only if evidenced in writing signed and sealed by each party or an authorized representative of each party.</p>

<p>m.   This offer letter may be executed in any number of counterparts, each of which shall be deemed to be an original, but all of which together shall constitute but one and the same instrument.</p>

<p>****This offer is subject to a satisfactory credit report and further verification checks in event that your application is unsuccessful; your documents shall be returned to you.

Please note that where this offer is not accepted within 14 (Fourteen) days, it shall be subject to review against the prevailing market values.

We believe that this offer meets your need, If so, kindly indicate your acceptance of the the terms and conditions by executing the Memorandum of Acceptance below.

</p>

<p>Thank you..</p>
                   
                    </mdb-modal-body>
                    <mdb-modal-footer>
                    <mdb-btn color="info" @click="showModal12a = false">Done</mdb-btn>
                    <!-- <mdb-btn color="primary">Save changes</mdb-btn> -->
                    </mdb-modal-footer>
                </mdb-modal>    



                 <div class="form-row">
                      <div class="col-md-5"></div>
                      <div class="col-md-2"></div>
                      <div class="col-md-5">
                         <mdb-btn type="submit" :disabled='isCheckedd' class="float-right btn-green mt-5" style="font-size:15px; border-radius:5px">Submit <span v-if="loading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
                      </div> 
                  </div>
            </form>
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbJumbotron, mdbContainer,mdbRow, mdbCol,mdbIcon } from 'mdbvue';

export default {
    name:'guarantor',
    components:{
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbBtn,
    mdbJumbotron,
    mdbInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter
    },

    data () {
        return  {
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            showModal12a: false,
        }
    },

     methods: {
     isChecked () {
         if (this.checked=='') {
           //failed
             this.isInvalid=true;
             this.isCheckedd=true; 
             this.isValid=false

         }

         else if (this.checked!='')  {
            //passed
              this.isValid=true
              this.isInvalid=false;
              this.isCheckedd=false
         }
     },    

    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.$store.commit('setLoading', true);
                this.postFinance()
            }
        })
    },
     onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0])
    },
    createImage (file) {
        let image = new Image();
        let reader = new FileReader();
        //converts image to base 64 and displays selecte image to the client
        reader.onload = (e) => {
           this.$store.commit('setLoanSign', e.target.result);
           console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file)
  
    },

     postFinance () {
        this.$store.dispatch('postFinance')
    }

},

    computed : {
        loanSign () {
            return this.$store.getters.loanSign
        },
         loading () {
            return this.$store.state.loading
        }
    },

    mounted () {
        this.$store.dispatch('updateIsActive4')
    }
    
  
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
     padding: 0 10px !important
 }


 .valid {
     color:green !important
 }

 .invalid {
     color:red
 }
 

 input:focus, .text-area:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 
 
@media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:25vw!important
 }
}

@media (min-width:1200px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:auto!important
 }
}



@media (max-width:767px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }

 .small-screen-id {
     width:50vw
 }

  .main-container {
    border:2px solid bla;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
    padding: 0 10px !important
 }
}

 @media (max-width:576px){
   input {
      /* border-color: rgba(75, 148, 8, 0.8); */
      border:1px solid gainsboro;
      border-radius: 5px
     /* box-shadow: 0 0 5px rgb(75, 148, 8, 1); */
 }

 .small-screen-id {
     width:60vw
 }

   .main-container {
    border:2px solid bla;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0px 0vw;
    padding: 0 10px !important
 }
}

 
 

</style>