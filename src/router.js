import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";
import Home from "./views/Home.vue";
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
import profile from "./views/profile.vue";
import dashboard from "./components/dashboard.vue";
import apply from "./components/loan/apply.vue";
import loandetails from "./components/loan/loandetails.vue";
import loaninformation from "./components/loan/loaninformation.vue";
import workinfo from "./components/loan/workinfo.vue";
import guarantor from "./components/loan/guarantor.vue";
import signature from "./components/loan/signature.vue";
import thankyou from "./components/loan/thankyou.vue";
import precheck from "./components/investment/precheck.vue";
import investdetails from "./components/investment/investdetails.vue";
import investinfo from "./components/investment/investinfo.vue";
import settlement from "./components/investment/settlement.vue";
import nextofkin from "./components/investment/nextofkin.vue";
import signatureI from "./components/investment/signatureI.vue";
import pawnPrecheck from "./components/pawnshop/pawnPrecheck.vue";
import pawninfo from "./components/pawnshop/pawninfo.vue";
import pawndetails from "./components/pawnshop/pawndetails.vue";
import ownership from "./components/pawnshop/ownership.vue";
import signatureP from "./components/pawnshop/signatureP.vue";
import finPrecheck from "./components/finance/finPrecheck.vue";
import findetails from "./components/finance/findetails.vue";
import fininfo from "./components/finance/fininfo.vue";
import finworkinfo from "./components/finance/finworkinfo.vue";
import finguarantor from "./components/finance/finguarantor.vue";
import collateral from "./components/finance/collateral.vue";
import signatureF from "./components/finance/signatureF.vue";

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
      component: getToken
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
          component: dashboard
        },
        {
          path: "/profile/loan/apply", // Loan routes
          component: apply
        },
        {
          path: "/profile/loan/loandetails",
          component: loandetails,
          children: [
            {
              path: "/",
              redirect: "/profile/loan/loandetails/loaninformation"
            },
            {
              path: "/profile/loan/loandetails/loaninformation",
              component: loaninformation
            },
            {
              path: "/profile/loan/loandetails/workinfo",
              component: workinfo
            },
            {
              path: "/profile/loan/loandetails/guarantor",
              component: guarantor
            },
            {
              path: "/profile/loan/loandetails/signature",
              component: signature
            },
            {
              path: "/profile/loan/loandetails/success",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/investment/precheck", //Investment Route
          component: precheck
        },
        {
          path: "/profile/investment/investdetails",
          component: investdetails,
          children: [
            {
              path: "/",
              redirect: "/profile/investment/investdetails/investinfo"
            },
            {
              path: "/profile/investment/investdetails/investinfo",
              component: investinfo
            },
            {
              path: "/profile/investment/investdetails/settlement",
              component: settlement
            },
            {
              path: "/profile/investment/investdetails/nextofkin",
              component: nextofkin
            },
            {
              path: "/profile/investment/investdetails/signature",
              component: signatureI
            },
            {
              path: "/profile/investment/investdetails/success",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/pawnshop/precheck", //Investment Route
          component: pawnPrecheck
        },
        {
          path: "/profile/pawnshop/pawndetails", //Investment Route
          component: pawndetails,
          children: [
            {
              path: "/",
              redirect: "/profile/pawnshop/pawndetails/pawninfo"
            },
            {
              path: "/profile/pawnshop/pawndetails/pawninfo",
              component: pawninfo
            },
            {
              path: "/profile/pawnshop/pawndetails/ownership",
              component: ownership
            },
            {
              path: "/profile/pawnshop/pawndetails/signature",
              component: signatureP
            },
            {
              path: "/profile/pawnshop/pawndetails/success",
              component: thankyou
            }
          ]
        },
        {
          path: "/profile/finance/precheck", //Finance Route
          component: finPrecheck
        },
        {
          path: "/profile/finance/loandetails", //Finance Route
          component: findetails,
          children: [
            {
              path: "/",
              redirect: "/profile/finance/loandetails/loaninfo"
            },
            {
              path: "/profile/finance/loandetails/loaninfo",
              component: fininfo
            },
            {
              path: "/profile/finance/loandetails/workinfo",
              component: finworkinfo
            },
            {
              path: "/profile/finance/loandetails/guarantor",
              component: finguarantor
            },
            {
              path: "/profile/finance/loandetails/signature",
              component: signatureF
            },
            {
              path: "/profile/finance/loandetails/collateral",
              component: collateral
            }
          ]
        }
      ]
    }
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

export default router

