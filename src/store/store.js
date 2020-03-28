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
    //http://localhost:3000/api
    ////////https://still-bastion-19162.herokuapp.com/api
    //https://eazzi-server.herokuapp.com/api
    api_url: 'https://eazzi-server.herokuapp.com/api',
    name: "",
    userFirstname: '',
    userLastname: '',
    token: "",
    email: "",
    userPhone: '',
    //state for userId and all user activity for one user start
    userId: "",
    userEntitiesOne: "",
    //state for userId and all user activity for one user End
    //state to get all Useractivity for all users by admin
    userEntitiesAll: "",
    //state to get the details of a particular user by admin
    userDetails: {},
    //state to get all registered users admin
    users: '',
    isTokenExpired: false,
    emailVerificationToken: "",
    isAuthenticated: false,
    isAdmin: false,
    isEmailRegistered: false,
    isEmailorPasswordCorrect: false,
    //state for loanToken, loanId and guarantorid
    loanToken: "",
    guarantorId: "",
    loanId: "",
    //state to get one Loan/finance detail for one user
    loanDetailsOne: "",
    //state to show error message on post of loan, finance, investment, pawn and update profile
    isError: false,
    errorMsg: "Something failed",
    //state to show success message on put update profile
    isSuccess: false,
    successMsg: "",
    //state to get user profile
    userProfile: {}
  },


  plugins: [createPersistedState({
    paths: ['name', 'userFirstname', 'userLastname', 'users', 'isAuthenticated', 'isAdmin', 'token', 'emailVerificationToken', 'email', 'userPhone', 'loanToken', 'guarantorId', 'loanId', 'userId', 'userEntitiesOne', 'userEntitiesAll', 'userProfile', 'userDetails']
  })],

  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setIsEmailRegistered(state, payload) {
      state.isEmailRegistered = payload;
    },
    setIsEmailorPasswordCorrect(state, payload) {
      state.isEmailorPasswordCorrect = payload;
    },
    setName(state, payload) {
      state.name = payload
    },
    setUserFirstname(state, payload) {
      state.userFirstname = payload
    },
    setUserLastname(state, payload) {
      state.userLastname = payload
    },
    //mutations for userId and all user activity for one user start
    setUserId(state, payload) {
      state.userId = payload
    },
    setUserEntitiesOne(state, payload) {
      state.userEntitiesOne = payload
    },
    //mutations for userId and all user activity for one user End

    // mutations to get all user activities for all user;
    setUserEntitiesAll(state, payload) {
      state.userEntitiesAll = payload
    },

    // mutations to get details of a particular user by admin;
    setUserDetails(state, payload) {
      state.userDetails = payload
    },
    // mutations to get all registered users admin;
    setUsers(state, payload) {
      state.users = payload
    },

    setEmailVerificationToken(state, payload) {
      state.emailVerificationToken = payload
    },
    setIsTokenExpired(state, payload) {
      state.isTokenExpired = payload
    },
    setEmail(state, payload) {
      state.email = payload
    },
    setUserPhone(state, payload) {
      state.userPhone = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload
    },
    setIsAdmin(state, payload) {
      state.isAdmin = payload
    },
    //mutation for loanToken, loanId and guarantorId
    setLoanToken(state, payload) {
      state.loanToken = payload
    },
    setGuarantorId(state, payload) {
      state.guarantorId = payload
    },
    setLoanId(state, payload) {
      state.loanId = payload
    },

    //mutation to get one Loan/Finance detail for one user
    setLoanDetailsOne(state, payload) {
      state.loanDetailsOne = payload
    },

    //mutation to show error on post of loan, investment, finance or pawn and update profile
    setIsError(state, payload) {
      state.isError = payload
    },

    setErrorMsg(state, payload) {
      state.errorMsg = payload
    },

    //mutation to show success message on update user profile
    setIsSuccess(state, payload) {
      state.isSuccess = payload
    },
    setSuccessMsg(state, payload) {
      state.successMsg = payload
    },

    //mutation to get user profile
    setUserProfile(state, payload) {
      state.userProfile = payload
    }

  },
  actions: {
    //Signup
    //${context.state.api_url}/users
    async userSignUp(context, { email, password, firstName, lastName, phoneNumber }) {
      await axios({
        method: "post",
        url: `${context.state.api_url}/users`,
        data: {
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
        }
      })
        .then(({ data }) => {
          // console.log(data);
          context.commit('setName', `${data.firstName} ${data.lastName}`);
          context.commit('setIsAuthenticated', true);
          context.commit('setEmail', data.email)
          context.commit('setUserId', data._id)
          router.push('/verifyEmail?path=signup');
        })
        .catch(({ response }) => {
          console.log(response.data);
          context.commit('setIsError', true)
          if (response.data.msg == "User already registered.") {
            context.commit('setErrorMsg', response.data.msg);
          }

        })
    },
    //SignIn 

    //${state.api_url}/auth/login
    async userSignIn({ commit, state }, { email, password }) {
      await axios({
        method: "post",
        url: `${state.api_url}/auth/login`,
        data: {
          email,
          password,
        }
      })
        .then(({ data }) => {
          console.log(data);
          //check if user is verified
          if (!data.isVerified) {
            commit('setEmail', data.email)
            router.push('/verifyEmail?path=signin')
            return;
          }
          //check if user is an admin
          if (data.isAdmin) {
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
          // console.log(data)
          commit('setName', `${data.firstName} ${data.lastName}`);
          commit('setUserFirstname', data.firstName);
          commit('setUserLastname', data.lastName);
          commit('setToken', data.token);
          commit('setIsAuthenticated', true);
          commit('setIsAdmin', false)
          commit('setEmail', data.email);
          commit('setUserPhone', data.phoneNumber);
          commit('setUserId', data._id)
          router.push('/profile/dashboard');
        })
        .catch(({ response }) => {
          //console.log(response.data);
          if (response.data.msg == "Invalid email or password.") {
            commit('setIsEmailorPasswordCorrect', true);
          }
        })
    },

    //SignOut
    userSignOut({ commit, state }) {
      router.push('/signin');
      commit('setToken', '');
      commit('setIsAuthenticated', false);
      commit('setIsAdmin', false)
      commit('setName', '');
      commit('setEmail', '');
      commit('setUserPhone', '');
      commit('setUserDetails', '');
      commit('setEmailVerificationToken', '');
      commit('setUserEntitiesOne', '');
      commit('setUserEntitiesAll', '');
      commit('setGuarantorId', ''),
        commit('setLoanId', '')
      commit('setLoanToken', '');
      commit('setUserId', '')
      // console.log(state.token);

    },

    //get User Profile for one User

    async getUserProfile({ commit, state }) {
      await axios({
        method: 'get',
        url: `${state.api_url}/users/me`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setUserProfile', data)
        })
        .catch(err => {
          console.error(err);

        })
    },

    //update user Profile
    async updateUserProfile({ commit, state }, { firstName, lastName, phoneNumber, address, email, Name, Bank, Number, Type }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/users/me`,
        data: {
          firstName,
          lastName,
          phoneNumber,
          email,
          address,
          accountDetails: {
            Name,
            Bank,
            Number,
            Type
          },
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(_ => {
          commit('setIsSuccess', true);
        })
        .catch(err => {
          console.error(err.response.data);
          commit('setIsError', true);
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. kindly re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (err.response.data.code == 11000 && err.response.data.index == 0 && err.response.data.name == 'MongoError') {
            return commit('setErrorMsg', "email already exists. Update to another.");
          }
        })
    },

    //update user Profile (display picture)
    async updateUserProfile1({ commit, state }, { displayPicture }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/users/me`,
        data: {
          displayPicture,
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(_ => {
          commit('setIsSuccess', true);
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true);
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. kindly re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' && response.data[0].error.syscall == 'getaddrinfo') {
              return commit('setErrorMsg', 'please check your internet connection');
            }
          }
        })
    },

    //update user Profile (Signature)
    //  async updateUserProfile2 ({commit, state}, {signature}) {
    //   await axios({
    //     method:'put',
    //     url:`${state.api_url}/users/me`,
    //     data : {
    //        signature
    //     },
    //     headers : {
    //       'x-auth-token':state.token
    //     }
    //   })
    //   .then( _  => {
    //     commit('setIsSuccess', true);
    //   })
    //   .catch(({response}) => {
    //    console.error(response.data);
    //    commit('setIsError', true);
    //    if(response.data == 'Invalid Token') {
    //      commit('setErrorMsg', `${response.data}. kindly re-login`);
    //      setTimeout (_ => router.push('/signin'), 500);
    //      return;
    //    }
    //    if(response.data=='image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
    //    if(response.data=='image must not be more than 2mb') return commit('setErrorMsg', response.data)
    //    if(response.data[0]) {
    //       if(response.data[0].error.code=='ENOTFOUND' && response.data[0].error.syscall=='getaddrinfo') {
    //           return commit('setErrorMsg', 'please check your internet connection');
    //         }
    //    }

    //   })
    // },


    //send password reset Link
    async sendResetLink({ commit, state }, email) {
      await axios({
        method: 'post',
        url: `${state.api_url}/users/forgotPassword/${email}`
      })
        .then(_ => {
          router.push('/passwordResetLink?path=resetSuccess')
        })
        .catch(err => {
          console.error(err.response.data);
          if (err.response.data == 'User not found') {
            router.push('/passwordResetLink?path=wrongEmail');
            return;
          }
        })
    },

    //Reset Password
    async changePassword({ commit, state }, { token, password }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/users/resetPassword/${token}`,
        data: {
          password
        }
      })
        .then(_ => {
          router.push('/passwordResetLink?path=passwordChangeSuccess')
        })
        .catch(err => {
          console.error(err.response.data);
          if (err.response.data == 'User not found') {
            alert('User not Found');
            router.push('/signup');
            return;
          }
          if (err.response.data == 'expired token') {
            router.push('/changePassword?path=expiredPasswordResetToken')
            commit('setIsTokenExpired', true)
            setTimeout(_ => router.push('/passwordResetLink'), 5000);
            return;
          }
          alert(err.response.data)
        })
    },

    //get all users admin
    async getAllUsers({ commit, state }) {
      await axios({
        method: "get",
        url: `${state.api_url}/users/`
      })
        .then(({ data }) => {
          commit('setUsers', data)
        })
        .catch(err => console.log(err.response.data))
    },


    //postLoan
    async postLoan({ commit, state, rootState }) {

      //  `${state.api_url}/loans`
      await axios({
        method: "post",
        url: `${state.api_url}/loans`,
        data: {
          loanAmount: rootState.loan.principal,
          loanTenor: rootState.loan.tenor,
          loanPurpose: rootState.loan.loanPurpose,
          indebtedness: rootState.loan.isPicked,
          listIndebtedness: rootState.loan.loanIndebtedness,
          repaymentMode: rootState.loan.repaymentMode,
          accountNumber: rootState.investment.accountNumber,
          bankName: rootState.investment.bankName,
          workInformation: {
            employmentType: rootState.loan.employmentType,
            companyName: rootState.loan.companyName,
            companyAddress: rootState.loan.companyAddress,
            companyPhone: rootState.loan.phoneNumber,
            officialEmail: rootState.loan.officialEmail,
            position: rootState.loan.position,
            salaryDate: rootState.loan.salaryDate,
            quarterlyDate: rootState.loan.quarterlyDate,
            monthlyIncome: rootState.loan.monthlyIncome,
            annualIncome: rootState.loan.annualIncome,
            otherComments: rootState.loan.otherComments,
          },
          guarantors: [
            {
              title: rootState.loan.title,
              firstName: rootState.loan.firstname,
              lastName: rootState.loan.lastname,
              phoneNumber: rootState.loan.phone,
              email: rootState.loan.email,
              address: rootState.loan.address,
              idCard: rootState.loan.id,
              signature: rootState.loan.signature
            }
          ],
          personalDetails: {
            idCard: rootState.loan.loanId,
            signature: rootState.loan.loanSign,
            address: rootState.loan.currentAddress,
            busstop: rootState.loan.busstop,
            state: rootState.loan.statee,
            yearsInAddress: rootState.loan.yearsInAddress,
            meansOfId: rootState.loan.meansOfId,
            otherId: rootState.loan.otherId
          }
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/profile/loan/loandetails/success');

        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. kindly re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' && response.data[0].error.syscall == 'getaddrinfo') {
              commit('setIsError', true);
              commit('setErrorMsg', `please check your internet connection`);
              // setTimeout(()=>commit('setIsError', false), 2000)
            }
          }
        })

    },

    //  Get Loan for particular User to be seen by guarantor befor approving or declining
    //  `${state.api_url}/loans/${state.loanId}`
    async getLoanDetailsOne({ commit, state }) {
      await axios({
        url: `${state.api_url}/loans/${state.loanId}`,
        method: 'get'
      })
        .then(({ data }) => {
          commit('setLoanDetailsOne', data)
        })
    },

    //Resend confirmation email to guarantor by admin
    async resendConfirmationLoan({ commit, state }, data) {
      await axios({
        url: `${state.api_url}/loans/resendGuarantorConfirmation/${data}`,
        method: 'post',
        headers: {
          'x-auth-token': state.token
        }
      })

        .then(_ => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Resent Successfully!')
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          commit('setErrorMsg', response.data)
        })
    },

    //Post Finance
    async postFinance({ commit, state, rootState }) {

      //${state.api_url}/finance
      await axios({
        method: 'post',
        url: `${state.api_url}/finance`,
        data: {
          financeAmount: rootState.loan.principal,
          financeTenor: rootState.loan.tenor,
          financeType: rootState.finance.financeType,
          indebtedness: rootState.loan.isPicked,
          listIndebtedness: rootState.loan.loanIndebtedness,
          financePurpose: rootState.loan.loanPurpose,
          repaymentMode: rootState.loan.repaymentMode,
          accountNumber: rootState.investment.accountNumber,
          bankName: rootState.investment.bankName,
          workInformation: {
            employmentType: rootState.loan.employmentType,
            companyName: rootState.loan.companyName,
            companyAddress: rootState.loan.companyAddress,
            companyPhone: rootState.loan.phoneNumber,
            officialEmail: rootState.loan.officialEmail,
            position: rootState.loan.position,
            rcNumber: rootState.loan.rcNumber,
            salaryDate: rootState.loan.salaryDate,
            quarterlyDate: rootState.loan.quarterlyDate,
            monthlyIncome: rootState.loan.monthlyIncome,
            annualIncome: rootState.loan.annualIncome,
            otherComments: rootState.loan.otherComments,
          },
          guarantors: [
            {
              title: rootState.loan.title,
              firstName: rootState.loan.firstname,
              lastName: rootState.loan.lastname,
              phoneNumber: rootState.loan.phone,
              email: rootState.loan.email,
              address: rootState.loan.address,
              idCard: rootState.loan.id,
              signature: rootState.loan.signature
            }
          ],
          collateral: {
            collateralType: rootState.finance.collateralType,
            collateralTitle: rootState.finance.collateralTitle,
            collateralDescription: rootState.finance.collateralDescription,
            jointReceivableAccount: rootState.finance.jointAccount,
            contractReceivableAccount: rootState.finance.contractAccount,
            supportingDocuments: rootState.finance.supportingDocs,
            contractDuration: {
              from: rootState.finance.contractDate,
              to: rootState.finance.contractDate1
            },
            otherDocuments: rootState.finance.otherDocs
          },
          personalDetails: {
            idCard: rootState.loan.loanId,
            signature: rootState.loan.loanSign,
            address: rootState.loan.currentAddress,
            busstop: rootState.loan.busstop,
            state: rootState.loan.statee,
            yearsInAddress: rootState.loan.yearsInAddress,
            meansOfId: rootState.loan.meansOfId,
            otherId: rootState.loan.otherId
          }
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          router.push('/profile/finance/loandetails/success')
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. You will be redirected re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' || response.data[0].error.code == 'ECONNRESET' || response.data[0].error.syscall == 'getaddrinfo') {
              commit('setIsError', true);
              commit('setErrorMsg', `please check your internet connection`);
              // setTimeout(()=>commit('setIsError', false), 2000)
            }
          }
        })
    },

    //Get Finance details for particular User to be seen by guarantor before approving or declining
    //  `${state.api_url}/finance/${state.loanId}`
    async getFinanceDetailsOne({ commit, state }) {
      await axios({
        url: `${state.api_url}/finance/${state.loanId}`,
        method: 'get'
      })
        .then(({ data }) => {
          console.log(data);
          commit('setLoanDetailsOne', data)
        })
    },

    //Resend confirmation email to guarantor by admin
    async resendConfirmationFinance({ commit, state }, data) {
      await axios({
        url: `${state.api_url}/finance/resendGuarantorConfirmation/${data}`,
        method: 'post',
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(_ => {
          commit('setIsSuccess', true)
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          commit('setErrorMsg', response.data)
        })
    },

    //post Pawn
    //${state.api_url}/pawn
    async postPawn({ commit, state, rootState }) {
      await axios({
        method: 'post',
        url: `${state.api_url}/pawn`,
        data: {
          pawnAmount: rootState.pawnshop.pawnAmount,
          pawnTenor: rootState.pawnshop.pawnTenor,
          itemReceipt: rootState.pawnshop.itemReceipt,
          itemCategory: rootState.pawnshop.itemCategory,
          itemDescription: rootState.pawnshop.itemDescription,
          itemCondition: rootState.pawnshop.itemCondition,
          itemPurchaseDate: rootState.pawnshop.itemDate,
          itemPurchaseLocation: rootState.pawnshop.purchaseLocation,
          itemReleaseYear: rootState.pawnshop.releaseYear,
          swornAffidavit: rootState.pawnshop.isSworn,
          accountNumber: rootState.investment.accountNumber,
          bankName: rootState.investment.bankName,
          personalDetails: {
            idCard: rootState.loan.loanId,
            signature: rootState.loan.loanSign,
            address: rootState.loan.currentAddress,
            busstop: rootState.loan.busstop,
            state: rootState.loan.statee,
            yearsInAddress: rootState.loan.yearsInAddress,
            meansOfId: rootState.loan.meansOfId,
            otherId: rootState.loan.otherId
          }
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          //console.log(data);
          /// commit('setIsSuccess', true)
          router.push("/profile/pawnshop/pawndetails/success");
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. You will be redirected re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' || response.data[0].error.code == 'ECONNRESET' || response.data[0].error.syscall == 'getaddrinfo') {
              commit('setIsError', true);
              commit('setErrorMsg', `please check your internet connection`);
              // setTimeout(()=>commit('setIsError', false), 2000)
            }
          }
        })
    },

    //post Investment
    //${state.api_url}/investment
    async postInvestment({ commit, state, rootState }) {
      await axios({
        method: 'post',
        url: `${state.api_url}/investment`,
        data: {
          investmentAmount: rootState.investment.investPrincipal,
          investmentTenor: rootState.investment.investTenor,
          incomeSource: rootState.investment.incomeSource,
          otherInformation: rootState.investment.otherInfo,
          paymentEvidence: rootState.investment.paymentEvidence,
          personalDetails: {
            idCard: rootState.loan.loanId,
            signature: rootState.loan.loanSign,
            address: rootState.loan.currentAddress,
            state: rootState.loan.statee,
            occupation: rootState.loan.occupation,
            meansOfId: rootState.loan.meansOfId,
            otherId: rootState.loan.otherId
          },
          accountDetails: {
            Name: rootState.investment.accountName,
            Number: rootState.investment.accountNumber,
            Bank: rootState.investment.bankName,
          },
          nextOfKin: {
            Name: rootState.investment.nokName,
            Phone: rootState.investment.nokPhone,
            Address: rootState.investment.nokAddress,
            Relationship: rootState.investment.nokRelationship,
            State: rootState.investment.nokState
          }
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          console.log(data);
          router.push("/profile/investment/investdetails/success");
        })
        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. You will be redirected re-login`);
            setTimeout(_ => router.push('/signin'), 500);
            return;
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' || response.data[0].error.code == 'ECONNRESET' || response.data[0].error.syscall == 'getaddrinfo') {
              commit('setIsError', true);
              commit('setErrorMsg', `please check your internet connection`);
              // setTimeout(()=>commit('setIsError', false), 2000)
            }
          }

        })
    },

    //update email verification status
    //${state.api_url}/users/verify
    async updateEmailVerification({ commit, state }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/users/verify/${state.emailVerificationToken}`,
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/emailVerified')
        })

        .catch(err => {
          if (err.response.data == 'User already verified') {
            router.push('/emailVerified?path=verifyEmail');
            return
          }
          // if(err.response.data=='expired token') {
          //   commit('setIsTokenExpired', true)
          //   setTimeout (_ =>  router.push('/verifyEmail?path=getToken'), 4500);
          //   return
          // }
          if (err.response.data == 'User does not exist') {
            // commit('setIsTokenExpired', true)
            router.push('/signup');
            return
          }

          console.error(err.response.data);

        })
    },

    // resend email verification link
    //${state.api_url}/users/resendEmailVerification
    async resendEmailVerification({ commit, state }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/users/resendEmailVerification/${state.email}`,
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/verifyEmail?path=resendEmail')
        })

        .catch(err => {
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
    async approveLoanGuarantor({ commit, state }, { firstName, title, lastName, phoneNumber, email, address, idCard, signature }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/loans/loanStatusApprove/${state.loanToken}/${state.guarantorId}`,
        data: {
          guarantors: [
            {
              firstName,
              title,
              lastName,
              phoneNumber,
              email,
              address,
              idCard,
              signature
            }
          ]
        }
      })
        .then(_ => {
          router.push('/loanApprovalStatus?path=approveLoan')
        })

        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true);
          commit('setErrorMsg', response.data)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. kindly re-login`);
            setTimeout(_ => router.push('/signin'), 1000);
            return;
          }
          if (response.data == 'Loan request does not exist') {
            return router.push('/loanApprovalStatus?path=404')
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' && response.data[0].error.syscall == 'getaddrinfo') {
              return commit('setErrorMsg', 'please check your internet connection');
            }
          }
        })
    },

    //Approve Finance Guarantor Status
    //${state.api_url}/finance/financeStatusApprove/${state.loanToken}/${state.guarantorId}
    async approveFinanceGuarantor({ commit, state }, { firstName, title, lastName, phoneNumber, email, address, idCard, signature }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/finance/financeStatusApprove/${state.loanToken}/${state.guarantorId}`,
        data: {
          guarantors: [
            {
              firstName,
              title,
              lastName,
              phoneNumber,
              email,
              address,
              idCard,
              signature
            }
          ]
        }
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/loanApprovalStatus?path=approveLoan')
        })

        .catch(({ response }) => {
          console.error(response.data);
          commit('setIsError', true);
          commit('setErrorMsg', response.data)
          if (response.data == 'Invalid Token') {
            commit('setErrorMsg', `${response.data}. kindly re-login`);
            setTimeout(_ => router.push('/signin'), 1000);
            return;
          }
          if (response.data == 'Finance request does not exist') {
            return router.push('/loanApprovalStatus?path=404')
          }
          if (response.data == 'image must be a valid jpg or png image') return commit('setErrorMsg', response.data);
          if (response.data == 'image must not be more than 2mb') return commit('setErrorMsg', response.data)
          if (response.data[0]) {
            if (response.data[0].error.code == 'ENOTFOUND' && response.data[0].error.syscall == 'getaddrinfo') {
              return commit('setErrorMsg', 'please check your internet connection');
            }
          }
        })
    },

    //Decline Loan  Guarantor Status by he guarantor
    //${state.api_url}/loans/loanStatusDecline/${state.loanToken}/${state.guarantorId}
    async declineLoanGuarantor({ commit, state }, data) {
      await axios({
        method: 'put',
        url: `${state.api_url}/loans/loanStatusDecline/${state.loanToken}/${state.guarantorId}`,
        data: {
          guarantors: [
            {
              rejectionReason: data
            }
          ]
        }
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/loanApprovalStatus?path=declineLoan')
        })

        .catch(err => {
          if (err.response.data == "expired token") {
            return router.push('/expiredToken')
          }

          if (err.response.data == 'Loan request does not exist') {
            return router.push('/loanApprovalStatus?path=404')
          }

          console.error(err.response.data);
        })
    },

    //Decline Finance  Guarantor Status by the guarantor
    //${state.api_url}/finance/financeStatusDecline/${state.loanToken}/${state.guarantorId}
    async declineFinanceGuarantor({ commit, state }, data) {
      await axios({
        method: 'put',
        url: `${state.api_url}/finance/financeStatusDecline/${state.loanToken}/${state.guarantorId}`,
        data: {
          guarantors: [
            {
              rejectionReason: data
            }
          ]
        }
      })
        .then(_ => {
          router.push('/loanApprovalStatus?path=declineLoan')
        })

        .catch(err => {
          console.error(err.response.data);
          if (err.response.data == "expired token") {
            return router.push('/expiredToken')
          }

          if (err.response.data == 'Finance request does not exist') {
            return router.push('/loanApprovalStatus?path=404')
          }
        })
    },

    //get all loans, pawn, investments and finance data for a particular user
    async getAllEntitiesOne({ commit, state }) {
      await axios({
        method: 'get',
        url: `${state.api_url}/entities/${state.userId}`
      })
        .then(({ data }) => {
          commit('setUserEntitiesOne', data)

        })
        .catch(err => {
          console.error(err.response.data);

        })
    },

    //get all loans, pawn, investments and finance data for all users by admin
    async getAllEntitiesAll({ commit, state }) {
      await axios({
        method: 'get',
        url: `${state.api_url}/entities`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setUserEntitiesAll', data)

        })
        .catch(err => {
          console.error(err.response.data);

        })
    },

    // update Loan amount and tenor by admin
    async updateLoanAdmin({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/loans/adminUpdateLoan/${state.userDetails._id}`,
        data: {
          loanAmount: rootState.loan.principal,
          loanTenor: rootState.loan.tenor
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true)
          commit('setSuccessMsg', 'Updated Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/loan'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update Loan status to approved by admin
    async updateLoanStatusApprove({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/loans/adminUpdateLoanStatusApprove/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Approved Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/loan'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin');
            return
          }
          commit('setIsError', true);
          commit('setErrorMsg', err.response.data)

        })
    },

    // update Loan status to declined by admin
    async updateLoanStatusDecline({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/loans/adminUpdateLoanStatusDecline/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Declined Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/loan'), 1000)
        })
        .catch(err => {
          ;
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    //delete Loan request by admin
    async deleteLoan({ commit, state, rootState }, ) {
      await axios({
        method: 'delete',
        url: `${state.api_url}/loans/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setLoading', false)
          alert('deleted succesfully')
        })
        .catch(err => {
          commit('setLoading', false);
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },

    // update investment amount and tenor by admin
    async updateInvestAdmin({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/investment/adminUpdateInvestment/${state.userDetails._id}`,
        data: {
          investmentAmount: rootState.investment.investPrincipal,
          investmentTenor: rootState.investment.investTenor
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Updated Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/investment'), 1000)

        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update investment status to approved by admin
    async updateInvestStatusApprove({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/investment/adminUpdateInvestmentStatusApprove/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Approved Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/investment'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },

    // update investment status to declined by admin
    async updateInvestStatusDecline({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/investment/adminUpdateInvestmentStatusDecline/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Declined Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/investment'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },

    //delete Investment request by admin
    async deleteInvestment({ commit, state, rootState }, ) {
      await axios({
        method: 'delete',
        url: `${state.api_url}/investment/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setLoading', false)
          alert('deleted succesfully')
        })
        .catch(err => {
          commit('setLoading', false);
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },

    // update finance amount and tenor by admin
    async updateFinanceAdmin({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/finance/adminUpdateFinance/${state.userDetails._id}`,
        data: {
          financeAmount: rootState.loan.principal,
          financeTenor: rootState.loan.tenor
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Updated Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/finance'), 1000)

        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update finance status to approved by admin
    async updateFinanceStatusApprove({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/finance/adminUpdateFinanceStatusApprove/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Approved Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/finance'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update finance status to declined by admin
    async updateFinanceStatusDecline({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/finance/adminUpdateFinanceStatusDecline/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Declined Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/finance'), 1000)
        })
        .catch(err => {
          ;
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    //delete finance request by admin
    async deleteFinance({ commit, state, rootState }, ) {
      await axios({
        method: 'delete',
        url: `${state.api_url}/finance/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setLoading', false)
          alert('deleted succesfully')
        })
        .catch(err => {
          commit('setLoading', false);
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },

    // update pawn amount and tenor by admin
    async updatePawnAdmin({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/pawn/adminUpdatePawn/${state.userDetails._id}`,
        data: {
          pawnAmount: rootState.pawnshop.pawnAmount,
        },
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Updated Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/pawn'), 1000)

        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update Pawn status to approved by admin
    async updatePawnStatusApprove({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/pawn/adminUpdatePawnStatusApprove/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Approved Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/pawn'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    // update Pawn status to approved by admin
    async updatePawnStatusDecline({ commit, state, rootState }) {
      await axios({
        method: 'put',
        url: `${state.api_url}/pawn/adminUpdatePawnStatusDecline/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setIsSuccess', true);
          commit('setSuccessMsg', 'Declined Successfully!')
          setTimeout(_ => router.push('/adminProfile/approvals/pawn'), 1000)
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }

        })
    },

    //delete Pawn request by admin
    async deletePawn({ commit, state, rootState }, ) {
      await axios({
        method: 'delete',
        url: `${state.api_url}/pawn/${state.userDetails._id}`,
        headers: {
          'x-auth-token': state.token
        }
      })
        .then(({ data }) => {
          commit('setLoading', false)
          alert('deleted succesfully')
        })
        .catch(err => {
          commit('setLoading', false);
          console.log(err.response.data);
          if (err.response.data == 'Invalid Token') {
            alert('Token expired....kindly re-login');
            router.push('/signin')
          }
        })
    },
  },

  getters: {
    name: state => {
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
