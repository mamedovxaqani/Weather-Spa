<template>
  <section class="thisPage">
    <h1 class="h4 font-weight-bold">{{ name }}</h1>
  </section>

  <router-link :to="{ name: 'backHome' }">Back To Home</router-link>
</template>

<script>
export default {
  name: "ThisCityPage",
  props: ["name"],
};
</script>

<style scoped></style>
