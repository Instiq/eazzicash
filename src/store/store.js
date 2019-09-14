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
    emailVerificationToken : "",
    isAuthenticated:false,
    isEmailRegistered : false,
    isEmailorPasswordCorrect : false,
    loading:false,
    //state for loanToken, loanId and guarantorid
    loanToken:"",
    guarantorId:"",
    loanId:"",
    //state to get one Loan/finance detail for one user
    loanDetailsOne:""
  },

  plugins: [createPersistedState({
   paths : ['name', 'isAuthenticated', 'token', 'emailVerificationToken', 'email', 'loanToken', 'guarantorId', 'loanId']
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
    setEmailVerificationToken(state, payload) {
      state.emailVerificationToken = payload
    },
    setEmail (state, payload) {
      state.email=payload
    },
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload
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
    //mutation to get one Loan/Finance detail for one user
    setLoanDetailsOne (state, payload) {
      state.loanDetailsOne = payload
    }

  },
  actions: {
   //Signup
   //${context.state.api_url}/users
    async userSignUp(context, {email, password, firstName, lastName,state,country,phoneNumber,address }) {
      await axios({
          method: "post",
          url: `http://localhost:3000/api/users/`,
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
          console.log(data);
          context.commit('setName', `${data.firstName} ${data.lastName}`);
          context.commit('setToken', data.token);
          context.commit('setLoading', false);
          context.commit('setIsAuthenticated', true);
          context.commit('setEmail', data.email)
          router.push('/verifyEmail?path=signup');
        })
        .catch(({response}) => {
          console.log(response.data);
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
            url: `http://localhost:3000/api/auth/login`,
            data: {
              email,
              password,
            }
          })
          .then(({data}) => {
            console.log(data);
            commit('setLoading', false)
            commit('setName', `${data.firstName} ${data.lastName}`) ;
            commit('setToken', data.token);
            commit('setIsAuthenticated', true);
            commit('setEmail', data.email)
            router.push('/profile/dashboard'); 
          })
          .catch(({response}) => {
            console.log(response.data);
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
        commit('setName', '');
        commit('setEmail', '')
        commit('setUsetEmailVerificationTokenid', '');
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
          url: `http://localhost:3000/api/loans/`,
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
          console.error(response.data);
          commit('setLoading', false)
        }) 

       },

    //Get Loan for particular User
     //  `${state.api_url}/loans/${state.loanId}`
    async getLoanDetailsOne ({commit, state}) {
        await axios({
          url :  `http://localhost:3000/api/loans/${state.loanId}`,
          method :'get'
        })
        .then(({data}) => {
          commit('setLoanDetailsOne', data)
        })
    } , 

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
        url:`http://localhost:3000/api/finance/`,
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
        router.push('/profile/loan/loandetails/success')
      })
      .catch (err=>{
        console.error(err.response.data);
        commit('setLoading', false)
      })
    },

    //Get Finance details for particular User
     //  `${state.api_url}/finance/${state.loanId}`
     async getFinanceDetailsOne ({commit, state}) {
      await axios({
        url :  `http://localhost:3000/api/finance/${state.loanId}`,
        method :'get'
      })
      .then(({data}) => {
        console.log(data);
        commit('setLoanDetailsOne', data)
      })
  } , 
     
    //post Pawn
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
        console.error(err.response.data);
        commit('setLoading', false)
      })
    },

     //post Investment
    async postInvestment ({commit, state, rootState}) {
      await axios({
        method:'post',
        url:`${state.api_url}/investment`,
        data :{
          investmentAmount: rootState.investment.investPrincipal,
          investmentTenor:rootState.investment.investTenor,
          otherInformation:rootState.investment.otherInfo,
          paymentEvidence:rootState.investment.paymentEvidence,
          id:rootState.investment.investId,
          signature:rootState.investment.investSign,
          accountDetails : {
            name:rootState.investment.accountName,
            number:rootState.investment.accountNumber,
            bank:rootState.investment.bankName,
          },
          nextOfKin : {
            name:rootState.investment.nokName,
            phone:rootState.investment.nokPhone,
            address:rootState.investment.nokAddress,
            relationship:rootState.investment.nokRelationship,
            state:rootState.investment.nokState
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
        console.error(err.response.data);
        commit('setLoading', false)
      })
    },

    //update email verification status
    //${state.api_url}/users/verify
    async updateEmailVerification ({commit, state}) {
      await axios({
        method:'put',
        url:`http://localhost:3000/api/users/verify/${state.emailVerificationToken}`,
      })
        .then(({data})=>{
          console.log(data);
          router.push('/emailVerified')
        })
        
        .catch (err=>{
          console.error(err.response.data);
          setTimeout (_ =>  router.push('/verifyEmail?path=getToken'), 4500)
        })
      },

    // resend email verification link
    //${state.api_url}/users/resendEmailVerification
    async resendEmailVerification ({commit, state}) {
      await axios({
        method:'post',
        url:`http://localhost:3000/api/users/resendEmailVerification/${state.email}`,
      })
        .then(({data})=>{
          console.log(data);
          router.push('/verifyEmail')
        })
        
        .catch (err=>{
          console.error(err.response.data);
          router.push('/emailVerified?path=verifyEmail')
        })
      },

      //Approve Loan  Guarantor Status
      //${state.api_url}/loans/loanStatusApprove/${state.loanToken}/${state.guarantorId}
      async approveLoanGuarantor ({commit, state}) {
        await axios({
          method:'put',
          url:`http://localhost:3000/api/loans/loanStatusApprove/${state.loanToken}/${state.guarantorId}`,
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
          url:`http://localhost:3000/api/finance/financeStatusApprove/${state.loanToken}/${state.guarantorId}`,
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
          url:`http://localhost:3000/api/loans/loanStatusDecline/${state.loanToken}/${state.guarantorId}`,
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
          url:`http://localhost:3000/api/finance/financeStatusDecline/${state.loanToken}/${state.guarantorId}`,
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