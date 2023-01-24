<template>
  <div class="home">
    <IntroHomeView />
    <InfoEnergyProduct />
  </div>
</template>

<script>
// @ is an alias to /src

import IntroHomeView from "@/components/HomeView/IntroHomeView.vue";
import InfoEnergyProduct from "@/components/HomeView/InfoEnergyProduct.vue";

export default {
  name: "HomeView",
  components: {
    IntroHomeView,
    InfoEnergyProduct,
  },
};
</script>
<style lang="sass">
@import "../assets/sass/main.scss"
</style>
