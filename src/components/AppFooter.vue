<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "fa-facebook",
          link: "#",
        },
        {
          icon: "fa-twitter",
          link: "#",
        },
        {
          icon: "fa-instagram",
          link: "#",
        },
        {
          icon: "fa-linkedin",
          link: "#",
        },
        {
          icon: "fa-youtube",
          link: "#",
        },
      ],

      collegamenti: [
        {
          text: "Home",
          link: "#",
        },
        {
          text: "Chi Siamo",
          link: "#",
        },
        {
          text: "Corsi",
          link: "#",
        },
        {
          text: "Contatti",
          link: "#",
        },
      ],

      about: [
        {
          text: "Come funziona",
          link: "#",
        },
        {
          text: "Prezzi",
          link: "#",
        },
        {
          text: "Promozioni",
          link: "#",
        },
      ],

      helpCenter: [
        {
          text: "Payments",
          link: "#",
        },
        {
          text: "FAQS",
          link: "#",
        },
        {
          text: "Checkout",
          link: "#",
        },
        {
          text: "Other",
          link: "#",
        },
      ],
      contatti: [
        {
          text: "contact@codecircus.code",
          link: "#",
        },
        {
          text: "+110 1000 0111",
          link: "#",
        },
        {
          text: "Soriano Calabro, IT",
          link: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="footer-discount">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>
            Iscriviti E Ottieni || 20% Di Sconto Sul Tuo Primo Corso Online.
          </h2>
          <p class="red-text">
            Iscriviti alla nostra newsletter e non perderti mai nessuna offerta.
          </p>
        </div>
        <div class="col-md-6 input">
          <input
            type="text"
            class="input-mail"
            placeholder="Lascia la tua mail*"
          />
          <button class="btn-mail">REGISTRATI</button>
        </div>
      </div>
    </div>
  </section>

  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col social">
          <div>
            <img src="../assets/images/logo.png" alt="" />
          </div>
          <ul>
            <li v-for="social in socials">
              <a :href="social.link"
                ><i :class="`fa-brands ${social.icon}`"></i
              ></a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h3>Collegamenti</h3>
          <ul>
            <li v-for="collegamento in collegamenti">
              <a :href="collegamento.link">{{ collegamento.text }}</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h3>About</h3>
          <ul>
            <li v-for="item in about">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h3>Help Center</h3>
          <ul>
            <li v-for="item in helpCenter">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h3>Contatti</h3>
          <ul>
            <li v-for="contatto in contatti">
              <a :href="contatto.link">{{ contatto.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <hr />

  <div class="d-flex justify-content-between container">
    <p>© 2024 Boolean. All rights reserved.</p>

    <p>Allegria!(Giacomo Pisano)</p>
  </div>
</template>

<style lang="scss">
#footer-discount {
  background-color: rgb(252, 238, 214);
  padding: 100px 0;
  .red-text {
    color: var(--red);
  }

  .input-mail,
  .btn-mail {
    border-radius: 50px;
    width: 100%;
    padding: 12px;
    border: none;
  }

  .input-mail::placeholder {
    text-align: center;
  }

  .btn-mail {
    background-color: var(--green);
    color: white;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

#footer {
  margin: var(--section-margin);
  h3 {
    font-size: 20px;
    font-weight: bolder;
  }

  ul {
    padding-left: 0;
    li {
      list-style: none;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
  .social ul {
    display: flex;
    gap: 10px;
  }

  .social ul li a {
    color: var(--gray);
    font-size: 25px;
  }

  img {
    width: 100px;
  }
}

@media screen and (max-width: 768px) {
  #footer {
    .row {
      gap: 20px;
    }
    .col {
      flex: 0 0 100%;
    }
  }
}
</style>
