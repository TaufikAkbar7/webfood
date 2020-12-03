<template>
    <div class="card text-center" style="width: 18rem;">
        <img :src="food.strMealThumb" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{food.strMeal}}</h5>
         <router-link class="btn btn-primary" :to="'/foods/' +food.idMeal">Lihat Recipe</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: ['food']
}
</script>

<style>

</style>