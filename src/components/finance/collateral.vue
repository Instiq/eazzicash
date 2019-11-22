<template>
  <div>
      <div class="main-containe">
            <ValidationObserver v-slot="{ passes }">
                <form  @submit.prevent="passes(postFinance)"> 
                     <span class="h5 mb-5 d-lg-none d-block ">Collateral Details</span>
                     <div class="form-row first">
                         <div class="col-md-6">
                             <div class="mb-3">
                                <ValidationProvider name="Collateral Type" rules="required" v-slot="{ errors }">
                                    <span class="m">Collateral Type <span class="text-danger">*</span></span>
                                    <select class="browser-default custom-select" v-model="collateralType"  name="Collateral Type">
                                        <option value="LPO Finance">Moveable Asset</option>
                                        <option value="Asset" >Contract Agreement</option>
                                        <option value="Contract">Joint Account</option>
                                        <option value="Contract">Direct Payment to EazziCash</option>
                                    </select>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>  

                             <div class="mb-3">
                                <ValidationProvider name="Collateral Title" rules="required" v-slot="{ errors }">
                                    <span class="m">Collateral Title <span class="text-danger">*</span></span>
                                    <input id ='date1' class="form-control" placeholder="e.g Car, House, Award Document"  v-model="collateralTitle"/>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div> 

                              <div class="mb-3">
                                <ValidationProvider name="Collateral Description" rules="required" v-slot="{ errors }">
                                    <span class="m">Collateral Description <span class="text-danger">*</span></span>
                                    <textarea type="text"  v-model="collateralDescription" name="Collateral Description" class="form-control textarea" rows="3" placeholder=""></textarea>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>     

                            <div class="mb-3">
                                <ValidationProvider name="Contract Receivable Account Number" rules="required|numeric|min:10|max:10" v-slot="{ errors }">
                                    <span class="m">Contract Receivable Account Number <span class="text-danger">*</span></span>
                                    <input type="text"  v-model="contractAccount" name="Contract Receivable Account Number" class="form-control"  placeholder="">
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>  

                             <div class="mb-3">
                                <ValidationProvider name="Contract Duration" rules="required" v-slot="{ errors }">
                                    <span class="m">Contract Duration <span class="text-danger">*</span></span> <br>
                                    <span>From</span> <datepicker id ='date' class="mb-2" style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" :format='customFormatter' v-model="itemDate"></datepicker> 
                                    <!-- <span>To</span><datepicker id ='date1' style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" :format='customFormatter' v-model="itemDate1"></datepicker> -->
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div> 

                             <div class="mb-3">
                                <ValidationProvider name="Contract Duration1" rules="required" v-slot="{ errors }">
                                    <!-- <span class="m">Contract Duration <span class="text-danger">*</span></span> <br> -->
                                    <!-- <span>From</span> <datepicker id ='date' class="mb-2" style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" :format='customFormatter' v-model="itemDate"></datepicker>  -->
                                    <span>To</span><datepicker id ='date1' style="border:1px solid blu; border-radius:3px;" placeholder="Select Date" :format='customFormatter' v-model="itemDate1"></datepicker>
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider> 
                            </div>  

                            <div class="mb-3">
                                <ValidationProvider name="principal" rules="numeric|min:10|max:10" v-slot="{ errors }">
                                    <span class="m">Joint Receivable Account Number</span>
                                    <input type="text"  v-model="jointAccount" name="Joint Receivable Account Number" class="form-control"  placeholder="">
                                    <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>  
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-9">
                                    <div class="mb-5">
                                        <span class="mt-md-n4 mb-md-3">Supporting Documents <span class="text-danger">*</span> </span>
                                        <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                            <img style="max-width:100%; height:100px; width:auto" class="img-fluid" :src="supportingDocs"  alt=''>
                                        </div>
                                        <div class="input-group mr-2 mt-3">
                                            <ValidationProvider name="Supporting Docs" rules="required|image|size:2000"  v-slot="{validate, errors }">
                                                <label class="btn ml-n1 btn-info btn-file">
                                                        BROWSE  <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" style="display:none"  @change="onFileChange($event); validate($event)"  name="Supporting Documents" id="supporting">
                                                </label> <br> 
                                                 <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>          
                                    </div>
                                    <div class="mb-3">
                                        <span class="mt-md-n4 mb-md-3">Other Documents </span>
                                        <div class=" mb-4 mb-md-0 " style="height:105px; width:170px; border:1px solid blue"> 
                                            <img style="max-width:100%; height:100px; width:auto" class="img-fluid" :src="otherDocs"  alt=''>
                                        </div>
                                        <div class="input-group mr-2 mt-3">
                                            <ValidationProvider name="Other Docs" rules="image|size:2000"  v-slot="{validate, errors }">
                                                <label class="btn ml-n1 btn-info btn-file">
                                                    BROWSE  <input  type="file" class=" mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id" style="display:none"  @change="onFileChange2($event); validate($event)"  name="Other Documents" id="other">
                                                </label> <br> 
                                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                                            </ValidationProvider> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>   

                    <div class="form-group">
                        <div class="mt-3 ">
                            <ValidationProvider name="id" rules="required"  v-slot="{validate, errors }">
                                <label class="checkbox">
                                        <input name="terms"  @change="isChecked" v-model="checked" type="checkbox"  >
                                        <span class="ml-2" :class="{valid:isValid, invalid:isInvalid}">I agree that I have read and accepted the </span> 
                                    </label>
                                <span style="font-size:13px; color:red"> <span v-if="errors[0]"><i class="fas fa-ban"></i></span> {{ errors[0] }}</span>
                            </ValidationProvider>  
                        
                            <span :class="{valid:isValid}" class="ml-2" style="cursor:pointer;color:blue"  @click="showModal12a = true">terms and conditions.</span>
                        </div>
                    </div>

                     <mdb-modal :show="showModal12a" @close="showModal12a = false" scrollable>
                                    <mdb-modal-header class="text-center bg-info text-white" style="font-weight:400">
                                        <mdb-modal-title >Terms & Conditions</mdb-modal-title>
                                    </mdb-modal-header> 
                                    <mdb-modal-body>
                                        <p class="font-weight-bold"> GENERAL TERMS AND CONDITIONS</p>
                                        <p>The below Terms and Conditions stated herein governs this Loan Agreement between MyEazzi Solution Limited (“the Lender”) and the Borrower.  It is important that the Borrower carefully reads and keep these terms and conditions especially for future reference.</p>
                                        
                                        <p class="font-weight-bold">ADVANCEMENT</p>
                                        <p>a.MyEazzi Solution Limited agrees to advance the loan and the borrower agrees to take the loan subject to the terms and conditions as set out in the loan application form online and also herein stated in this offer. The terms and conditions shall commence on the effective date (written above) and shall continue until the facility is fully liquidated.</p>
                                        <p>b.Disbursement of funds is subject to availability of funds and statutory regulation. Each loan tenor shall not exceed six (6) months</p>
                                        <p>c.The borrower will reimburse MyEazzi Solution Limited on demand, all expenses (including but not limited to legal and insurance expenses and all taxes where-so applicable) thereon incurred by MyEazzi Solution Limited in processing this facility and in suing for, or or recovering any sum due hereunder or otherwise in enforcing or protecting its rights and interest</p>
                                        <p>d.MyEazzi Solution reserves the right to refuse and/or withhold disbursement without notice.</p>
                                        <p>e.This offer is subject to external confirmation and authenticity of all documents submitted for the loan application.</p>
                                        <p>f.Where any document submitted by the borrower is found to be in genuine or unreliable, this offer will automatically be terminated.</p>
                                        <p>g.Pre-Liquidation: Customer consents to the payment of full interest for the month of liquidation and interest for one more month.</p>
                                        <p>h.The facility is expected to run its full course and therefore non-cancellable, Otherwise a non-cancellable fee shall apply</p>
                                        <p>i.MyEazzi Solution reserves the right to refuse and/or withhold disbursement without notice.</p>

                                        <p class="font-weight-bold">INTEREST RATE AND CHARGES</p>
                                        <p>a.The applicable interest rate is competitive subject to prevailing market conditionor at such higher rate which the Lender may in its sole discretion (subject to applicable laws and regulations) determine from time to time and also as will be varied by the Lender under sub- clauses B and/or C below.</p>
                                        <p>b.The interest rate is subject to review at the Lender discretion.</p>
                                        <p>c.Any change in interest rate will take effect on the Borrower’s account following a minimum of 7 days written notice.</p>
                                        <p>d.The Management fee on any loan is 1% or at such higher rate which the Lender may in its sole discretion (subject to applicable laws and regulations) determine from time to time and also as will be varied by the Lender.</p>
                                        <p>e.The interest rate is a fixed rate and it runs through the duration of the payment.</p>
                                        <p>f.Management fee on the said loan will be deducted before disbursement.</p>
                                        <p>g.VAT of 5% will also be charged on the management fee.</p>
                                        <p>h.One (1) % credit life insurance fee will be deducted from the Borrower’s principal amount upon disbursement.</p>
                                        <p>i.MyEazzi Solution Limited will calculate interest on the daily balance outstanding (after adjustment is presented to the Lender in the course of collection).</p>
                                        <p>j.MyEazzi Solution Limited shall compound interest on the loan at such interval as it shall solely in its discretion determine.</p>
                                        <p>k. Where the borrower decides to part/pre-liquidate the loan,  all accrued interests on the loan for the month of liquidation would be paid.</p>

                                        <p class="font-weight-bold">METHOD OF PAYMENT</p>

                                        <p>All repayments by the Borrower will be made by one of the following methods: Direct Transfer to  our designated/advised bank account, Postdated Cheques and Standing Order or through an acceptable electronic channel.</p>

                                        <p class="font-weight-bold">LOAN REPAYMENT</p>
                                        <p>a.The Borrower will be given a dedicated and customized repayment plan together with this offer letter upon approval of the loan application.</p>
                                        <p>b.The Borrower agrees to repay the Loan (principal and accrued interest) in accordance with this terms and condition.</p>
                                        <p>c.The Borrower will be expected to make monthly repayments in accordance with the repayment plan.</p>
                                        <p>d.The Borrower will be sent an electronic message or SMS atleast twice before the  monthly repayment due date and the Borrower hereby agrees that such notice shall be conclusively deemed received by the Borrower needless of any further notice.</p>
                                        <p>e.The Borrower is obliged to repay the loan according to the re-payment plan.</p>
                                        <p>f.If the installment to pay back coincides with a public holiday then the payment takes effect on the next working day.</p>
                                        <p>g.The installment repayment as calculated in the dedicated repayment schedule are done on the basis of payment at regular agreed intervals. If the due date for instalmental repayment falls on a non-business day, then the installmental repayment may be paid on the next succeeding business day, and charges may accrue in event that the holiday is not a Lender holiday.</p>
                                        <p>h.The Borrower may terminate the Loan Agreement and repay back all or any part of the borrowed sum on any day before the scheduled maturity date, by paying to MyEazzi Solution Limited, all interest, fees and other monies then accrued or due under this Agreement as at the date of early repayment (whether or not yet payable).</p>
                                        <p>i.The Borrower hereby agrees that nonpayment of the amount owed to MyEazzi Solution Limited by the Payment Due Date shall render the Borrower in default and entitles the MyEazzi Solution Limited to take steps to recover the outstanding loan amount.</p>
                                        <p>j.The Borrower hereby agrees to abide by the payment date in his repayment plan as there is no option of change in repayment date</p>
                                        <p>k.Liquidation or pay-down of the loan must be authorized in writing by the Lender, and any such Liquidation or pay-down must comprise of the principal loan and accrued interests.</p>    

                                        <p class="font-weight-bold" >EVENT OF DEFAULT</p>

                                        <p>The occurrence of any of the following shall cause all outstanding sums under this facility to become immediately repayable:</p>
                                        <p>i.If the borrower fails to settle as at when due, any outstanding amount or payment of interest or other amount in respect of the loan on the date it was due to be paid; or</p>
                                        <p>ii.If the borrower defaults in the performance or the observance of any term or/and conditions here-above stated including any representation or confirmation given by the Borrower in this loan agreement.</p>
                                        <p>iii.If the Borrower breaches any of the terms and conditions in this offer letter</p>
                                        <p>iv.Where the Borrower is unable to pay any other party within the meaning of Section 1 of the Lenderruptcy Act (Cap 30) Laws of the Federation of Nigeria.</p>
                                        <p>v.The Borrower fails to make repayment in full, on or before the payment date in accordance with the monthly repayment plan availed to the Borrower;</p>
                                        <p>vi.Where MyEazzi Solution Limited gives notice of said breach/default to the borrower, and the said breach/default continues and remains unalleviated after seven (7) days’ notice had been given to it; or</p>
                                        <p>vii.Where repayment of the facility is not discharged as at when due with reference to the monthly installment payment and other outstanding amount applicable to the facility), MyEazzi Solution has the right to upload customer’s data as delinquent on the Credit bureau</p>
                                        <p>viii.The Borrower by his Act or Omission prejudices the Lender’s rights in terms of this Agreement and/or cause MyEazzi Solution Limited to suffer any loss or damage.</p>
                                        <p>ix.Any representation, warranty or assurance made or given by the Borrower in connection with the application for this loan or any information or documentation supplied by the Borrower, is subsequently discovered to be materially incorrect; or</p>
                                        <p>x.Where a situation arise which in the opinion of MyEazzi Solution Limited makes it inappropriate for MyEazzi Solution Limited to continue to extend the facility to the Borrower.</p>
                                        <p>xi.Returned cheques/failed remita shall attract an additional charge of N5,000.00 per cheque per return.</p>
                                        <p>xii.The Borrower agrees to sign an indemnity form in event of further default and the adverse effect of defaulting further shall be deemed self-inflicted.</p>
                                        <p>xiii.In case of late payment, penalty rate is 1% daily on the principal loan and accrued interests.</p>



                                        <p class="font-weight-bold">CONDITION PRECEDENT TO DISBURSEMENT</p>
                                        <p>At the Lender’s request, the Borrower will be required to provide the Lender with the following:</p>
                                        <p>1.Completed Online Loan request form.</p>
                                        <p>2.Copies of incorporation documents (Memart & certification of incorporation) (For companies)</p>
                                        <p>3.Board resolution to access a loan( For Companies).</p>
                                        <p>4.Lender Statements of account of the Borrower and for the last one year</p>
                                        <p>5.Postdated cheques for repayment including 5,000.00 cheque for signature verification</p>
                                        <p>6.Residential utility bills, passports and identity cards of the borrower or all the directors (companies).</p>
                                        <p>7.A corporate guarantor/individual guarantor</p>
                                        <p>8.Incorporation documents of the Guarantor if a corporate guarantor but if an individual guarantor, residential utility bill, passport and identity card of individual.</p>
                                        <p>9.Lender Statements of account of guarantor</p>   
                                        <p>10.Guarantors cheque in the loan amount and signature verification cheque of 2,000</p>    
                                        <p>11.Collateral worth 200% of loan amount and the title documents for the said collateral.</p>
                                        <p>12.Contingent liability details and any other reasonable information relating to the Borrower and /or the Borrower’s financial affairs.</p>                            


                                        <p class="font-weight-bold">USE OF CREDIT BUREAU</p>

                                        <p>a.Upon filling of MyEazzi Solution loan application form, the Borrower agrees that:</p>
                                        <p>b.MyEazzi Solution Limited will approach dedicated Credit Reference Agencies for a credit report of the Borrower upon considering any application for credit.</p>
                                        <p>c.The Borrower authorizes MyEazzi Solution Limited to access any information available to it as provided by the Credit Agencies.</p> 
                                        <p>d.In the event the Borrower wishes to access the credit report, MyEazzi Solution Limited will advise the Borrower of the contact details of the relevant credit agencies and the Borrower waives any claims he/she may have against the Lender in respect of such disclosure.</p> 
                                        <p>e.The Lender will be entitled to terminate this Agreement (after service of any notice required there under) if the Borrower in any way perpetrates or attempts to or is involved in any act of fraud or other criminal activity in respect of MyEazzi Solution Limited or the Loan, or if any information provided by the Borrower as part of the application is incorrect or misleading in any material manner. On such termination, the Lender reserves the right to demand repayment of the full loan amount with interest calculated.</p>
                                        <p>f.The  Company and its authorized  officers  can  at  any  time  visits  the  business  and  house premises of the Borrower in order to verify the existence and state of the collateral and verify the use of the credit.</p>
                                        <p>g.In  case  the  Borrower has failed  to pay as at when  due,  the  Company  has  the  right under  the cosigned to debit all accounts of the Borrower with the overdue installment.</p>
                                        <p>h.The Lender has the right to unilaterally terminate the contract and to demand immediate payment of the entire outstanding loan principal, interest, penalties and other charges accrued the loan.</p>
                                        

                                        <p class="font-weight-bold">RIGHTS AND OBLIGATION OF THE BORROWER AND THE CO -SIGNATORY.</p>
                                        <p>a.The Borrower has the right to receive and use the loan as stipulated in the terms and conditions.</p>
                                        <p>b.The installments must be paid as at when due by paying in any of the conventional Lenders.</p>
                                        <p>c.The Borrower must not use the loan for a different purpose as against the stipulated purpose provided in the application form.</p>
                                        <p>d.The Borrower has to inform the Lender immediately in event that there is change in Business/residential address, home, change of business activity and/or other change that is significant to the loan.</p>
                                        <p>e.The Borrower  needs the Lender’s express and written approval when:</p>
                                        <ul>
                                            <li>Selling partly or entirely his/her fixed business assets </li>
                                            <li>Pledging or selling any of the collaterals.</li>
                                        </ul>

                                        <p class="font-weight-bold">REPRESENTATIONS AND WARRANTIES</p>
                                        <p> The Borrower represents and warrants that:</p>
                                        <p>a.The Borrower agrees to accept this facility and has executed the offer letter herein without duress after reading and understanding the contents of same.</p>
                                        <p>b.The Borrower agrees to accept this facility and has taken all necessary actions to authorize same upon executing the offer letter herein.</p>
                                        <p>c.The Lender is not in default or under any obligation in respe respect of any borrowed money that the acceptance of this facility will be or result in breach of or default under any provision of any other agreement to which the Borrower is a party.</p>
                                        <p>d.The information given to MyEazzi Solution Limited verbally or in writing in the formal loan application form is true and accurate.</p>
                                        <p>e.The Borrower will utilize the loan for the purpose(s) for which it intimated MyEazzi Solution Limited about in their application for the loan.</p>
                                        <p>f.The Borrower agrees that MyEazzi Solution Limited will not be held liable for the postdated cheques provided by the Borrower upon approval of the loan facility; in any event that such loan is declined subsequently.</p>
                                        <p>g.The Borrower agrees that MyEazzi Solution Limited can decline an already approved loan applications at any stage and at its discretion.</p>
                                        <p>h.MyEazzi Solution Limited will not be held liable for any damage claim whatsoever.</p>
                                        <p>i.The Borrower agrees that in the event this loan application is declined by MyEazzi Solution Limited, application documents shall not be returned. The Borrower hereby acknowledges and concedes that the Lender’s books and accounts shall be evidence of the sum due or which the Borrower is bound to pay in respect of the credit.</p>	
                                        <p>J.The invalidity of any part of this offer of credit facility [“offer letter”] will not and shall not be deemed to affect the validity of any other part. In the event that any provision or clause of this offer letter is held to be invalid, the parties agree that the remaining provisions shall be deemed to be in full force and effect as if they had been executed by both parties subsequent to the expungement of the invalid provision; and If at any time any term or provision in this Offer letter shall be held to be illegal, invalid or unenforceable, in whole or in part, under any rule of law or enactment or by judicial pronouncement, such term or provision or part shall to that extent be deemed not to form part of this Offer letter, but the enforceability of the remainder of this Offer letter shall not be affected.</p>
                                        <p>K.This offer letter shall constitute the entire offer letter between the parties. Any prior understanding or representation of any kind preceding the date of this offer letter shall not be binding on either party except to the extent incorporated in this offer letter; and it is hereby expressly agreed by parties to this offer letter that no Party has entered into this Offer letter under any form of duress or in reliance upon any representation, warranty, indemnity, covenant or undertaking of any other Party which is not expressly set out in this Offer letter. WHEREBY IT IS HEREBY EXPRESSLY AND MUTUALLY AGREED THAT THE “COLLATERAL EVALUATION”, Borrower’s Means of Identification, Borrower’s passport photograph and all documents submitted to the Lender by the Borrower and accepted by the Lender for the purpose of approving this loan form part of this agreement.</p>
                                        <p>l.Any modification of this offer letter or additional obligation assumed by either party in connection with this offer letter shall be binding only if evidenced in writing signed and sealed by each party or an authorized representative of each party.</p>

                                    
                                        <p class="font-weight-bold">RIGHTS OF THE LENDER IN EVENT THAT THE BORROWER DEFAULTS</p>
                                        <p>a.MyEazzi Solution Limited will on each Repayment Date collect the total amount payable by that date in accordance with the repayment plan schedule given to the Borrower. Where the Borrower fails to honor their obligation to repay their total monthly repayment amount by the due date, the Lender will attempt to collect the outstanding amount within the next twenty-four (24) hours.</p>
                                        <p>b.Where more than forty-eight (48) hours have elapsed since the repayment date and the repayment amount (total or partial) still remains outstanding, the Lender will start calculating accelerated interest at the rate of 1% per day of the amount due.</p>
                                        <p>c.Following the Borrower’s default, the Lender reserves the right to assign its right, title and interest under the Agreement to an external Collections Agency who will take all steps to collect the outstanding loan amount.</p>
                                        <p>d.The Lender also reserves the right to institute a legal proceeding against the defaulting Borrower and is under no obligation to inform the Borrower before such proceedings commence.</p>
                                        <p>e.The Lender will be entitled to terminate this Agreement (after service of any notice required there under) if the Borrower in any way perpetrates or attempts to or is involved in any act of fraud or other criminal activity in respect of MyEazzi Solution Limited or the Loan, or if any information provided by the Borrower as part of the application is incorrect or misleading in any material manner. On such termination, the Lender reserves the right to demand repayment of the full loan amount with interest calculated.</p>
                                        <p>f.The  Company and its authorized  officers  can  at  any  time  visits  the  business  and  house premises of the Borrower in order to verify the existence and state of the collateral and verify the use of the credit.</p>
                                        <p>g.In  case  the  Borrower has failed  to pay as at when  due,  the  Company  has  the  right under  the cosigned to debit all accounts of the Borrower with the overdue installment.</p>
                                        <p>h.The Lender has the right to unilaterally terminate the contract and to demand immediate payment of the entire outstanding loan principal, interest, penalties and other charges accrued the loan.</p> 
                                        <p class="font-weight-bold">COSTS AND EXPENSES</p>
                                        <p>a.The Borrower hereby agrees to pay all administrative costs, charges and expenses (including legal fees) reasonably incurred by MyEazzi Solution Limited in connection with the processing of this loan request.</p>
                                        <p>b.The Borrower hereby agrees to pay Two Thousand Naira (N5,000) in the event that any of the repayment instruments issued by them in favour of MyEazzi Solution Limited is returned unpaid.</p>
                                        <p>c.The Borrower hereby agrees to pay all costs and expenses (including legal fees) incurred by MyEazzi Solution Limited in connection with any proceedings instituted by or against MyEazzi Solution Limited as a consequence of entering into this loan agreement.</p>
                                        <p>d.The Borrower shall bear the cost of credit reference bureau check.</p>
                                        <p>e.The Borrower agrees to pay N10,000 being cost for Company Search.</p>
                                        <p>f.The Borrower agrees to pay penalty charges at the rate of 1% per day of the amount due.</p>
                                    
                                        <p class="font-weight-bold">ASSIGNMENT AND DISCLOSURE OF INFORMATION</p>
                                        <p>a.The Borrower consents irrevocably to any future transfer and assignment, however arising of the loan, whether as part of a loan transfer scheme or otherwise.</p>
                                        <p>b.The Borrower authorizes MyEazzi Solution Limited to disclose any information or documentation relating to the loan to the general public and will further be flagged on the Credit bureau Agency in event that the Borrower defaults in repaying the said loan.</p>
                                        <p>c.In the case of individuals, the Borrower authorizes the Lender to disclose any information or documentation relating to the loan to the general public including but not limited to the borrower’s friends, family members and relatives, and any other affiliated organizations or bodies associated with the borrower in the event that the loan has ceased to be serviced by the Borrower.</p> 
                                    
                                        <p class="font-weight-bold">VARIATION OF CONDITIONS</p> 
                                        <p>MyEazzi Solution Limited reserves the right at all times to vary the terms and conditions of the loan agreement. Any such variation will become effective upon notice to the Borrower by any means MyEazzi Solution Limited considers reasonable in the circumstance.</p>  
                                    
                                        <p  class="font-weight-bold">MEANS OF COMMUNICATION</p>
                                        <p>The Borrower agrees that the Lender may communicate with them by sending notices, emails, messages, alerts and statements in relation to this Agreement in the following manner:</p>
                                        <p>To the most recent address the Lender holds for the Borrower.</p>
                                        <p>By delivery to any email address provided during the application process.</p>
                                        <p>By delivery of an SMS to any mobile telephone number the Borrower has provided to the Lender.</p> 
                                        <p>MyEazzi Solution Limited reserves the right to contact Borrower’s corporate guarantor concerning loan details especially as it relates to any case of default.</p>
                                    
                                        <p class="font-weight-bold">GOVERNING LAW</p>
                                        <p>This Agreement shall be governed by the laws of the Federal Republic of Nigeria and shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria</p>
                                    
                                        <p class="font-weight-bold">MISCELLENOUS</p>
                                        <p>a.If the Lender does not strictly enforce its rights under this Agreement (including its right to insist on the repayment of all sums due on the Repayment Due Date) or grant the Borrower an indulgence, the Lender will not be deemed to have waived those rights and will not be prevented from insisting upon its strict rights at a later date.</p>
                                        <p>b.The Lender reserves the right to transfer or assign its rights and obligations under this Agreement (including its obligation to lend money to the Borrower or the amount owed under this Agreement) to another person. The Lender will only tell the Borrower if such a transfer causes the arrangements for the administration of this Agreement to change.</p>
                                        <p>c.The Lender reserves the right to destroy all cheques (including post-dated) at the expiration of the loan or on payment in advance of installment by the Borrower.</p>
                                        <p>d.Any refund made to the Borrower for duplicate payment may attract a refund processing fee.</p>
                                        <p>e.The Lender reserves the right to review, verify and screen all details, including but not limited to the loan amount applied for by the Borrower and the Lender is not bound to grant the exact loan amount applied for by the Borrower.</p>
                                        <p>f.The Borrower agrees to bring to the notice of the Lender about any change in registered office Address or any other change.</p>
                                        <p>g.The Borrower agrees to provide a Corporate Guarantor whose duty is to confirm the Borrower’s existence and credibility.</p>
                                        <p>h.Borrower that submit fake or fraudulent documentation shall be reported to appropriate regulatory bodies, for prosecution and/or any other penalties as the regulatory body deems fit.</p>                                       
                                        <p>i.Borrower’s  repayment instrument (cheque) will be presented for repayment without further recourse to the Borrower, in event that the direct debit mandate executed by the Borrower does not pick the repayment on repayment due dates.</p>
                                        <p>j.The Borrower also authorize MyEazzi Solution Limited to present the repayment instrument issued by the Borrower (in favour of MyEazzi Solution Limited) for the repayment of the Loan as and when due until the Loan has been fully liquidated and if, for any reason whatsoever, the Borrower’s account is not funded at the time of presentation, the Borrower’s shall be criminally liable under the Dishonored Cheques (Offences) Act, CAP D1, LFN 2004.</p>
                                        <p>k.The Lender shall present the Borrower’s repayment instrument (Cheque) on repayment due dates without recourse to the Borrower and the Lender shall not be held liable for charges incurred on any return instrument.</p>
                                        <p>l.The Borrower hereby acknowledges and concedes that the Lender’s books and accounts shall be evidence of the sum due or which the Borrower is bound to pay in respect of the credit.</p>
                                        <p>m.The invalidity of any part of this offer of credit facility [“offer letter”] will not and shall not be deemed to affect the validity of any other part. In the event that any provision or clause of this offer letter is held to be invalid, the parties agree that the remaining provisions shall be deemed to be in full force and effect as if they had been executed by both parties subsequent to the expungement of the invalid provision; and If at any time any term or provision in this Offer letter shall be held to be illegal, invalid or unenforceable, in whole or in part, under any rule of law or enactment or by judicial pronouncement, such term or provision or part shall to that extent be deemed not to form part of this Offer letter, but the enforceability of the remainder of this Offer letter shall not be affected.</p>
                                        <p>n.This offer letter shall constitute the entire offer letter between the parties. Any prior understanding or representation of any kind preceding the date of this offer letter shall not be binding on either party except to the extent incorporated in this offer letter; and it is hereby expressly agreed by parties to this offer letter that no Party has entered into this Offer letter under any form of duress or in reliance upon any representation, warranty, indemnity, covenant or undertaking of any other Party which is not expressly set out in this Offer letter. WHEREBY IT IS HEREBY EXPRESSLY AND MUTUALLY AGREED THAT THE “COLLATERAL EVALUATION”, Borrower’s Means of Identification, Borrower’s passport photograph and all documents submitted to the Lender by the Borrower and accepted by the Lender for the purpose of approving this loan form part of this agreement.</p>
                                        <p>o.Any modification of this offer letter or additional obligation assumed by either party in connection with this offer letter shall be binding only if evidenced in writing signed and sealed by each party or an authorized representative of each party.</p>   
                                        <p>p.This offer letter may be executed in any number of counterparts, each of which shall be deemed to be an original, but all of which together shall constitute but one and the same instrument</p>
                                        <p class="font-weight-bold">****This offer is subject to a satisfactory credit report and further verification checks in event that your application is unsuccessful, your documents shall be returned to you.</p>    
                                    </mdb-modal-body>
                                    <mdb-modal-footer>
                                        <mdb-btn color="info" @click="showModal12a = false">Done</mdb-btn>      
                                    </mdb-modal-footer>
                                </mdb-modal>  

                    <div class="row d-flex justify-content-between row2 borde">
                        <div class="div3">
                            <div class="input-group mr-2  ml-3 mt-2 mt-md-5">
                                <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                    <!-- <input type="text"  @click="prev_page" class="btn btn-green" value="prev"> -->
                                    <button  @click="prev_page" class="btn btn-green">prev</button>
                                </ValidationProvider> 
                            </div>
                        </div>
                        <div class="div3">
                            <div class="input-group mt-2  mr-3 mt-md-5" style="margin:right">
                                <ValidationProvider name="id" rules=""  v-slot="{errors }">
                                        <mdb-btn type="submit" :disabled='isCheckedd' class="btn-green" style="font-size:15px; border-radius:3px">Submit <span v-if="isLoading"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span></mdb-btn>
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
import{mdbNavbar,mdbInput,  mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbNumericInput, mdbJumbotron, mdbContainer,mdbRow, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue';
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
    name:'guarantor',
    components:{
    mdbNavbar,
    mdbBtn,
    mdbNavItem, 
    mdbNavbarNav,
    mdbNavbarToggler, 
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbJumbotron,
    mdbInput,
    mdbNumericInput,
    mdbModal, 
    mdbModalHeader, 
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter,
    ValidationObserver,
    ValidationProvider,
    Datepicker
    },
    
    data () {
        return {
            selected:'',
            isValid:false,
            isInvalid:false,
            checked:'',
            isCheckedd:true,
            showModal12a: false,
            isLoading:false
        }
    }, 
    methods: {
        prev_page () {
            this.$router.go(-1)
        },
        add () {
            this.$store.dispatch('increment')
            },
        minus () {
            this.$store.dispatch('decrement')
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
            this.$store.commit('setSupportingDocs', e.target.result)
            console.log(reader.result);;
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
            this.$store.commit('setOtherDocs', e.target.result)
            console.log(reader.result);;
            }
            reader.readAsDataURL(file)
        },
        isChecked () {
            if (this.checked=='') {
            //failed
                this.isInvalid=true;
                this.isCheckedd=true; 
                this.isValid=false

            }

            else if (this.checked!='')  {

                this.isValid=true
                this.isInvalid=false;
                this.isCheckedd=false
            }
        },
        postFinance () {
                this.isLoading = true
                this.$store.dispatch('postFinance')
                .then(_ => this.isLoading = false)
                .catch(_ => this.isLoading = false)
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
         customFormatter(date) {
            return moment(date).format('MMMM Do YYYY');
        },
  },

  computed : {
        otherDocs () {
            return this.$store.getters.otherDocs
        },
        supportingDocs () {
            return this.$store.getters.supportingDocs
        },
        isSuccess () {
            return this.$store.state.isSuccess
        },
        isError () {
            return this.$store.state.isError
        },
        errorMsg () {
            return this.$store.state.errorMsg
        },
        collateralType : {
            get () {
                    return this.$store.getters.collateralType
                },
            set (value) {
                    this.$store.dispatch('updateCollateralType', value )
                }
        },
        collateralDescription : {
                get () {
                    return this.$store.getters.collateralDescription
                },
                set (value) {
                    this.$store.dispatch('updateCollateralDescription', value )
                }
        },
        contractAccount : {
            get () {
                return this.$store.getters.contractAccount
            },
            set (value) {
                this.$store.dispatch('updateContractAccount', value)
            }
        },
        jointAccount : {
            get () {
                return  this.$store.getters.jointAccount
            },
            set (value) {
                this.$store.dispatch('updateJointAccount', value)
            }
        },
         itemDate : {
            get () {
               return this.$store.getters.contractDate
            },
            set (value) {
               this.$store.dispatch('updateContractDate', value )
            }
       },
        itemDate1 : {
            get () {
               return this.$store.getters.contractDate1
            },
            set (value) {
               this.$store.dispatch('updateContractDate1', value )
            }
       },
        collateralTitle : {
            get () {
               return this.$store.getters.collateralTitle
            },
            set (value) {
               this.$store.dispatch('updateCollateralTitle', value )
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
        this.$store.dispatch('updateIsActive5')
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

 ::placeholder {
     font-size:13px
 }

 input:focus,.textarea:focus, select:focus {
     border-color: rgba(75, 148, 8, 0.8);
     box-shadow: 0 0 5px rgb(75, 148, 8, 1);
     outline: 0 none;
 }

 

 @media (max-width:767px){
   .small-screen-pp{
       margin-top: 15px !important
    }
 }


@media (min-width:767px){
   input {
    
      border:1px solid gainsboro;
      border-radius: 5px
 }

 .small-screen-id {
     width:20vw!important
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
     width:75vw
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
     width:70vw
 }
}

 

</style>