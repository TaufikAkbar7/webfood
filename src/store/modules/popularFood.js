import Axios from "axios"

export default{
    state(){
        return{
            foodResults: ''
        }
    },
    getters: {
        getFoodResults: state => state.foodResults
    },
    actions: {
        async foodResults({state, rootState}){
            await Axios 
            .get(`https://www.themealdb.com/api/json/v1/${rootState.api_key}/search.php?f=a`)
            .then((response) => {
                state.foodResults = response.data.meals
            })
            .catch((error) => console.log(error));
        }
    }
}