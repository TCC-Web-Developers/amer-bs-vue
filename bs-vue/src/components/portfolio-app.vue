<script setup>
import BaseGallery from "../components/gallery/base-gallery.vue";

const imageData = [
  {
    src: "../../src/images/portfolio-1.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-3.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-6.jpg",
    alt: "Portfolio Image",
  },
];
</script>

<template>
  <BaseGallery :imageArray="imageData" />
</template>
