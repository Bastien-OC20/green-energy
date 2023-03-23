<template>
  <section class="estimation">
    <div class="estimation_header col-md-6 p-4">
      <h4 class="estimation_header_title">Estimation :</h4>
      <em class="estimation_header_explain"
        ><i class="fas fa-quote-left fa-sm text-primary" /> Pour vous aider dans votre
        reflexion, renseigner le champ ci-dessus, en indiquant le nom de la ville de votre
        choix, pour avoir une estimation de votre potentielle production éco-énergétique.
        <i class="fas fa-quote-right fa-sm text-primary explain"
      /></em>
    </div>
    <article v-if="!idVille" class="estimation__form">
      <form>
        <div class="estimation__form-group">
          <input
            id="city "
            v-model="cityName"
            class="estimation__form-group__field"
            type="text"
            required="required"
            aria-describedby="Nom de votre ville"
            placeholder="Entrez votre ville"
            @input="validateCity"
            :class="{ 'is-invalid': error }"
          />
          <label for="city" class="estimation__form-group__label">Nom de ville</label>
          <div class="estimation__form-group__frame">
            <button class="custom-btn btn-5" type="submit" @click="GetWeatherData()">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </article>

    <article v-else class="estimation__card">
      <div
        class="estimation__card_header bg-light col-2 rounded justify-content-center m-2"
      >
        <h3
          class="estimation__card_header_title m-2"
          :alt="cityName"
          :cityName="cityName"
          :aria-label="cityName"
          :aria-labelledby="cityName"
        >
          {{ cityName }}
        </h3>
        <div class="mt-2">
          <a type="submit" class="btnRefresh" @click="resetCity"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="bi bi-arrow-clockwise btnRefresh_icon"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              /></svg
          ></a>
        </div>
      </div>

      <div class="estimation__card">
        <div class="estimation__card__body">
          <SunshineCard :icon-sun="iconSun" class="col-6" />
          <WindCard :icon-wind="iconWind" class="col-6" />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
// Modules ....................................
import axios from "axios";
import Swal from "sweetalert2";
import store from "../../store/index.js";

//Components ..............................................
import SunshineCard from "./SunShineCard.vue";
import WindCard from "./WindCard.vue";

export default {
  store,
  name: "InfoEnergyProduct",
  components: {
    SunshineCard,
    WindCard,
  },
  props: {},

  data() {
    return {
      cityRegex: /^(?=.{3,50}$)[a-zA-Z\u00C0-\u017F\s]+(?:[-'][a-zA-Z\u00C0-\u017F]+)*$/,
      error: false,
      weatherStyle: {},
      idVille: "",
      icon: "",
      description: "",
      sunHour: "",
      cityName: "",
      wind: "",
      iconSun: require("../../assets/gif/soleil.gif"),
      iconWind: require("../../assets/gif/venteux.gif"),
    };
  },

  methods: {
    async GetWeatherData() {
      if (!this.cityRegex.test(this.cityName)) {
        this.$store.commit("setError", true);
        Swal.fire({
          title: "Nom de ville incorrect",
          text: "Avez-vous entré des caractères spéciaux ?",
          type: "question",
        });
        return;
      }
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=fr&appid=379a51582fe63ed2ee09a821404e11ad`
        );
        this.$store.commit("updateError", false);
        const weatherData = response.data;
        // Recurpère les informations météorologiques nécessaires
        // console.log(weatherData);
        const idVille = weatherData.id;
        const maxTemp = Math.trunc(weatherData.main.temp_max);
        const minTemp = Math.trunc(weatherData.main.temp_min);
        const temp = Math.trunc(weatherData.main.temp);
        const icon = weatherData.weather[0].icon;
        const description = weatherData.weather[0].description;
        const sunRise = new Date(weatherData.sys.sunrise * 1000);
        const sunSet = new Date(weatherData.sys.sunset * 1000);
        const sunHour = sunSet - sunRise;
        const wind = weatherData.wind.speed;

        // Affiche les informations météorologiques
        this.idVille = idVille;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.icon = require("../../assets/svg/" + icon + ".svg");
        this.description = description;
        this.sunHour = sunHour;
        this.wind = wind;

        // Stocke les informations météorologiques dans le store de vuex
        this.$store.commit("updateCityName", this.cityName);
        this.$store.commit("updateIdVille", idVille);
        this.$store.commit("updateTemp", temp);
        this.$store.commit("updateIcon", require("../../assets/svg/" + icon + ".svg"));
        this.$store.commit("updateDescription", description);
        this.$store.commit("updateSunHour", sunHour);
        this.$store.commit("updateWind", wind);

        const hours = sunHour / 1000 / 60 / 60; // Convertit la durée en heures
        const sunshine = Math.trunc((hours / 24) * 100); // Calcule le taux d'ensoleillement en pourcentage
        this.$store.commit("updateSunshine", sunshine);

        const sunElectricity = sunshine * 0.15;
        this.$store.commit("updateSunElectricity", Math.trunc(sunElectricity));

        const windElectricity = 0.15 * 3 * (2.15 * Math.pow(wind, 2));
        this.$store.commit("updateWindElectricity", Math.trunc(windElectricity));
      } catch (error) {
        if (error.response.status === 404) {
          this.$store.commit("setError", true);
          Swal.fire({
            title: "Ville non trouvée",
            text: "Avez-vous écris un nom de ville existant ?",
            type: "question",
          });
        } else {
          console.error(error);
        }
      }
    },

    resetCity() {
      this.cityName = "";
      this.$store.commit("resetCityData");
      this.idVille = "";
      this.$store.commit("resetIdVille");
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";

.invalid {
  border: 2px solid red;
}
</style>
