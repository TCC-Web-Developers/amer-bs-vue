<script setup>
import TheNav from "../components/layout/TheNav.vue";
import BaseTitle from "../components/UI/base-title.vue";
import serviceCard from "../components/organisms/service-card.vue";
import BaseButton from "../components/UI/base-button.vue";
import MoreServiceCard from "../components/organisms/more-service-card.vue";
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
    </div>

    <div class="container">
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

    <div class="call-to-action mt-5 text-center">
      <h3>Call To Action</h3>
      <p class="my-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <BaseButton>Call To Action</BaseButton>
    </div>

    <div class="container">
      <div class="row g-3">
        <div class="col-lg-4 col-md-6">
          <MoreServiceCard>
            <template #card-img
              ><img
                class="w-100"
                src="../images/more-service-1.jpg"
                alt="image1"
            /></template>
            <template #card-title> Autem sunt earum </template>
            <template #card-text
              >Et architecto provident deleniti facere repellat nobis iste. Id
              facere quia quae dolores dolorem tempore</template
            >
            <template #button> Explore More </template>
          </MoreServiceCard>
        </div>

        <div class="col-lg-4 col-md-6">
          <MoreServiceCard>
            <template #card-img
              ><img
                class="w-100"
                src="../images/more-service-2.jpg"
                alt="image2"
            /></template>
            <template #card-title> Nobis et tempore </template>
            <template #card-text
              >Ut quas omnis est. Non et aut tempora dignissimos similique in
              dignissimos. Sit incidunt et odit iusto</template
            >
            <template #button> Explore More </template>
          </MoreServiceCard>
        </div>

        <div class="col-lg-4 col-md-6">
          <MoreServiceCard>
            <template #card-img
              ><img
                class="w-100"
                src="../images/more-service-3.jpg"
                alt="image3"
            /></template>
            <template #card-title> Facere quia quae dolores </template>
            <template #card-text
              >Modi ut et delectus. Modi nobis saepe voluptates nostrum. Sed
              quod consequatur quia provident dera</template
            >
            <template #button> Explore More </template>
          </MoreServiceCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.call-to-action {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(66, 84, 81, 0.5), rgba(43, 56, 54, 0.5)),
    url(../images/cta-bg.jpg) fixed center center;
  padding: 60px 0;
  color: $light;
  button {
    border-radius: 25px;
  }
}
</style>
