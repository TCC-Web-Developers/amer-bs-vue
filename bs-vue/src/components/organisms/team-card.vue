<script setup>
import BaseTeamCard from "../atoms/base-team-card.vue";
import BasePersonName from "../atoms/base-person-name.vue";
import BasePersonJob from "../atoms/base-person-job.vue";
import BaseTeamLink from "../atoms/base-team-link.vue";
</script>

<template>
  <BaseTeamCard class="team-card text-center mt-4">
    <div><slot name="card-img"></slot></div>
    <div class="layer-wrapper text-light">
      <div class="layer">
        <BasePersonName><slot name="person-name"></slot></BasePersonName>
        <BasePersonJob><slot name="person-job"></slot></BasePersonJob>
        <BaseTeamLink><slot name="team-links"></slot></BaseTeamLink>
      </div>
    </div>
  </BaseTeamCard>
</template>

<style lang="scss" scoped>
.layer-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  transition: 0.3s;
  .layer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    background: linear-gradient(
      to top,
      rgba(66, 84, 81, 0.5),
      rgba(43, 56, 54, 0.5)
    );
    .layer {
      bottom: 10%;
      opacity: 1;
    }
  }
}
</style>
