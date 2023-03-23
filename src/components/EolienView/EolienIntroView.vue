<template>
  <section>
    <h2 class="eolien_title">L'éolien ! Pour quoi faire ?</h2>
    <template v-for="(paragraph, index) in paragraphs" :key="index">
      <p class="eolien_paragraph">{{ paragraph }}</p>
    </template>
  </section>
</template>

<script>
export default {
  name: "EolienIntroView",
  data() {
    return {
      paragraphs: [
        "L'énergie éolienne est une source d'énergie propre et renouvelable qui présente de nombreux avantages tant pour l'environnement que pour l'économie. L'un de ses principaux avantages est l’absence d’émission de gaz à effet de serre, contrairement aux combustibles fossiles comme le charbon, le pétrole et le gaz naturel.  D’où une réduction substantielle de dioxyde de carbone et autres polluants dans l'atmosphère.",
        "Un autre avantage de l'énergie éolienne est qu'elle constitue une source d'énergie fiable. Contrairement aux combustibles fossiles, l’énergie éolienne n’est pas affectée par des catastrophes naturelles et autres événements, De plus, le vent étant une source d'énergie constante, il peut être exploité pour produire de l'électricité à tout moment.",
        "L'énergie éolienne présente également des avantages économiques. Son coût d’exploitation, de plus en plus compétitif par rapport aux sources d'énergies traditionnelles induit des emplois dans la fabrication, la construction et l'entretien des éoliennes. En outre, en produisant de l'électricité à partir de l'énergie éolienne, nous pouvons réduire notre dépendance vis-à-vis du pétrole étranger et d'autres combustibles fossiles, ce qui peut constituer un avantage économique majeur.",
        "L’énergie éolienne a le potentiel pour devenir une source d'énergie majeure à l'avenir. Il s'agit d'une ressource vaste et illimitée exploitable à grande échelle. Avec la demande croissante d'énergie propre et renouvelable, l'éolien devient une source d'énergie de plus en plus importante pour le monde.",
        "En conclusion, l'énergie éolienne est une source d'énergie propre, fiable et compétitive en termes de coût qui présente de nombreux avantages pour l'environnement, l'économie et la sécurité énergétique. Au fur et à mesure que la technologie s'améliore et que les coûts diminuent, l'énergie éolienne a le potentiel pour jouer un rôle important afin de répondre aux besoins énergétiques du monde. Il est important que nous continuions à investir dans l'énergie éolienne et les autres sources d'énergie renouvelable afin de garantir un avenir durable pour tous.",
      ],
    };
  },

  props: {},
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
</style>
