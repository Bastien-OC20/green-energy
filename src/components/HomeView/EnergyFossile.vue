<template>
  <section class="home_fossile mb-5">
    <div
      class="home_fossile_card row m-auto align-items-center border border-success rounded-5"
    >
      <div class="home_fossile_card_picture col-md-2 p-4">
        <img
          :key="gas"
          class="img-fluid home_fossile_card_picture_gaz"
          :src="gas"
          title="Le gaz"
          aria-label="Image de citernes de gaz "
        />
      </div>
      <div
        class="home_fossile_card_picture_plus col-md-1"
        title="plus"
        arial-label="ajoute"
      >
        +
      </div>
      <div class="home_fossile_card_picture col-md-2 p-4">
        <img
          :key="charbon"
          class="img-fluid home_fossile_card_picture_charbon"
          :src="charbon"
          title="Le charbon"
          aria-label="Image de centrale à charbon "
        />
      </div>
      <div
        class="col-md-1 home_fossile_card_picture_plus"
        title="plus"
        arial-label="ajoute"
      >
        +
      </div>
      <div class="home_fossile_card_picture col-md-2 p-4">
        <img
          :key="petrol"
          class="img-fluid home_fossile_card_picture_petrol"
          :src="petrol"
          title="Le pétrol"
          aria-label="Image de pompe à pétrol "
        />
      </div>
      <div
        class="col-md-1 home_fossile_card_picture_egal"
        title="égal"
        arial-label="produit"
      >
        =
      </div>
      <div class="home_fossile_card_picture col-md-2 p-4">
        <img
          :key="redStorm"
          class="img-fluid home_fossile_card_picture_redStorm"
          :src="redStorm"
          title="Énergie polluante"
          aria-label="une éclaire rouge symbolysant la production d'énergie polluante "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EnergyFossile",
  data() {
    return {};
  },
  component: {},
  props: {
    gas: {
      type: String,
      require: true,
    },
    charbon: {
      type: String,
      require: true,
    },
    petrol: {
      type: String,
      require: true,
    },
    redStorm: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.home_fossile_card {
  backdrop-filter: blur(10px);
  box-shadow: 10px 5px 5px rgba(60, 61, 60, 0.534);
  background-color: rgba(105, 105, 105, 0.233);
  &_picture {
    &_egal,
    &_plus {
      font-size: 96px;
    }
  }
}
</style>
