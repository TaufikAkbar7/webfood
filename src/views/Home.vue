<template>
  <div class="home">
    <Navbar />
    <Recipe />
    <PopularFoods />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PopularFoods from "@/components/PopularFoods.vue";
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    PopularFoods,
    Recipe,
  },
};
</script>
<style>
body {
  overflow-x: hidden;
}
</style>
