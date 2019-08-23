import Vue from "vue";
import Vuex from "vuex";
import investment from "./modules/investment";
import loan from "./modules/loan";
import pawnshop from "./modules/pawnshop";
import finance from "./modules/finance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    investment,
    loan,
    pawnshop,
    finance
  }
});
