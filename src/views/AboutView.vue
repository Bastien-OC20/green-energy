<template>
  <div class="about">
    <AboutIntroView />
    <AboutContact />
  </div>
</template>

<script>
import AboutIntroView from "@/components/AboutView/AboutIntroView.vue";
import AboutContact from "@/components/AboutView/AboutContact.vue";

export default {
  name: "AboutView",
  data() {
    return {};
  },
  components: {
    AboutIntroView,
    AboutContact,
  },
};
</script>
<style lang="scss">
@import "../assets/sass/main.scss";
</style>
