<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">EX</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link">
            <RouterLink to="/">Home</RouterLink>
          </a>
          <a class="nav-link">
            <RouterLink to="/services">Services</RouterLink>
          </a>
          <a class="nav-link">
            <RouterLink to="/about">About Us</RouterLink>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #000;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:active,
a.router-link-active {
  color: crimson;
  border-color: crimson;
  border-radius: 10px;
  //   background-color: #1a037e;
}
</style>
