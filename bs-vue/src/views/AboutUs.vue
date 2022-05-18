<script setup></script>

<template>
  <div class="container pt-5">
    <div class="row d-flex align-items-center">
      <div class="col-lg-6">
        <img src="../images/about.webp" alt="" />
      </div>
      <div class="col-lg-6">
        <h5 class="text-warning fw-b fs-5">ABOUT US</h5>
        <h2 class="fs-1">We are a digital design Agency</h2>
        <p class="text-secondary">
          Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman
          williamsburg kitsch beard. Kale chips knausgaard mustache blog fashion
          axe selfies salvia.
        </p>
        <p class="text-secondary">
          Gluten-free post-ironic deep v typewriter. Cloud bread flannel poke,
          flexitarian vinyl iPhone church-key shaman williamsburg kitsch beard.
        </p>
      </div>
    </div>
    <div class="bars-container mt-3">
      <div class="row">
        <div class="col-4">
          <h3 class="bar-title fs-5">MANAGEMENT</h3>
          <div class="bar bg-light">
            <div class="bar-value w-50 bg-info"></div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-4">
          <h3 class="bar-title fs-5">DESIGN</h3>
          <div class="bar bg-light">
            <div class="bar-value w-80 bg-info"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3 class="bar-title fs-5">EXECUTION</h3>
          <div class="bar bg-light">
            <div class="bar-value w-50 bg-info"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 60%;
  border-radius: 10px;
}
.bar {
  height: 15px;
  border-radius: 5px;
}
.bar-value {
  height: 15px;
  border-radius: 5px;
}
</style>
