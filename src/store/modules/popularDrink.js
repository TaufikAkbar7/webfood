import Axios from "axios"

export default{
    state(){
        return{
            drinkResults: ''
        }
    },
    getters: {
        getDrinkResults: state => state.drinkResults
    },
    actions: {
        async drinkResults({state, rootState}){
            await Axios 
            .get(`https://www.thecocktaildb.com/api/json/v1/${rootState.api_key}/search.php?s=mojito`)
            .then((response) => {
                state.drinkResults = response.data.drinks
            })
            .catch((error) => console.log(error));
        }
    }
}