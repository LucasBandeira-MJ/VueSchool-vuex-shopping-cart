import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product list',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'Shopping cart',
      component: ShoppingCart
    }
  ]
})
