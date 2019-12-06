<template>
    <div>
        <div class="main-container">
            <ValidationObserver v-slot="{ passes }">
                <form  @submit.prevent="passes(postPawn)"> 
                    <span class="h5 mb-5 d-lg-none d-block ">Proof of Ownership</span>
                    <div class="form-row first">
                        <div class="col-md-6">
                            <div class=" mb-3">
                                <ValidationProvider name="Date of Purchase" rules="required" v-slot="{ errors }">
                                    <span class="m">Date of Purchase <span class="text-danger">*</span></span>
                                    <div class="example mt-2">  
                                        <div class="input-group">
                                            <datepicker id ='date' style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" :format='customFormatter' v-model="itemDate"></datepicker>
                                            <div class="input-group-append">
                                                <span class="input-group-text" style="height:30px" id="inputGroupPrepend"><i class="fa fa-calendar-alt" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div> 
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
                            </div>
                            <div class="mb-3">
                                <ValidationProvider name="Purchase Location" rules="required" v-slot="{ errors }">
                                    <label for="validationCustomUsername">Purchase Location <span class="text-danger">*</span></label>
                                    <input type="text" v-model="purchaseLocation" class="form-control mt-n2"  placeholder=""  name="Purchase Location">
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
                            </div>
                            <div class="mb-3"> 
                                <ValidationProvider name="Sworn Affidavit" rules="required" v-slot="{ errors }">
                                        Sworn Affidavit? <span class="text-danger">*</span>
                                        <div class="custom-control custom-radio ml-2 d-inline"> 
                                            <input type="radio" v-model="isSworn" value="yes" class="custom-control-input form-check-input" id="invalidCheck" name="radio-stack" >
                                            <label class="custom-control-label" for="invalidCheck">Yes</label> 
                                        </div>

                                        <div class="custom-control custom-radio ml-2 d-inline"> 
                                            <input type="radio" v-model="isSworn" value='no' class="custom-control-input" id="customControlValidation3" name="radio-stack" >
                                            <label class="custom-control-label"  for="customControlValidation3">No</label>    
                                        </div> <br>
                                        <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>  
                            </div>
                        </div>  
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-9">
                                    <div class="" >
                                        <span class="mb-3">Receipt/Sworn Affidavit<span class="text-danger">*</span></span>
                                        <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                            <img style="max-width:100%; height:100px" class="img-fluid" :src="itemReceipt"  alt=''>
                                        </div>
                                        
                                        <div class="input-group mt-2">
                                            <ValidationProvider name="Item Receipt" rules="required|image"  v-slot="{validate, errors }">
                                                <label class="btn btn-info btn-file">
                                                    Choose File <input @change="onFileChange($event); validate($event)" type="file" name="Item Receipt"  style="display: none;"> 
                                                </label> <br>
                                                <!-- <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"  @change="onFileChange($event); validate($event)"  name="ITem Receipt" id="id"> -->
                                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group second">
                        <div class="mt-3">
                              <ValidationProvider name="isChecked" rules="required"  v-slot="{errors }">
                                    <div class="checkbo form-chec">
                                        <input name="terms" class="form-check-inpu" v-model="isChecked"  type="checkbox"  >
                                        <span class="ml-2 text-info"> I hereby confirm that this item belongs to me, I am not under any duress to pawn the item in exchange for loan. Where I am unable to repay back the loan within 30days, the items would be forfeited to Eazzicash (A division of My Eazzicash Solution Limited). </span> 
                                    </div>    
                                   <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                              </ValidationProvider>    
                       </div>  
                    </div>

                    <div class="form-group">
                        <div class="mt-3 ">
                            <ValidationProvider name="id" rules="required"  v-slot="{errors }">
                                    <label class="checkbox">
                                        <input name="terms"  @change="isChecked" v-model="checked" type="checkbox"  >
                                        <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree that I have read and accepted the </span> 
                                    </label>
                                     <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span> <br>      
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>  
                           
                        </div>           
                    </div>

                     <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                            <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                            <mdb-modal-title >Terms & Conditions</mdb-modal-title>
                            </mdb-modal-header>
                            <mdb-modal-body>
                                <p class="font-weight-bold"> GENERAL TERMS AND CONDITIONS</p>
                                <p>The below Terms and Conditions stated herein governs this Pawn Loan Agreement between MyEazzi Solution Limited (“the PawnBroker) and the Borrower.  It is important that the Borrower carefully reads and keep these terms and conditions especially for future reference.</p>
                                 <p class="font-weight-bold">ADVANCEMENT</p>
                                    <p>a.MyEazzi Solution Limited agrees to advance the loan and the borrower agrees to take the loan subject to the terms and conditions as set out in the Pawn application form online and also herein stated in this offer. The terms and conditions shall commence on the effective date (written above) and shall continue until the facility is fully liquidated.</p>
                                    <p>b.Disbursement of funds is subject to availability of funds and statutory regulation. Each pawn tenor shall not exceed Thirty (30) days.</p>
                                    <p>c.The borrower will reimburse MyEazzi Solution Limited on demand, all expenses (including but not limited to legal and insurance expenses and all taxes where-so applicable) thereon incurred by MyEazzi Solution Limited in processing this facility and in suing for, or or recovering any sum due hereunder or otherwise in enforcing or protecting its rights and interest</p>
                                    <p>d.MyEazzi Solution reserves the right to refuse and/or withhold disbursement without notice.</p>
                                    <p>e.This offer is subject to external confirmation and authenticity of all documents submitted for the loan application.</p>
                                    <p>f.Where any document submitted by the borrower is found to be in genuine or unreliable, this offer will automatically be terminated.</p>
                                    <p>g.Pre-Liquidation: Customer consents to the payment of full interest for the month of liquidation and interest for one more month.</p>
                                    <p>h.The facility is expected to run its full course and therefore non-cancellable, Otherwise a non-cancellable fee shall apply</p>
                                    <p>i.MyEazzi Solution reserves the right to refuse and/or withhold disbursement without notice.</p>

                                    <p class="font-weight-bold">INTEREST RATE AND CHARGES</p>
                                    <p>a.The applicable interest rate is competitive subject to prevailing market conditionor at such higher rate which the PawnBroker may in its sole discretion (subject to applicable laws and regulations) determine from time to time and also as will be varied by the PawnBroker under sub- clauses B and/or C below.</p>
                                    <p>b.The interest rate is subject to review at the PawnBroker discretion.</p>
                                    <p>c.The Handling/Storage fee on any loan is 1% or at such higher rate which the PawnBroker may in its sole discretion (subject to applicable laws and regulations) determine from time to time and also as will be varied by the PawnBroker.</p>
                                    <p>d.The Management fee on any loan is 1% or at such higher rate which the PawnBroker may in its sole discretion (subject to applicable laws and regulations) determine from time to time and also as will be varied by the PawnBroker.</p>
                                    <p>e.The interest rate is a fixed rate and it runs through the duration of the payment.</p>
                                    <p>f.VAT of 5% will also be charged on the management fee.</p>
                                   
                                    <p>g.One (1) % credit life insurance fee will be deducted from the Borrower’s principal amount upon disbursement.</p>
                                    <p>h.MyEazzi Solution Limited will calculate interest on the daily balance outstanding (after adjustment is presented to the PawnBroker in the course of collection).</p>
                                    <p>i.MyEazzi Solution Limited shall compound interest on the loan at such interval as it shall solely in its discretion determine.</p>
                                    <p>j.Where the borrower decides to part/pre-liquidate the loan,  all accrued interests on the loan for the month of liquidation would be paid.</p>

                                    <p class="font-weight-bold">METHOD OF PAYMENT</p>

                                    <p>All repayments by the Borrower will be made by one of the following methods: Direct Transfer to  our designated/advised bank account, Postdated Cheques and Standing Order or through an acceptable electronic channel.</p>

                                    <p class="font-weight-bold">LOAN REPAYMENT</p>
                                    <p>a.The Borrower agrees to repay the Loan (principal and accrued interest) in accordance with this terms and condition.</p>
                                    <p>b.The Borrower will be expected to make monthly repayments in accordance with the repayment plan.</p>
                                    <p>c.The Borrower will be sent an electronic message or SMS atleast twice before the  monthly repayment due date and the Borrower hereby agrees that such notice shall be conclusively deemed received by the Borrower needless of any further notice.</p>
                                    <p>d.The Borrower is obliged to repay the loan according to the re-payment plan.</p>
                                    <p>e.If the due date for repayment falls on a non-business day, then the repayment may be paid on the next succeeding business day, and charges may accrue in event that the holiday is not a PawnBroker holiday.
                                    <p>f.The Borrower may terminate the Loan Agreement and repay back all or any part of the borrowed sum on any day before the scheduled maturity date, by paying to MyEazzi Solution Limited, all interest, fees and other monies then accrued or due under this Agreement as at the date of early repayment (whether or not yet payable).</p>
                                    <p>i.The Borrower hereby agrees that nonpayment of the amount owed to MyEazzi Solution Limited by the Payment Due Date (30 days from disbursement date) shall render the Borrower in default and entitles the MyEazzi Solution Limited to take steps to dispose the pawn item in order to recover the loan amount.</p>
                                    <p>j.The Borrower hereby agrees to abide by the payment date in his repayment plan as there is no option of change in repayment date</p>
                                    <p>k.Liquidation or pay-down of the loan must be authorized in writing by the PawnBroker, and any such Liquidation or pay-down must comprise of the principal loan and accrued interests.</p>    

                                    <p class="font-weight-bold" >EVENT OF DEFAULT</p>

                                    <p>The occurrence of any of the following shall cause all outstanding sums under this facility to become immediately repayable:</p>
                                    <p>i.If the borrower fails to settle as at when due, any outstanding amount or payment of interest or other amount in respect of the loan on the date it was due to be paid; or</p>
                                    <p>ii.If the borrower defaults in the performance or the observance of any term or/and conditions here-above stated including any representation or confirmation given by the Borrower in this loan agreement.</p>
                                    <p>iii.If the Borrower breaches any of the terms and conditions in this offer letter</p>
                                    <p>iv.Where the Borrower is unable to pay any other party within the meaning of Section 1 of the Lenderruptcy Act (Cap 30) Laws of the Federation of Nigeria.</p>
                                    <p>v.The Borrower fails to make repayment in full, on or before the payment date in accordance with the monthly repayment plan availed to the Borrower;</p>
                                    <p>vi.Where MyEazzi Solution Limited gives notice of said breach/default to the borrower, and the said breach/default continues and remains unalleviated; or</p>
                                    <p>vii.Any representation, warranty or assurance made or given by the Borrower in connection with the application for this loan or any information or documentation supplied by the Borrower, is subsequently discovered to be materially incorrect; or</p>
                                    <p>viii.Where a situation arise which in the opinion of MyEazzi Solution Limited makes it inappropriate for MyEazzi Solution Limited to continue to extend the facility to the Borrower.</p>
                                    



                                    <p class="font-weight-bold">CONDITION PRECEDENT TO DISBURSEMENT</p>
                                    <p>At the PawnBroker’s request, the Borrower will be required to provide the PawnBroker with the following:</p>
                                    <p>1.Completed Online Loan request form.</p>
                                    <p>2.Recent valid Identification Card</p>
                                    <p>3.Residential utility bills, passports and identity cards of the borrower or all the directors (companies).</p>
                                    <p>4.Receipt of pawn item and Sworn affidavit that the item belong to the borrower</p>
                                    <p>5.Where the receipt of the pawn item is not available, a police report and Sworn Court affidavit indicating that the receipt of the item is missing and that the items belong to the borrower waives any claims he/she may have against the PawnBroker in respect of such disclosure.</p>
        

<!-- 
                                    <p class="font-weight-bold">USE OF CREDIT BUREAU</p>

                                    <p>a.Upon filling of MyEazzi Solution loan application form, the Borrower agrees that:</p>
                                    <p>b.MyEazzi Solution Limited will approach dedicated Credit Reference Agencies for a credit report of the Borrower upon considering any application for credit.</p>
                                    <p>c.The Borrower authorizes MyEazzi Solution Limited to access any information available to it as provided by the Credit Agencies.</p> 
                                    <p>d.In the event the Borrower wishes to access the credit report, MyEazzi Solution Limited will advise the Borrower of the contact details of the relevant credit agencies and the Borrower waives any claims he/she may have against the PawnBroker in respect of such disclosure.</p> 
                                    <p>e.The PawnBroker will be entitled to terminate this Agreement (after service of any notice required there under) if the Borrower in any way perpetrates or attempts to or is involved in any act of fraud or other criminal activity in respect of MyEazzi Solution Limited or the Loan, or if any information provided by the Borrower as part of the application is incorrect or misleading in any material manner. On such termination, the PawnBroker reserves the right to demand repayment of the full loan amount with interest calculated.</p>
                                    <p>f.The  Company and its authorized  officers  can  at  any  time  visits  the  business  and  house premises of the Borrower in order to verify the existence and state of the collateral and verify the use of the credit.</p>
                                    <p>g.In  case  the  Borrower has failed  to pay as at when  due,  the  Company  has  the  right under  the cosigned to debit all accounts of the Borrower with the overdue installment.</p>
                                    <p>h.The PawnBroker has the right to unilaterally terminate the contract and to demand immediate payment of the entire outstanding loan principal, interest, penalties and other charges accrued the loan.</p> -->
                                    

                                    <p class="font-weight-bold">RIGHTS AND OBLIGATION OF THE BORROWER AND THE CO -SIGNATORY.</p>
                                    <p>a.The Borrower has the right to receive and use the loan as stipulated in the terms and conditions.</p>
                                    <p>b.All payment I.e Principal and Interest must be paid as at when due by paying in any of the conventional PawnBrokers.</p>
                                    <p>c.The Borrower has to inform the PawnBroker immediately in event that there is change in Business/residential address, home, change of business activity and/or other change that is significant to the loan.</p>
                                   

                                    <p class="font-weight-bold">REPRESENTATIONS AND WARRANTIES</p>
                                    <p> The Borrower represents and warrants that:</p>
                                    <p>a.The Borrower agrees to accept this facility and has executed the offer letter herein without duress after reading and understanding the contents of same.</p>
                                    <p>b.The Borrower agrees to accept this facility and has taken all necessary actions to authorize same upon executing the offer letter herein.</p>
                                    <p>c.The PawnBroker is not in default or under any obligation in respect of any borrowed money that the acceptance of this facility will be or result in breach of or default under any provision of any other agreement to which the Borrower is a party.</p>
                                    <p>d.The information given to MyEazzi Solution Limited verbally or in writing in the formal loan application form is true and accurate.</p>
                                    <p>e.The Borrower will utilize the loan for the purpose(s) for which it intimated MyEazzi Solution Limited about in their application for the loan.</p>
                                    <p>f.MyEazzi Solution Limited will not be held liable for any damage claim whatsoever.</p>
                                    <p>g.The Borrower agrees that MyEazzi Solution Limited can decline an already approved loan applications at any stage and at its discretion.</p>
                                    <p>h.The Borrower agrees that in the event this loan application is declined by MyEazzi Solution Limited, application documents shall not be returned to the Borrower.</p>	
                                   

                                
                                    <p class="font-weight-bold">RIGHTS OF THE PAWNBROKER IN EVENT THAT THE BORROWER DEFAULTS</p>
                                    <p>a.MyEazzi Solution Limited will on each Repayment Date collect the total amount payable by that date in accordance with the repayment plan schedule given to the Borrower. Where the Borrower fails to honor their obligation to repay their total monthly repayment amount by the due date, the PawnBroker will dispose/sell the pawn item in order to recover the outstanding amount within the next twenty-four (24) hours.</p>
                                    <p>b.The PawnBroker will be entitled to terminate this Agreement (after service of any notice required there under) if the Borrower in any way perpetrates or attempts to or is involved in any act of fraud or other criminal activity in respect of MyEazzi Solution Limited or the Loan, or if any information provided by the Borrower as part of the application is incorrect or misleading in any material manner. On such termination, the PawnBroker reserves the right to demand repayment of the full loan amount with interest calculated.</p>
                                    <p>c.The  Company and its authorized  officers  can  at  any  time  visit  the  business  and  house premises of the Borrower in order to verify the existence and state of the collateral and verify the use of the credit.</p>
                                    <p>d.The PawnBroker has the right to unilaterally terminate the contract and to demand immediate payment of the entire outstanding loan principal, interest, penalties and other charges accrued the loan.</p> 
                                    
                                    
                                    <p class="font-weight-bold">COSTS AND EXPENSES</p>
                                    <p>a.The Borrower hereby agrees to pay all administrative costs, charges and expenses (including legal fees) reasonably incurred by MyEazzi Solution Limited in connection with the processing of this loan request.</p>
                                    <p>b.The Borrower hereby agrees to pay all costs and expenses (including legal fees) incurred by MyEazzi Solution Limited in connection with any proceedings instituted by or against MyEazzi Solution Limited as a consequence of entering into this loan agreement.</p>
                                   
                                
                                    <p class="font-weight-bold">ASSIGNMENT AND DISCLOSURE OF INFORMATION</p>
                                    <p>a.The Borrower consents irrevocably to any future transfer and assignment, however arising of the loan, whether as part of a loan transfer scheme or otherwise.</p>
                                    <p>b.The Borrower authorizes MyEazzi Solution Limited to disclose any information or documentation relating to the loan to the general public and will further be flagged on the Credit bureau Agency in event that the Borrower defaults in repaying the said loan.</p>
                                    <p>c.In the case of individuals, the Borrower authorizes the PawnBroker to disclose any information or documentation relating to the loan to the general public including but not limited to the borrower’s friends, family members and relatives, and any other affiliated organizations or bodies associated with the borrower in the event that the loan has ceased to be serviced by the Borrower.</p> 
                                
                                    <p class="font-weight-bold">VARIATION OF CONDITIONS</p> 
                                    <p>MyEazzi Solution Limited reserves the right at all times to vary the terms and conditions of the loan agreement. Any such variation will become effective upon notice to the Borrower by any means MyEazzi Solution Limited considers reasonable in the circumstance.</p>  
                                
                                    <p  class="font-weight-bold">MEANS OF COMMUNICATION</p>
                                    <p>The Borrower agrees that the PawnBroker may communicate with them by sending notices, emails, messages, alerts and statements in relation to this Agreement in the following manner:</p>
                                    <p>a.To the most recent address the PawnBroker holds for the Borrower.</p>
                                    <p>b.By delivery to any email address provided during the application process.</p>
                                    <p>c.By delivery of an SMS to any mobile telephone number the Borrower has provided to the PawnBroker.</p> 
                                   
                                
                                    <p class="font-weight-bold">GOVERNING LAW</p>
                                    <p>This Agreement shall be governed by the laws of the Federal Republic of Nigeria and shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria</p>
                                
                                    <p class="font-weight-bold">MISCELLENOUS</p>
                                    <p>a.If the PawnBroker does not strictly enforce its rights under this Agreement (including its right to insist on the repayment of all sums due on the Repayment Due Date) or grant the Borrower an indulgence, the PawnBroker will not be deemed to have waived those rights and will not be prevented from insisting upon its strict rights at a later date.</p>
                                    <p>b.The PawnBroker reserves the right to transfer or assign its rights and obligations under this Agreement (including its obligation to lend money to the Borrower or the amount owed under this Agreement) to another person. The PawnBroker will only tell the Borrower if such a transfer causes the arrangements for the administration of this Agreement to change.</p>
                                    <p>c.Any refund made to the Borrower for duplicate payment may attract a refund processing fee.</p>
                                    <p>d.The PawnBroker reserves the right to review, verify and screen all details, including but not limited to the loan amount applied for by the Borrower and the PawnBroker is not bound to grant the exact loan amount applied for by the Borrower.</p>
                                    <p>e.The Borrower agrees to bring to the notice of the PawnBroker about any change in registered office Address or any other change.</p>
                                    <p>h.Borrower that submit fake or fraudulent documentation shall be reported to appropriate regulatory bodies, for prosecution and/or any other penalties as the regulatory body deems fit.</p>                                       
                                    <p>i.Borrower’s  repayment instrument (cheque) will be presented for repayment without further recourse to the Borrower, in event that the direct debit mandate executed by the Borrower does not pick the repayment on repayment due dates.</p>
                                    <p>j.The Borrower also authorize MyEazzi Solution Limited to present the repayment instrument issued by the Borrower (in favour of MyEazzi Solution Limited) for the repayment of the Loan as and when due until the Loan has been fully liquidated and if, for any reason whatsoever, the Borrower’s account is not funded at the time of presentation, the Borrower’s shall be criminally liable under the Dishonored Cheques (Offences) Act, CAP D1, LFN 2004.</p>
                                    <p>k.The PawnBroker shall present the Borrower’s repayment instrument (Cheque) on repayment due dates without recourse to the Borrower and the PawnBroker shall not be held liable for charges incurred on any return instrument.</p>
                                    <p>l.The Borrower hereby acknowledges and concedes that the PawnBroker’s books and accounts shall be evidence of the sum due or which the Borrower is bound to pay in respect of the credit.</p>
                                    <p>m.The invalidity of any part of this offer of credit facility [“offer letter”] will not and shall not be deemed to affect the validity of any other part. In the event that any provision or clause of this offer letter is held to be invalid, the parties agree that the remaining provisions shall be deemed to be in full force and effect as if they had been executed by both parties subsequent to the expungement of the invalid provision; and If at any time any term or provision in this Offer letter shall be held to be illegal, invalid or unenforceable, in whole or in part, under any rule of law or enactment or by judicial pronouncement, such term or provision or part shall to that extent be deemed not to form part of this Offer letter, but the enforceability of the remainder of this Offer letter shall not be affected.</p>
                                    <p>n.This offer letter shall constitute the entire offer letter between the parties. Any prior understanding or representation of any kind preceding the date of this offer letter shall not be binding on either party except to the extent incorporated in this offer letter; and it is hereby expressly agreed by parties to this offer letter that no Party has entered into this Offer letter under any form of duress or in reliance upon any representation, warranty, indemnity, covenant or undertaking of any other Party which is not expressly set out in this Offer letter. WHEREBY IT IS HEREBY EXPRESSLY AND MUTUALLY AGREED THAT THE “COLLATERAL EVALUATION”, Borrower’s Means of Identification, Borrower’s passport photograph and all documents submitted to the PawnBroker by the Borrower and accepted by the PawnBroker for the purpose of approving this loan form part of this agreement.</p>
                                    <p>o.Any modification of this offer letter or additional obligation assumed by either party in connection with this offer letter shall be binding only if evidenced in writing signed and sealed by each party or an authorized representative of each party.</p>   
                                    <p>p.This offer letter may be executed in any number of counterparts, each of which shall be deemed to be an original, but all of which together shall constitute but one and the same instrument</p>
                                    <p class="font-weight-bold">MEMORANDUM OF UNDERSTANDING</p>       
                                    <p>This amount has been provided to me by MyEazzi Solution Limited. In return, I agree to pledge the above mentioned item listed below as collateral. I agree to pay the amount listed not later than 30days from disbursement date. Once full repayment is made, the collateral shall be returned back to me. Where full payment is not made by <strong>the maturity date</strong> , the provided collateral shall become the property of MyEazzi Solution Limited, who may subsequently dispose/sell the said item in order to recoup the financed amount.</p>
                                    <P class="mt-4">Regards.</P>
                           
                            </mdb-modal-body>
                            <mdb-modal-footer>
                            <mdb-btn color="info" @click.native="showModal12a = false">Done</mdb-btn>
                            </mdb-modal-footer>
                    </mdb-modal> 


                      <div class="row d-flex justify-content-between row2 borde">

                            <div class="div3">
                                <div class="input-group mr-2 ml-2 mt-2 mt-md-5">
                                    <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                        <button  @click="prev_page" class="btn btn-green">prev</button>
                                    </ValidationProvider> 
                                </div>
                            </div>

                            <div class="div3">
                                <div class="input-group mt-2 ml- mr-4 mt-md-5" >
                                    <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                                <mdb-btn type="submit" :disabled='isCheckedd' class="btn-green" style="font-size:15px; border-radius:5px">Submit <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
                                    </ValidationProvider> 
                                </div>
                            </div>   
                    </div>
                 </form>
            </ValidationObserver>           
          </div>
     
  </div>
</template>

<script>
import{mdbNavbar,mdbInput, mdbBtn,  mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter} from 'mdbvue';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    name:'guarantor',
    components:{
     Datepicker,
    mdbNavbar,
    mdbBtn, 
    mdbInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter, 
    mdbBtn,
    ValidationObserver,
    ValidationProvider
    },
    
    data () {
        return {
            selected:'',
            showModal12a: false,
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            isLoading:false

        }
    }, 

    methods: {
        next_page () {
            this.$router.push('/profile/pawnshop/pawndetails/signature')
        },
        prev_page () {
            this.$router.go(-1)
        },
        customFormatter(date) {
            return moment(date).format('MMMM Do YYYY');
        },
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
        postPawn () {
            this.isLoading = true;
            this.$store.dispatch('postPawn')
            .then(_ => this.isLoading= false)
            .catch(_ => this.isLoading= false)
        },
         onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0])
        },
        createImage (file) {
            let image = new Image();
            let reader = new FileReader();
            // converts image to base64 and diaplays selected image to the client
            reader.onload = (e) => {
            this.$store.commit('setItemReceipt', e.target.result)
            console.log(reader.result);;
            }
            reader.readAsDataURL(file)
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
        itemReceipt () {
            return this.$store.getters.itemReceipt
        },
        itemDate : {
            get () {
               return this.$store.getters.itemDate
            },
            set (value) {
               this.$store.dispatch('updateItemDate', value )
            }
       },
       purchaseLocation : {
            get () {
                return this.$store.getters.purchaseLocation
            },
            set (value) {
                this.$store.dispatch('updatePurchaseLocation', value )
            }
       },
       isSworn : {
            get () {
                return this.$store.getters.isSworn
            },
            set (value) {
                this.$store.dispatch('updateIsSworn', value )
            }
       },
    },

    watch : {
        isSuccess (newval) {
             if(newval==true) return this.showToastrSuccess()
        },
        
        isError (newval) {
            if(newval==true) return this.showToastrError()
        }
    },
    mounted () {
        this.$store.dispatch('updateIsActive2P')
    }
}
</script>

<style scoped>

 .main-container {
    border:2px solid blac;
    /* margin-left:3vw; */
    height: auto;
    width:auto;
    margin:0vh 0vw
 }

 input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

  input:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
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

.valid {
     color:green !important
 }
 .invalid {
     color:red
 }
 





 

 

</style>