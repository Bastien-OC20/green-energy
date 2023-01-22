<template>
  <article class="home_intro ">
      <p class="home_intro_paragraph">
        L'utilisation de sources d'énergie renouvelables telles que :
        <ul class="home_intro_paragraph_list1">
          <li class="home_intro_paragraph_list1_energy1">
            <img
              :key="eolienne"
              class="img-fluid home_intro_paragraph_list1_energy1_pictureEolienne"
              :src="eolienne"
            >
          </li>
          <li class="home_intro_paragraph_list1_energy2">
            <img
              :key="panneau"
              class="img-fluid home_intro_paragraph_list1_energy2_picturePanneau"
              :src="panneau"
            >
          </li>
          <li class="home_intro_paragraph_list1_transition">
            ET
          </li>
          <li class="home_intro_paragraph_list1_energy3">
            <img
              :key="hydro"
              class="img-fluid home_intro_paragraph_list1_energy3_pictureHydro"
              :src="hydro"
            >
          </li>
        </ul>permet de réduire notre dépendance aux combustibles fossiles tels que le <span
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
        >
        <span class="home_intro_paragraph_fossile_plus">+</span>
        <img
          :key="charbon"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile"
          :src="charbon"
        >
        <span class="home_intro_paragraph_fossile_plus">+</span>
        <img
          :key="petrol"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile"
          :src="petrol"
        >
        <span class="home_intro_paragraph_fossile_egal">=</span>
        <img
          :key="redStorm"
          class="img-fluid home_intro_paragraph_fossile_pictureFossile redStorm"
          :src="redStorm"
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
        >
        <span class="home_intro_paragraph_green_plus">+</span>
        <img
          :key="eolien"
          class="img-fluid home_intro_paragraph_green_picturegreen"
          :src="eolien"
        >
        <span class="home_intro_paragraph_green_plus">+</span>
        <img
          :key="eau"
          class="img-fluid home_intro_paragraph_green_picturegreen"
          :src="eau"
        >
        <span class="home_intro_paragraph_green_egal">=</span>
        <img
          :key="blueStorm"
          class="img-fluid home_intro_paragraph_green_picturegreen blueStorm"
          :src="blueStorm"
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

}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";

.home {
  &_intro {
    &_paragraph {
      &_list1::after {
        content: "";
        background-image: linear-gradient(
          to right,
          rgba(1, 81, 255, 0.5),
          rgba(251, 255, 1, 0.5)
        );
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        bottom: 50%;
        left: 40%;
        z-index: -1;
      }
      &_list1::before {
        content: "";
        background-image: linear-gradient(
          to top,
          rgba(1, 81, 255, 0.5),
          rgba(11, 128, 0, 0.5)
        );
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        top: 40%;
        right: 30%;
        z-index: -1;
      }
      &_list1 {
        background-image: linear-gradient(
          to bottom,
          rgba(251, 255, 1, 0.5),
          rgba(11, 128, 0, 0.5)
        );
        background-size: 550px 400px;
        border-radius: 50%;
        border: 0.5px solid rgba(78, 78, 78, 0.493);
        background-repeat: no-repeat;
        position: relative;
        z-index: 0;
        text-decoration: none;
        list-style: none;
        box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);

        &_energy1 {
          &_pictureEolienne {
            width: 90%;
            border-radius: 25px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
        }

        &_energy1::after {
          content: " l'éolien  ";
          color: black;
          font-size: 20px;
          background-color: #fff;
        }

        &_energy2 {
          &_picturePanneau {
            border-radius: 45px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
        }

        &_energy2::after {
          content: " le solaire ";
          color: black;
          font-size: 20px;
          background-color: #fff;
        }
        &_transition {
          font-size: 2em;
          font-weight: 600;
        }

        &_energy3 {
          &_pictureHydro {
            border-radius: 35px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
        }

        &_energy3::after {
          content: " l'hydro-Électricité";
          color: black;
          font-size: 20px;
          background-color: #fff;
        }
      }
      &_fossile,
      &_green {
        background: $colorCadre2;
        background-clip: padding-box;
        position: relative;
        border-radius: 15px;
        padding: 0.1em;
        margin: 0em 0.5em 0em 0.5em;
        box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
        -webkit-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
        -moz-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);

        &_egal,
        &_plus {
          font-size: 4em;
        }
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