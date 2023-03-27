<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <LogoView @refresh-page="handleRefresh" />
      <h1 class="navBar-title">Griin_Y !</h1>
      <button
        class="navbar-toggler"
        :class="{ 'navbar--collapsed': isCollapsed }"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="'/'" class="routerlink mx-2 active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="'/solaire'" class="routerlink mx-2">Le solaire</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="'/eolien'" class="routerlink mx-2">L'éolien</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="'/about'" class="routerlink mx-2">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
import LogoView from "@/components/NavBar/LogoView.vue";

export default {
  name: "NavBar",
  components: {
    LogoView,
  },
  data() {
    return {
      refresh: this.refresh,
      isCollapsed: false,
    };
  },

  mounted() {},
  methods: {
    handleRefresh(refreshFunc) {
      refreshFunc();
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/sass/main.scss";

.navbar {
  padding: 0;
  margin-bottom: 4em;
  display: flex;
  width: auto;
  border-radius: 0 0 15px 15px;

  .router-link-active,
  a {
    font-weight: 900;
    color: #42b983;
  }

  .routerlink,
  a {
    font-size: clamp(1rem, 6vw, 1.6rem);
    font-weight: 500;
    color: #000000;
    text-decoration: none;
    margin: 0em 0.5em 0em 0.5em;
  }

  .routerlink:focus,
  a:focus {
    font-weight: 900;
    color: #42b983;
  }

  a:hover {
    color: #42b983;
  }
}
</style>
