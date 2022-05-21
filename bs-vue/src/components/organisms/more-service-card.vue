<script setup>
import BaseCardBody from "../atoms/base-card-body.vue";
import BaseCardTitle from "../atoms/base-card-title.vue";
import BaseCardText from "../atoms/base-card-text.vue";
import BaseButton from "../UI/base-button.vue";

// const props = defineProps({
//   moreServiceArray: {
//     type: Array,
//     default() {
//       return [];
//     },
//   },
// });
</script>

<template>
  <BaseCardBody class="more-service-card text-center mt-5">
    <div><slot name="card-img"></slot></div>
    <BaseCardTitle class="card-title mt-3 fw-bold text-secondary"
      ><slot name="card-title"></slot
    ></BaseCardTitle>
    <BaseCardText><slot name="card-text"></slot></BaseCardText>
    <BaseButton class="text-black"><slot name="button"></slot></BaseButton>
  </BaseCardBody>
</template>

<style lang="scss" scoped>
// @import "../../assets/scss/custom.scss";
.more-service-card {
  padding: 0;
  //   &:hover {
  //     .card-title {
  //       color: $primary;
  //     }
  //   }
}
</style>
