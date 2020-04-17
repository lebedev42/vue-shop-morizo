<template>
  <main class="main_container">
    <div class="page_title">Pictures for sale</div>

    <section class="products_list">
      <article class="product_item" v-for="product in products" :key="product.id">
        <img class="product_item__img" :src="product.img_url" :alt="product.title" />
        <h2 class="product_item__title">Author: {{ product.title }}</h2>
        <div class="product_item__price">Price: ${{ product.price }}</div>
        <button class="product_item__btn" v-bind:class="{ active: product.isAdded }" @click="toggleProductToCart(product.id)">
          <span v-if="product.isAdded">Remove from cart</span>
          <span v-else>Add to cart</span>
        </button>
      </article>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductsList',

  computed: mapState({
    products: (state) => state.products,
  }),
  methods: mapActions(['toggleProductToCart']),
};
</script>

<style scoped>
.main_container {
  padding: 40px 30px;
}

.page_title {
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: bold;
  color: #757575;

  margin-bottom: 30px;
}

.products_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 15px;

  margin-bottom: 15px;
}

.product_item {
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  font-family: 'Roboto', sans-serif;
  padding: 21px;
}

.product_item__img {
  width: 100%;
  height: auto;
}

.product_item__title {
  font-weight: 400;
  font-size: 13px;
  font-style: italic;
  color: #757575;
  margin: 10px 0;
}
.product_item__price {
  margin: 20px 0;
  text-align: center;
}

.product_item__btn {
  display: block;
  height: 48px;
  margin: 0 auto;
  padding: 10px 30px;
  border: 0;
  border-radius: 4px;
  outline: none;
  color: #ffffff;
  background-color: #ef0000;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}
.product_item__btn.active {
  color: #ef0000;
  background-color: #ffffff;
  border: 1px solid #ef0000;
}
</style>
