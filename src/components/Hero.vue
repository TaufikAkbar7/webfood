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
      @include responsive(xs){
          font-size: 45px;
        }
      @include responsive(sm){
          font-size: 45px;
        }
      @include responsive(md){
          font-size: 40px;
        }
      }

      &-subtitle{
        font-size: 20px;
        margin-top: 2rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: $font-tebal;
        @include responsive(xs){
          font-size: 28px;
        }
        @include responsive(md){
          font-size: 25px;
        }
      }
  }

  &-content2{
    // background: green;

    &-svg{
      width: 500px;
      height: 450px;
      margin-left: 50px;
      @include responsive(xs){
        width: 300px;
        height: 250px;
        // margin-right: 50px;
      }
      @include responsive(sm){
        width: 500px;
        height: 400px;
        margin-left: 100px;
      }
      @include responsive(md){
        width: 400px;
        height: 350px;
      }
    }
  }
}
</style>
