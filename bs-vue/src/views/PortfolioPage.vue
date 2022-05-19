<script>
import TheNav from "../components/layout/TheNav.vue";
import BaseTitle from "../components/UI/base-title.vue";
import PortfolioAll from "../components/portfolio-all.vue";
import PortfolioApp from "../components/portfolio-app.vue";
import PortfolioCard from "../components/portfolio-card.vue";
import PortfolioWeb from "../components/portfolio-web.vue";

export default {
  components: {
    TheNav,
    BaseTitle,
    PortfolioAll,
    PortfolioApp,
    PortfolioCard,
    PortfolioWeb,
  },
  data() {
    return {
      selectedComponent: "portfolio-all",
    };
  },
  computed: {
    AllBtn() {
      return { active: this.selectedComponent === "portfolio-all" };
    },
    AppBtn() {
      return { active: this.selectedComponent === "portfolio-app" };
    },
    CardBtn() {
      return { active: this.selectedComponent === "portfolio-card" };
    },
    WebBtn() {
      return { active: this.selectedComponent === "portfolio-web" };
    },
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<template>
  <TheNav />
  <section class="portfolio">
    <div class="container">
      <BaseTitle>
        Our Portfolio
        <template #description>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </template>
      </BaseTitle>
      <div
        class="components-controller d-flex align-items-center justify-content-center mb-4"
      >
        <div class="controller">
          <button
            @click="setSelectedComponent('portfolio-all')"
            :class="AllBtn"
          >
            ALL
          </button>
          <button
            @click="setSelectedComponent('portfolio-app')"
            :class="AppBtn"
          >
            APP
          </button>
          <button
            @click="setSelectedComponent('portfolio-card')"
            :class="CardBtn"
          >
            CARD
          </button>
          <button
            @click="setSelectedComponent('portfolio-web')"
            :class="WebBtn"
          >
            WEB
          </button>
        </div>
      </div>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.controller {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  button {
    background-color: transparent;
    border: none;
    margin: 0 10px;
    padding: 5px 0;
  }
}
.active {
  color: #1bbca3;
}
</style>
