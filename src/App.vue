<template>
  <NavBar />
</template>

<script>
import store from "./store";
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  store,
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap");

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a134b;
}
</style>
