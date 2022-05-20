<script setup>
import { defineProps } from "vue";

import BaseCardBody from "../atoms/base-card-body.vue";
import BaseCardTitle from "../atoms/base-card-title.vue";
import BaseCardText from "../atoms/base-card-text.vue";

const props = defineProps({
  serviceIcon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <BaseCardBody class="service-card">
    <i class="card-icon"><component :is="serviceIcon"></component></i>
    <BaseCardTitle class="mt-3 fw-bold"
      ><slot name="card-title"></slot
    ></BaseCardTitle>
    <BaseCardText><slot name="card-text"></slot></BaseCardText>
  </BaseCardBody>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/custom.scss";

.service-card {
  background: linear-gradient(to left, transparent 50%, $primary 50%);
  background-position: right;
  background-size: 200%;
  transition: 0.3s ease-in-out;
  .card-icon {
    font-size: 46px;
    background-color: $primary;
    color: $light;
    padding: 10px 15px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
  }
  .card-title {
    color: $secondary;
  }
  &:hover {
    background-position: left;
    color: $light;
    .card-icon {
      background-color: $light;
      color: $primary;
    }
    .card-title {
      color: $light;
    }
  }
}
</style>
