<template>
  <header class="page_header">
    <div class="page_header__title">
      <h1 class="app_name">
        <a href="/">{{ appName }}</a>
      </h1>
      <Logo />
    </div>
    <Cart />
  </header>
</template>

<script>
import Cart from './Cart.vue';
import Logo from './Logo.vue';

export default {
  name: 'Header',
  props: {
    appName: String,
  },
  components: {
    Cart,
    Logo,
  },
};
</script>

<style scoped>
.page_header {
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  color: #acacac;

  display: flex;
  align-items: center;
  padding: 0 30px;
}
.page_header__title {
  position: relative;
}

.app_name {
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 23px;
}
.app_name a {
  color: #2c0000;
  text-decoration: none;
}
.app_name a:hover {
  text-decoration: none;
}
</style>
