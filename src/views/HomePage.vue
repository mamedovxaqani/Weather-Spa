<template>
  <div class="homePage">
    <header-component></header-component>
    <main-component></main-component>
  </div>
</template>

<script>
import mainComponent from "../components/mainComponent.vue";
export default {
  name: "HomePage",
  components: {
    mainComponent,
  },
};
</script>

<style scoped></style>
