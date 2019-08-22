<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App',

  methods : {
    findBug () {
      let docWidth = document.documentElement.offsetWidth;
      [].forEach.call(
        document.querySelectorAll('*'),

        function (el) {
          if (el.offsetWidth>docWidth) {
            alert(el);
            
          }

          else {
            console.log(999);
             
          }
        }

      )
    }
  },

  mounted () {
    this.findBug()
  }

}
</script>



<style>

</style>
