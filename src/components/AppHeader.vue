<script></script>

<template>
  <header>
    <div class="span">
      <p>
        Ottieni il tuo primo corso con uno sconto del 50%. L'offerta è valida
        solo per i primi 50 studenti. <a href="#">Registrati adesso</a>
      </p>
    </div>
    <div class="nav">
      <div class="img-logo">
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>
      <div class="container-btn">
        <button
          class="btn menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div class="menu-items">
        <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
        <a href="#"><i class="fa-solid fa-laptop"></i> CORSI</a>
        <a href="#"><i class="fa-solid fa-calendar-days"></i> EVENTI</a>
        <a href="#"><i class="fa-solid fa-phone"></i> CONTATTI</a>
        <a href="#"><i class="fa-solid fa-pen-to-square"></i> REGISTRATI</a>
      </div>
      <div class="icons">
        <i class="fa-regular fa-circle-user"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
        </div>
        <div>
          <a href="#"><i class="fa-solid fa-laptop"></i> CORSI</a>
        </div>
        <div>
          <a href="#"><i class="fa-solid fa-calendar-days"></i> EVENTI</a>
        </div>
        <div>
          <a href="#"><i class="fa-solid fa-phone"></i> CONTATTI</a>
        </div>
        <div>
          <a href="#"><i class="fa-solid fa-pen-to-square"></i> REGISTRATI</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.img-logo {
  width: 50%;
}

header {
  .span {
    width: 100%;
    background-color: #ec6c5b;
    color: white;
    text-align: center;
    a {
      color: white;
    }
  }

  img {
    max-width: 150px;
  }

  .nav {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    flex-wrap: wrap;
  }

  .menu-items {
    display: none;
  }

  .menu-button {
    display: inline-block;

    border: 1px solid black;
  }

  .container-btn {
    width: 50%;
    display: flex;
    justify-content: end;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    .menu-items {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .menu-button {
      display: none;
    }

    .offcanvas {
      display: none;
    }
    .img-logo {
      width: auto;
    }
    .container-btn {
      display: none;
    }
    a {
      color: black;
    }
  }

  .img-nav {
    width: auto;
  }
}

.offcanvas {
  background-color: var(--gray);

  .btn-close {
    background-color: white;
  }
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 50px;
}
</style>
