<template>
  <b-container>
    <b-row class="wrap-component mt-5 mb-5" align-h="center">
      <b-col class="mb-3">
        <b-button href="/" class="ml-5" variant="warning">
          <b-icon-arrow-left-circle>
          </b-icon-arrow-left-circle>
          Back
          </b-button>
      </b-col>
      <b-col
        cols="10"
        class="text-left rounded wrap"
        align-h="center"
        align-self="center"
      >
        <div class="mt-3">
          <img
            v-if="food.image"
            :src="food.image"
            class="card-img-top"
            alt="..."
          />
          <img
            v-else
            src="../assets/no-img.png"
            class="card-img-top"
            alt="..."
          />
        </div>
        <b-col class="mt-5 col" cols="10">
          <h2 class="text-center">
            <strong>{{ food.title }}</strong>
          </h2>
          <!-- <h4 class="text-judul">Kategori:</h4>
          <div v-if="food.dishTypes.length > 1">
            <span v-for="category in food.dishTypes" :key="category">
              {{ category }},</span
            >
          </div>
          <div v-else>
            <span v-for="category in food.dishTypes" :key="category">
              {{ category }}</span
            >
          </div> -->
          <h5 class="text-judul mt-5">Ingredients</h5>
          <div class="list-ingredients ml-4">
            <ul>
              <li
                v-for="ingredients in food.extendedIngredients"
                :key="ingredients.id"
              >
                {{ ingredients.aisle }}
              </li>
            </ul>
          </div>
          <div class="how-to-make">
            <h5 v-if="food.instructions" class="text-judul">How To Make</h5>
            <p>{{ food.instructions }}</p>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "RecipeFoods",
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

<style lang="scss">
.view-recipe {
  margin-left: 10rem;
}
.text-judul {
  font-weight: 800;
}
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.col {
  margin-left: 4.5rem;
}
.wrap {
  @include wrap(0px, 5px, 10px, 0px, $primary-color);
}
.wrap-component {
  display: flex;
  flex-direction: column;
}

</style>