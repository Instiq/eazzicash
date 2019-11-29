<template>

  <div>
    <navigation/>
  </div>

</template>

<script>
import navigation from './navigation.vue';
import{ mdbTbl, mdbJumbotron, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'

export default {
  name : "reports",
  components : {
    navigation
  },
  
methods : {
        isActiveOne () {
            this.$store.dispatch('updateIsActive1')
        },
        isActiveTwo () {
            this.$store.dispatch('updateIsActive2')
        },
        isActiveThree () {
            this.$store.dispatch('updateIsActive3')
        },
        isActiveFour () {
           this.$store.dispatch('updateIsActive4')
        }
    },

computed : {
    isActive1 () {
        return this.$store.getters.isActive1
    },
    isActive2 () {
        return this.$store.getters.isActive2
    },
    isActive3 () {
        return this.$store.getters.isActive3
    },
    isActive4 () {
        return this.$store.getters.isActive4
    }
}
}
</script>

<style>

</style>