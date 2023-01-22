<template>
  <div class="home">
    <IntroHomeView />
  </div>
</template>

<script>
// @ is an alias to /src

import IntroHomeView from '@/components/HomeView/IntroHomeView.vue';

export default {
  name: 'HomeView',
  components: {
    IntroHomeView
}
}
</script>
<style lang="sass">
@import "../assets/sass/main.scss"
</style>
