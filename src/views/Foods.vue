<template>
  <div class="foods">
    <Navbar />
    <h2>Foods</h2>
    <Cards />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Cards.vue'
export default {
  name: 'Foods',
  components: {
    Navbar,
    Cards
  }
}
</script>

<style>

</style>
