<script></script>

<template>
  <section id="about-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 about-img g-5">
          <img src="src/assets/about-img.jpg" alt="" />
        </div>
        <div class="col-md-6 g-5">
          <p class="red">Scopri di più su di noi</p>
          <h2>Chi Siamo</h2>
          <p>
            Benvenuti nel nostro magico mondo dove la programmazione incontra il
            divertimento sfrenato! Offriamo corsi unici e stravaganti, guidati
            da istruttori eccentrici che trasformano ogni lezione in
            un'avventura indimenticabile. Unisciti a noi per scoprire il lato
            più fantasioso del coding!
          </p>
          <p class="check-p">
            <span><i class="fa-solid fa-circle-check fa-lg me-3"></i></span>
            Esperti di programmazione che rendono ogni lezione uno spettacolo
            creativo.
          </p>
          <p class="check-p">
            <span><i class="fa-solid fa-circle-check fa-lg me-3"></i></span>
            Corsi divertenti e coinvolgenti che trasformano l'apprendimento in
            un'avventura.
          </p>
          <p class="check-p">
            <span><i class="fa-solid fa-circle-check fa-lg me-3"></i></span>
            Connettiti con appassionati di coding di tutto il mondo per
            un'esperienza unica e divertente.
          </p>
          <div class="btn">SCOPRI DI PIÙ</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about-section {
  margin: var(--section-margin);
  .row {
    justify-content: center;
    align-items: center;
    .about-img {
      max-width: 500px;
      img {
        border-radius: 50%;
      }
    }
  }
}
h2 {
  font-size: xxx-large;
}
.red {
  color: var(--red);
}
// check-paragraph
.check-p {
  display: flex;
  i {
    color: var(--red);
  }
}
</style>
