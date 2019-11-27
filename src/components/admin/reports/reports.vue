

<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Registered Users',
          backgroundColor: 'green',
          data: [20, 20]
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
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>

</style>