<template>
  <div class="estimation__card__body_sun m-1">
    <p>
      le taux d'ensoleillement :
      <span class="badge text-bg-warning"> {{ sunshine }}% </span>en moyenne
    </p>
    <div class="estimation__card__body_sun_indicator m-auto">
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
    <div class="m-2">
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
@import "../../assets/sass/main.scss";
</style>
