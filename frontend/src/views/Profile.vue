<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div class="card">
        <h1 class="card__title">Espace Perso</h1>

        <p>Prénom & Nom : : {{utilisateur.nom}} {{utilisateur.prenom}} </p>
        <p>Adresse mail : {{utilisateur.mail_client}}</p>
        <p>Numéro de téléphone : {{utilisateur.telephone}}</p>
        <p>Société : {{utilisateur.nom_societe}}</p>
        
        <div class="form-row">
          <button @click="deconnexion()" class="button">
            Déconnexion
          </button>
        </div>
      </div>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
  import { mapState } from 'vuex'
  import EnTête from "@/components/EnTête";
  import BasDePage from "@/components/BasDePage";
  export default {
    name: "ProfileSotrexco",
    components: {BasDePage, EnTête},
    data () {
      return {
        
      }
    },
    mounted: function () {
      console.log(this.$store.state.utilisateur);
      if (this.$store.state.utilisateur.id_client == -1){
        this.$router.push('/connexion');
        return;
      }
    },
    computed: {
      ...mapState({
        utilisateur: 'utilisateur', token: "token"
      })
    },
    methods: {
      deconnexion: function (){
        this.$store.commit('deconnexion');
        this.$router.push('/connexion');
      }
    }
  }
</script>
  
<style scoped>

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
