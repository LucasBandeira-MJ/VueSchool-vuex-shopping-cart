import shop from "@/api/shop"

export default {
    
    pushProductToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity: 1
        })
    },

    incrementItemQuantity(state, cartItem) { cartItem.quantity++; },

    setCheckoutStatus(state, status) { state.checkoutStatus = status },

    emptyCart(state) { state.cart = [] },

    setProducts(state, products) { state.products = products },

    decrementProductInventory(state, product) { product.inventory--; }
}