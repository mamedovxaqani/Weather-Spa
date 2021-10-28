<template>
  <section class="search-form">
    <div class="form-group">
      <label for="">
        Cities
        <input
          type="text"
          placeholder="Search and add a city"
          class="form-control"
          v-model="city"
        />
      </label>
    </div>

    <button class="btn btn-primary" @click="addCity">Add city</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      citiesArray: [],
    };
  },
  methods: {
    addCity() {
      this.$emit("addCity", this.city);
    },
  },
};
</script>

<style scoped></style>
