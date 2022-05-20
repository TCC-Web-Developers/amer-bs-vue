<script setup>
import TheNav from "../components/layout/TheNav.vue";
import BaseTitle from "../components/UI/base-title.vue";
import serviceCard from "../components/organisms/service-card.vue";
// import BaseCard from "../components/UI/base-card.vue";
import { BIconDribbble } from "bootstrap-icons-vue";
import { BIconFileEarmark } from "bootstrap-icons-vue";
import { BIconSpeedometer2 } from "bootstrap-icons-vue";
import { BIconGlobe } from "bootstrap-icons-vue";
</script>

<template>
  <TheNav />
  <section class="service">
    <div class="container">
      <BaseTitle>
        Our Services
        <template #description>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </template>
      </BaseTitle>

      <div class="row g-3">
        <div class="col-lg-3 col-md-6">
          <serviceCard :serviceIcon="BIconDribbble">
            <template #card-title>Lorem Ipsum</template>
            <template #card-text
              >Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi</template
            >
          </serviceCard>
        </div>

        <div class="col-lg-3 col-md-6">
          <serviceCard :serviceIcon="BIconFileEarmark">
            <template #card-title>Sed ut perspiciatis</template>
            <template #card-text
              >Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore</template
            >
          </serviceCard>
        </div>

        <div class="col-lg-3 col-md-6">
          <serviceCard :serviceIcon="BIconSpeedometer2">
            <template #card-title>Lorem Ipsum</template>
            <template #card-text
              >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia</template
            >
          </serviceCard>
        </div>

        <div class="col-lg-3 col-md-6">
          <serviceCard :serviceIcon="BIconGlobe">
            <template #card-title>Nemo Enim</template>
            <template #card-text
              >At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis</template
            >
          </serviceCard>
        </div>
      </div>
    </div>
  </section>
</template>
