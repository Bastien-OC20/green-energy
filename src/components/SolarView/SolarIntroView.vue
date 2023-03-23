<template>
  <section>
    <h2 class="solar_title">Le Solaire ! une énergie plus que Populaire</h2>
    <template v-for="(paragraph, index) in paragraphs" :key="index">
      <p class="solar_paragraph">{{ paragraph }}</p>
    </template>
  </section>
</template>

<script>
export default {
  name: "SolarIntroView",
  data() {
    return {
      paragraphs: [
        "Les panneaux solaires (PS), ou panneaux photovoltaïques (PV), sont un moyen populaire et efficace de produire de l'électricité à partir du soleil. Ils présentent un certain nombre d'avantages, notamment :",
        "Une énergie propre : Les panneaux PV (ou PS) ne produisent aucune émission ni aucun polluant, ce qui en fait une source d'énergie propre et durable.",
        "Rentabilité : Le coût des panneaux PV a diminué ces dernières années, ce qui les rend plus accessibles et plus rentables pour les particuliers et les entreprises. De plus, l'électricité générée par les panneaux solaires permet de réaliser des économies importantes sur les factures d'énergie au fil du temps.",
        "Fiabilité : Les panneaux photovoltaïques peuvent produire de l'électricité même par temps nuageux et peuvent être associés à des systèmes de stockage par batterie en cas de coupure de courant.",
        "Peu d'entretien : Les panneaux PV nécessitent très peu d'entretien et ont une longue durée de vie, généralement de 25 à 30 ans.",
        "Polyvalence : les panneaux peuvent être installés sur une grande variété de surface, comme les toits, les murs et même les véhicules.",
        "Diversification des sources d'énergie : En produisant une partie de votre propre électricité avec ces panneaux PV, vous pouvez réduire votre dépendance aux combustibles fossiles et diminuer votre empreinte carbone.",
        "Incitations gouvernementales : De nombreux gouvernements proposent des des subventions aux particuliers et aux entreprises qui installent des panneaux PV, ce qui en fait un investissement encore plus intéressant.",
        "Dans l'ensemble, les panneaux PV offrent un moyen fiable, rentable et durable de produire de l'électricité, ce qui en fait un excellent choix pour les propriétés résidentielles et commerciales. Ils constituent également un moyen efficace de réduire les émissions de carbone et de soutenir la transition vers des sources d'énergie renouvelable.",
      ],
    };
  },

  props: {},
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
</style>
