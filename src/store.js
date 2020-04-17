import Vue from 'vue';
import Vuex from 'vuex';
import products from './api/products';
import * as localForage from 'localforage';
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex);

localForage.config({
  driver: localForage.LOCALSTORAGE,
  name: 'vue-shop-morizo',
});

export default new Vuex.Store({
  state: {
    products: [],
    products_in_cart: [],
  },
  actions: {
    getAllProducts({ commit }) {
      products.getProducts((response) => {
        let new_products = response;

        localForage
          .getItem('productsInCart')
          .then(function(value) {
            if (value !== null) {
              // Set products in cart
              commit('setCart', value);

              new_products = new_products.map((item) => {
                if (value.indexOf(item.id) !== -1) {
                  item.isAdded = true;
                }
                return item;
              });
            }
          })
          .catch(function(err) {
            console.error('This is a localForage error', err);
          })
          .finally(() => {
            commit('setProducts', new_products);
          });
      });
    },
    toggleProductToCart({ commit }, product_id) {
      const position_in_cart = this.state.products_in_cart.indexOf(product_id);

      if (position_in_cart === -1) {
        commit('addProduct', product_id);
      } else {
        commit('removeProduct', position_in_cart);
      }

      commit('updateProduct', product_id);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCart(state, products) {
      state.products_in_cart = products;
    },
    updateProduct(state, product_id) {
      const index = state.products.findIndex((item) => item.id === product_id);
      state.products[index].isAdded = state.products[index].isAdded ? false : true;
    },

    addProduct(state, product_id) {
      const new_state = [...state.products_in_cart, product_id];

      localForage.setItem('productsInCart', new_state).catch(function(err) {
        console.error('This is a localForage error', err);
      });

      state.products_in_cart = new_state;
    },
    removeProduct(state, position_in_cart) {
      let new_state = state.products_in_cart;
      new_state.splice(position_in_cart, 1);

      localForage.setItem('productsInCart', new_state).catch(function(err) {
        console.error('This is a localForage error', err);
      });

      state.products_in_cart = new_state;
    },
  },
  plugins: [sharedMutations({ predicate: ['addProduct', 'removeProduct', 'updateProduct'] })],
});
