<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2 class="col-judul">List Recipe</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col d-flex justify-content-center">
          <div class="col-wrap-input mb-3">
            <input
              v-model="search"
              @keyup="searchFood"
              type="text"
              class="col-input"
              placeholder="search foods..."
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
       <div class="row mb-4">
        <div
          class="col-md-4 mt-4 d-flex justify-content-center"
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
import RandomFoods from "@/components/RandomFoods.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
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
<style lang="scss">
.col {
  &-judul {
    color: $primary-color;
    font-weight: $font-tebal;
    text-align: center;
  }
  &-wrap-input {
    background: red;
    width: 500px;
  }
  &-input {
    width: 100%;
      padding: 0.5rem 1rem;
      border: none;
      border-bottom: $primary-color solid 1px;
      font-size: 1.2rem;
      color: rgb(130, 60, 7);
      transition: 0.2s;
      &:focus{
        outline: none;
        border-bottom: $primary-color solid 2px;
      }
}
}

</style>