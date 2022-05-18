<script setup>
import { RouterView } from "vue-router";
import TheNav from "./components/layout/TheNav.vue";
// import LandingPage from "./views/LandingPage.vue";
</script>

<template>
  <TheNav />

  <RouterView />
</template>

<style lang="scss">
@import "./assets/scss/custom.scss";
</style>
