<script>
export default {
  data() {
    return {
      courses: [
        {
          img: "",
          title: "CODING",
          courseQuantity: "39 corsi",
        },
        {
          img: "",
          title: "REALTÀ",
          courseQuantity: "39 corsi",
        },
        {
          img: "",
          title: "GIOIA",
          courseQuantity: "24 corsi",
        },
        {
          img: "",
          title: "SPEAKING",
          courseQuantity: "24 corsi",
        },
        {
          img: "",
          title: "MELA",
          courseQuantity: "16 corsi",
        },
        {
          img: "",
          title: "DISEGNO",
          courseQuantity: "39 corsi",
        },
        {
          img: "",
          title: "CONFLITTI",
          courseQuantity: "16 corsi",
        },
        {
          img: "",
          title: "SCONOSCIUTO",
          courseQuantity: "24 corsi",
        },
        {
          img: "",
          title: "FARFALLE",
          courseQuantity: "39 corsi",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="courses-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 card" v-for="course in courses">
          <div></div>
          <div>
            <div>{{ course.title }}</div>
            <div>{{ course.courseQuantity }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
