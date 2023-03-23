<template class="container">
  <NavBar />
  <button v-if="showScrollTop" class="btn scroll-top" @click="scrollTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style="
         {
          width: 48px;
        }
      "
    >
      <circle cx="12" cy="12" r="11" fill="none" stroke="#000000" stroke-width="2" />
      <path d="M12 2l-8 9h6v11h4v-11h6z" fill="#000000" />
    </svg>
  </button>
  <FooterBar />
</template>

<script>
import store from "./store";
import NavBar from "./components/NavBar/NavBar.vue";
import FooterBar from "./components/FooterBar/FooterBar.vue";
export default {
  store,
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      showScrollTop: false,
    };
  },
  beforeCreate() {
    document.title = "Griin_Y - Passez à l'énergie verte";
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 500) {
        this.showScrollTop = true;
      } else {
        this.showScrollTop = false;
      }
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap");

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

  background-image: url("./assets/img/production_electricity_wind.png");
  background-size: cover;
  background-repeat: no-repeat;
}

html {
  scroll-behavior: smooth;
}

.scroll-top {
  position: fixed;
  bottom: 6em;
  right: 20px;
  cursor: pointer;
}
</style>
