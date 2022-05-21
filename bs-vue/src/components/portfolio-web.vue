<script setup>
import BaseGallery from "../components/gallery/base-gallery.vue";

const imageData = [
  {
    src: "../../src/images/portfolio-2.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-5.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-9.jpg",
    alt: "Portfolio Image",
  },
];
</script>

<template>
  <BaseGallery :imageArray="imageData" />
</template>
