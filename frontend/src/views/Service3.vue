<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <section>
        <div class="service" v-for="service in services" :key="service.id_service">
          <h1>{{ service.nom_service }}</h1>
          <p>{{ service.service_description }}</p>
          <p>Ceci est une explication détaillée de la description</p>
          <img src="../img/services/3.jpg" />
        </div>
        <a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a>
      </section>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";
import BasDePage from "@/components/BasDePage";
import EnTête from "@/components/EnTête";
export default {
  name: "ServicesSotrexco",
  components: {BasDePage, EnTête},
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
      axios.get(API + '/service/3')
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>


<style scoped>

.service {
  text-align: center;
  border: 1px solid #000;

}

section{
  padding-top: 100px;
  border: 1px solid #000;
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


