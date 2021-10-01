<template>
  <div class="card text-center" style="width: 18rem">
    <div v-if="food.image">
      <img :src="food.image" class="card-img-top" alt="..." />
    </div>
    <div v-else>
      <img src="../assets/no-img.png" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <router-link class="card-router" :to="'/foods/' + food.id">
        <h5 v-if="food.title.length > 20" class="card-title">
          {{ food.title.slice(0, 20) }}...
        </h5>
        <h5 v-else class="card-title">{{ food.title }}</h5>
      </router-link>
      <div class="card-foot text-center">
        <b-container>
          <b-row>
            <b-col class="row">
              <b-icon-alarm class="icon" />
              <p>{{ food.readyInMinutes }} minutes</p>
            </b-col>
            <b-col class="row">
              <b-icon-award class="icon" />
              <p>{{ food.healthScore }} score</p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomFoods",
  props: ["food"],
};
</script>

<style lang="scss">
.card {
  @include wrap(0px, 5px, 10px, 0px, rgba(0, 0, 0, 0.75));
  margin-left: 2rem;
  margin-top: 1rem;

  &-router {
    &:hover {
      color: $primary-color;
    }
  }

  &-title {
    color: $primary-color;
    font-weight: $font-sedang;
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }
}

.icon {
  margin-top: 2px;
}
p {
  margin-left: 5px;
}
</style>
