import Axios from "axios"

export default {
    state() {
        return {
            foodResults: ''
        }
    },
    getters: {
        getFoodResults: state => state.foodResults
    },
    actions: {
        async foodResults({ commit, rootState }) {
            await Axios
                .get(`https://api.spoonacular.com/recipes/random?apiKey=${rootState.api_key}&includeNutrition=true&number=${rootState.defaultNumberFood}`)
                .then((response) => {
                    commit('setFood', response.data.recipes)
                    console.log(response)
                })
                .catch((error) => console.log(error));
        }
    },
    mutations: {
        setFood: (state, foods) => (state.foodResults = foods)
    }
}