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
          <div class="col-md-3 card text-center" v-for="card in cards">
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

#circus-cards {
  .row {
    div {
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
@media screen and (max-width: 768px) {
  #circus-cards {
    margin: 50px 10px;
    .row {
      gap: 40px;
    }
  }
}

@media screen and (min-width: 768px) {
  .circus {
    position: relative;
    #circus-cards {
      position: absolute;
      bottom: -50px;
      width: 100%;
      .row {
        justify-content: space-between;
      }
      .card {
        flex: 1 1 22%;
        margin: 0 10px;
      }
    }
  }
}
</style>
