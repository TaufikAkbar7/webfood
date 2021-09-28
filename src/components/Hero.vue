<template>
  <!-- <div class="recipe"> -->
    <b-container fluid="lg" class="recipe">
      <b-row align-v="center" class="recipe-row">
        <b-col class="recipe-content1">
          <h1 class="recipe-content1-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          qui?</h1>
          <h4 class="recipe-content1-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          qui?</h4>
        </b-col>
          <b-col class="recipe-content2">
            <img class="recipe-content2-svg" src="../assets/cooking.svg"/>
          </b-col>
      </b-row>
    </b-container>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss">
.recipe {
  width: 100%;
  height: 100vh;

  &-row{
    height: 100vh;
  }

  

  &-content1{
    color: $primary-color;

      &-title{
      font-size: 55px;
      font-family: 'Caveat', cursive;
      font-weight: $font-tebal;
      }

      &-subtitle{
        font-size: 35;
        margin-top: 2rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: $font-tebal;
      }
  }

  &-content2{
    // background: green;

    &-svg{
      width: 500px;
      height: 450px;
      margin-left: 50px;
    }
  }
}
</style>
