<script setup>
import BaseButton from "../components/UI/base-button.vue";
</script>

<template>
  <section class="land-page">
    <div class="bg-color"></div>
    <div class="container">
      <div
        class="land-page-content text-white d-flex flex-column text-center align-items-center justify-content-center"
      >
        <h1 class="fw-bold">Welcome to Shuffle</h1>
        <p class="my-4">
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
          quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
          Similique ea voluptatem. Esse doloremque accusamus repellendus
          deleniti vel. Minus et tempore modi architecto.
        </p>
        <router-link to="/about"
          ><base-button>Get Started</base-button></router-link
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(../images/slide-3.jpg);
  background-size: cover;
  position: relative;
  z-index: 1;
  .bg-color {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.505);
  }
  .container {
    z-index: 15;
    h1 {
      font-size: 46px;
    }
  }
}
</style>
