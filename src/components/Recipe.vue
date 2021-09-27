<template>
  <div class="recipe">
    <div class="recipe-overlay">
      <div class="col recipe-wrapper">
        <h1 class="recipe-wrapper-name">BEST RECIPE COLLECTION</h1>
        <span class="recipe-wrapper-last"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          qui?</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipe",
};
</script>

<style lang="scss">
.recipe {
  width: 100%;
  height: 100vh;
  background: url("../../public/img/fried-rice-plate-white-wooden-floor.jpg");
  background-size: cover;

  &-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000, $alpha: 0.5);
  }

  &-wrapper {
    text-align: center;
    color: #fff;
    position: relative;
    top: 15rem;

    .btn {
      border-radius: 50px;
      margin-top: 0.8em;
      padding: 10px 15px 10px 15px;
    }

    &-name {
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 0.3rem;
    }

    &-last {
      letter-spacing: 0.3rem;
      font-weight: 300;
    }
  }
}
</style>
