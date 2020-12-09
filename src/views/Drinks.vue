<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Recipe<strong> Minuman</strong></h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              @keyup="searchDrink"
              type="text"
              class="form-control"
              placeholder="search drinks..."
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="drink in drinks"
          :key="drink.idDrink"
        >
          <RandomDrinks :drink="drink" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import RandomDrinks from "@/components/RandomDrinks.vue";
import axios from "axios";

export default {
  name: "Drinks",
  components: {
    Navbar,
    RandomDrinks,
  },
  data() {
    return {
      drinks: [],
      search: ''
    };
  },
  methods: {
    setProduct(data) {
      this.drinks = data;
    },
    searchDrink(){
       axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.search}`
      )
      .then((response) => {
        this.setProduct(response.data.drinks);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    }
  },
  mounted() {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"
      )
      .then((response) => {
        this.setProduct(response.data.drinks);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
