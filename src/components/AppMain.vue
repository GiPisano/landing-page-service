<script>
import CodeCircus from "./pages/CodeCircus.vue";
import AppAbout from "./pages/AboutPage.vue";
import CoursesPage from "./pages/CoursesPage.vue";

export default {
  components: {
    CodeCircus,
    AppAbout,
    CoursesPage,
  },
};
</script>

<template>
  <code-circus></code-circus>
  <app-about></app-about>
  <courses-page></courses-page>
</template>

<style lang="scss" scoped></style>
