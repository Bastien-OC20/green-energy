<template>
  <article class="home_intro ">
    <h2 class="home_intro_title ">Envie de changer d'energie ?</h2>
      <p class="home_intro_paragraph">
        L'utilisation de sources d'énergie renouvelables telles que :</p>
        <div class="home_intro_paragraph_list1">
            <img
              :key="eolienne"
              class="home_intro_paragraph_list1_pictureEolienne"
              :src="eolienne"
              title="l'éolien"
               aria-label="Image d'une éolienne "
            >
            <span class="home_intro_paragraph_list1_title">l'éolien</span>
            <img
              :key="panneau"
              class="home_intro_paragraph_list1_picturePanneau"
              :src="panneau"
              content= "le solaire"
              title="le solaire"
              aria-label="Image de panneaux solaires sur un toit "
            >
           <span class="home_intro_paragraph_list1_title">le solaire</span>
          </div>
          <p class="home_intro_paragraph">
        permet de réduire notre dépendance aux combustibles fossiles tels que le 
        <span
          class="badge text-bg-danger"
        >pétrole</span> et le <span
          class="badge text-bg-danger"
        >charbon</span>, qui sont non
        seulement coûteux, mais également nocifs pour l'environnement.
      </p>

      <div class="home_intro_paragraph_fossile">
        <img
          :key="gas"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile"
          :src="gas"
          title="Le gaz"
          aria-label="Image de citernes de gaz "
        >
        <span class="home_intro_paragraph_fossile_plus" title="plus" arial-label="s'ajoute">+</span>
        <img
          :key="charbon"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile"
          :src="charbon"
          title="Le charbon"
          aria-label="Image de centrale à charbon "
        >
        <span class="home_intro_paragraph_fossile_plus"
        title="plus" arial-label="s'ajoute">+</span>
        <img
          :key="petrol"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile"
          :src="petrol"
          title="Le pétrol"
          aria-label="Image de pompe à pétrol "
        >
        <span class="home_intro_paragraph_fossile_egal"
        title="égal" arial-label="produit">=</span>
        <img
          :key="redStorm"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile redStorm"
          :src="redStorm"
          title="Énergie polluante"
          aria-label="une éclaire rouge symbolysant la production d'énergie polluante "
          
        >
      </div>
      <p class="home_intro_paragraph">
        L'utilisation<span
          class="badge text-bg-success"
        >d'énergie verte</span>contribue également à la lutte contre le changement
        climatique en réduisant les émissions de gaz à effet de serre, qui sont responsables du réchauffement de la
        planète.<br><span
          class="badge text-bg-success"
        >En utilisant des sources d'énergie propres et durables</span>, nous pouvons aider à protéger la planète
        pour les générations futures.
      </p>

      <p class="home_intro_paragraph">
        En outre, passer à une énergie verte peut aider à créer de nouvelles emplois dans
        les industries de l'énergie propre, ce qui peut contribuer à la croissance économique et à la création
        d'emplois.
      </p>
      <div class="home_intro_paragraph_green">
        <img
          :key="solaire"
          class="img-fluid home_intro_paragraph_green_picturegreen"
          :src="solaire"
          title="Le solaire"
          aria-label="Image de panneaux solaires récupérant l'énergie du soleil "
        >
        <span class="home_intro_paragraph_green_plus"
        title="plus"
          aria-label="s'ajoute ">+</span>
        <img
          :key="eolien"
          class="img-fluid home_intro_paragraph_green_picturegreen"
          :src="eolien"
          title="L'éolien'"
          aria-label="Image d'éoliennes' "
        >
        <span class="home_intro_paragraph_green_plus" title="plus"
          aria-label="s'ajoute ">+</span>
        <img
          :key="eau"
          class="img-fluid home_intro_paragraph_green_picturegreen"
          :src="eau"
          title="L'hydro-éléctrique'"
          aria-label="Image d'un barrage hydro-éléctrique' "
        >
        <span class="home_intro_paragraph_green_egal">=</span>
        <img
          :key="blueStorm"
          class="img-fluid home_intro_paragraph_green_picturegreen blueStorm"
          :src="blueStorm"
          title="Énergie renouvellable"
          aria-label="une éclaire rouge symbolysant la production d'énergie renouvellable "
        >
      </div>
      <p class="home_intro_paragraph">
        Cela peut également aider les gouvernements à réduire leur dépendance aux importations de
        combustibles fossiles et à diversifier leur mix énergétique, ce qui peut être bénéfique pour la sécurité
        énergétique à long terme.
      </p>

      <p class="home_intro_paragraph">
        Enfin, l'utilisation d'énergie verte peut être bénéfique pour les communautés
        locales en leur offrant des opportunités économiques et en améliorant la qualité de l'air et de l'eau dans leur
        région.
      </p>

      <p class="home_intro_paragraph">
        En somme, il y a de nombreux bienfaits à passer à une énergie verte. Cela peut
        contribuer à :
        <ul class="home_intro_paragraph_list2">
          <li class="home_intro_paragraph_list2_bienfait">
            La lutte contre le changement climatique
          </li>
          <li class="home_intro_paragraph_list2_bienfait">
            La création d'emplois et à la croissance économique
          </li>
          <li class="home_intro_paragraph_list2_bienfait">
            La sécurité énergétique à long terme
          </li>
          <li class="home_intro_paragraph_list2_bienfait">
            L'amélioration de la qualité de vie des communautés locales
          </li>
        </ul>
      </p>
    </article>
</template>

<script>
export default {
  name: "IntroHomeView",
  data() {
    return {
      panneau: require("@/assets/img/panneau.jpg"),
      eolienne: require("@/assets/img/eolienne.jpg"),
      hydro: require("@/assets/img/hydroelectricite.jpg"),
      gas: require("@/assets/webp/gas.webp"),
      charbon: require("@/assets/webp/charbon.webp"),
      petrol: require("@/assets/webp/petrol.webp"),
      redStorm: require("@/assets/webp/redStorm.webp"),
      solaire: require("@/assets/webp/solaire.webp"),
      eau: require("@/assets/webp/hydro.webp"),
      eolien: require("@/assets/webp/eolien.webp"),
      blueStorm: require("@/assets/webp/blueStorm.webp"),
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";

.home {
  &_intro {
    &_title {
      font-weight: bolder;
    }
    &_paragraph {
      &_list1 {
        background: $colorCadre2;
        box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
        &_title{
          width: 15%;
          display: flex;
          position: absolute;
          justify-content: center;
          background: white;
          border-radius: 35px;
          top: 30em;
          left:18em;
        }
        &_title:nth-child(2){
          top: 32em;
          left:8em;
        }
        &_pictureEolienne,
        &_picturePanneau {
          width: 60%;
          border-radius: 35px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        
      }
      &_fossile,
      &_green {
        background: $colorCadre2;
        background-clip: padding-box;
        position: relative;
        border-radius: 15px;
        padding: 0.1em;

        box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
        -webkit-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
        -moz-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);


      }
      &_fossile::before,
      &_green::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: linear-gradient(to bottom, #919118, #fffffff0);
      }
      &_list2 {
        text-decoration: none;
        list-style: none;
      }
    }
  }
}


</style>