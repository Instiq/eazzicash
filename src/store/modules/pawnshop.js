const state = {
  //state for precheck
  isActive1P: null,
  isActive2P: null,
  isActive3P: null
};

const mutations = {
  //Muattions for precehck
  setIsActive1P(state, payload) {
    state.isActive1P = payload;
  },
  setIsActive2P(state, payload) {
    state.isActive2P = payload;
  },
  setIsActive3P(state, payload) {
    state.isActive3P = payload;
  }
};
const actions = {
  //Actions for precheck
  updateIsActive1P({ commit }) {
    commit("setIsActive1P", true);
    commit("setIsActive2P", false);
    commit("setIsActive3P", false);
  },
  updateIsActive2P({ commit }) {
    commit("setIsActive1P", false);
    commit("setIsActive2P", true);
    commit("setIsActive3P", false);
  },
  updateIsActive3P({ commit }) {
    commit("setIsActive1P", false);
    commit("setIsActive2P", false);
    commit("setIsActive3P", true);
  }
};
const getters = {
  //getters for precheck
  isActive1P: state => {
    return state.isActive1P;
  },
  isActive2P: state => {
    return state.isActive2P;
  },
  isActive3P: state => {
    return state.isActive3P;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
