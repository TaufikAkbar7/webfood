<template>
<div class="favorite-food mt-5">
      <h2 class="favorite-food-judul">Favorite Foods</h2>
  <div class="row">
    <div
      class="card text-center"
      style="width: 18rem"
      v-for="food in computedFoodResults"
      :key="food.idMeal"
    >
      <img :src="food.strMealThumb" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ food.strMeal }}</h5>
        <router-link class="btn btn-primary" :to="'/foods/' + food.idMeal"
          >Lihat Recipe</router-link
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PopularFoods",
  computed: {
    computedFoodResults() {
      return this.$store.getters.getFoodResults;
    },
  },
  methods: {
    getFoodResults() {
      this.$store.dispatch("foodResults");
    },
  },
  created() {
    this.getFoodResults();
  },
};
</script>

<style lang="scss">
.favorite-food {
  position: relative;
  top: 5rem;
  padding: 1rem;

  &-judul {
    font-family: "Quicksand";
    font-weight: $font-tebal;
    text-align: center;
  }

  .row {
    .card {
      @include wrap(1px, 1px, 2px, #fff);
    }
  }
}
</style>
