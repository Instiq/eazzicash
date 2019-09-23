import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import investment from "./modules/investment";
import loan from "./modules/loan";
import pawnshop from "./modules/pawnshop";
import finance from "./modules/finance";
import signup from "./modules/signup";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url : 'https://still-bastion-19162.herokuapp.com/api',
    name:"",
    token:"",
    email:"",
    //state for userId and all user activity for one user start
    userId:"",
    userEntitiesOne:"",
     //state for userId and all user activity for one user End
    //state to get all Useractivity for all users by admin
    userEntitiesAll:"",
    //state to get the details of a particular user by admin
    userDetails :{},
    isTokenExpired:false,
    emailVerificationToken : "",
    isAuthenticated:false,
    isAdmin:false,
    isEmailRegistered : false,
    isEmailorPasswordCorrect : false,
    loading:false,
    //state for loanToken, loanId and guarantorid
    loanToken:"",
    guarantorId:"",
    loanId:"",
    // //state to get one Loan/finance detail for one user
    // loanDetailsOne:""
  },

  plugins: [createPersistedState({
   paths : ['name', 'isAuthenticated', 'isAdmin', 'token', 'emailVerificationToken', 'email', 'loanToken', 'guarantorId', 'loanId', 'userId', 'userEntitiesOne', 'userEntitiesAll', 'userDetails']
  })],

  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setIsEmailRegistered(state, payload) {
      state.isEmailRegistered = payload;
    },
    setIsEmailorPasswordCorrect(state, payload) {
      state.isEmailorPasswordCorrect = payload;
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setName (state, payload) {
      state.name = payload
    },
    //mutations for userId and all user activity for one user start
    setUserId (state, payload) {
      state.userId = payload
    },
    setUserEntitiesOne (state, payload) {
      state.userEntitiesOne = payload
    },
    //mutations for userId and all user activity for one user End

    // mutations to get all user activities for all user;
    setUserEntitiesAll (state, payload) {
      state.userEntitiesAll = payload
    },

     // mutations to get details of a particular user by admin;
     setUserDetails (state, payload) {
      state.userDetails = payload
    },

    setEmailVerificationToken(state, payload) {
      state.emailVerificationToken = payload
    },
    setIsTokenExpired (state, payload) {
      state.isTokenExpired = payload
    },
    setEmail (state, payload) {
      state.email=payload
    },
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload
    },
    setIsAdmin(state, payload) {
      state.isAdmin= payload
    },
    //mutation for loanToken, loanId and guarantorId
    setLoanToken (state, payload) {
      state.loanToken = payload
    },
    setGuarantorId (state, payload) {
      state.guarantorId = payload
    },
    setLoanId (state, payload) {
      state.loanId = payload
    },
    
    // //mutation to get one Loan/Finance detail for one user
    // setLoanDetailsOne (state, payload) {
    //   state.loanDetailsOne = payload
    // }

  },
  actions: {
   //Signup
   //${context.state.api_url}/users
    async userSignUp(context, {email, password, firstName, lastName,state,country,phoneNumber,address }) {
      await axios({
          method: "post",
          url: `${context.state.api_url}/users`,
          data: {
            email,
            password,
            firstName,
            lastName,
            state,
            country,
            phoneNumber,
            address
          }
        })
        .then(({data})=>{
         // console.log(data);
          context.commit('setName', `${data.firstName} ${data.lastName}`);
          context.commit('setLoading', false);
          context.commit('setIsAuthenticated', true);
          context.commit('setEmail', data.email)
          context.commit('setUserId', data._id)
          router.push('/verifyEmail?path=signup');
        })
        .catch(({response}) => {
         // console.log(response.data);
          if (response.data.msg=="User already registered.") {
            context.commit('setIsEmailRegistered', true);
            context.commit('setLoading', false)
          }
          
        }) 
     },
     //SignIn 
    
     //${state.api_url}/auth/login
      async userSignIn({commit,state}, {email, password}) {
         await axios({
            method: "post",
            url: `${state.api_url}/auth/login`,
            data: {
              email,
              password,
            }
          })
          .then(({data}) => {
            console.log(data);
            //check if user is verified
            if (!data.isVerified) {
              commit('setEmail', data.email)
              router.push('/verifyEmail?path=signin')
              return;
            }
            //check if user is an admin
            if (data.isAdmin) {
              commit('setLoading', false)
              commit('setIsAuthenticated', false);
              commit('setIsAdmin', true)
              commit('setName', `${data.firstName} ${data.lastName}`);
              commit('setToken', data.token);
              commit('setEmail', data.email);
              commit('setUserId', data._id)
              // alert('welcome admin')
              router.push('/adminProfile')
              return;
            }
           // console.log(data);
            commit('setLoading', false)
            commit('setName', `${data.firstName} ${data.lastName}`) ;
            commit('setToken', data.token);
            commit('setIsAuthenticated', true);
            commit('setIsAdmin', false)
            commit('setEmail', data.email)
            commit('setUserId', data._id)
            router.push('/profile/dashboard'); 
          })
          .catch(({response}) => {
            //console.log(response.data);
            if (response.data.msg=="Invalid email or password.") {
              commit('setIsEmailorPasswordCorrect', true);
              commit('setLoading', false)
            }
          }) 
        },

       //SignOut
       userSignOut ({commit, state})  {
        router.push('/signin');
        commit('setToken', '');
        commit('setIsAuthenticated', false);
        commit('setIsAdmin', false)
        commit('setName', '');
        commit('setEmail', '')
        commit('setEmailVerificationToken', '');
        commit('setUserEntitiesOne', '');
        commit('setGuarantorId', ''),
        commit('setLoanId', '')
        commit('setLoanToken', '');
        commit('setUserId', '')
        console.log(state.token);
        
       },
      
       //postLoan
      async postLoan ({commit, state, rootState}) {

      //guarantors
      let guarantors = [
        {
          title: rootState.loan.title,
          firstName: rootState.loan.firstname,
          lastName: rootState.loan.lastname,
          phoneNumber:rootState.loan.phone,
          email:rootState.loan.email,
          address:rootState.loan.address
        }
      ];

      //check if second guarantors is supplied and add to the guarantors array if supplied
      if(rootState.loan.title1 !== "" && rootState.loan.address2 !== "" &&rootState.loan.firstName1 !== "" && rootState.loan.lastName1 !== "" && rootState.loan.phone1 !== "" && rootState.loan.email1 !== ""  ) {
        guarantors.push({
          title: rootState.loan.title1,
          firstName: rootState.loan.firstname1,
          lastName: rootState.loan.lastname1,
          phoneNumber:rootState.loan.phone1,
          email:rootState.loan.email1,
          address:rootState.loan.address2
        })
      }
      //  `${state.api_url}/loans`
        await axios({
          method: "post",
          url: `${state.api_url}/loans`,
          data: {
            loanAmount : rootState.loan.principal,
            loanTenor : rootState.loan.tenor,
            indebtedness: rootState.loan.isPicked,
            listIndebtedness:rootState.loan.loanIndebtedness,
            employmentType: rootState.loan.employmentType,
            companyName:rootState.loan.companyName,
            loanPurpose:rootState.loan.loanPurpose,
            id:rootState.loan.loanId,
            otherComments:rootState.loan.otherComments,
            signature:rootState.loan.loanSign,
            guarantors
          },
          headers : {
            'x-auth-token': state.token
          }
        })
        .then(({data})=>{
          console.log(data);
          commit('setLoading', false)
          router.push('/profile/loan/loandetails/success');
  
        })
        .catch(({response}) => {
          commit('setLoading', false)
          if (response.data=='Invalid Token') {
            alert('Session Expired. kindly Re-Login');
            router.push('/signin');
            return;
          }
          console.error(response.data);
          
        }) 

       },

    //Get Loan for particular User
    //  //  `${state.api_url}/loans/${state.loanId}`
    // async getLoanDetailsOne ({commit, state}) {
    //     await axios({
    //       url :  `${state.api_url}/loans/${state.loanId}`,
    //       method :'get'
    //     })
    //     .then(({data}) => {
    //       commit('setLoanDetailsOne', data)
    //     })
    // } , 

    //Post Finance
    async postFinance ({commit, state, rootState}) {
      //guarantors
      let guarantors = [
        {
          title: rootState.loan.title,
          firstName: rootState.loan.firstname,
          lastName: rootState.loan.lastname,
          phoneNumber:rootState.loan.phone,
          email:rootState.loan.email,
          address:rootState.loan.address
        }
      ];
      //check if second guarantors is supplied and add to the guarantors array if supplied
      if(rootState.loan.title1 !== "" && rootState.loan.address2 !== "" &&rootState.loan.firstName1 !== "" && rootState.loan.lastName1 !== "" && rootState.loan.phone1 !== "" && rootState.loan.email1 !== ""  ) {
        guarantors.push({
          title: rootState.loan.title1,
          firstName: rootState.loan.firstname1,
          lastName: rootState.loan.lastname1,
          phoneNumber:rootState.loan.phone1,
          email:rootState.loan.email1,
          address:rootState.loan.address2
        })
      }
     //${state.api_url}/finance
      await axios({
        method:'post',
        url:`${state.api_url}/finance`,
        data :{
          financeAmount: rootState.loan.principal,
          financeTenor:rootState.loan.tenor,
          financeType:rootState.finance.financeType,
          indebtedness:rootState.loan.isPicked,
          listIndebtedness:rootState.loan.loanIndebtedness,
          employmentType:rootState.loan.employmentType,
          companyName:rootState.loan.companyName,
          financePurpose:rootState.loan.loanPurpose,
          id:rootState.loan.loanId,
          otherComments:rootState.loan.otherComments,
          signature:rootState.loan.loanSign,
          guarantors,
          collateral: {
              collateralType:rootState.finance.collateralType,
              collateralDescription: rootState.finance.collateralDescription,
              jointReceivableAccount: rootState.finance.jointAccount,
              contractReceivableAccount: rootState.finance.contractAccount,
              supportingDocuments: rootState.finance.supportingDocs,
              otherDocuments :  rootState.finance.otherDocs
          },
      },
      headers : {
        'x-auth-token': state.token
      }
    })
      .then(({data})=>{
        console.log(data);
        commit('setLoading', false);
        router.push('/profile/finance/loandetails/success')
      })
      .catch (err=>{
        commit('setLoading', false)
        if (err.response.data=='Invalid Token') {
          alert('Session Expired. kindly Re-Login');
          router.push('/signin');
          return;
        }
        console.error(err.response.data);
        
      })
    },

    //Get Finance details for particular User
     //  `${state.api_url}/finance/${state.loanId}`
     async getFinanceDetailsOne ({commit, state}) {
      await axios({
        url :  `${state.api_url}/finance/${state.loanId}`,
        method :'get'
      })
      .then(({data}) => {
        console.log(data);
        commit('setLoanDetailsOne', data)
      })
  } , 
     
    //post Pawn
    //${state.api_url}/pawn
    async postPawn ({commit, state, rootState}) {
      await axios({
        method:'post',
        url:`${state.api_url}/pawn`,
        data :{
          pawnAmount: rootState.pawnshop.pawnAmount,
          pawnTenor:rootState.pawnshop.pawnTenor,
          itemReceipt:rootState.pawnshop.itemReceipt,
          itemCategory:rootState.pawnshop.itemCategory,
          itemDescription:rootState.pawnshop.itemDescription,
          itemCondition:rootState.pawnshop.itemCondition,
          itemPurchaseDate:rootState.pawnshop.itemDate,
          itemPurchaseLocation:rootState.pawnshop.purchaseLocation,
          itemReleaseYear:rootState.pawnshop.releaseYear,
          swornAffidavit:rootState.pawnshop.isSworn,
          signature:rootState.pawnshop.pawnSign
      },
      headers : {
        'x-auth-token': state.token
      }
    })
      .then(({data})=>{
        console.log(data);
        router.push("/profile/pawnshop/pawndetails/success");
        commit('setLoading', false)
      })
      .catch (err=>{

        commit('setLoading', false)
        if (err.response.data=='Invalid Token') {
          alert('Session Expired. kindly Re-Login');
          router.push('/signin');
          return;
        }
        console.error(err.response.data);
       
      })
    },

     //post Investment
     //${state.api_url}/investment
    async postInvestment ({commit, state, rootState}) {
      await axios({
        method:'post',
        url:`${state.api_url}/investment`,
        data :{
          investmentAmount: rootState.investment.investPrincipal,
          investmentTenor:rootState.investment.investTenor,
          incomeSource:rootState.investment.incomeSource,
          otherInformation:rootState.investment.otherInfo,
          paymentEvidence:rootState.investment.paymentEvidence,
          id:rootState.investment.investId,
          signature:rootState.investment.investSign,
          accountDetails : {
            Name:rootState.investment.accountName,
            Number:rootState.investment.accountNumber,
            Bank:rootState.investment.bankName,
          },
          nextOfKin : {
            Name:rootState.investment.nokName,
            Phone:rootState.investment.nokPhone,
            Address:rootState.investment.nokAddress,
            Relationship:rootState.investment.nokRelationship,
            State:rootState.investment.nokState
          }
      },
      headers : {
        'x-auth-token': state.token
      }
    })
      .then(({data})=>{
        console.log(data);
        router.push("/profile/investment/investdetails/success");
        commit('setLoading', false)
      })
      .catch (err=>{
        commit('setLoading', false)
        if (err.response.data=='Invalid Token') {
          alert('Session Expired. kindly Re-Login');
          router.push('/signin');
          return;
        }
        console.error(err.response.data);
        
      })
    },

    //update email verification status
    //${state.api_url}/users/verify
    async updateEmailVerification ({commit, state}) {
      await axios({
        method:'put',
        url:`${state.api_url}/users/verify/${state.emailVerificationToken}`,
      })
        .then(({data})=>{
          console.log(data);
          router.push('/emailVerified')
        })
        
        .catch (err=>{
          if (err.response.data == 'User already verified') {
            router.push('/emailVerified?path=verifyEmail');
            return
          }
          // if(err.response.data=='expired token') {
          //   commit('setIsTokenExpired', true)
          //   setTimeout (_ =>  router.push('/verifyEmail?path=getToken'), 4500);
          //   return
          // }
          if(err.response.data=='User does not exist') {
            // commit('setIsTokenExpired', true)
            router.push('/signup');
            return
          }

          console.error(err.response.data);
         
        })
      },

    // resend email verification link
    //${state.api_url}/users/resendEmailVerification
    async resendEmailVerification ({commit, state}) {
      await axios({
        method:'put',
        url:`${state.api_url}/users/resendEmailVerification/${state.email}`,
      })
        .then(({data})=>{
          console.log(data);
          router.push('/verifyEmail?path=resendEmail')
        })
        
        .catch (err=>{
          console.log(err.response.data);
          
          if (err.response.data == 'User already verified') {
            router.push('/emailVerified?path=verifyEmail');
            return
          }
          if (err.response.data == 'User not found') {
            alert('User not found')
            router.push('/signup')
          }
         
        })
      },

      //Approve Loan  Guarantor Status
      //${state.api_url}/loans/loanStatusApprove/${state.loanToken}/${state.guarantorId}
      async approveLoanGuarantor ({commit, state}) {
        await axios({
          method:'put',
          url:`${state.api_url}/loans/loanStatusApprove/${state.loanToken}/${state.guarantorId}`,
        })
          .then(({data})=>{
            console.log(data);
            router.push('/loanApprovalStatus?path=approveLoan')
          })
          
          .catch (err=>{
            if (err.response.data=="expired token") {
              return router.push('/expiredToken')
            }

            if (err.response.data=='Loan request does not exist') {
              return router.push('/loanApprovalStatus?path=404')
            }

            console.error(err.response.data);
          })
        },

          //Approve Finance Guarantor Status
      //${state.api_url}/finance/financeStatusApprove/${state.loanToken}/${state.guarantorId}
      async approveFinanceGuarantor ({commit, state}) {
        await axios({
          method:'put',
          url:`${state.api_url}/finance/financeStatusApprove/${state.loanToken}/${state.guarantorId}`,
        })
          .then(({data})=>{
            console.log(data);
            router.push('/loanApprovalStatus?path=approveLoan')
          })
          
          .catch (err=>{
            if (err.response.data=="expired token") {
              return router.push('/expiredToken')
            }

            if (err.response.data=='Finance request does not exist') {
              return router.push('/loanApprovalStatus?path=404')
            }

            console.error(err.response.data);
          })
        },

      //Decline Loan  Guarantor Status
      //${state.api_url}/loans/loanStatusDecline/${state.loanToken}/${state.guarantorId}
      async declineLoanGuarantor ({commit, state}) {
        await axios({
          method:'put',
          url:`${state.api_url}/loans/loanStatusDecline/${state.loanToken}/${state.guarantorId}`,
        })
          .then(({data})=>{
            console.log(data);
            router.push('/loanApprovalStatus?path=declineLoan')
          })
          
          .catch (err=>{
            if (err.response.data=="expired token") {
              return router.push('/expiredToken')
            }

            if (err.response.data=='Loan request does not exist') {
              return router.push('/loanApprovalStatus?path=404')
            }

            console.error(err.response.data);
          })
        },

      //Decline Finance  Guarantor Status
      //${state.api_url}/finance/financeStatusDecline/${state.loanToken}/${state.guarantorId}
      async declineFinanceGuarantor ({commit, state}) {
        await axios({
          method:'put',
          url:`${state.api_url}/finance/financeStatusDecline/${state.loanToken}/${state.guarantorId}`,
        })
          .then(({data})=>{
            console.log(data);
            router.push('/loanApprovalStatus?path=declineLoan')
          })
          
          .catch (err=>{
            if (err.response.data=="expired token") {
              return router.push('/expiredToken')
            }

            if (err.response.data=='Finance request does not exist') {
              return router.push('/loanApprovalStatus?path=404')
            }

            console.error(err.response.data);
          })
        },

        //get all loans, pawn, investments and finance for a particular user
        async getAllEntitiesOne ({commit, state}) {
          await axios({
            method:'get',
            url:`${state.api_url}/entities/${state.userId}`
          })
          .then(({data}) => {
            commit('setUserEntitiesOne', data)
            
          })
        },

         //get all loans, pawn, investments and finance for all users
         async getAllEntitiesAll ({commit, state}) {
          await axios({
            method:'get',
            url:`${state.api_url}/entities`
          })
          .then(({data}) => {
            commit('setUserEntitiesAll', data)
            
          })
        },

        // update Loan amount and tenor by admin
        async updateLoanAdmin ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/loans/adminUpdateLoan/${state.userDetails._id}`,
            data :{
              loanAmount:rootState.loan.principal,
              loanTenor:rootState.loan.tenor
            },
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('updated succesfully')
            router.push('/adminProfile/approvals/loan')
            
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

         // update Loan status to approved by admin
         async updateLoanStatusApprove ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/loans/adminUpdateLoanStatusApprove/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('approved succesfully') ;
            router.push('/adminProfile/approvals/loan')
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

         // update Loan status to declined by admin
         async updateLoanStatusDecline ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/loans/adminUpdateLoanStatusDecline/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('declined succesfully')   
            router.push('/adminProfile/approvals/loan')
            
          })
          .catch (err => {;
            console.log(err.response.data);
            
          })
        },

        //delete Loan request by admin
         async deleteLoan ({commit, state, rootState}, ) {
          await axios({
            method:'delete',
            url:`${state.api_url}/loans/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            commit('setLoading', false)
            alert('deleted succesfully')
          })
          .catch (err => {
            commit('setLoading', false);
            console.log(err.response.data); 
          })
        },

         // update investment amount and tenor by admin
        async updateInvestAdmin ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/investment/adminUpdateInvestment/${state.userDetails._id}`,
            data :{
              investmentAmount:rootState.investment.investPrincipal,
              investmentTenor:rootState.investment.investTenor
            },
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('updated succesfully')
            router.push('/adminProfile/approvals/investment')
            
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

         // update investment status to approved by admin
         async updateInvestStatusApprove ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/investment/adminUpdateInvestmentStatusApprove/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('approved succesfully') ;
            router.push('/adminProfile/approvals/investment')
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

        // update investment status to declined by admin
        async updateInvestStatusDecline({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/investment/adminUpdateInvestmentStatusDecline/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('declined succesfully') ;
            router.push('/adminProfile/approvals/investment')
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },
         
        //delete Investment request by admin
        async deleteInvestment ({commit, state, rootState}, ) {
          await axios({
            method:'delete',
            url:`${state.api_url}/investment/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            commit('setLoading', false)
            alert('deleted succesfully')
          })
          .catch (err => {
            commit('setLoading', false);
            console.log(err.response.data); 
          })
        },

         // update finance amount and tenor by admin
         async updateFinanceAdmin ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/finance/adminUpdateFinance/${state.userDetails._id}`,
            data :{
              financeAmount:rootState.loan.principal,
              financeTenor:rootState.loan.tenor
            },
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('updated succesfully')
            router.push('/adminProfile/approvals/finance')
            
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

         // update finance status to approved by admin
         async updateFinanceStatusApprove ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/finance/adminUpdateFinanceStatusApprove/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('approved succesfully') ;
            router.push('/adminProfile/approvals/finance')
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

         // update finance status to declined by admin
         async updateFinanceStatusDecline ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/finance/adminUpdateFinanceStatusDecline/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('declined succesfully')   
            router.push('/adminProfile/approvals/finance')
            
          })
          .catch (err => {;
            console.log(err.response.data);
            
          })
        },

        //delete finance request by admin
         async deleteFinance({commit, state, rootState}, ) {
          await axios({
            method:'delete',
            url:`${state.api_url}/finance/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            commit('setLoading', false)
            alert('deleted succesfully')
          })
          .catch (err => {
            commit('setLoading', false);
            console.log(err.response.data); 
          })
        },
        
         // update pawn amount and tenor by admin
         async updatePawnAdmin ({commit, state, rootState}) {
          await axios({
            method:'put',
            url:`${state.api_url}/pawn/adminUpdatePawn/${state.userDetails._id}`,
            data :{
              pawnAmount:rootState.pawnshop.pawnAmount,
            },
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            alert('updated succesfully')
            router.push('/adminProfile/approvals/pawn')
            
          })
          .catch (err => {
            console.log(err.response.data);
            
          })
        },

          // update Pawn status to approved by admin
          async updatePawnStatusApprove ({commit, state, rootState}) {
            await axios({
              method:'put',
              url:`${state.api_url}/pawn/adminUpdatePawnStatusApprove/${state.userDetails._id}`,
              headers : {
                'x-auth-token': state.token
              }
            })
            .then(({data}) => {
              alert('approved succesfully') ;
              router.push('/adminProfile/approvals/pawn')
            })
            .catch (err => {
              console.log(err.response.data);
              
            })
          },

          // update Pawn status to approved by admin
          async updatePawnStatusDecline ({commit, state, rootState}) {
            await axios({
              method:'put',
              url:`${state.api_url}/pawn/adminUpdatePawnStatusDecline/${state.userDetails._id}`,
              headers : {
                'x-auth-token': state.token
              }
            })
            .then(({data}) => {
              alert('declined succesfully') ;
              router.push('/adminProfile/approvals/pawn')
            })
            .catch (err => {
              console.log(err.response.data);
              
            })
          },

          //delete finance request by admin
         async deletePawn({commit, state, rootState}, ) {
          await axios({
            method:'delete',
            url:`${state.api_url}/pawn/${state.userDetails._id}`,
            headers : {
              'x-auth-token': state.token
            }
          })
          .then(({data}) => {
            commit('setLoading', false)
            alert('deleted succesfully')
          })
          .catch (err => {
            commit('setLoading', false);
            console.log(err.response.data); 
          })
        },
        
  


    
  },

  getters : {
      name : state => {
        return state.name
      }
  },
  modules: {
    investment,
    loan,
    pawnshop,
    finance,
    signup
  }
});
