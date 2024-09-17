<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
        <h1>{{ realisation.nom_realisation }}</h1>
        <p>{{ realisation.type_realisation }}</p>
        <p>{{ realisation.info_realisation }}</p>
        <p>Ceci est un exemple de description</p>
        <img src="../img/realisations/img3.jpg" />
      </div>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
export default {
  name: "RealisationSotrexco",
  components: {BasDePage, EnTête},
  data() {
    return {
      realisations: []
    }
  },
  mounted() {
    this.getRealisations();
  },
  methods: {
    getRealisations() {
      axios.get(API + '/realisation/3')
        .then(response => {
          this.realisations = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.real {
  clear: left;
  padding: 1rem;
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