<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <app-header></app-header>
</template>

<style lang="scss">
@use "./styles/general.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
template {
  font-family: "Inter", sans-serif;
}
</style>
