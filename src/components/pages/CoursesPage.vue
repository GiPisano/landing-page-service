<script>
export default {
  data() {
    return {
      courses: [
        {
          img: `<i class="fa-solid fa-laptop-code"></i>`,
          title: "CODING",
          courseQuantity: "39 corsi",
        },
        {
          img: `<i class="fa-solid fa-camera"></i>`,
          title: "REALTÀ",
          courseQuantity: "39 corsi",
        },
        {
          img: `<i class="fa-solid fa-volume-high"></i>`,
          title: "GIOIA",
          courseQuantity: "24 corsi",
        },
        {
          img: `<i class="fa-solid fa-volume-high"></i>`,
          title: "SPEAKING",
          courseQuantity: "24 corsi",
        },
        {
          img: `<i class="fa-solid fa-laptop"></i>`,
          title: "MELA",
          courseQuantity: "16 corsi",
        },
        {
          img: `<i class="fa-solid fa-pencil"></i>`,
          title: "DISEGNO",
          courseQuantity: "39 corsi",
        },
        {
          img: `<i class="fa-solid fa-handshake-simple"></i>`,
          title: "CONFLITTI",
          courseQuantity: "16 corsi",
        },
        {
          img: `<i class="fa-solid fa-dumbbell"></i>`,
          title: "SCONOSCIUTO",
          courseQuantity: "24 corsi",
        },
        {
          img: `<i class="fa-solid fa-pencil"></i>`,
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
        <div class="col-md-4 mb-4" v-for="course in courses">
          <div class="card p-3">
            <div class="d-flex align-items-center">
              <div v-html="course.img" class="me-3 img-font"></div>
              <div>
                <div class="fw-bold">{{ course.title }}</div>
                <div>{{ course.courseQuantity }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card .img-font {
  font-size: 40px;
}
</style>
