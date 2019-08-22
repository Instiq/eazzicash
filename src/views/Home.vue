<template>
  <div>
     <background/>
    <navigation />
   
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import background from '@/components/background.vue'
export default {
  name: "home",
  components: {
    navigation,
    background
  }
};
</script>
