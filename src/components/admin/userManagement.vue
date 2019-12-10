<template>
  <div class="container">
      <div class="main-container">
          <section class="container main-container" style="height:auto; width:75vw">
            <div class="container ">
                <div class="row  p-1 mb-5" style="margin-top:-30px">
                    <div class="col">
                    <div class="row mt-5">
                        <p class="text-success col-md-3 mt- h6 font-weight-bold">Users</p>
                        <div class="col-md-4"></div>
                        <div class="col-md-5 mb-3">
                        <div class="input-group">
                            <input type="search" placeholder="search by name, date, month or year" v-model="name" class="form-control" name="" id=""> 
                            <div class="input-group-append" style="cursor:pointer">
                                <div class="input-group-text"> <i class="fas fa-search"></i></div>
                            </div>
                        </div> 
                    </div>
                </div>
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

    data () {
        return {
            name:""
        }
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

     // change first letter of search input to uppercase
    toUpperCase (name) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
    },
    computed : {
        users () {
            if (this.name=='') return this.$store.state.users.sort().reverse()
    
            this.toUpperCase();

            let result = this.$store.state.users.sort().reverse();
           return  result.filter(value=> {
                let fullName = value.firstName + " " +  value.lastName;
                let fullNameReverse = value.lastName + " " +  value.firstName;
                let formattedTime = this.moment(value.createdAt);
                let check = moment(value.createdAt, 'YYYY/MM/DD');
                let month = check.format('M');              
                // let day   = check.format('D');
                let year  = check.format('YYYY');
                let monthAndYear = month + "/" + year

                return  value.firstName.indexOf(this.name)==0 ||
                        value.lastName.indexOf(this.name)==0 ||
 
                        fullName.indexOf(this.name) == 0 || 
                        fullNameReverse.indexOf(this.name) == 0 ||
                        formattedTime.indexOf(this.name) == 0 ||
                        year.indexOf(this.name) == 0 ||
                        month.indexOf(this.name) == 0 ||
                        // day.indexOf(this.name) == 0 ||
                        monthAndYear.indexOf(this.name) == 0
                }    
            )

        }
    },
    created () {
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