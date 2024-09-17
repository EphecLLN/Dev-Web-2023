<template>
    <div class="EnTête">
      <h1><router-link to="/">Sotrexco</router-link></h1>
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <ul>
          <li class="nav-link"><router-link to="/produits">Produits</router-link></li>
          <li><router-link to="/service">Services</router-link></li>
          <li><router-link to="/realisation">Réalisations</router-link></li>
          <li><router-link to="/clients" v-if="this.$store.state.utilisateur.role === 'admin'">Liste des clients</router-link></li>
          <li><router-link to="/connexion">Connexion/Inscription</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "EnTête"
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;

}

a {
  color: #333;
  text-decoration: none;
}

/* Styles de la section d'en-tête */
header h1 {
  float: left;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  padding: 0;
}

header nav {
  float: right;
}

header li {
  display: inline-block;
  margin: 20px 15px;
  font-size: 20px;
  position: relative;
}

</style>