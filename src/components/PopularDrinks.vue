<template>
 <div class="favorite-drink">
    <h2 class="favorite-drink-judul">Favorite Drinks</h2>
  <div class="row">
    <div
      class="card"
      style="width: 18rem"
      v-for="drink in computedDrinkResults"
      :key="drink.idDrink"
    >
      <img :src="drink.strDrinkThumb" class="card-img-top" alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <router-link class="btn btn-primary" :to="'/drinks/' + drink.idDrink"
          >Lihat Recipe</router-link
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PopularDrinks",
  computed: {
    computedDrinkResults() {
      return this.$store.getters.getDrinkResults;
    },
  },
  methods: {
    getDrinkResults() {
      this.$store.dispatch("drinkResults");
    },
  },
  created() {
    this.getDrinkResults();
  },
};
</script>

<style lang="scss">
.favorite-drink {
  position: relative;
  top: 12rem;

  &-judul {
    font-family: "Quicksand";
    font-weight: $font-tebal;
    text-align: center;
  }
}
</style>
