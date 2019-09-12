const state = {
  //state for precheck
  isActive1I: null,
  isActive2I: null,
  isActive3I: null,
  isActive4I: null,
  //state for investinfo
  investTenor: 1,
  investPrincipal: 0.00,
  investMra: 0.00,
  incomeSource: "",
  otherInfo: "",
  paymentEvidence:"",
  investId:"",
  //state for settlement
  accountNumber: "",
  accountName: "",
  bankName: "",
  //state for Nextofkin
  nokName: "",
  nokAddress: "",
  nokRelationship: "",
  nokPhone: "",
  nokState: "",
  //state for signature
  investSign:""
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
  },
  setIncomeSource(state, payload) {
    state.incomeSource = payload;
  },
  setOtherInfo(state, payload) {
    state.otherInfo = payload;
  },
  setPaymentEvidence(state, payload) {
    state.paymentEvidence = payload;
  },
  setInvestId(state, payload) {
    state.investId= payload;
  },
  // Mutations for Settlement
  setAccountNumber(state, payload) {
    state.accountNumber = payload;
  },
  setAccountName(state, payload) {
    state.accountName = payload;
  },
  setBankName(state, payload) {
    state.bankName = payload;
  },
  // Mutations for NextofKin
  setNokName(state, payload) {
    state.nokName = payload;
  },
  setNokAddress(state, payload) {
    state.nokAddress = payload;
  },
  setNokRelationship(state, payload) {
    state.nokRelationship = payload;
  },
  setNokPhone(state, payload) {
    state.nokPhone = payload;
  },
  setNokState(state, payload) {
    state.nokState = payload;
  },
  // Mutations for signature
  setInvestSign(state, payload) {
    state.investSign = payload;
  },
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
  },
  updateIncomeSource({ commit }, value) {
    commit("setIncomeSource", value);
  },
  updateOtherInfo({ commit }, value) {
    commit("setOtherInfo", value);
  },
  //Actions for settlement
  updateAccountNumber({ commit }, value) {
    commit("setAccountNumber", value);
  },
  updateAccountName({ commit }, value) {
    commit("setAccountName", value);
  },
  updateBankName({ commit }, value) {
    commit("setBankName", value);
  },
  //Actions for NextofKin
  updateNokName({ commit }, value) {
    commit("setNokName", value);
  },
  updateNokAddress({ commit }, value) {
    commit("setNokAddress", value);
  },
  updateNokRelationship({ commit }, value) {
    commit("setNokRelationship", value);
  },
  updateNokPhone({ commit }, value) {
    commit("setNokPhone", value);
  },
  updateNokState({ commit }, value) {
    commit("setNokState", value);
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
  },
  incomeSource: state => {
    return state.incomeSource;
  },
  otherInfo: state => {
    return state.otherInfo;
  },
  paymentEvidence: state => {
    return state.paymentEvidence;
  },
  investId: state => {
    return state.investId;
  },

  //getters for settlement
  accountName: state => {
    return state.accountName;
  },
  accountNumber: state => {
    return state.accountNumber;
  },
  bankName: state => {
    return state.bankName;
  },
  //getters for NextofKin
  nokName: state => {
    return state.nokName;
  },
  nokAddress: state => {
    return state.nokAddress;
  },
  nokRelationship: state => {
    return state.nokRelationship;
  },
  nokPhone: state => {
    return state.nokPhone;
  },
  nokState: state => {
    return state.nokState;
  },
  //getters for signature
  investSign: state => {
    return state.investSign;
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
