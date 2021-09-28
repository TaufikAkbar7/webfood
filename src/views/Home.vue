<template>
  <div class="home">
    <!-- <Navbar /> -->
    <Hero />
    <Foods/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Foods from "@/components/Foods.vue";
export default {
  name: "Home",
  components: {
    Foods,
    Hero,
  },
};
</script>
<style>
body {
  overflow-x: hidden;
}
</style>
