import Vue from 'vue'
import Vuex from 'vuex'
import popularFood from './modules/popularFood'
import popularDrink from './modules/popularDrink'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        //insert modules
        popularFood,
        popularDrink,
    },
    state(){
        return{
            api_key: '1'
        }
    },
});

export default store