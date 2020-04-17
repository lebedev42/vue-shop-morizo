<template>
  <img @click="clickLogo()" src="../assets/logo.png" class="app_logo" :class="{ is_loading: isLoading, is_clicked: isClicked }" alt="Logotype" />
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      isLoading: true,
      isClicked: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  },

  methods: {
    clickLogo() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
.app_logo {
  position: absolute;
  top: -5px;
  left: 192px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  transition: 1.5s left cubic-bezier(0, 1, 1, 1);
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: 4.5;
  animation-timing-function: linear;
}
.app_logo.is_loading {
  left: 9999px;
}
.app_logo.is_clicked {
  top: -15px;
  transition: 1s top ease-out-in;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
