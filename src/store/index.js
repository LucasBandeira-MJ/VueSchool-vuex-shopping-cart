import Vuex from 'vuex'
import Vue from 'vue'

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

// import cart from './modules/cart'
// import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        checkoutStatus: null
    },

    getters,
    actions,
    mutations
})