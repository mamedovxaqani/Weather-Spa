<template>
  <section class="main">
    <search-form @addCity="addCity"></search-form>
    <main-content :cities="aboutCity" @deleteCity="deleteCity"></main-content>
  </section>
</template>

<script>
import mainContent from "./main-component-detail/mainContent.vue";
import searchForm from "./main-component-detail/searchForm.vue";
export default {
  data() {
    return {
      aboutCity: [],
    };
  },
  components: {
    searchForm,
    mainContent,
  },
  methods: {
    async addCity(city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37a30b6f437f9927d2b33f0d8474dc46`
      );
      const cityObj = await response.json();

      this.aboutCity.push(cityObj);
    },
    deleteCity(cityId) {
      this.aboutCity = this.aboutCity.filter((elem) => elem.id !== cityId);
      return this.aboutCity;
    },
  },
};
</script>

<style scoped></style>
