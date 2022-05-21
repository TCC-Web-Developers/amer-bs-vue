<script setup>
import BaseTitle from "../components/UI/base-title.vue";
import TeamCard from "../components/organisms/team-card.vue";
import TheNav from "../components/layout/TheNav.vue";
import { BIconTwitter } from "bootstrap-icons-vue";
import { BIconFacebook } from "bootstrap-icons-vue";
import { BIconInstagram } from "bootstrap-icons-vue";
import { BIconLinkedin } from "bootstrap-icons-vue";
</script>

<template>
  <TheNav />
  <div class="container">
    <BaseTitle>
      Our Team
      <template #description
        >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.</template
      >
    </BaseTitle>

    <div class="row g-3 mb-1">
      <div class="col-lg-3 col-md-6">
        <TeamCard>
          <template #card-img
            ><img src="../images/team-1.jpg" alt="team image"
          /></template>

          <template #person-name>Walter White</template>
          <template #person-job>Chief Executive Officer</template>
          <template #team-links>
            <div class="links mt-3">
              <BIconTwitter />
              <BIconFacebook />
              <BIconInstagram />
              <BIconLinkedin />
            </div>
          </template>
        </TeamCard>
      </div>

      <div class="col-lg-3 col-md-6">
        <TeamCard>
          <template #card-img
            ><img src="../images/team-2.jpg" alt="team image"
          /></template>

          <template #person-name>Sarah Jhonson</template>
          <template #person-job>Product Manager</template>
          <template #team-links>
            <div class="links mt-3">
              <BIconTwitter />
              <BIconFacebook />
              <BIconInstagram />
              <BIconLinkedin />
            </div>
          </template>
        </TeamCard>
      </div>

      <div class="col-lg-3 col-md-6">
        <TeamCard>
          <template #card-img
            ><img src="../images/team-3.jpg" alt="team image"
          /></template>

          <template #person-name>William Anderson</template>
          <template #person-job>CTO</template>
          <template #team-links>
            <div class="links mt-3">
              <BIconTwitter />
              <BIconFacebook />
              <BIconInstagram />
              <BIconLinkedin />
            </div>
          </template>
        </TeamCard>
      </div>

      <div class="col-lg-3 col-md-6">
        <TeamCard>
          <template #card-img
            ><img src="../images/team-4.jpg" alt="team image"
          /></template>

          <template #person-name>Amanda Jepson</template>
          <template #person-job>Accountant</template>
          <template #team-links>
            <div class="links mt-3">
              <BIconTwitter />
              <BIconFacebook />
              <BIconInstagram />
              <BIconLinkedin />
            </div>
          </template>
        </TeamCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
}
</style>
