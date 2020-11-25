<template>
    <div class="card" style="width: 18rem;">
        <img :src="food.image" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{food.title}}</h5>
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