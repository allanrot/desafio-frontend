<template>
  <div id="app">
    <nav></nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    setCssVars(color) {
      document.documentElement.style.setProperty("--primary", color);
    },
  },
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "./assets/styles.scss";
</style>
