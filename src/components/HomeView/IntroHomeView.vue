<template>
  <article class="home_intro">
    <h2 class="home_intro_title">Envie de changer d'energie ?</h2>
    <NewEnergy :eoleAndSun="eoleAndSun" />
    <div class="home_intro_paragraph">
      <p class="home_intro_paragraph-text">
        Faisons d’une pierre deux coups en réduisant l’impact financier sur notre budget
        et celui délétère sur l’environnement.
      </p>
    </div>
    <EnergyFossile :gas="gas" :charbon="charbon" :petrol="petrol" :redStorm="redStorm" />
    <div class="home_intro_paragraph">
      <h3 class="home_intro_paragraph_titre d-inline-flex p-2">
        <span class="badge text-bg-success">L'énergie verte = </span>
      </h3>
      <ul class="home_intro_paragraph_list d-flex flex-column align-items-start">
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
    <GreenEnergy :solaire="solaire" :eau="eau" :eolien="eolien" :blueStorm="blueStorm" />
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
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
</style>
