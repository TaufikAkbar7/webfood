<template>
  <div>
    <Navbar />
     <div class="row mt-5">
        <div class="col-md-4 view-recipe">
          <img :src="food.strMealThumb" class="img-fluid" width="400" />
        </div>
        <div class="col-md-6">
          <h2 class="text-center">
            <strong>{{ food.strMeal}}</strong>
          </h2>
          <h4 class="text-center">
            Kategori: <strong> {{ food.strCategory }}</strong>
          </h4>
          <h5 class="text-judul">Ingredients</h5>
          <div class="list-ingredients">
            <ul>
              <li>{{food.strIngredient1}}</li>
              <li>{{food.strIngredient2}}</li>
              <li>{{food.strIngredient3}}</li>
              <li>{{food.strIngredient4}}</li>
              <li>{{food.strIngredient5}}</li>
              <li>{{food.strIngredient6}}</li>
              <li>{{food.strIngredient7}}</li>
              <li>{{food.strIngredient8}}</li>
            </ul>
          </div>
          <div class="how-to-make">
            <h5 class="text-judul">How To Make</h5>
            <p>{{food.strInstructions}}</p>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    name: "RecipeFoods",
    components: {
    Navbar,
  },
  data(){
    return{
      food: [],
    }
  },
  methods: {
    setFood(data){
      this.food = data;
    },
  },
  mounted() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`
      )
      .then((response) => {
        this.setFood(response.data.meals[0]);
        // console.log(this.food);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
}
</script>

<style>
.view-recipe{
  margin-left: 10rem;
}
.text-judul{
  font-weight: 800;
}
</style>