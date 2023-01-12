<template>
  <div id="App">
    <!-- <naviGator /> -->
    <!-- <minicart /> -->
    <router-view class="body" />
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
// import minicart from "@/components/miniCart.vue";
// import AppFooter from "./components/AppFooter.vue";
// import naviGator from "./components/naviGator.vue";
export default {
  name: "App",
  // components: { naviGator, AppFooter, minicart },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.body {
  padding-top: 6%;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
