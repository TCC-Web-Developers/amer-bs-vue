<template>
  <div class="col-lg-3 col-md-6">
    <div class="card">
      <i class="card-img"><slot name="card-img"></slot></i>
      <div class="card-body">
        <h5 class="card-title my-3 fw-bold">
          <slot name="card-title"></slot>
        </h5>
        <p class="card-text">
          <slot name="card-text"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: linear-gradient(to left, transparent 50%, #1bbca3 50%);
  background-position: right;
  background-size: 200%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  transition: 0.3s;
  .card-img {
    font-size: 46px;
    background-color: #1bbca3;
    color: #fff;
    padding: 10px 15px;
    border-radius: 50%;
    transition: 0.3s;
  }
  .card-title {
    color: #425451;
  }
  &:hover .card-img {
    background-color: #fff;
    color: #1bbca3;
  }
  &:hover .card-title {
    color: #fff;
  }
  &:hover {
    background-position: left;
    color: #fff;
  }
}
</style>
