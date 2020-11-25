<template>
  <div class="drinks">
     <Navbar />
    <h2>Drinks</h2>
    <Cards />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Cards.vue'
export default {
    name: 'Drinks',
    components: {
    Navbar,
    Cards
  }
}
</script>

<style>

</style>