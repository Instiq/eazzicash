<template>
  <div class="container">
      <div class="main-container">
          <section class="container main-container " style="height:auto">
            <div class="container ">
                <div class="row  p-1 mb-5" style="margin-top:-30px">
                    <div class="col">
                    <p class="text-success mt-5 h6 font-weight-bold">Users</p>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col" class="text-center">Details</th>
                                <th scope="col" class="text-center">Verified</th>
                                <th scope="col" class="text-center">Date Applied</th>
                                </tr>
                            </thead>
                            <tbody v-if="users"   >
                                <tr v-for="(item, index) in users" :key="'a' + index">
                                <td scope="row" class="text-success">{{item.firstName}} {{item.lastName}}</td>
                                <td class="text-center"><span class="text-primary" @click="userDetails(index)" style="cursor:pointer" >View Details</span></td>
                                <td class="text-center h6"> {{item.isVerified}} </td>
                                <td class="text-center"> {{moment(item.createdAt)}} </td>
                                </tr>
                            </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
      </section>
      </div>
     
  </div>
</template>

<script>
import moment from 'moment';
import{ mdbTbl, mdbBtn,  mdbTblHead, mdbTblBody } from 'mdbvue'
export default {
    name:'userManagement',
    components : {
        mdbTbl,
        mdbBtn,  
        mdbTblHead, 
        mdbTblBody
    },
    methods : {
      moment (x) {
        return moment(x).format("DD/MM/YYYY")
      },
     //function to conditionally show user details for a particulasr user
      userDetails(n) {
        let newObject  = this.users[n]
        this.$store.commit('setUserDetails', newObject)
        this.$router.push('/adminProfile/userManagement/user')
    }, 
    },
    computed : {
        users () {
            return this.$store.state.users
        }
    },
    mounted () {
        this.$store.dispatch('getAllUsers')
    }

}
</script>

<style>
.main-container {
    border:2px solid blac;
    margin-left:3vw;
    height: auto;
    overflow-x: hidden
 }
</style>