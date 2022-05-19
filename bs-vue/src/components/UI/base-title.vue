<template>
  <div class="about-content text-center my-5">
    <h2 class="fw-bold fs-3"><slot></slot></h2>
    <p><slot name="description"></slot></p>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: #425451;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    width: 50px;
    height: 1px;
    background-color: #1bbca3;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50.5%;
    width: 25px;
    height: 3px;
    background-color: #1bbca3;
  }
  p {
    color: #425451;
  }
}
</style>
