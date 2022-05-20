<script setup>
const menuToggler = () => {
  document.body.classList.toggle("open");
};
</script>

<template>
  <div @click="menuToggler" class="menu-toggle">
    <list-icon class="menu-btn"></list-icon>
    <close-icon class="close-btn"></close-icon>
  </div>
  <nav class="nav">
    <div class="container">
      <div class="navbar d-flex align-items-center">
        <h2 class="nav-logo">Shuffle</h2>
        <div class="nav-items">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/service">Services</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/custom.scss";
.menu-btn,
.close-btn {
  display: none;
}
nav {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  .navbar {
    justify-content: space-between;
    h2 {
      color: $primary;
    }
    a {
      text-decoration: none;
      padding: 10px 10px;
      margin-right: 25px;
      color: #87918f;
      transition: 0.3s;
      &:hover {
        letter-spacing: 1px;
      }
    }
    a.router-link-active {
      border: 1px solid #1bbca3;
      color: #1bbca3;
      border-radius: 20px;
    }
  }
}
@media (max-width: 825px) {
  .menu-btn {
    position: fixed;
    display: block;
    top: 25px;
    right: 25px;
    font-size: 36px;
    background-color: #1bbca3;
    border-radius: 5px;
    // animation: menuBtn 1s infinite;
    padding: 5px;
    cursor: pointer;
  }
  .close-btn {
    position: fixed;
    color: $red;
    font-size: 26px;
    top: 25px;
    right: 25px;
    z-index: 15;
    cursor: pointer;
  }
  .open .menu-toggle .close-btn {
    display: block;
  }
  .open .menu-toggle .menu-btn {
    display: none;
  }
  .open .nav {
    transform: translateX(0);
  }
  nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 70vh;
    height: 100vh;
    transform: translateX(100%);
    background-color: #282828;
    z-index: 10;
    .navbar {
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      .nav-items {
        display: flex;
        align-items: center;
        flex-direction: column;
        a {
          border: 1px solid #87918f;
          width: 100%;
          margin: 10px 0;
          padding: 10px 100px;
          border-radius: 25px;
          transition: 0.3s;
          &:hover {
            transform: scale(1.1);
            letter-spacing: 0;
          }
        }
      }
    }
  }
  // @keyframes menuBtn {
  //   0% {
  //     top: 25px;
  //   }
  //   100% {
  //     top: 20px;
  //   }
  // }
}
</style>
