<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Recipe<strong> Makanan</strong></h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              @keyup="searchFood"
              type="text"
              class="form-control"
              placeholder="search foods..."
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
          v-for="food in products"
          :key="food.idMeal"
        >
        <RandomFoods :food='food'/>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import RandomFoods from "@/components/RandomFoods.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    RandomFoods,
  },
  data() {
    return {
      products: [],
      search: ''
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood(){
       axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.search}`
      )
      .then((response) => {
        this.setProduct(response.data.meals);
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
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      )
      .then((response) => {
        this.setProduct(response.data.meals);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
