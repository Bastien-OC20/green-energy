<template>
  <section class="home_newEnergy mb-5">
    <p class="home_newEnergy_intro">
      Réduire sa dépendance aux combustibles fossiles (charbon, pétrole) grâce aux
      énergies renouvelables :
    </p>
    <div
      class="home_newEnergy_card row d-flex m-auto border border-success rounded-5 w-50"
    >
      <div class="home_newEnergy_card_picture col-md-10 p-3 m-auto">
        <img
          :key="eoleAndSun"
          class="home_newEnergy_picture_EolienneAndSun img-fluid rounded-5"
          :src="eoleAndSun"
          title="l'éolien et le solaire reunis pour une meilleure planète"
          aria-label="Image d'éoliennes et de panneaux solaires "
          alt="Image d'éoliennes et de panneaux solaires "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewEnergy",
  data() {
    return {};
  },
  props: {
    eoleAndSun: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
.home_newEnergy_card {
  backdrop-filter: blur(10px);
  box-shadow: 10px 5px 5px rgba(60, 61, 60, 0.534);
}
</style>
