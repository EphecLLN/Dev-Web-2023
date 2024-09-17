<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div>
        <div class="titre">
          <h1>{{ titre }}</h1>
        </div>
      </div>
      <br><br><br><br><br>
      <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
        <img :src="getImage(realisation.id_realisation)" />
        <p>{{ realisation.type_realisation }}</p>
        <p>{{ realisation.nom_realisation }}</p>
        <p>{{ realisation.info_realisation }}</p>
        <router-link :to="`/realisation/${realisation.id_realisation}`">En savoir plus</router-link>
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

// Utiliser la fonction require.context pour charger toutes les images
const imagesContext = require.context('../img/realisations', false, /\.(png|jpe?g|gif|webp)$/);
const images = imagesContext.keys().map(key => imagesContext(key));

export default {
  name: "RealisationSotrexco",
  components: {BasDePage, EnTête},
  data() {
    return {
      images: images,
      realisations: [],
      titre: "Nos différentes réalisations"
    }
  },
  mounted() {
    this.getRealisations();
  },
  methods: {
    getRealisations() {
      axios.get(API + '/realisation')
        .then(response => {
          this.realisations = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getImage(realisationId) {
      // Retourner l'image correspondante à l'identifiant de réalisation
      return this.images[realisationId - 1];
    }
  }
}
</script>

<style scoped>
.titre {
  text-align: center;
}

img {
  float: left;
  margin-right: 1rem;
}

.real {
  clear: left;
  padding: 1rem;
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
