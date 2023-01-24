<template>
  <section class="widget">
    <div class="widget_header">
      <h4 class="widget_header_title">Estimation :</h4>
      <em class="widget_header_explain"
        ><i class="fas fa-quote-left fa-sm text-primary" /> Pour vous aider dans votre
        reflexion, renseigner le champ ci-dessus, en indiquant le nom de la ville de votre
        choix, pour avoir une estimation de votre potentielle production éco-énergétique.
        <i class="fas fa-quote-right fa-sm text-primary explain"
      /></em>
    </div>
    <article v-if="!idVille" class="widget__form">
      <form @submit="ajouter">
        <div class="widget__form-group">
          <input
            id="city"
            v-model="cityName"
            class="widget__form-group__field"
            type="text"
            required="required"
            aria-describedby="Nom de votre ville"
            placeholder="Entrez votre ville"
            @input="validateCity"
            :class="{ error: invalidCity }"
          />
          <label for="name" class="widget__form-group__label">Nom de ville</label>
          <div class="widget__form-group__frame">
            <button class="custom-btn btn-5" type="submit" @click="ajouter">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </article>

    <article v-else class="widget__card col-12">
      <div class="widget__card_header col-12">
        <h3
          class="widget__card_header_title"
          :alt="cityName"
          :cityName="cityName"
          :aria-label="cityName"
          :aria-labelledby="cityName"
        >
          {{ cityName }}
        </h3>
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

      <div class="widget__card_body col-12">
        <!-- <ImageCard
        :icon="icon"
        :key="icon"
        :aria-label="description + '  ' + temp + '°'"
        :alt="description + '  ' + temp + '°'"
        :title="description + '  ' + temp + '°'"
        :description="description"
        :temp="temp"
        :cityName="cityName"
        class="widget-meteo__card_body_Animaticon col-2"
      >
      </ImageCard>

      

      <TemperatureCard
        :temp="temp"
        :maxTemp="maxTemp"
        :minTemp="minTemp"
        class="widget-meteo__card_body_temp col-2"
      >
      </TemperatureCard> -->

        <SunshineCard
          :key="{ sunshine, sunElectricity, iconSun }"
          :sunshine="sunshine"
          :sun-electricity="sunElectricity"
          :icon-sun="iconSun"
          class="widget__card_body_sun col-6"
        />
        <WindCard
          :key="{ wind, windElectricity, iconWind }"
          :wind="wind"
          :wind-electricity="windElectricity"
          :icon-wind="iconWind"
          class="widget__card_body_wind col-6"
        />
      </div>
    </article>
    <article v-if="invalidCity" class="error-message">
      <h4>Hélas ! La ville est introuvable !</h4>
      <p>Le nom de la ville n'est pas valide ! Pensez à vérifier son orthographe</p>
      <p> 
        <ul>
          <li>le nom  doit comporter au moins 3 caractères</li>
          <li>Les chiffres sont eclus</li>
        </ul>
      </p>
    </article>
  </section>
</template>

<script>
// Modules ....................................
import axios from "axios";

//Components ..............................................
//import TemperatureCard from "./MeteoCard/TemperatureCard.vue";
//import ImageCard from "./MeteoCard/ImageCard.vue";
import SunshineCard from "./SunShineCard.vue";
import WindCard from "./WindCard.vue";

export default {
  name: "InfoEnergyProduct",
  components: {
    //TemperatureCard,
    //ImageCard,
    SunshineCard,
    WindCard,
  },
  props: {},
  data() {
    return {
      showModal: "false",
      invalidCity: false,
      cityRegex: /^(?=.{3,50}$)[a-zA-Z\u00C0-\u017F\s]+(?:[-'][a-zA-Z\u00C0-\u017F]+)*$/,
      //error: "",
      weatherStyle: {},
      idVille: "",
      maxTemp: "",
      temp: "",
      minTemp: "",
      icon: "",
      description: "",
      sunHour: "",
      clock: "",
      titleMeteo: "",
      cityName: "",
      iconSun: require("../../assets/gif/soleil.gif"),
      iconWind: require("../../assets/gif/venteux.gif"),
    };
  },

  methods: {
    validateCity() {
      if (!this.cityRegex.test(this.cityName)) {
        this.invalidCity = true;
      } else {
        this.invalidCity = false;
      }
    },

    ajouter() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=fr&appid=379a51582fe63ed2ee09a821404e11ad`
        )
        .then((response) => {
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
          this.sunRise = sunRise;
          this.sunSet = sunSet;
          this.sunHour = sunHour;
          this.wind = wind;

          // console.log(this.sunHour, this.idVille);

          const hours = sunHour / 1000 / 60 / 60; // Convertit la durée en heures
          const sunshine = Math.trunc((hours / 24) * 100); // Calcule le taux d'ensoleillement en pourcentage
          this.sunshine = sunshine;
          // console.log(sunshine);

          const sunElectricity = sunshine * 0.15;
          this.sunElectricity = sunElectricity;

          const windElectricity = (0.15 * 3) ^ (2.15 * Math.pow(wind, 2));
          this.windElectricity = windElectricity;

          localStorage.setItem("cityName", this.cityName);
          localStorage.setItem("Temperature", this.temp);
          localStorage.setItem("Description", this.description);
          localStorage.setItem("sunProduction", this.sunElectricity);
          localStorage.setItem("windProduction", this.windElectricity);

          this.error = null;
        })
        .catch(() => {
          // Gérez les erreurs potentielles ici
          this.weatherData = null;
          this.error = "Nom de ville invalide";
          this.showModal = true;
          // console.error(`message erreur : ${err}`);
        });
    },
    resetCity() {
      this.cityName = "";
      this.idVille = "";
      localStorage.removeItem("cityName", this.cityName);
      localStorage.removeItem("Temperature", this.temp);
      localStorage.removeItem("Description", this.description);
      localStorage.removeItem("sunProduction", this.sunElectricity);
      localStorage.removeItem("windProduction", this.windElectricity);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/scss/layout/layout.scss";
@import "../../assets/sass/scss/utils/variables.scss";
@import "../../assets/sass/scss/utils/boutons.scss";

.widget {
  &_header {
    background: $colorCadre3;
    box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
    -webkit-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: 2px 20px 14px 5px rgba(0, 0, 0, 0.53);
    &_explain {
      font-weight: lighter;
    }
  }
  &_header::before {
    content: "";
    background: linear-gradient(to bottom, #aa5607, #fffffff0);
  }
  &__form {
    &-group {
      &__field {
        font-family: inherit;
        font-size: 1.3rem;
        color: rgb(68, 67, 67);
        background: transparent;
        transition: border-color 0.2s;
      }
      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ &__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
      &__label {
        color: grey;
      }

      &__field:focus {
        ~ &__label {
          color: $textUnderline;
          font-weight: 700;
        }

        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(
          to right,
          rgba(28, 66, 192, 0.623),
          rgb(46, 165, 145)
        );
        border-image-slice: 1;
      }
    }
  }
}
</style>
