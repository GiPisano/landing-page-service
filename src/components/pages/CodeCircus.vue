<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "100+",
          text: "MAGHI DEL CODICE",
        },
        {
          title: "500+",
          text: "CORSI STRAVAGANTI",
        },
        {
          title: "GRATIS",
          text: "UNA PACCA SULLA SPALLA",
        },
        {
          title: "2,000+",
          text: "PERSONE CI SONO CASCATE",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="circus">
    <section id="code-circus">
      <div class="container">
        <!-- CODE CIRCUS INTRO -->
        <div class="row">
          <div class="col-md-6">
            <h1>title</h1>
            <p>text</p>
            <input type="text" />
          </div>
          <div class="col-md-6">
            <img src="../../assets/images/billboard-img.png" alt="" />
          </div>
        </div>
        <!-- CODE CIRCUS CARDS -->
      </div>
    </section>
    <section id="circus-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-3 card p-2 text-center" v-for="card in cards">
            <h3>
              {{ card.title }}
            </h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#code-circus {
  background-image: url("../../assets/images/billboard-bg.png");
  width: 100%;
  object-fit: contain;
  .row {
    --bs-gutter-x: 0;
    object-fit: contain;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .circus {
    position: relative;
    .container {
      .row {
        gap: 10px;
        flex-wrap: nowrap;
      }
    }
    #circus-cards {
      position: absolute;
      bottom: -50px;
      width: 100%;
    }
  }
}
</style>
