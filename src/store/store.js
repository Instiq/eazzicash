import Vue from "vue";
import Vuex from "vuex";
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
    isAuthenticated:false,
    isEmailRegistered : false,
    isEmailorPasswordCorrect : false,
    loading:false,
  },
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
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload
    },

  },
  actions: {
   //Signup
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
          console.log(data);
          router.push('/profile/dashboard');
          context.commit('setName', `${data.firstName} ${data.lastName}`);
          context.commit('setToken', data.token)
        })
        .catch(({response}) => {
          console.log(response.data);
          if (response.data.msg=="User already registered.") {
            context.commit('setIsEmailRegistered', true)
          }
          
        }) 
      },
     //SignIn 
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
            commit('setLoading', false)
            commit('setName', `${data.firstName} ${data.lastName}`) ;
            commit('setToken', data.token);
            commit('setIsAuthenticated', true)
            router.push('/profile/dashboard');
            console.log(state.token);
            
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
        router.push('/');
        commit('setToken', '');
        commit('setIsAuthenticated', false)
        console.log(state.token);
        
       }
      
    
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
