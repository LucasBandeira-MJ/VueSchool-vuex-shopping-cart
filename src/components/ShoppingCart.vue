<template>
  <div>
      <h1>Shopping Cart</h1> 
      <ul>
          <li v-for="product in products" :key="product.id">
              {{ product.title }} - {{ product.price | currency}} - {{ product.quantity }}
          </li>
      </ul>
      <p>Total: {{total | currency}}</p>

      <button :disabled="products.length === 0"  @click="checkout">Checkout</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
 
export default {
    name: 'Cart',
    computed: {
        ...mapGetters({ 
            products: 'cartProducts',
            total: 'cartTotal'
            })
    },
    methods: {
        ...mapActions(['checkout'])
}}
</script>

<style>

</style>