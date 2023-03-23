<template>
  <div
    class="home col-lg-8 col-md-10 col-sm-12 d-flex flex-column align-items-center justify-content-center mx-auto"
  >
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
<style lang="scss">
@import "../assets/sass/main.scss";
</style>
