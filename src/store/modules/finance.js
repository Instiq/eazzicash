const state = {
  collateralType: "",
  collateralDescription: "",
  contractAccount: "",
  jointAccount: ""
};

const mutations = {
  setCollateralType(state, payload) {
    state.collateralType = payload;
  },
  setCollateralDescription(state, payload) {
    state.collateralDescription = payload;
  },
  setContractAccount(state, payload) {
    state.contractAccount = payload;
  },
  setJointAccount(state, payload) {
    state.jointAccount = payload;
  }
};

const actions = {
  updateCollateralType({ commit }, value) {
    commit("setCollateralType", value);
  },
  updateCollateralDescription({ commit }, value) {
    commit("setCollateralDescription", value);
  },
  updateContractAccount({ commit }, value) {
    commit("setContractAccount", value);
  },
  updateJointAccount({ commit }, value) {
    commit("setJointAccount", value);
  }
};

const getters = {
  collateralType: state => {
    return state.collateralType;
  },
  collateralDescription: state => {
    return state.collateralDescription;
  },
  jointAccount: state => {
    return state.jointAccount;
  },
  contractAccount: state => {
    return state.contractAccount;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
