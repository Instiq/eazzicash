import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";
import Home from "./views/Home.vue";
import about from "./views/about.vue";
import signin from "./views/signin.vue";
import signup from "./views/signup.vue";
import emailVerified from "./views/emailVerified.vue";
import verifyEmail from "./views/verifyEmail.vue";
import getToken from "./views/getToken.vue";
import expiredToken from "./views/expiredToken.vue";
import loanApprovalStatus from "./views/loanApprovalStatus.vue";
import declineLoan from "./views/declineLoan.vue";
import approveLoan from "./views/approveLoan.vue";
import approveFinance from "./views/approveFinance.vue";
import declineFinance from "./views/declineFinance.vue";
import passwordResetLink from "./views/forgotPassword/passwordResetLink.vue";
import changePassword from "./views/forgotPassword/changePassword.vue"
import profile from "./views/profile.vue";
import dashboard from "./components/dashboard.vue";
import userProfile from "./views/userProfile.vue";
//Loan routes
import apply from "./components/loan/apply.vue";
import loandetails from "./components/loan/loandetails.vue";
import personalLoan from "./components/loan/personalLoan.vue";
import loaninformation from "./components/loan/loaninformation.vue";
import workinfo from "./components/loan/workinfo.vue";
import guarantor from "./components/loan/guarantor.vue";
import thankyou from "./components/loan/thankyou.vue";
//Investment routes
import precheck from "./components/investment/precheck.vue";
import investdetails from "./components/investment/investdetails.vue";
import investinfo from "./components/investment/investinfo.vue";
import settlement from "./components/investment/settlement.vue";
import nextofkin from "./components/investment/nextofkin.vue";
//Pawn routes
import pawnPrecheck from "./components/pawnshop/pawnPrecheck.vue";
import pawninfo from "./components/pawnshop/pawninfo.vue";
import pawndetails from "./components/pawnshop/pawndetails.vue";
import ownership from "./components/pawnshop/ownership.vue";
//Finance routes
import finPrecheck from "./components/finance/finPrecheck.vue";
import findetails from "./components/finance/findetails.vue";
import fininfo from "./components/finance/fininfo.vue";
import collateral from "./components/finance/collateral.vue";
//Admin routes
import adminProfile from "./components/admin/adminProfile.vue";
import adminDashboard from "./components/admin/adminDashboard.vue";
import userManagement from "./components/admin/userManagement.vue";
import reports from "./components/admin/reports/reports.vue";
import loanReport from "./components/admin/reports/loanReport.vue";
import pawnReport from "./components/admin/reports/pawnReport.vue";
import financeReport from "./components/admin/reports/financeReport.vue";
import investmentReport from "./components/admin/reports/investmentReport.vue";
import approvals from "./components/admin/approvals/approvals.vue";
import loanApproval from "./components/admin/approvals/loanApproval.vue";
import investmentApproval from "./components/admin/approvals/investmentApproval.vue";
import financeApproval from "./components/admin/approvals/financeApproval.vue";
import pawnApproval from "./components/admin/approvals/pawnApproval.vue";
import userDetailsLoan from "./components/admin/approvals/userDetailsLoan.vue";
import userDetails from "./components/admin/approvals/userDetails.vue";
import userDetailsInvestment from "./components/admin/approvals/userDetailsInvestment.vue";
import userDetailsFinance from "./components/admin/approvals/userDetailsFinance.vue";
import userDetailsPawn from "./components/admin/approvals/userDetailsPawn.vue";

//error route **always the last**
import error from "./views/404.vue"

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/verifyEmail",
      name: "verifyEmail",
      component: verifyEmail
    },
    {
      path: "/getToken",
      name: "getToken",
      component: getToken,
    },
    {
      path: "/expiredToken",
      name: "expiredToken",
      component: expiredToken
    },
    {
      path: "/declineLoan",
      name: "declineLoan",
      component: declineLoan
    },
    {
      path: "/approveLoan",
      name: "approveLoan",
      component: approveLoan
    },
    {
      path: "/approveFinance",
      name: "approveFinance",
      component: approveFinance
    },
    {
      path: "/declineFinance",
      name: "declineFinance",
      component: declineFinance
    },
    {
      path: "/loanApprovalStatus",
      name: "loanApprovalStatus",
      component: loanApprovalStatus
    },
    {
      path: "/emailVerified",
      name: "emailVerified",
      component: emailVerified
    },
    {
      path: "/passwordResetLink",
      name: "passwordResetLink",
      component: passwordResetLink
    },
    {
      path: "/changePassword",
      name: "changePassword",
      component: changePassword
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
      meta: { authRequired: true },
      children: [
        {
          path: "/",
          redirect: "/profile/dashboard"
        },
        {
          path: "/profile/dashboard",
          name: "dashboard",
          component: dashboard
        },
        {
          path: "/profile_",
          name: "userProfile",
          component: userProfile
        },
        {
          path: "/profile/loan/apply", // Loan routes
          name: "loan",
          component: apply
        },
        {
          path: "/profile/loan/loandetails",
          component: loandetails,
          children: [
            {
              path: "/",
              name: "loan",
              redirect: "/profile/loan/loandetails/personal"
            },
            {
              path: "/profile/loan/loandetails/loaninformation",
              name: "loan",
              component: loaninformation
            },
            {
              path: "/profile/loan/loandetails/personal",
              name: "loan",
              component: personalLoan
            },
            {
              path: "/profile/loan/loandetails/workinfo",
              name: "loan",
              component: workinfo
            },
            {
              path: "/profile/loan/loandetails/guarantor",
              name: "loan",
              component: guarantor
            },
            // {
            //   path: "/profile/loan/loandetails/signature",
            //   name: "loan",
            //   component: signature
            // },
            {
              path: "/profile/loan/loandetails/success",
               name: "loan",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/investment/precheck", //Investment Route
          name: "investment",
          component: precheck
        },
        {
          path: "/profile/investment/investdetails",
          component: investdetails,
          children: [
            {
              path: "/",
              name: "investment",
              redirect: "/profile/investment/investdetails/personal"
            },
            {
              path: "/profile/investment/investdetails/personal",
              name: "investment",
              component: personalLoan
            },
            {
              path: "/",
              name: "investment",
              redirect: "/profile/investment/investdetails/investinfo"
            },
            {
              path: "/profile/investment/investdetails/investinfo",
              name: "investment",
              component: investinfo
            },
            {
              path: "/profile/investment/investdetails/settlement",
              name: "investment",
              component: settlement
            },
            {
              path: "/profile/investment/investdetails/nextofkin",
              name: "investment",
              component: nextofkin
            },
            {
              path: "/profile/investment/investdetails/success",
              name: "investment",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/pawnshop/precheck", //Pawn Route
          name: "pawn",
          component: pawnPrecheck
        },
        {
          path: "/profile/pawnshop/pawndetails", 
          component: pawndetails,
          children: [
            {
              path: "/",
              redirect: "/profile/pawnshop/pawndetails/personal"
            },
            {
              path: "/profile/pawnshop/pawndetails/personal",
              name: "pawn",
              component: personalLoan
            },
            {
              path: "/profile/pawnshop/pawndetails/pawninfo",
              name: "pawn",
              component: pawninfo
            },
            {
              path: "/profile/pawnshop/pawndetails/ownership",
              name: "pawn",
              component: ownership
            },
            {
              path: "/profile/pawnshop/pawndetails/success",
              name: "pawn",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/finance/precheck", //Finance Route
          name: "finance",
          component: finPrecheck
        },
        {
          path: "/profile/finance/loandetails", 
          component: findetails,
          children: [
            {
              path: "/",
              name: "finance",
              redirect: "/profile/finance/loandetails/personal"
            },
            {
              path: "/profile/finance/loandetails/personal",
              name: "finance",
              component:personalLoan
            },
            {
              path: "/profile/finance/loandetails/loaninfo",
              name: "finance",
              component: fininfo
            },
            {
              path: "/profile/finance/loandetails/workinfo",
              name: "finance",
              component: workinfo
            },
            {
              path: "/profile/finance/loandetails/guarantor",
              name: "finance",
              component: guarantor
            },
            {
              path: "/profile/finance/loandetails/collateral",
              name: "finance",
              component: collateral
            },
            {
              path: "/profile/finance/loandetails/success",
              name: "finance",
              component: thankyou
            }
          ]
        }
      ]
    },
    //Admin Routes
    {
      path: "/adminProfile",
      name: "adminProfile",
      meta:{admin:true},
      component: adminProfile,
      children: [
        {
          path: "/",
          name:'adminProfile',
          redirect: "/adminProfile/adminDashboard"
        },
        {
          path: "/adminProfile/adminDashboard",
          name: "adminDashboard",
          component: adminDashboard
        },
        {
          path: "/adminProfile/reports",
          name: "reports",
          component: reports,
          children : [
            {
              path: "/",
              redirect: "/adminProfile/reports/loan"
            },
            {
              path: "/adminProfile/reports/loan",
              name:'Loan Report',
              component: loanReport
            },
            {
              path: "/adminProfile/reports/investment",
              name:'Investment Report',
              component: investmentReport
            },
            {
              path: "/adminProfile/reports/pawn",
              name:'Pawn Report',
              component: pawnReport
            },
            {
              path: "/adminProfile/reports/finance",
              name:'Finance Report',
              component: financeReport
            },
          ]
        },
        {
          path: "/adminProfile/approvals",
          name: "approvals",
          component: approvals,
          children: [
            {
              path: "/",
              name:'approvals',
              redirect: "/adminProfile/approvals/loan"
            },
            {
              path: "/adminProfile/approvals/loan",
              name:'Loan Approval',
              component: loanApproval
            },
            {
              path: "/adminProfile/approvals/investment",
              name:'Investment Approval',
              component: investmentApproval
            },
            {
              path: "/adminProfile/approvals/pawn",
              name:'Pawn Approval',
              component: pawnApproval
            },
            {
              path: "/adminProfile/approvals/finance",
              name:'Finance Approval',
              component: financeApproval
            },
            {
              path: "/adminProfile/approvals/loanDetails",
              name:'Loan Details',
              component: userDetailsLoan 
            },
            {
              path: "/adminProfile/approvals/investmentDetails",
              name:'Investment Details',
              component: userDetailsInvestment
            },
            {
              path: "/adminProfile/approvals/financeDetails",
              name:'Finance Details',
              component: userDetailsFinance 
            },
            {
              path: "/adminProfile/approvals/pawnDetails",
              name:'Pawn Details',
              component: userDetailsPawn 
            },
          ] 
        },
        {
          path: "/adminProfile/userManagement",
          name: "userManagement",
          component: userManagement
        },
        {
          path: "/adminProfile/userManagement/user",
          name: "userDetails",
          component: userDetails
        },
      ]
    },  
    //error route
    {
      path:"/*",
      component:error
    },
    
  ],

})

router.beforeEach((to, from, next) => {
  //loops through each route record and checks routes that contains the 'meta' tag
  if (to.matched.some(record => record.meta.authRequired)) {
  // checks if user is signed in, if not, redirect to signin page.
    if (!store.state.isAuthenticated) {
      next({
        path: "/signin",
        query:{redirect:to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

router.beforeEach((to, from, next) => {
  //loops through each route record and checks routes that contains the 'meta' tag
  if (to.matched.some(record => record.meta.admin)) {
  // checks if user is signed in as admin , if not, redirect to signin page.
    if (!store.state.isAdmin) {
      next({
        path: "/signin",
        query:{redirect:to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router

