<template>
  <div class="content">
    <!-- <div class="card-group">
      <div class="card" v-for="(item, index) in cities" :key="index">
        <div class="card-body">
          <h5 class="card-title">City: {{ item.name }}</h5>
          <p
            class="card-text"
            v-for="(value, index) in item.weather"
            :key="index"
          >
            weather in City: {{ value.description }}
          </p>

          <div class="btn-group">
            <button class="btn btn-primary">Read More</button>
            <button class="btn btn-danger" @click="deleteCity(item.id)">
              Delete the city
            </button>
            <button class="btn btn-success">update weather data now.</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-sm-4">
        <div
          class="card text-center"
          v-for="(item, index) in cities"
          :key="index"
        >
          <div class="card-body">
            <h5 class="card-title">City: {{ item.name }}</h5>
            <p
              class="card-text"
              v-for="(value, index) in item.weather"
              :key="index"
            >
              Weater on this city: {{ value.main }}
            </p>

            <div class="btn-group">
              <router-link
                :to="{ name: 'ThisCity', params: { name: item.name } }"
                class="btn btn-primary"
                >Read More</router-link
              >
              <button class="btn btn-danger" @click="deleteCity(item.id)">
                Delete the city
              </button>
              <button class="btn btn-success">update weather data now.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainContent",
  props: ["cities"],
  methods: {
    deleteCity(name) {
      this.$emit("deleteCity", name);
    },
  },
};
</script>

<style scoped></style>
