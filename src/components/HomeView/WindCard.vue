<template>
  <div class="widget__card_wind m-1">
    <p :key="wind" :wind="wind">
      la vitesse du vent :
      <span class="badge text-bg-info"> {{ wind }}km/h</span>
    </p>
    <div class="widget__card_wind_indicator">
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
      </div>
    </div>
    <div>
      <p :key="windElectricity" :windElectricity="windElectricity">
        La production moyenne d'électricité est de :<span class="badge text-bg-success"
          >{{ Math.trunc(windElectricity) }} kWh / jour
        </span>
        Soit
        <span class="badge text-bg-success">
          {{ (Math.trunc(windElectricity) * 365) / 10 }} kWh / an</span
        >
        avec une éolienne domestique horizontale
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindCard",
  props: {
    wind: {
      type: Number,
      required: true,
    },
    windElectricity: {
      type: Number,
      required: true,
    },
    iconWind: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/scss/utils/variables.scss";

.widget__card_wind {
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
      &-wind {
        background-color: #178ae7;
        position: absolute;
        bottom: 0;
        width: 40px;
        height: 20%;
        border-top: 6px solid #fff;
        box-sizing: border-box;
        animation: grow 1.5s ease-out forwards;
        transform-origin: bottom;
        box-shadow: inset 0px 4px 6px rgba(100, 100, 100, 0.6);
      }
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
