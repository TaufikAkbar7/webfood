<template>
    <div class="card" style="width: 18rem;">
        <img :src="drink.strDrinkThumb" class="card-img-top" alt="...">
        <div class="card-body text-center">
        <h5 class="card-title">{{drink.strDrink}}</h5>
         <router-link class="btn btn-primary" :to="'/drinks/' +drink.idDrink">Lihat Recipe</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardDrinks',
    props: ['drink']
}
</script>

<style lang="scss">
.favorite-drink{
    position: relative;
    top: 12rem;
    
    &-judul{
        font-family: 'Quicksand';
       font-weight: $font-tebal;
       text-align: center;
    }
}
</style>