import Vuex from 'vuex'
import Vue from 'vue'
import employees from './modules/employees'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        employees
    }
})
export default store;