<template>
<div class="favorite-food mt-5 container">
      <h2 class="favorite-food-judul">Favorite Foods</h2>
  <div class="row">
    <div
      class="card text-center"
      style="width: 18rem"
      v-for="food in computedFoodResults"
      :key="food.id"
    >
      <div v-if="food.image">
        <img :src="food.image" class="card-img-top" alt="..." />
      </div>
      <div v-else>
        <img src="../assets/no-img.png" class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ food.title }}</h5>
        <router-link class="btn btn-primary" :to="'/foods/' + food.id"
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
      this.$store.state.defaultNumberFood = 6
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
  // background: blue;

  &-judul {
    font-family: "Quicksand";
    font-weight: $font-tebal;
    text-align: center;
    margin-bottom: 3rem;
  }

  .row {
    padding-left: 5rem;
    
    .card {
      @include wrap(1px, 1px, 2px, #fff);
      margin-left: 2rem;
    }
  }
}
</style>
