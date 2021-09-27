<template>
  <div>
    <Navbar />
    <div class="row mt-5">
      <div v-if="food.image" class="col-md-4 view-recipe">
        <img :src="food.image" class="card-img-top" alt="..." />
      </div>
      <div v-else class="col-md-4 view-recipe">
        <img src="../assets/no-img.png" class="card-img-top" alt="..." />
      </div>
      <div class="col-md-6">
        <h2 class="text-center">
          <strong>{{ food.title }}</strong>
        </h2>
        <h4 class="text-center">
          Kategori:
          <strong v-for="category in food.dishTypes" :key="category">
            {{ category }}</strong
          >
        </h4>
        <h5 class="text-judul">Ingredients</h5>
        <div class="list-ingredients">
          <ul>
            <li v-for="ingredients in food.extendedIngredients" :key="ingredients.id">{{ ingredients.aisle }}</li>
          </ul>
        </div>
        <div class="how-to-make">
          <h5 v-if="food.instructions" class="text-judul">How To Make</h5>
          <p>{{ food.instructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "RecipeFoods",
  components: {
    Navbar,
  },
  data() {
    return {
      food: [],
    };
  },
  methods: {
    setFood(data) {
      this.food = data;
    },
  },
  created() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.$route.params.id}/information?apiKey=${this.$store.state.api_key}&includeNutrition=true`
      )
      .then((response) => {
        this.setFood(response.data);
        // console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>
.view-recipe {
  margin-left: 10rem;
}
.text-judul {
  font-weight: 800;
}
</style>