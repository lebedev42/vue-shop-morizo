<template>
  <div id="app">
    <Header app-name="Baguette-shop" />
    <ProductsList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ProductsList from './components/ProductsList.vue';

export default {
  name: 'App',
  components: {
    Header,
    ProductsList,
  },

  created() {
    this.$store.dispatch('getAllProducts');
  },
};
</script>

<style>
html,
body {
  font-family: Arial, sans-serif;
  line-height: 1;
  background: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
