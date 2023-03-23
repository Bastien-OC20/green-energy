<template>
  <div class="estimation__card__body_wind m-1">
    <p>
      la vitesse du vent :
      <span class="badge text-bg-info"> {{ wind }}km/h</span>
    </p>
    <div class="estimation__card__body_wind_indicator m-auto">
      <img
        :key="iconWind"
        class="iconProduct"
        :src="iconWind"
        aria-label="icon d'un vent qui souffle animé"
        alt="icon d'un vent qui souffle animé"
        title="icon d'un vent qui souffle animé"
      />
      <div class="progress">
        <div
          class="progress-wind progress-bar"
          role="progressbar"
          :aria-valuenow="wind"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="'height:' + wind + 'px'"
        />
        {{ wind }}km/h
      </div>
    </div>
    <div class="m-2">
      <p>
        La production moyenne d'électricité est de :<span class="badge text-bg-success"
          >{{ windElectricity }} kWh / jour
        </span>
        Soit
        <span class="badge text-bg-success">
          {{ (windElectricity * 365) / 10 }} kWh / an</span
        >
        avec une éolienne domestique horizontale
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WindCard",
  props: {
    iconWind: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    wind() {
      return this.getWind;
    },
    windElectricity() {
      return this.getWindElectricity;
    },
    ...mapGetters(["getWind", "getWindElectricity"]),
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";

.estimation__card_wind {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    box-shadow: inset 2px 20px 10px 2px rgba(0, 0, 0, 0.53);
    border-radius: 10px;
    .iconProduct {
      width: 38px;
    }
    .progress {
      background-color: rgba(24, 24, 24, 0.199);
      position: relative;
      transform: translateY(-140%);
      top: 92%;
      width: 40px;
      height: 100px;
      border: darken(#c6c798, 40%) 3px solid;
      box-shadow: inset 0px 4px 6px #ccc;
    }
    @keyframes grow {
      from {
        transform: scaleY(0);
      }
    }
  }
}
.widget__card_wind::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
  background: linear-gradient(to left, #919118, #fffffff0);
}
</style>
