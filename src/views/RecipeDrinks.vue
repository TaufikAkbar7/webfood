<template>
  <div>
    <Navbar />
     <div class="row mt-5">
        <div class="col-md-4 view-recipe">
          <img :src="drink.strDrinkThumb" class="img-fluid" width="400" />
        </div>
        <div class="col-md-6">
          <h2 class="text-center">
            <strong>{{ drink.strDrink}}</strong>
          </h2>
          <h4 class="text-center">
            Kategori: <strong> {{ drink.strCategory }}</strong>
          </h4>
          <h5 class="text-judul">Ingredients</h5>
          <div class="list-ingredients">
            <ul>
              <li>{{drink.strIngredient1}}</li>
              <li>{{drink.strIngredient2}}</li>
              <li>{{drink.strIngredient3}}</li>
            </ul>
          </div>
          <div class="how-to-make">
            <h5 class="text-judul">How To Make</h5>
            <p>{{drink.strInstructions}}</p>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    name: "RecipeDrinks",
    components: {
    Navbar,
  },
  data(){
    return{
      drink: [],
    }
  },
  methods: {
    setDrink(data){
      this.drink = data;
    },
  },
  mounted() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`
      )
      .then((response) => {
        this.setDrink(response.data.drinks[0]);
        // console.log(response);
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