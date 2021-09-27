import Vue from 'vue'
import Vuex from 'vuex'
import popularFood from './modules/popularFood'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        //insert modules
        popularFood,
    },
    state(){
        return{
            api_key: '25daab54e8b342a7af2bed4da57f0f2f',
            defaultNumberFood: 0
        }
    },
});

export default store