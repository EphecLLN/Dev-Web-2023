<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <section id="intro">
        <div class="container">
          <h2>Bienvenue sur la page des services</h2>
          <p>Voici les différents services disponibles</p>
        </div>
      </section>

      <section id="service">
        <div class="service">
          <servicesListe :listeService="services"></servicesListe>
        </div>
        <div class="contact">
          <p><router-link to="/commande">Commander</router-link></p>
          <p><a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a></p>
        </div>
      </section>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>

import axios from 'axios';
import ServicesListe from "../components/ServicesListe.vue";
import { API } from "@/main";
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";

export default {
  name: "ServiceSotrexco",
  components: {
    BasDePage,
    EnTête,
    ServicesListe
  },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios.get(API + '/service')
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

}

</script>

<style scoped>
#intro h2 {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
}

#intro p {
  font-size: 20px;
  text-align: center;
}

.service{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}

servicesListe{
  margin-left: auto;
  margin-right: auto;
}

p{
  text-align: center;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>