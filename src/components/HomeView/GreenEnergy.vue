<template>
  <section class="home_green mb-5">
    <div
      class="home_green_card row m-auto align-items-center border border-success rounded-5"
    >
      <div class="home_green_card_picture col-md-2 p-4">
        <img
          :key="solaire"
          class="img-fluid home_green_card_picture_solaire"
          :src="isSolaireClicked ? solaireSelected : solaire"
          title="Le solaire"
          aria-label="Image de panneaux solaires récupérant l'énergie du soleil "
          @click="changeTextColor('solaire')"
        />
      </div>
      <div
        class="home_green_card_picture_plus col-md-1"
        title="plus"
        arial-label="ajoute"
        ref="plus"
      >
        <p :class="{ 'green-text': isSolaireClicked }">+</p>
      </div>
      <div class="home_green_card_picture col-md-2 p-4">
        <img
          :key="eolien"
          class="img-fluid home_green_card_picture_eolien"
          :src="isEolienClicked ? eolienSelected : eolien"
          title="L'éolien"
          aria-label="Image d'éoliennes "
          @click="changeTextColor('eolien')"
        />
      </div>
      <div
        class="col-md-1 home_green_card_picture_plus"
        title="plus"
        arial-label="ajoute"
        ref="plus"
      >
        <p :class="{ 'green-text': isEolienClicked }">+</p>
      </div>
      <div class="home_green_card_picture col-md-2 p-4">
        <img
          :key="eau"
          class="img-fluid home_green_card_picture_petrol"
          :src="isEauClicked ? eauSelected : eau"
          title="L'hydro-éléctrique"
          aria-label="Image d'un barrage hydro-éléctrique"
          @click="changeTextColor('eau')"
        />
      </div>
      <div
        class="col-md-1 home_green_card_picture_egal"
        title="égal"
        arial-label="produit"
        ref="egal"
      >
        <p :class="{ 'green-text': isEauClicked }">=</p>
      </div>
      <div class="home_green_card_picture col-md-2 p-4">
        <img
          :key="blueStorm"
          class="img-fluid home_green_card_picture_redStorm"
          :src="blueStorm"
          title="Énergie renouvellable"
          aria-label="une éclaire rouge symbolysant la production d'énergie renouvellable "
          v-if="isShowFourthImage"
        />
        <p v-if="!isShowFourthImage" class="not-ready">
          Cliquer sur les trois sources d'énergie pour produire de l'énergie renouvelable
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenEnergy",
  data() {
    return {
      isSolaireClicked: "",
      isEolienClicked: "",
      isEauClicked: "",
      isShowFourthImage: "",
    };
  },
  props: {
    solaire: {
      type: String,
      require: true,
    },
    eolien: {
      type: String,
      require: true,
    },
    eau: {
      type: String,
      require: true,
    },
    blueStorm: {
      type: String,
      require: true,
    },
    solaireSelected:  {
      type: String,
      require: true,
    },
    eolienSelected:  {
      type: String,
      require: true,
    },
    eauSelected:  {
      type: String,
      require: true,
    },
  },
  component: {},
  methods: {
    changeTextColor(imageType) {
      switch (imageType) {
        case "solaire":
          this.isSolaireClicked = !this.isSolaireClicked; // Désélectionner si déjà sélectionné
          break;
        case "eolien":
          this.isEolienClicked = !this.isEolienClicked;
          break;
        case "eau":
          this.isEauClicked = !this.isEauClicked;
          break;
      }

      // Vérifier si toutes les images ont été cliquées
      if (this.isSolaireClicked && this.isEolienClicked && this.isEauClicked) {
        this.isShowFourthImage = true;
      } else {
        this.isShowFourthImage = false;
      }
    },
  },
};
</script>

<style lang="scss">
.home_green_card {
  backdrop-filter: blur(10px);
  box-shadow: 10px 5px 5px rgba(60, 61, 60, 0.534);
  background-color: rgba(26, 240, 176, 0.233);

  &_picture {
    &_egal,
    &_plus {
      font-size: 96px;
      .green-text {
        color: green;
      }
    }
    .not-ready {
      font-size: 1rem;
      padding: 0 !important;
      margin: 0;
    }
  }
}
</style>
