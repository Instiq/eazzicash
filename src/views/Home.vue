<template>
  <div>
     <background1/>
    <navigation />
   
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
// import background from '@/components/background.vue'
import background1 from '@/components/background1.vue'
export default {
  name: "home",
  components: {
    navigation,
    // background,
    background1
  }
};
</script>
