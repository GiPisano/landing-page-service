<script>
export default {
  data() {
    return {
      courses: [
        {
          img: `<i class="fa-solid fa-laptop-code"></i>`,
          title: "CODING",
          courseQuantity: "39 corsi",
          color: "light-green",
          iconColor: "green",
        },
        {
          img: `<i class="fa-solid fa-camera"></i>`,
          title: "REALTÀ",
          courseQuantity: "39 corsi",
          color: "light-gray",
          iconColor: "gray",
        },
        {
          img: `<i class="fa-solid fa-volume-high"></i>`,
          title: "GIOIA",
          courseQuantity: "24 corsi",
          color: "light-yellow",
          iconColor: "yellow",
        },
        {
          img: `<i class="fa-solid fa-volume-high"></i>`,
          title: "SPEAKING",
          courseQuantity: "24 corsi",
          color: "light-yellow",
          iconColor: "yellow",
        },
        {
          img: `<i class="fa-solid fa-laptop"></i>`,
          title: "MELA",
          courseQuantity: "16 corsi",
          color: "light-red",
          iconColor: "red",
        },
        {
          img: `<i class="fa-solid fa-pencil"></i>`,
          title: "DISEGNO",
          courseQuantity: "39 corsi",
          color: "light-green",
          iconColor: "green",
        },
        {
          img: `<i class="fa-solid fa-handshake-simple"></i>`,
          title: "CONFLITTI",
          courseQuantity: "16 corsi",
          color: "light-red",
          iconColor: "red",
        },
        {
          img: `<i class="fa-solid fa-dumbbell "></i>`,
          title: "SCONOSCIUTO",
          courseQuantity: "24 corsi",
          color: "light-yellow",
          iconColor: "yellow",
        },
        {
          img: `<i class="fa-solid fa-pencil"></i>`,
          title: "FARFALLE",
          courseQuantity: "39 corsi",
          color: "light-gray",
          iconColor: "gray",
        },
      ],

      onlineCourses: [
        {
          img: "item1.jpg",
          title: "Origami Estremo",
          time: "O1H 50M",
          category: "ARTIGIANATO",
          author: "Pino la Lavatrice",
          stars: 5,
          badge: "Nuovo",
        },
        {
          img: "item2.jpg",
          title: "I Maghi Di Internet",
          time: "O1H 50M",
          category: "STORIA",
          author: "William Gibson",
          stars: 5,
          badge: "Gratis",
        },
        {
          img: "item3.jpg",
          title: "Codice Per Gatti",
          time: "O1H 50M",
          category: "ARTIGIANATO",
          author: "Miao Miao",
          stars: 5,
        },
        {
          img: "item4.jpg",
          title: "Chatbot Per Complimenti",
          time: "O1H 50M",
          category: "CODING",
          author: "James Lonel",
          stars: 5,
        },
        {
          img: "item5.jpg",
          title: "Cyberpunk",
          time: "O1H 50M",
          category: "STORIA",
          author: "Dante Alighieri",
          stars: 5,
        },
        {
          img: "item6.jpg",
          title: "Pensiero Positivo E Codice",
          time: "O1H 50M",
          category: "CODING",
          author: "Paperino",
          stars: 5,
        },
        {
          img: "item7.jpg",
          title: "Scrivere Codice In Rima",
          time: "O1H 50M",
          category: "STORIA",
          author: "Ugo Foscolo",
          stars: 5,
        },
        {
          img: "item8.jpg",
          title: "Dalla A Alla Z",
          time: "O1H 50M",
          category: "STORIA",
          author: "Jeff Bezos",
          stars: 5,
        },
      ],
    };
  },
  methods: {
    buildImgPath(imageName) {
      return new URL("../../assets/images/" + imageName, import.meta.url).href;
    },
  },
};
</script>

<template>
  <section id="courses-section">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center my-4">
        <div>
          <p class="red">
            Scegli la categoria di corsi dalla quale vuoi iniziare
          </p>
          <h2>Categorie Poplari</h2>
        </div>
        <div>
          <div class="btn">GUARDA TUTTO</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="course in courses">
          <div class="card p-3" :class="course.color">
            <div class="d-flex align-items-center">
              <div
                v-html="course.img"
                class="me-3 img-font"
                :class="course.iconColor"
              ></div>
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

  <section id="online-courses">
    <div class="container">
      <div class="my-4 text-center">
        <p class="red">Alcuni dei nostri corsi online più popolari</p>
        <h2>Esplora i Corsi Online</h2>
      </div>
      <div class="row gx-3 gy-5">
        <div class="col-md-3" v-for="course in onlineCourses">
          <div class="card h-100">
            <div class="card-header">
              <img :src="buildImgPath(course.img)" alt="" />
              <p v-if="course.badge" class="badge">{{ course.badge }}</p>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <span>{{ course.category }}</span>
                <span>{{ course.time }}</span>
              </div>
              <h5>{{ course.title }}</h5>
              <div class="d-flex">
                <p>By: {{ course.author }}</p>
                <span v-for="star in course.stars">
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <div class="btn">GUARDA TUTTI I CORSI</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card .img-font {
  font-size: 40px;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--red);
}

#courses-section {
  margin: var(--section-margin);
  .row {
    div {
      .card:hover {
        background-color: var(--red);
        color: white;
        .img-font {
          color: white;
        }
      }
    }
  }
}

#online-courses {
  margin: var(--section-margin);
}
</style>
