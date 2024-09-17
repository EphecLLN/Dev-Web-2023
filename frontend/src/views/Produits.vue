<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div class="container">
        <h2>Bienvenue sur la page des produits</h2>
      </div>

      <div>
        <produitsListe :listeProduit="produits" :getProduits="getProduits"></produitsListe>
        <produitAdd v-if="this.utilisateur.role === 'admin'" :getProduits="getProduits"></produitAdd>
      </div>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
import axios from 'axios';
import ProduitsListe from "../components/ProduitsListe.vue";
import ProduitAdd from "../components/ProduitAdd.vue";
import { API } from "@/main";
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
import { mapState } from 'vuex';

export default {
  name: "ProduitsSotrexco",
  components: {
    BasDePage,
    EnTête,
    ProduitsListe,
    ProduitAdd
  },
  data() {
    return {
      produits: []
    }
  },
  mounted() {
    this.getProduits();
  },
  computed : {
    ...mapState({
      utilisateur : "utilisateur"
    })
  },
  methods: {
    getProduits() {
      axios.get(API + '/produits')
        .then(response => {
          this.produits = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des produits :', error);
        });
    }
  }
}
</script>
<style scoped>

.container h2 {
  font-size: 45px;
  font-weight: bold;
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