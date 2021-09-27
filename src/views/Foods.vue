<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Recipe Makanan</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              @keyup="searchFood"
              type="text"
              class="form-control"
              placeholder="search foods..."
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
          </div>
        </div>
      </div>
       <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="food in foods"
          :key="food.id"
        >
        <RandomFoods :food='food'/>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import RandomFoods from "@/components/RandomFoods.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    RandomFoods,
  },
  data() {
    return {
      foods: [],
      search: ''
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    },
    searchFood(){
       axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.$store.state.api_key}&query=${this.search}`
      )
      .then((response) => {
        this.setFoods(response.data.results);
        console.log(response.data.results)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    }
  },
  created() {
    this.$store.state.defaultNumberFood = 6
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${this.$store.state.api_key}&includeNutrition=true&number=${this.$store.state.defaultNumberFood}`
      )
      .then((response) => {
        this.setFoods(response.data.recipes);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
