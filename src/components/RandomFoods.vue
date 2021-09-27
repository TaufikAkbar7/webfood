<template>
    <div class="card text-center" style="width: 18rem">
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
</template>

<script>
export default {
  name: "RandomFoods",
  props: ['food']
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
