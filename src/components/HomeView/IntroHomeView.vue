<template>
  <article class="home_intro">
    <h2 class="home_intro_title">Envie de changer d'energie ?</h2>
    <NewEnergy :eoleAndSun="eoleAndSun" />
    <div class="home_intro_paragraph col-8 m-auto">
      <p class="home_intro_paragraph-text">
        Faisons d’une pierre deux coups en réduisant l’impact financier sur notre budget
        et celui délétère sur l’environnement.
      </p>
    </div>
    <EnergyFossile :gas="gas" :charbon="charbon" :petrol="petrol" :redStorm="redStorm" />
    <div class="home_intro_paragraph col-10 d-flex flex-column m-auto">
      <h3 class="home_intro_paragraph_titre d-inline-flex p-2">
        <span class="badge text-bg-success">L'énergie verte = </span>
      </h3>
      <ul class="home_intro_paragraph_list d-flex flex-column text-start">
        <li class="home_intro_paragraph_list_item">
          Lutte contre le changement climatique en réduisant les émissions de gaz à effet
          de serre responsables du réchauffement de la planète
        </li>
        <li class="home_intro_paragraph_list_item">
          Création de nouveaux emplois dans les industries de l’énergie propre pouvant
          induire une croissance économique
        </li>
        <li class="home_intro_paragraph_list_item">
          Réduction de la dépendance des gouvernements à l’importation des énergies
          fossiles, diversification des mix énergétiques, bénéfique pour une sécurité
          énergétique à long terme.
        </li>
        <li class="home_intro_paragraph_list_item">
          Amélioration de la qualité de l’eau et de l’air au niveau local.
        </li>
        <li class="home_intro_paragraph_list_item">
          Protection de la planète pour les générations futures.
        </li>
      </ul>
    </div>
    <GreenEnergy
      :solaire="solaire"
      :eau="eau"
      :eolien="eolien"
      :blueStorm="blueStorm"
      :solaireSelected="solaireSelected"
      :eolienSelected="eolienSelected"
      :eauSelected="eauSelected"
    />
  </article>
</template>

<script>
import NewEnergy from "./NewEnergy.vue";
import EnergyFossile from "./EnergyFossile.vue";
import GreenEnergy from "./GreenEnergy.vue";
export default {
  name: "IntroHomeView",
  components: {
    NewEnergy,
    EnergyFossile,
    GreenEnergy,
  },
  data() {
    return {
      eoleAndSun: require("@/assets/img/eole-sun.png"),
      gas: require("@/assets/webp/gas.webp"),
      charbon: require("@/assets/webp/charbon.webp"),
      petrol: require("@/assets/webp/petrol.webp"),
      redStorm: require("@/assets/webp/redStorm.webp"),
      solaire: require("@/assets/webp/solaire-NB.png"),
      eau: require("@/assets/webp/hydro-NB.png"),
      eolien: require("@/assets/webp/eolien-NB.png"),
      blueStorm: require("@/assets/webp/blueStorm.webp"),
      solaireSelected: require("../../assets/webp/solaire.webp"),
      eolienSelected: require("../../assets/webp/eolien.webp"),
      eauSelected: require("../../assets/webp/hydro.webp"),
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";

.home {
  &_intro {
    &_paragraph {
      background-color: rgba(128, 128, 128, 0.233);
      border-radius: 25px;
      &_list {
        background: $colorCadre1;
        border-radius: 25px;
        box-shadow: 10px 5px 5px rgba(60, 61, 60, 0.534);
      }
    }
  }
}
</style>
