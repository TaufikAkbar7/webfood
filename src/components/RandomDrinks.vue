<template>
    <div class="card text-center" style="width: 18rem">
      <img :src="drink.strDrinkThumb" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <router-link class="btn btn-primary" :to="'/drinks/' + drink.idDrink"
          >Lihat Recipe</router-link
        >
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomDrinks",
  props: ['drink']
};
</script>

<style lang="scss">
.favorite-drink {
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
