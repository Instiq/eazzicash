const state = {
  //state for Apply
  isActive1: null,
  isActive2: null,
  isActive3: null,
  isActive4: null,
  isActive5: null,
  //state for loandetails
  tenor: 1,
  principal: 100000,
  mra: 0,
  isPicked: "",
  loanIndebtedness: "",
  loanPurpose: "",
  //state for workinfo
  employmentType: "",
  companyName: "",
  otherComments: "",
  //state for guarantor
  title: "",
  title1: "",
  firstname: "",
  firstname1: "",
  lastname: "",
  lastname1: "",
  phone: "",
  phone1: "",
  email: "",
  email1: "",
  address: "",
  address2: ""
};
const mutations = {
  //Mutations for Apply
  setIsActive1(state, payload) {
    state.isActive1 = payload;
  },
  setIsActive2(state, payload) {
    state.isActive2 = payload;
  },
  setIsActive3(state, payload) {
    state.isActive3 = payload;
  },
  setIsActive4(state, payload) {
    state.isActive4 = payload;
  },
  setIsActive5(state, payload) {
    state.isActive5 = payload;
  },
  //Mutations for Loandetails
  addTenor(state, payload) {
    state.tenor = state.tenor + payload;
  },
  subtractTenor(state, payload) {
    state.tenor = state.tenor - payload;
  },
  setPrincipal(state, payload) {
    state.principal = payload;
  },
  setMra(state, payload) {
    state.mra = payload;
  },
  setTenor(state, payload) {
    state.tenor = payload;
  },
  setIsPicked(state, payload) {
    state.isPicked = payload;
  },
  setLoanIndebtedness(state, payload) {
    state.loanIndebtedness = payload;
  },
  setLoanPurpose(state, payload) {
    state.loanPurpose = payload;
  },
  //Mutations for workinfo
  setEmploymentType(state, payload) {
    state.employmentType = payload;
  },
  setCompanyName(state, payload) {
    state.companyName = payload;
  },
  setOtherComments(state, payload) {
    state.otherComments = payload;
  },
  //Mutations for guarantor
  setTitle(state, payload) {
    state.title = payload;
  },
  setTitle1(state, payload) {
    state.title1 = payload;
  },
  setFirstname(state, payload) {
    state.firstname = payload;
  },
  setFirstname1(state, payload) {
    state.firstname1 = payload;
  },
  setLastname(state, payload) {
    state.lastname = payload;
  },
  setLastname1(state, payload) {
    state.lastname1 = payload;
  },
  setPhone(state, payload) {
    state.phone = payload;
  },
  setPhone1(state, payload) {
    state.phone1 = payload;
  },
  setEmail(state, payload) {
    state.email = payload;
  },
  setEmail1(state, payload) {
    state.email1 = payload;
  },
  setAddress(state, payload) {
    state.address = payload;
  },
  setAddress2(state, payload) {
    state.address2 = payload;
  }
};

const actions = {
  //Actions for Apply
  updateIsActive1({ commit }) {
    commit("setIsActive1", true);
    commit("setIsActive2", false);
    commit("setIsActive3", false);
    commit("setIsActive4", false);
    commit("setIsActive5", false);
  },
  updateIsActive2({ commit }) {
    commit("setIsActive1", false);
    commit("setIsActive2", true);
    commit("setIsActive3", false);
    commit("setIsActive4", false);
    commit("setIsActive5", false);
  },
  updateIsActive3({ commit }) {
    commit("setIsActive1", false);
    commit("setIsActive2", false);
    commit("setIsActive3", true);
    commit("setIsActive4", false);
    commit("setIsActive5", false);
  },
  updateIsActive4({ commit }) {
    commit("setIsActive1", false);
    commit("setIsActive2", false);
    commit("setIsActive3", false);
    commit("setIsActive4", true);
    commit("setIsActive5", false);
  },
  updateIsActive5({ commit }) {
    commit("setIsActive1", false);
    commit("setIsActive2", false);
    commit("setIsActive3", false);
    commit("setIsActive4", false);
    commit("setIsActive5", true);
  },
  //Actions for Loandetails
  increment({ commit, state }) {
    if (state.tenor >= 6) {
      commit("addTenor", 0);
    } else {
      commit("addTenor", 1);
    }
  },
  decrement({ commit, state }) {
    if (state.tenor <= 6 && state.tenor > 1) {
      commit("subtractTenor", 1);
    }
  },
  updatePrincipal({ commit }, value) {
    commit("setPrincipal", value);
  },
  updateMra({ commit }, value) {
    commit("setMra", value);
  },
  updateTenor({ commit }, value) {
    commit("setTenor", value);
  },
  updateIsPicked({ commit }, value) {
    commit("setIsPicked", value);
  },
  updateLoanIndebtedness({ commit }, value) {
    commit("setLoanIndebtedness", value);
  },
  updateLoanPurpose({ commit }, value) {
    commit("setLoanPurpose", value);
  },
  //Actions for Workinfo
  updateEmploymentType({ commit }, value) {
    commit("setEmploymentType", value);
  },
  updateCompanyName({ commit }, value) {
    commit("setCompanyName", value);
  },
  updateOtherComments({ commit }, value) {
    commit("setOtherComments", value);
  },
  //Actions for guarantor
  updateTitle({ commit }, value) {
    commit("setTitle", value);
  },
  updateTitle1({ commit }, value) {
    commit("setTitle1", value);
  },
  updateFirstName({ commit }, value) {
    commit("setFirstname", value);
  },
  updateFirstName1({ commit }, value) {
    commit("setFirstname1", value);
  },
  updateLastname({ commit }, value) {
    commit("setLastname", value);
  },
  updateLastname1({ commit }, value) {
    commit("setLastname1", value);
  },
  updatePhone({ commit }, value) {
    commit("setPhone", value);
  },
  updatePhone1({ commit }, value) {
    commit("setPhone1", value);
  },
  updateEmail({ commit }, value) {
    commit("setEmail", value);
  },
  updateEmail1({ commit }, value) {
    commit("setEmail1", value);
  },
  updateAddress({ commit }, value) {
    commit("setAddress", value);
  },
  updateAddress2({ commit }, value) {
    commit("setAddress2", value);
  }
};
const getters = {
  // getters for Apply
  isActive1: state => {
    return state.isActive1;
  },
  isActive2: state => {
    return state.isActive2;
  },
  isActive3: state => {
    return state.isActive3;
  },
  isActive4: state => {
    return state.isActive4;
  },
  isActive5: state => {
    return state.isActive5;
  },
  // getters for Loandetails
  tenor: state => {
    return state.tenor;
  },
  principal: state => {
    return state.principal;
  },
  mra: state => {
    return state.mra;
  },
  isPicked: state => {
    return state.isPicked;
  },
  loanIndebtedness: state => {
    return state.loanIndebtedness;
  },
  loanPurpose: state => {
    return state.loanPurpose;
  },
  // getters for Workinfo
  employmentType: state => {
    return state.employmentType;
  },
  companyName: state => {
    return state.companyName;
  },
  otherComments: state => {
    return state.otherComments;
  },
  // getters for Guarantor
  title: state => {
    return state.title;
  },
  title1: state => {
    return state.title1;
  },
  firstname: state => {
    return state.firstname;
  },
  firstname1: state => {
    return state.firstname1;
  },
  lastname: state => {
    return state.lastname;
  },
  lastname1: state => {
    return state.lastname1;
  },
  phone: state => {
    return state.phone;
  },
  phone1: state => {
    return state.phone1;
  },
  email: state => {
    return state.email;
  },
  email1: state => {
    return state.email1;
  },
  address: state => {
    return state.address;
  },
  address2: state => {
    return state.address2;
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
