<script>
export default {
  data() {
    return {
      teachers: [
        {
          img: "teacher1.jpg",
          name: "Pino la Lavatrice",
          role: "Art Director",
        },
        {
          img: "teacher2.jpg",
          name: "Jeff Bezos",
          role: "James Lonely",
        },
        {
          img: "teacher3.jpg",
          name: "Marketing Expert",
          role: "SEO Expert",
        },
        {
          img: "teacher4.jpg",
          name: "William Gibson",
          role: "Sales Director",
        },
        {
          img: "teacher5.jpg",
          name: "Dante Alighieri",
          role: "Marketing Expert",
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
            <img :src="`src/assets/images/${techer.img}`" alt="" />
          </div>
          <div class="card-body">
            <p class="techer-name">{{ techer.name }}</p>
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
  }
  .card-body {
    p {
      margin: 0;
    }
    .techer-name {
      font-weight: 600;
    }
  }
}
</style>
