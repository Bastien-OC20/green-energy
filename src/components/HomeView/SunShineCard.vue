<template>
  <div class="widget__card_sun m-1">
    <p>
      le taux d'ensoleillement :
      <span class="badge text-bg-warning"> {{ sunshine }}% </span>en moyenne
    </p>
    <div class="widget__card_sun_indicator">
      <img
        :key="iconSun"
        class="iconProduct"
        :src="iconSun"
        aria-label="icon d'un soleil animé"
        alt="icon d'un soleil animé"
        title="icon d'un soleil animé"
      />
      <div class="progress">
        <div
          class="progress-sun progress-bar"
          role="progressbar"
          :aria-valuenow="sunshine"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="'height:' + sunshine + 'px'"
        >
          {{ sunshine }}%
        </div>
      </div>
    </div>
    <div>
      <p>
        La production moyenne d'électricité est de :<span class="badge text-bg-success"
          >{{ sunElectricity }} kWc / jour</span
        >
        Soit
        <span class="badge text-bg-success">
          {{ sunElectricity * 35 * 15 }} kWc / an</span
        >
        pour une puissance comprise en 300 Wc et 400 Wc par panneau.
      </p>

      <em
        ><i class="fas fa-quote-left fa-xs text-primary" />

        Pour un toit de <span class="badge text-bg-success">20 m²</span> et une production
        de <span class="badge text-bg-success">3500 kWh</span> d’électricité par an
        (consommation moyenne pour un ménage de trois personnes), il faudra compter sur
        <span class="badge text-bg-success">± 15</span> panneaux.<i
          class="fas fa-quote-right fa-xs text-primary"
      /></em>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SunshineCard",
  props: {
    iconSun: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    sunshine() {
      return this.getSunshine;
    },
    sunHour() {
      return this.getSunHour;
    },
    sunElectricity() {
      return this.getSunElectricity;
    },
    ...mapGetters(["getSunshine", "getSunElectricity", "getSunHour"]),
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/scss/utils/variables.scss";

.widget__card_sun {
  background: $colorCadre2;
  background-clip: padding-box;
  position: relative;
  border-radius: 15px;
  padding: 0.5em;
  margin-bottom: 10em;
  box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
  &_indicator {
    width: 100px;
    height: 150px;
    padding: 1em 0em 1em 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    box-shadow: inset 2px 20px 10px 2px rgba(0, 0, 0, 0.53);
    border-radius: 10px;
    .iconProduct {
      width: 38px;
      background: transparent;
      background-color: transparent;
    }
    .progress {
      background-color: rgba(24, 24, 24, 0.199);
      position: relative;
      transform: translateY(-140%);
      top: 92%;
      width: 40px;
      height: 100px;
      border: darken(#98a7c7, 40%) 3px solid;
      box-shadow: inset 0px 4px 6px #ccc;
      &-sun {
        background-color: #f5c732;
        position: absolute;
        bottom: 0;
        width: 38px;
        height: 40%;
        border-top: 6px solid #fff;
        box-sizing: border-box;
        animation: grow 1.5s ease-out forwards;
        transform-origin: bottom;
        box-shadow: inset 0px 4px 6px rgba(100, 100, 100, 0.6);
        text-align: center;
      }
    }
    @keyframes grow {
      from {
        transform: scaleY(0);
      }
    }
  }
}
.widget__card_sun::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
  background: linear-gradient(to right, #919118, #fffffff0);
}
</style>
