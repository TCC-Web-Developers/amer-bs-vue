<script setup>
import BaseGallery from "../components/gallery/base-gallery.vue";

const imageData = [
  {
    src: "../../src/images/portfolio-1.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-2.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-3.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-4.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-5.jpg",
    alt: "Portfolio Image",
  },
  {
    src: "../../src/images/portfolio-6.jpg",
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
  {
    src: "../../src/images/portfolio-9.jpg",
    alt: "Portfolio Image",
  },
];
</script>

<template>
  <BaseGallery :imageArray="imageData" />
</template>
