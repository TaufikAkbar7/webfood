<template>
    <div class="card" style="width: 18rem;">
        <img :src="drink.strDrinkThumb" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{drink.strDrink}}</h5>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardDrinks',
    props: ['drink']
}
</script>

<style>

</style>