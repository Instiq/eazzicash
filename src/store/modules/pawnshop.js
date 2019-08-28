const state = {
  //state for pawndetails
  isActive1P: null,
  isActive2P: null,
  isActive3P: null,
  //state for pawnprecheck
  itemCategory: null,
  pawnAmount: 10000,
  pawnMra: 0,
  //state for pawninfo
  itemCondition: "",
  pawnTenor: 30,
  releaseYear: "",
  itemDescription: "",
  //state for ownership
  itemDate: "",
  purchaseLocation: "",
  isSworn: ""
};

const mutations = {
  //Muattions for pawndetails
  setIsActive1P(state, payload) {
    state.isActive1P = payload;
  },
  setIsActive2P(state, payload) {
    state.isActive2P = payload;
  },
  setIsActive3P(state, payload) {
    state.isActive3P = payload;
  },
  // Mutaions for pawnprecheck
  setItemCategory(state, payload) {
    state.itemCategory = payload;
  },
  setPawnAmount(state, payload) {
    state.pawnAmount = payload;
  },
  setPawnMra(state, payload) {
    state.pawnMra = payload;
  },
  // Mutaions for pawninfo
  setItemCondition(state, payload) {
    state.itemCondition = payload;
  },
  setPawnTenor(state, payload) {
    state.pawnTenor = payload;
  },
  setItemDescription(state, payload) {
    state.itemDescription = payload;
  },
  setReleaseYear(state, payload) {
    state.releaseYear = payload;
  },
  // Mutaions for ownership
  setItemDate(state, payload) {
    state.itemDate = payload;
  },
  setPurchaseLocation(state, payload) {
    state.purchaseLocation = payload;
  },
  setIsSworn(state, payload) {
    state.isSworn = payload;
  }
};
const actions = {
  //Actions for pawndetails
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
  },
  //Actions for pawnprecheck
  updatePawnAmount({ commit }, value) {
    commit("setPawnAmount", value);
  },
  updateItemCategory({ commit }, value) {
    commit("setItemCategory", value);
  },
  updatePawnMra({ commit }, value) {
    commit("setPawnMra", value);
  },
  //Actions for pawninfo
  updateItemDescription({ commit }, value) {
    commit("setItemDescription", value);
  },
  updateReleaseYear({ commit }, value) {
    commit("setReleaseYear", value);
  },
  updateItemCondition({ commit }, value) {
    commit("setItemCondition", value);
  },
  //Actions for ownership
  updatePurchaseLocation({ commit }, value) {
    commit("setPurchaseLocation", value);
  },
  updateItemDate({ commit }, value) {
    commit("setItemDate", value);
  },
  updateIsSworn({ commit }, value) {
    commit("setIsSworn", value);
  }
};
const getters = {
  //getters for pawndetails
  isActive1P: state => {
    return state.isActive1P;
  },
  isActive2P: state => {
    return state.isActive2P;
  },
  isActive3P: state => {
    return state.isActive3P;
  },
  //getters for pawnprecheck
  pawnAmount: state => {
    return state.pawnAmount;
  },
  itemCategory: state => {
    return state.itemCategory;
  },
  pawnMra: state => {
    return state.pawnMra;
  },
  //getters for pawninfo
  itemDescription: state => {
    return state.itemDescription;
  },
  itemCondition: state => {
    return state.itemCondition;
  },
  pawnTenor: state => {
    return state.pawnTenor;
  },
  releaseYear: state => {
    return state.releaseYear;
  },
  //getters for pawninfo
  itemDate: state => {
    return state.itemDate;
  },
  purchaseLocation: state => {
    return state.purchaseLocation;
  },
  isSworn: state => {
    return state.isSworn;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
