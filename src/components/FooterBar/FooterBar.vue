<template>
  <footer>
    <p><router-link :to="'/about'" class="routerlink mx-2">About</router-link></p>
    <p>Copyright © {{ year }}</p>
    <p>
      <router-link :to="'/mentionsLegales'" class="routerlink mx-2"
        >Mentions Légales</router-link
      >
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
