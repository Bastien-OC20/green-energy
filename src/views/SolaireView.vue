<template>
  <div class="solar">
    <SolarIntroView />
  </div>
</template>

<script>
import SolarIntroView from "@/components/SolarView/SolarIntroView.vue";

export default {
  name: "SolarView",
  components: {
    SolarIntroView,
  },
};
</script>
<style lang="scss">
@import "../assets/sass/main.scss";
</style>
