<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageArray: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div class="row g-3">
    <div class="col-lg-4 col-md-6" v-for="(item, idx) in imageArray" :key="idx">
      <img :src="item.src" :alt="item.alt" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
