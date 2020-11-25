<template>
  <div class="home">
    <div class="container">
      <Navbar />
      <LandingPage />
      <div class="favorite-food mt-5">
        <h2 class="favorite-food-judul">Favorite Foods</h2>
        <div class="row mt-2">
          <div
            class="col-md-3 mt-5 text-center d-flex justify-content-center"
            v-for="food in foods"
            :key="food.id"
          >
            <Cards :food="food" />
          </div>
        </div>
      </div>
      <div class="favorite-drink">
        <h2 class="favorite-drink-judul">Favorite Drinks</h2>
        <div class="row mt-2">
          <div
            class="col-md-3 mt-5 text-center d-flex justify-content-center"
            v-for="drink in drinks"
            :key="drink.idDrink"
          >
            <CardDrinks :drink="drink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import LandingPage from "@/components/LandingPage.vue";
import Cards from "@/components/Cards.vue";
import CardDrinks from "@/components/CardDrinks.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    LandingPage,
    Cards,
    CardDrinks
  },
  data() {
    return {
      foods: [],
      drinks: []
    };
  },
  methods: {
    setMakanan(data) {
      this.foods = data;
    },
    setMinuman(data){
      this.drinks = data;
    }
  },
  mounted() {
    //Foods
    axios
      .get(
        "https://api.spoonacular.com/food/menuItems/search?query=pizza&number=4&apiKey=25daab54e8b342a7af2bed4da57f0f2f"
      )
      .then((response) => {
        this.setMakanan(response.data.menuItems);
      })
      .catch((error) => {
        console.log(error);
      });
    //Drinks
     axios
     .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka")
     .then((response) => {
        this.setMinuman(response.data.drinks);
     })
     .catch((error) => {
       console.log(error);
     })
  },
};
</script>
