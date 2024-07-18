<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
template {
  font-family: "Inter", sans-serif;
}
</style>
