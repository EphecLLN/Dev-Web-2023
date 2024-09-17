<template>
  <body>
    <header>
      <EnTête/>
    </header>

    <main>
      <section id="presentation">
        <div class="container">
          <h2>Qui sommes-nous ?</h2>
          <p>
            SOTREXCO INTERNATIONAL S.A. est une société anonyme de droit belge dont le siège social est situé au carrefour de l'Europe,
            en Belgique, à Waterloo (à une vingtaine de kilomètres de Bruxelles).
          </p>
          <p>
            SOTREXCO INTERNATIONAL est une société commerciale qui exporte vers l'Afrique une large gamme de biens et produits 
            dans différents domaines, qu'il s'agisse de produits alimentaires, de bâches et toiles, de textile… Mais, elle est principalement 
            active dans les domaines techniques et industriels, et elle assure toutes les prestations et services qui y sont associés.
          </p>
          <p>
            Elle répond ainsi régulièrement à des appels d'offres pour la fourniture de véhicules, de matériel informatique et de télécommunications,
            de pièces détachées, de matériel électromécanique, de pompes et groupes motopompes destinées aux industries et aux sociétés publiques,…
          </p>
          <p>
            M. Victor SARAGOSSI, administrateur délégué de SOTREXCO INTERNATIONAL, est né en RDC. Il y a vécu de nombreuses années, ainsi qu'en Afrique du Sud,
            au Rwanda et au Burundi. il a donc une connaissance approfondie de l'Afrique, de ses réalités et de ses marchés.
          </p>
          <p>
            La valeur ajoutée de SOTREXCO INTERNATIONAL est la diversité de ses propositions, sa grande flexibilité, sa bonne connaissance des marchés, la qualité de ses réseaux.
            Elle dispose ainsi d'une organisation simple et efficace, qui permet de voir rapidement aboutir les projets tout en sécurisant les paiements.
          </p>
        </div>
      </section>

      <section id="activite">
        <div class="container">
          <h2 class="center">Nos secteurs d'activité</h2>
          <br>
          <div class="activite-container">
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 1">
              <h3>Industrie</h3>
              <router-link to="/industrie" class="cta">En savoir plus</router-link>
            </div>
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 2">
              <h3>Alimentaire</h3>
              <router-link to="/alimentaire" class="cta">En savoir plus</router-link>
            </div>
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 3">
              <h3>Bien d'équipement</h3>
              <router-link to="/equipement" class="cta">En savoir plus</router-link>
            </div>
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 4">
              <h3>Commerce général</h3>
              <router-link to="/commerce" class="cta">En savoir plus</router-link>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <div class="services-container">
            <div class="services">
              <img src="https://via.placeholder.com/325x200" alt="Produit 1">
              <h3>Catering</h3>
              <router-link to="/catering" class="cta">En savoir plus</router-link>
            </div>
            <div class="services">
              <img src="https://via.placeholder.com/325x200" alt="Produit 2">
              <h3>Services</h3>
              <router-link to="/service" class="cta">En savoir plus</router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <BasDePage/>
    </footer>
  </body>
</template>

<script>
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
export default {
  name: "AccueilSotrexco",
  components: {BasDePage, EnTête}
}
</script>

<style scoped>

#presentation {
  background-image: url("");
  background-size: cover;
  color: #323232;
  padding: 100px;
}

#presentation h2 {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 2px 2px #000;
  text-align: center;
}

.activite-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.activite {
  margin: 20px;
  text-align: center;
  padding: 20px;

}

.activite h3 {
  margin-top: 10px;
}

#activite h2 {
  padding-top: 20px;
  text-align: center;
}

#services {
  background-color: #f9f9f9;
  padding: 20px;
}

.services-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.services {
  margin: 20px;
  text-align: center;
  padding: 20px;
}

#services h2 {
  text-align: center;
}

.services h3 {
  margin-top: 10px;
}

.realisation-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.realisation {
  margin: 20px;
  text-align: center;
  padding: 20px;
}

#realisation {
  padding: 20px;
}

#realisation h2 {
  text-align: center;
}

.realisation h3 {
  margin-top: 10px;
}

/* Styles du pied de page */
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.cta {
  display: block;
  margin-top: 20px;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}

</style>