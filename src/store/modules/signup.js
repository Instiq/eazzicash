const state = {
  userFirstname: "",
  userLastname: "",
  userName: "",
  userPhone: "",
  userAddress: "",
  userEmail: "",
  userCountry: "",
  userState: ""
};

const mutations = {
  setUserFirstname(state, payload) {
    state.userFirstname = payload;
  },
  setUserLastname(state, payload) {
    state.userLastname = payload;
  },
  setUserName(state, payload) {
    state.userName = payload;
  },
  setUserPhone(state, payload) {
    state.userPhone = payload;
  },
  setUserAddress(state, payload) {
    state.userAddress = payload;
  },
  setUserEmail(state, payload) {
    state.userEmail = payload;
  },
  setUserCountry(state, payload) {
    state.userCountry = payload;
  },
  setUserState(state, payload) {
    state.userState = payload;
  }
};

const actions = {
  updateUserFirstname({ commit }, value) {
    commit("setUserFirstname", value);
  },
  updateUserLastname({ commit }, value) {
    commit("setUserLastname", value);
  },
  updateUserName({ commit }, value) {
    commit("setUserName", value);
  },
  updateUserPhone({ commit }, value) {
    commit("setUserPhone", value);
  },
  updateUserAddress({ commit }, value) {
    commit("setUserAddress", value);
  },
  updateUserCountry({ commit }, value) {
    commit("setUserCountry", value);
  },
  updateUserState({ commit }, value) {
    commit("setUserState", value);
  },
  updateUserEmail({ commit }, value) {
    commit("setUserEmail", value);
  }
};

const getters = {
  userFirstname: state => {
    return state.userFirstname;
  },
  userLastname: state => {
    return state.userLastname;
  },
  userName: state => {
    return state.userName;
  },
  userAddress: state => {
    return state.userAddress;
  },
  userEmail: state => {
    return state.userEmail;
  },
  userCountry: state => {
    return state.userCountry;
  },
  userState: state => {
    return state.userState;
  },
  userPhone: state => {
    return state.userPhone;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
