

const state = {
  //state for Apply
  isActive1: null,
  isActive2: null,
  isActive3: null,
  isActive4: null,
  isActive5: null,
  //state for personal details
  currentAddress:"",
  busstop:"",
  yearsInAddress:"",
  occupation:"",
  statee:"",
  meansOfId:"",
  otherId:"",
  loanId : "",
  loanSign:'',

  //state for loandetails
  tenor: 1,
  principal: 0.00,
  mra: 0.00,
  isPicked: "",
  loanIndebtedness: "",
  loanPurpose: "",
  repaymentMode:"",

  //state for workinfo
  employmentType: "",
  companyName: "",
  otherComments: "",
  companyAddress:"",
  officialEmail: "",
  phoneNumber:"",
  rcNumber:"",
  position : "",
  monthlyIncome:"",
  annualIncome:"",
  salaryDate:"",
  quarterlyDate:"",

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
  address2: "",
  id:'',
  id1:'',
  signature:'',
  signature1:"",
 
  
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
  //Mutations for Personal details
  setCurrentAddress(state, payload) {
    state.currentAddress = payload;
  },
  setBusstop(state, payload) {
    state.busstop = payload;
  },
  setYearsInAddress(state, payload) {
    state.yearsInAddress = payload;
  },
  setOccupation(state, payload) {
    state.occupation = payload;
  },
  setState(state, payload) {
    state.statee = payload;
  },
  setMeansOfId(state, payload) {
    state.meansOfId = payload;
  },
  setOtherId(state, payload) {
    state.otherId = payload;
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
  setLoanId (state, payload) {
    state.loanId=payload
  },
  setRepaymentMode (state, payload) {
    state.repaymentMode=payload
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
  setCompanyAddress(state, payload) {
    state.companyAddress = payload;
  },
  setOfficialEmail(state, payload) {
    state.officialEmail = payload;
  },
  setPhoneNumber(state, payload) {
    state.phoneNumber = payload;
  },
  setRcNumber(state, payload) {
    state.rcNumber = payload;
  },
  setPosition(state, payload) {
    state.position = payload;
  },
  setSalaryDate(state, payload) {
    state.salaryDate = payload;
  },
  setQuarterlyDate(state, payload) {
    state.quarterlyDate = payload;
  },
  setMonthlyIncome(state, payload) {
    state.monthlyIncome = payload;
  },
  setAnnualIncome(state, payload) {
    state.annualIncome = payload;
  },

  //Mutations for guarantor
  setTitle(state, payload) {
    state.title = payload;
  },
  setFirstname(state, payload) {
    state.firstname = payload;
  },
  setLastname(state, payload) {
    state.lastname = payload;
  },
  setPhone(state, payload) {
    state.phone = payload;
  },
  setEmail2(state, payload) {
    state.email = payload;
  },
  setEmail1(state, payload) {
    state.email1 = payload;
  },
  setAddress(state, payload) {
    state.address = payload;
  },
  // setAddress2(state, payload) {
  //   state.address2 = payload;
  // },
  setId (state, payload) {
    state.id = payload
  },
  setSignature (state, payload) {
    state.signature = payload
  },

  //mutations for signature
  setLoanSign (state, payload) {
    state.loanSign=payload
  },

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
  //Actions for Personal details
  updateCurrentAddress({commit}, value) {
    commit('setCurrentAddress', value)
  },
  updateNearestBusstop({commit}, value) {
    commit('setBusstop', value)
  },
  updateYearsInAddress({commit}, value) {
    commit('setYearsInAddress', value)
  },
  updateOccupation({commit}, value) {
    commit('setOccupation', value)
  },
  updateState({commit}, value) {
    commit('setState', value)
  },
  updateMeansOfId({commit}, value) {
    commit('setMeansOfId', value)
  },
  updateOtherId({commit}, value) {
    commit('setOtherId', value)
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
  updateRepaymentMode({ commit }, value) {
    commit("setRepaymentMode", value);
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
  updateCompanyAddress({ commit }, value) {
    commit("setCompanyAddress", value);
  },
  updateOfficialEmail({ commit }, value) {
    commit("setOfficialEmail", value);
  },
  updatePhoneNumber({ commit }, value) {
    commit("setPhoneNumber", value);
  },
  updateRcNumber({ commit }, value) {
    commit("setRcNumber", value);
  },
  updatePosition({ commit }, value) {
    commit("setPosition", value);
  },
  updateSalaryDate({ commit }, value) {
    commit("setSalaryDate", value);
  },
  updateQuarterlyDate({ commit }, value) {
    commit("setQuarterlyDate", value);
  },
  updateMonthlyIncome({ commit }, value) {
    commit("setMonthlyIncome", value);
  },
  updateAnnualIncome({ commit }, value) {
    commit("setAnnualIncome", value);
  },

  //Actions for guarantor
  updateTitle({ commit }, value) {
    commit("setTitle", value);
  },
  updateFirstName({ commit }, value) {
    commit("setFirstname", value);
  },
  updateLastname({ commit }, value) {
    commit("setLastname", value);
  },
  updatePhone({ commit }, value) {
    commit("setPhone", value);
  },
  updateEmail({ commit }, value) {
    commit("setEmail2", value);
  },
  updateAddress({ commit }, value) {
    commit("setAddress", value);
  },
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
  //getetrs for Personal Details
  currentAddress: state => {
    return state.currentAddress;
  },
  yearsInAddress: state => {
    return state.yearsInAddress;
  },
  occupation: state => {
    return state.occupation;
  },
  busstop: state => {
    return state.busstop;
  },
  statee: state => {
    return state.statee;
  },
  meansOfId: state => {
    return state.meansOfId;
  },
  otherId: state => {
    return state.otherId;
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
  loanId: state => {
    return state.loanId;
  },
  repaymentMode: state => {
    return state.repaymentMode;
  },
  
  // getters for Workinfo
  employmentType: state => {
    return state.employmentType;
  },
  companyName: state => {
    return state.companyName;
  },
  companyAddress: state => {
    return state.companyAddress;
  },
  officialEmail: state => {
    return state.officialEmail;
  },
  phoneNumber: state => {
    return state.phoneNumber;
  },
  rcNumber: state => {
    return state.rcNumber;
  },
  otherComments: state => {
    return state.otherComments;
  },
  position: state => {
    return state.position;
  },
  salaryDate: state => {
    return state.salaryDate;
  },
  quarterlyDate: state => {
    return state.quarterlyDate;
  },
  monthlyIncome: state => {
    return state.monthlyIncome;
  },
  annualIncome: state => {
    return state.annualIncome;
  },
  // getters for Guarantor
  title: state => {
    return state.title;
  },
  // title1: state => {
  //   return state.title1;
  // },
  firstname: state => {
    return state.firstname;
  },
  // firstname1: state => {
  //   return state.firstname1;
  // },
  lastname: state => {
    return state.lastname;
  },
  // lastname1: state => {
  //   return state.lastname1;
  // },
  phone: state => {
    return state.phone;
  },
  // phone1: state => {
  //   return state.phone1;
  // },
  email: state => {
    return state.email;
  },
  // email1: state => {
  //   return state.email1;
  // },
  address: state => {
    return state.address;
  },
  // address2: state => {
  //   return state.address2;
  // },
  id : state => {
    return state.id
  },
  // id1 : state => {
  //   return state.id1
  // },
  signature : state => {
    return state.signature
  },
  // signature1 : state => {
  //   return state.signature1
  // },
  //getters for signature
  loanSign: state => {
    return state.loanSign;
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
