<template>
  <div class="eolien">
    <EolienIntroView />
    <!-- <Eolien3D /> -->
  </div>
</template>

<script>
import EolienIntroView from "@/components/EolienView/EolienIntroView.vue";
// import Eolien3D from "@/components/EolienView/Eolien3D.vue";
export default {
  name: "EolienView",
  data() {
    return {};
  },
  components: {
    EolienIntroView,
    // Eolien3D,
  },
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

.eolien {
  background-image: url("@/assets/img/Power_Turbine.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 42%;
}
</style>
