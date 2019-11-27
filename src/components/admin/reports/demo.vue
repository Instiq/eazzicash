<template>
  <div class="small">
    <bar-chart v-if="loaded" :chart-data="chartdata" :options="options"></bar-chart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import BarChart from './demo.js'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        loaded:true,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
      }
    },

    computed : {
        users () {
            let users =  this.$store.state.users
            return users.length
        },
        chartdata () {
            return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                label: 'Registered Users',
                backgroundColor: 'green',
                data: [this.users, 20]
                },
                {
                label: 'Loan Requests',
                backgroundColor: 'cyan',
                data: [25, 40]
                },
                {
                label: 'Pawn Requests',
                backgroundColor: 'crimson',
                data: [15, 60]
                },
                {
                label: 'Investment Requests',
                backgroundColor: 'blue',
                data: [35, 75]
                },
                {
                label: 'Finance Requests',
                backgroundColor: 'orange',
                data: [41, 29]
                }
            ]
        }},
        
    },

    created () {

    }
   
  }
</script>

<style>
  .small {
    max-width: 1000px;
    margin-left:  6vw;
  }
</style>