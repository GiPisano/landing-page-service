<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  data() {
    return {
      reviews: [
        {
          text: '"CodeCircus è come un parco divertimenti per nerd! Ho imparato a programmare con emoji e ora posso comunicare con i miei amici solo usando faccine. È stato fantastico!"',
          img: "reviwer1.jpg",
          name: "Gina Smith",
          role: "Studentessa",
        },
        {
          text: '"Non avrei mai pensato di ridere così tanto durante un corso di programmazione. I trucchi di Code Circus Tricks mi hanno fatto sembrare un mago del codice davanti ai miei colleghi!"',
          img: "reviwer2.jpg",
          name: "Bicky Silvestri",
          role: "Pescivendolo",
        },
        {
          text: "\"Ho sempre voluto imparare a creare videogiochi retrò. Retro Game Dev mi ha riportato agli anni '80 e '90, con tanto di musica 8-bit e grafica\"",
          img: "reviwer3.jpg",
          name: "Lilly Rossi",
          role: "Web Developer",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <div class="container-section">
    <div class="container">
      <div class="padding">
        <div class="text-center my-5">
          <p class="red">Cosa dicono gli studenti</p>
          <h2>Recensioni</h2>
        </div>
        <Swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '767': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <SwiperSlide v-for="review in reviews">
            <div class="card">
              <div class="card-header">
                {{ review.text }}
              </div>
              <div class="card-body">
                <div class="img-review">
                  <img :src="`/landing-page-service/${review.img}`" alt="" />
                </div>
                <div class="info">
                  <p class="name">{{ review.name }}</p>
                  <p>{{ review.role }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-section {
  background-color: var(--light-green);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.padding {
  padding-top: 100px;
  padding-bottom: 100px;
}
.swiper-slide img {
  display: block;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}

.info {
  line-height: 10px;
}
.card {
  background-color: var(--light-green);
  border: none;
  text-align: left;

  .card-header {
    border-bottom: none;
    background-color: var(--light-green);
  }

  .card-body {
    display: flex;
    align-items: center;
    gap: 20px;
    .info .name {
      font-weight: bold;
    }
  }
}
</style>
