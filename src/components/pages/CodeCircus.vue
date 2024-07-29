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
          <div class="col-md-6 g-4">
            <h1>CODECIRCUS</h1>
            <p>
              Immergiti nel divertimento del codice, dove ogni byte è una gioia!
            </p>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="cosa vuoi imparare oggi?"
              />
              <span class="input-group-text">
                <div class="input-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </span>
            </div>
          </div>
          <div class="col-md-6 g-4">
            <img src="src/assets/billboard-img.png" alt="" />
          </div>
        </div>
        <!-- CODE CIRCUS CARDS -->
      </div>
    </section>
    <section id="circus-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-3 card text-center" v-for="card in cards">
            <h3 class="title">
              {{ card.title }}
            </h3>
            <h6 class="text">{{ card.text }}</h6>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#code-circus {
  background-image: url("../../assets/billboard-bg.png");
  width: 100%;
  object-fit: contain;

  .row {
    --bs-gutter-x: 0;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 6vh;
      font-weight: 200;
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .input-icon {
    background-color: var(--green);
    color: white;
    padding: 5px 12px;
    border-radius: 10px;
  }

  .input-group {
    max-width: 600px;

    input {
      background-color: white;
      border: none;
      padding: 12px;
      border-radius: 10px 0 0 10px;
    }
  }

  .input-group-text {
    background-color: white;
    border-radius: 0 10px 10px 0;
    border: none;
  }
}

#circus-cards {
  .row {
    .card:hover {
      background-color: var(--green);
      color: white;
      .title {
        color: white;
      }
    }

    div {
      padding: 30px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      .title {
        color: var(--red);
        font-weight: 800;
      }
      .text {
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  #code-circus {
    .row {
      h1 {
        font-size: 4vh;
      }
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
      bottom: -70px;
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
