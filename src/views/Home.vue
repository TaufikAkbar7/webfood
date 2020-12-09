<template>
  <div class="home">
    <Navbar />
    <Recipe />
    <PopularFoods />
    <PopularDrinks />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PopularFoods from "@/components/PopularFoods.vue";
import PopularDrinks from "@/components/PopularDrinks.vue";
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    PopularFoods,
    PopularDrinks,
    Recipe,
  },
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
}
</style>
