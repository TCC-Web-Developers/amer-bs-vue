<script setup></script>

<template>
  <section class="land-page py-5 bg-dark">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-lg-6">
          <h1 class="text-white">
            <span class="text-warning">Creativity</span> in the eye of the
            Beholder
          </h1>
        </div>
        <div class="col-lg-6 d-none d-md-block">
          <img src="../images/home2.png" alt="" />
        </div>
      </div>
      <button class="btn btn-outline-primary btn-lg">Our Portfolio</button>
      <router-link to="/about">Link</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap");

section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 44px;
}

img {
  width: 60%;
}

// a {
//   text-decoration: none;
//   background: transparent;
//   border: 1px solid transparent;
//   cursor: pointer;
//   color: white;
//   padding: 0.5rem 1.5rem;
//   display: inline-block;
// }

// a:hover,
// a:active,
// a.router-link-active {
//   color: #f1a80a;
//   border-color: #f1a80a;
//   background-color: #1a037e;
// }
</style>
