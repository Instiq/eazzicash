const state = {
  collateralType: "",
  collateralDescription: "",
  contractAccount: "",
  jointAccount: "",
  supportingDocs:"",
  otherDocs:"",
  //state for finance type
  financeType:''
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
  },
  setSupportingDocs(state, payload) {
    state.supportingDocs = payload;
  },
  setOtherDocs(state, payload) {
    state.otherDocs = payload;
  },
  //mutations for finance type
  setFinanceType(state, payload) {
    state.financeType = payload;
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
  },
  //actions for finance type
  updateFinanceType({ commit }, value) {
    commit("setFinanceType", value);
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
  },
  supportingDocs: state => {
    return state.supportingDocs;
  },
  otherDocs: state => {
    return state.otherDocs;
  },
  //getters for finance type
  financeType: state => {
    return state.financeType;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
