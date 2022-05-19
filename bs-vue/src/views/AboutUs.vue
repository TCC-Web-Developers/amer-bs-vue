<script setup>
import TheNav from "../components/layout/TheNav.vue";
import BaseTitle from "../components/UI/base-title.vue";
</script>

<template>
  <TheNav />
  <section class="about-us">
    <div class="container">
      <BaseTitle>
        About Us
        <template #description>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </template>
      </BaseTitle>
      <div class="row">
        <div class="col-lg-6 d-none d-md-block">
          <img src="../images/about.jpg" />
        </div>
        <div class="col-lg-6">
          <h3>
            Voluptatem dignissimos
            <strong>provident quasi corporis voluptates</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <div class="bars-container">
            <div class="mb-3">
              <div class="bar-info d-flex justify-content-between">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div class="bar">
                <div class="bar-value w-100"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="bar-info d-flex justify-content-between">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div class="bar">
                <div class="bar-value w-75"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="bar-info d-flex justify-content-between">
                <span>JAVASCRIPT</span>
                <span>75%</span>
              </div>
              <div class="bar">
                <div class="bar-value w-75"></div>
              </div>
            </div>

            <div>
              <div class="bar-info d-flex justify-content-between">
                <span>PHOTOSHOP</span>
                <span>50%</span>
              </div>
              <div class="bar">
                <div class="bar-value w-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  border-radius: 10px;
}

.bars-container {
  .bar {
    width: 100%;
    height: 5px;
    background-color: #dbdbdb;
    border-radius: 5px;
  }
  .bar-value {
    background-color: #1bbca3;
    height: 100%;
    border-radius: 5px;
  }
}
</style>
