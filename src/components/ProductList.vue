<template>
  <div>
      <h1>Product List</h1>
      <img v-if="loading"
      class="loader"
      src="https://i.imgur.com/VD8mNbQ.gif" alt="" />
      <ul v-else>
          <li v-for="product in products" :key="product.title">
              {{ product.title }} - {{ product.price | currency}} - {{ product.inventory }}
              <button 
              :disabled="!productIsInStock(product)"
               @click="addProductToCart(product)">Add to Cart</button>
          </li>
      </ul>

      <hr>

      <Cart />
  </div>
</template>

<script>
import Cart from './ShoppingCart'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    components: {
        Cart
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        ...mapState({ products: state => state.products }),

        ...mapGetters({ productIsInStock: 'productIsInStock' })
        },
    created() {
        this.loading = true;
        this.fetchProducts()
        .then(() => this.loading = false)
    },
    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts',
            addProductToCart: 'addProductToCart'
        })
    }
}
</script>

<style lang="stylus">
.loader
    width 120px
    height 120px


ul
    list-style none
    margin 20px auto
    padding 0

    li
        margin 10px auto

</style>