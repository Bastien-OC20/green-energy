import { createStore } from 'vuex'

export default createStore({
  state: {
    idVille: '',
    cityName: '',
    temp: '',
    sunshine: '',
    sunHour:'',
    description: '',
    sunElectricity: '',
    windElectricity: '',
    wind:'',
    icon:'',
    error: false,
  },
  getters: {
    getIdVille: state => {
      return state.idVille
    },
    getCityName: state => {
      return state.cityName
    },
    getTemp: state => {
      return state.temp
    },
    getSunshine: state => {
      return state.sunshine
    },
    getDescription: state => {
      return state.description
    },
    getSunElectricity: state => {
      return state.sunElectricity
    },
    getWindElectricity: state => {
      return state.windElectricity
    },
    getWind: state => {
      return state.wind
    },
    getSunHour: state => {
      return state.sunHour
    },
    getError: state => {
      return state.error
    },
    getIcon : state => {
      return state.icon
    }
  },
  mutations: {
    updateIdVille(state, idVille) {
      state.idVille = idVille
    },
    updateCityName(state, cityName) {
      state.cityName = cityName
    },
    updateTemp(state, temp) {
      state.temp = temp
    },
    updateSunshine(state, sunshine) {
      state.sunshine = sunshine
    },
    updateDescription(state, description) {
      state.description = description
    },
    updateSunElectricity(state, sunElectricity) {
      state.sunElectricity = sunElectricity
    },
    updateWindElectricity(state, windElectricity) {
      state.windElectricity = windElectricity
    },
    updateWind(state, wind) {
      state.wind = wind
    },
    updateSunHour(state, sunHour) {
      state.sunHour = sunHour
    },
    updateError(state, error) {
      state.error = error
    },
    updateIcon(state, icon) {
      state.icon = icon
    },
  },
  actions: {
    setIdVille({ commit }, idVille) {
      commit('updateIdVille', idVille)
    },
    setCityName({ commit }, cityName) {
      commit('updateCityName', cityName)
    },
    setTemp({ commit }, temp) {
      commit('updateTemp', temp)
    },
    setSunshine({ commit }, sunshine) {
      commit('updateSunshine', sunshine)
    },
    setDescription({ commit }, description) {
      commit('updateDescription', description)
    },
    setSunElectricity({ commit }, sunElectricity) {
      commit('updateSunElectricity', sunElectricity)
    },
    setWindElectricity({ commit }, windElectricity) {
      commit('updateWindElectricity', windElectricity)
    },
    setWind({ commit }, wind) {
      commit('updateWindElectricity', wind)
    },
    setSunHour({ commit }, sunHour) {
      commit('updateWindElectricity',sunHour)
    },
    setError({ commit }, error) {
      commit('updateError', error)
    },
    setIcon({ commit }, icon) {
      commit('updateIcon', icon)
    },
  },
  modules: {
  }
})
