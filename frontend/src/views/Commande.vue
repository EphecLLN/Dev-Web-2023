<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main v-if="this.utilisateur.role === 'client'">
    <p>Vous voulez commander un service/produit ?</p>
      <form>
        <p>
          <label for="mail">Mail : </label>
          <input type="text" v-model="mail" name="mail">
        </p>
        <p>
          <label for="tel">Tel : </label>
          <input type="text" v-model="tel" name="tel">
        </p>
        <p>
          <label for="type">Objet de la commande</label>
          <input type="radio" v-model="type" value="Produit">
          <label>Produit</label>
          <input type="radio" v-model="type" value="Service">
          <label>Service</label>
        </p>
        <p>
          <label for="nom">Nom : </label>
          <input type="text" v-model="nom" name="nom">
        </p>
        <p>
          <label for="description">Description : </label>
          <input type="text" name="description">
        </p>
        <p>
          <input type="submit" value="Envoyer">
        </p>
      </form>
    </main>
    <main v-else>
      <div>
        <h1>Oops !</h1>
        <h2><span class="card__action" @click="deconnexion()">Vous devez vous connecter pour introduire une commande !</span></h2>
      </div>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
import { mapState } from 'vuex';
export default {
  name: "CommandeTest",
  components: {BasDePage, EnTête},
  data() {
    return {
      type: '',
      tel: '',
      mail: '',
      nom: ''
    }
  },
  methods: {
      deconnexion: function (){
        this.$router.push('/connexion');
      }
  },
  computed : {
    ...mapState({
      utilisateur : "utilisateur"
    })
  }
}

</script>

<style scoped>
form{
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
.card__action {
  color: #2196f3;
  text-decoration: underline;
}
.card__action:hover {
  cursor: pointer;
}

</style>