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
    <p class="text-center">Stalkera i nostri insegnanti</p>
    <h2 class="text-center">I nostri Insegnanti</h2>

    <div class="row">
      <div class="col" v-for="techer in teachers">
        <div class="card h-100">
          <div class="card-header">
            <img :src="`src/assets/images/${techer.img}`" alt="" />
          </div>
          <div class="card-body">
            <h5 class="text-center">{{ techer.role }}</h5>
            <p class="text-center">{{ techer.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
