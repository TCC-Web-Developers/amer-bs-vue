<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background: linear-gradient(to left, transparent 50%, #1bbca3 50%);
  background-position: right;
  background-size: 200%;
  border: 1px solid #1bbca3;
  border-radius: 25px;
  padding: 10px 25px;
  color: #fff;
  transition: 0.3s;
  &:hover {
    background-position: left;
  }
}
</style>
