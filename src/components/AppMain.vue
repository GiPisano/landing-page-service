<script>
import CodeCircus from "./pages/CodeCircus.vue";
import AppAbout from "./pages/AboutPage.vue";
import CoursesPage from "./pages/CoursesPage.vue";
import ReviewsPage from "./pages/ReviewsPage.vue";
import TeachersPage from "./pages/TeachersPage.vue";
import AboutCourses from "./pages/AboutCourses.vue";

export default {
  components: {
    CodeCircus,
    AppAbout,
    CoursesPage,
    ReviewsPage,
    TeachersPage,
    AboutCourses,
  },
};
</script>

<template>
  <code-circus></code-circus>
  <app-about></app-about>
  <courses-page></courses-page>
  <reviews-page></reviews-page>
  <teachers-page></teachers-page>
  <about-courses></about-courses>
</template>

<style lang="scss" scoped></style>
