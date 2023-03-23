<template>
  <div>
    <renderer :size="{ w: 600, h: 400 }">
      <scene>
        <camera :position="{ z: 15 }"></camera>
        <mesh :obj="objet3DGLB" :position="{ y: -200 }"></mesh>
        <animation :fn="animate" :speed="3"></animation>
      </scene>
    </renderer>

    <p v-if="loading">Chargement en cours...</p>
  </div>
</template>
<script>
export default {
  name: "Eolien3D",
  data() {
    return {
      objet3DGLB: require("../../assets/3D/eole.obj"),
      loading: true,
    };
  },

  mounted() {},
};
</script>
