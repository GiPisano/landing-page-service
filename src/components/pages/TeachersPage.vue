<script>
export default {
  data() {
    return {
      teachers: [
        {
          img: "teacher1.jpg",
          name: "Pino la Lavatrice",
          role: "Art Director",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
        },
        {
          img: "teacher2.jpg",
          name: "Jeff Bezos",
          role: "James Lonely",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
        },
        {
          img: "teacher3.jpg",
          name: "Marketing Expert",
          role: "SEO Expert",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
        },
        {
          img: "teacher4.jpg",
          name: "William Gibson",
          role: "Sales Director",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
        },
        {
          img: "teacher5.jpg",
          name: "Dante Alighieri",
          role: "Marketing Expert",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="text-center my-5">
      <p class="red">Stalkera i nostri insegnanti</p>
      <h2>I nostri Insegnanti</h2>
    </div>
    <div class="row">
      <div class="col" v-for="techer in teachers">
        <div class="card h-100 text-center">
          <div class="card-header">
            <img :src="`/landing-page-service/${techer.img}`" alt="" />
            <div class="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="teacher-name">{{ techer.name }}</p>
            <p class="red">{{ techer.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: var(--section-margin);
}
.card {
  border: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  .card-header {
    background-color: white;
    border: 0;
    img {
      border-radius: 15px;
    }
    .icons {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 8px;
      cursor: pointer;
      display: none;
      i {
        color: white;
        background-color: var(--green);
        padding: 5px;
      }

      i:first-child {
        border-radius: 8px 0 0 0;
      }

      i:hover {
        background-color: var(--light-green);
        color: black;
      }
    }
  }

  .card-header:hover {
    .icons {
      display: flex;
    }
  }
  .card-body {
    p {
      margin: 0;
    }
    .teacher-name {
      font-weight: 600;
    }
  }
}
</style>
