<script setup>
import BaseGallery from "../components/gallery/base-gallery.vue";

const imageData = [
  {
    src: "../../src/images/portfolio-4.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-7.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-8.jpg",
    alt: "Portfolio Image",
  },
];
</script>

<template>
  <BaseGallery :imageArray="imageData" />
</template>
