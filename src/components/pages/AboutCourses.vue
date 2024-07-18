<script>
// add icon for each paragraph inside cols
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".about-courses-text div");
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add("d-flex");
    const icon = document.createElement("span");
    icon.innerHTML =
      '<i class="fa-solid fa-circle-check fa-lg me-3" style="color: var(--red)"></i>';
    paragraph.prepend(icon);
  });
});
</script>
<template>
  <div class="container">
    <p class="text-center">Valori aggiunti</p>
    <h2 class="text-center">I Nostri Corsi Piacciono Perchè...</h2>
    <div class="row h-100">
      <div class="col-md-6 about-courses-text">
        <div>
          <p>
            Ridendo, l'apprendimento della programmazione diventaun'esperienza
            divertente e piacevole.
          </p>
        </div>

        <div>
          <p>
            I nostri insegnanti sono conosciuti conoscenza tecnica, fantasia e
            intrattenimento.
          </p>
        </div>

        <div>
          <p>
            Partecipa a attività pratiche che rendono il coding tangibile e
            coinvolgente.
          </p>
        </div>

        <div>
          <p>
            Risolvi problemi e completa progetti che stimolano la tua
            immaginazione e ingegno.
          </p>
        </div>
      </div>
      <div class="col-md-6 about-courses-text">
        <div>
          <p>
            Connettiti con altri studenti appassionati che condividono il tuo
            entusiasmo per la programmazione.
          </p>
        </div>

        <div>
          <p>
            Impara a programmare attraverso avventure tematiche, come viaggi
            spaziali o mondi magici.
          </p>
        </div>

        <div>
          <p>
            Lavora su progetti stravaganti, come creare meme o programmare danze
            per robot.
          </p>
        </div>

        <div>
          <p>
            Ricevi feedback positivo e supporto continuo dai nostri istruttori e
            dalla comunità.
          </p>
        </div>
      </div>
    </div>
  </div>

  <section>
    <div class="timeline">
      <div class="container-timeline left">
        <i class="fa-solid fa-handshake-simple"></i>
        <div class="content">
          <div class="card">
            <div class="card-header">
              <h2>Primo Step</h2>
            </div>
            <div class="card-body">
              <p>
                Iscriviti al nostro sito e crea il tuo profilo personale. In
                pochi minuti sarai pronto per esplorare il nostro mondo di corsi
                di programmazione divertenti e stravaganti. Non aspettare, il
                viaggio nel mondo del coding comincia ora!
              </p>
              <div class="btn">REGISTRATI</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline right">
        <i class="fa-solid fa-dumbbell"></i>
        <div class="content">
          <div class="card">
            <div class="card-header">
              <h2>Segui i Corsi Online</h2>
            </div>
            <div class="card-body">
              <p>
                Partecipa ai nostri corsi online interattivi, progettati per
                essere coinvolgenti e pieni di risate. Impara nuove competenze
                dai nostri istruttori eccentrici e divertiti mentre codifichi,
                con progetti unici e sfide creative. Ogni lezione è
                un'avventura!
              </p>
              <div class="btn">PARTECIPA</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline left">
        <i class="fa-solid fa-laptop-code"></i>
        <div class="content">
          <div class="card">
            <div class="card-header">
              <h2>Ricevi Una Pacca Sulla Spalla</h2>
            </div>
            <div class="card-body">
              <p>
                Al termine di ogni corso, riceverai il riconoscimento per il tuo
                impegno e le tue abilità. Condividi i tuoi successi con la
                nostra comunità globale e goditi una meritata pacca sulla
                spalla. Sei pronto a mostrare al mondo il tuo talento nel
                coding!
              </p>
              <div class="btn">CERTIFICATO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  background-color: var(--btn-color);
  color: white;
  cursor: pointer;
  border-radius: 40px;
}

.btn:hover {
  background-color: var(--red);
  color: white;
}

.card-header {
  background-color: var(--red);
  color: white;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: var(--red);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container-timeline {
  padding: 0 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin: 40px 0;
}

/* The circles on the timeline */
.container-timeline i {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  right: -20px;
  background-color: var(--red);
  border-radius: 50%;
  z-index: 2;
  font-size: 20px;
  top: 10px;
}

.right i {
  left: -20px;
  right: auto;
}

/* Place the container-timeline to the left */
.left {
  left: 0;
}

/* Place the container-timeline to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container-timeline (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent var(--red) transparent var(--red);
}

/* Add arrows to the right container-timeline (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent var(--red) transparent var(--red);
}

/* Add circle for containers on the right side */
.right::after {
  left: -20px;
}

/* The actual content */
.content {
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 768px wide */
@media screen and (max-width: 768px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  .container-timeline {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container-timeline::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--red) transparent var(--red);
  }

  .left::after,
  .right::after {
    left: 10.5px;
  }

  .right {
    left: 0%;
  }

  .container-timeline i {
    left: 10px;
    right: auto;
  }
}
</style>
