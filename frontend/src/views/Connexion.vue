<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div>
        <h1 v-if="mode == 'connexion'">Connexion</h1>
        <h1 v-else>Inscription</h1>
        <p v-if="mode == 'connexion'">Tu n'as pas encore de compte ?<span class="card__action" @click="switchInscription()">Créer un compte</span></p>
        <p v-else>Tu as déjà un compte ?<span class="card__action" @click="switchConnexion()">Se connecter</span></p>
        <div class="form-row">
          <input v-model="mail_client" class="form-row__input" type="text" placeholder="Adresse mail"/>
        </div>
        <div class="form-row" v-if="mode == 'creation'">
          <input v-model="prenom" class="form-row__input" type="text" placeholder="Prénom"/>
          <input v-model="nom" class="form-row__input" type="text" placeholder="Nom"/>
          <input v-model="nom_societe" class="form-row__input" type="text" placeholder="Nom de la société" />
          <input v-model="telephone" class="form-row__input" type="text" placeholder="Téléphone"/>
          <input v-model="fonction" class="form-row__input" type="text" placeholder="Fonction"/>
        </div>
        <div class="form-row">
          <input v-model="mdp" class="form-row__input" type="password" placeholder="Mot de passe"/>
        </div>
        <div class="form-row" v-if="mode == 'connexion' && statut == 'erreur_connexion'">
          Adresse mail et/ou mot de passe invalide
        </div>
        <div class="form-row" v-if="mode == 'creation' && statut == 'erreur_creation'">
          Adresse mail déjà utilisée
        </div>
        <div class="form-row">
          <button data-test-id="submit" @click="connexionCompte()" class="button" :class="{ 'button--disabled': !validationChamp }" v-if="mode == 'connexion'">
            <span v-if="statut == 'chargement'">Connexion en cours...</span>
            <span v-else>Connexion</span>
          </button>
          <button @click="creationCompte()" class="button" :class="{ 'button--disabled': !validationChamp }" v-else>
            <span v-if="statut == 'chargement'">Création en cours...</span>
            <span v-else>Créer mon compte</span>
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
  name: "ConnexionSotrexco",
  components: {BasDePage, EnTête},
  data: function () {
    return {
      mode: "connexion",
      mail_client: "",
      prenom: "",
      nom: "",
      nom_societe: "",
      telephone: "",
      fonction: "",
      mdp: "",
    };
  },
  mounted: function() {
    if(this.$store.state.utilisateur.id_client != -1){
      this.$router.push('/profile');
      return;
    }
  },
  computed: {
    //Fonction de vérification des champs ==> à améliorer
    validationChamp: function () {
      if (this.mode == "creation") {
        if (this.mail_client != "" && this.prenom != "" && this.nom != "" && this.nom_societe != "" && this.telephone != "" && this.fonction != "" && this.mdp != "")
         {
          return true;
        } 
        else {
          return false;
        }
      } 
      else {
        if (this.mail_client != "" && this.mdp != "") {
          return true;
        } 
        else {
          return false;
        }
      }
    },
    ...mapState(['statut'])
  },
  methods: {
    switchInscription: function () {
        this.mode = "creation";
    },
    switchConnexion: function () {
        this.mode = "connexion";
    },
    connexionCompte: function () {//action dans le store
      const self = this;
      this.$store.dispatch("connexionCompte", {
        mail_client: this.mail_client,
        mdp: this.mdp,
      }).then(function () {//then = promess js--> soit elle échoue, soit elle se résout. Si promesse résolue --> exécute la1ère fct, sinon exécute la 2ème
        self.$router.push('/profile');//comme si on clique vers la page profil
      }, function (error) {
        console.log(error);
      })
    },
    creationCompte: function () {
      const self = this;
      this.$store.dispatch("creationCompte", {
        mail_client: this.mail_client,
        prenom: this.prenom,
        nom: this.nom,
        nom_societe: this.nom_societe,
        telephone: this.telephone,
        fonction: this.fonction,
        mdp: this.mdp,
        role: "client"
      }).then(function () {
        self.connexionCompte();
      }, function (error) {
        console.log(error);
      })
    },
  }
}
</script>

<style scoped>
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}

.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}

.form-row__input::placeholder {
  color: #aaaaaa;
}
.card__action {
  color: #2196f3;
  text-decoration: underline;
}
.card__action:hover {
  cursor: pointer;
}
.button:hover {
  cursor: pointer;
  background: #1976d2;
}

.button--disabled {
  background: #cecece;
  color: #ececec;
}
.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
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
