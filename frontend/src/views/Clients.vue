<template>
  <body>
    <header>
      <en-tête/>
    </header>

  <main v-if="this.utilisateur.role === 'admin'">
    <h1>Vous êtes sur la page des clients</h1>
    <table class="clients-table">
      <thead>
      <tr>
        <th>Nom de la société</th>
        <th>Personne de contact</th>
        <th>Fonction</th>
        <th>numéro de téléphone</th>
        <th>adresse e-mail</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(client, index) in clients" :key="index">
        <td>{{client.nom_societe}}</td>
        <td @click="ouvrirModale(client.id_client)" data-test-id="identite">{{client.prenom}} {{client.nom}}</td>
        <td>{{client.fonction}}</td>
        <td><a :href="`tel:${client.telephone}`">{{client.telephone}}</a></td>
        <td><a :href="`mailto:${client.mail_client}`">{{client.mail_client}}</a></td>
      </tr>
      </tbody>
    </table>
    <!--id_client est une propriété (props) de modaleClient (modale client reçoit la props de clients.vue) et id du client est modaleIdClient = 9
    -->
    <modale-clients @fermer="modaleOuverte=false" v-if="modaleOuverte == true" :id_client="modaleIdClient"></modale-clients>
  </main>
  <main v-else>
    <div class="autorisation">
      <h1>Oops !</h1>
      <h2>Vous n'êtes pas autorisé à accéder à cette page !</h2>
    </div>
  </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
import axios from "axios";
import ModaleClients from "@/components/ModaleClients";
import { API } from "@/main";
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
import { mapState } from 'vuex';
export default {
  name: "ClientsSotrexco",
  components: {
    BasDePage,
    EnTête,
    ModaleClients
  },
  data() {
    return {
      clients: [],
      modaleOuverte : false,
      modaleIdClient : null
    }
  },
  mounted() {
    this.getClients();
  },
  computed : {
    ...mapState({
      utilisateur : "utilisateur"
    })
  },
  methods: {
    getClients() {
      const token = this.$store.state.token;
      axios.get(API + '/clients', {
        headers : {
          Authorization : `Bearer ${token}`
        }
      }) //rajouter un header http authorization  avec comme valeur le jwt en paramètre
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
    ouvrirModale(id_client){
      this.modaleOuverte = true;
      this.modaleIdClient = id_client;
    }
  }

}

</script>

<style scoped>
.clients-table {
  border-collapse: collapse;
  width: 100%;
}

.clients-table th {
  background: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 12px 15px;
}

.clients-table td {
  font-size: 16px;
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid black;
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

.autorisation {
  text-align: center;
}

</style>