const state = {
  //state for precheck
  isActive1I: null,
  isActive2I: null,
  isActive3I: null,
  isActive4I: null,
  //state for investinfo
  investTenor: 1,
  investPrincipal: 10000,
  investMra: 0
};

const mutations = {
  //Muattions for precehck
  setIsActive1I(state, payload) {
    state.isActive1I = payload;
  },
  setIsActive2I(state, payload) {
    state.isActive2I = payload;
  },
  setIsActive3I(state, payload) {
    state.isActive3I = payload;
  },
  setIsActive4I(state, payload) {
    state.isActive4I = payload;
  },
  // Mutations for investinfo
  setInvestTenor(state, payload) {
    state.investTenor = payload;
  },
  setInvestPrincipal(state, payload) {
    state.investPrincipal = payload;
  },
  setInvestMra(state, payload) {
    state.investMra = payload;
  }
};
const actions = {
  //Actions for precheck
  updateIsActive1I({ commit }) {
    commit("setIsActive1I", true);
    commit("setIsActive2I", false);
    commit("setIsActive3I", false);
    commit("setIsActive4I", false);
  },
  updateIsActive2I({ commit }) {
    commit("setIsActive1I", false);
    commit("setIsActive2I", true);
    commit("setIsActive3I", false);
    commit("setIsActive4I", false);
  },
  updateIsActive3I({ commit }) {
    commit("setIsActive1I", false);
    commit("setIsActive2I", false);
    commit("setIsActive3I", true);
    commit("setIsActive4I", false);
  },
  updateIsActive4I({ commit }) {
    commit("setIsActive1I", false);
    commit("setIsActive2I", false);
    commit("setIsActive3I", false);
    commit("setIsActive4I", true);
  },
  //Actions for investinfo
  updateInvestPrincipal({ commit }, value) {
    commit("setInvestPrincipal", value);
  },
  updateInvestMra({ commit }, value) {
    commit("setInvestMra", value);
  },
  updateInvestTenor({ commit }, value) {
    commit("setInvestTenor", value);
  }
};
const getters = {
  //getters for precheck
  isActive1I: state => {
    return state.isActive1I;
  },
  isActive2I: state => {
    return state.isActive2I;
  },
  isActive3I: state => {
    return state.isActive3I;
  },
  isActive4I: state => {
    return state.isActive4I;
  },
  //getters for investinfo
  investMra: state => {
    return state.investMra;
  },
  investPrincipal: state => {
    return state.investPrincipal;
  },
  investTenor: state => {
    return state.investTenor;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
