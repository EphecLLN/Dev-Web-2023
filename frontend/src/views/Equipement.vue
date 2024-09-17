<template>
    <body>
      <header>
        <en-tête/>
      </header>
  
      <main>
        <section id="intro">
          <div>
            <h3>EQUIPEMENT</h3>
            <div>
                <h4>MOBILIER DE BUREAU</h4>
                <p>
                    Analyse des besoins, réalisation de plans, analyse et conception créative de projets complets,
                    gestion de marchés publics et techniques spéciales pour administrations, hôtels, hôpitaux...
                </p>
            </div>
          </div>
        </section>
      </main>
  
      <footer>
        <bas-de-page/>
      </footer>
    </body>
  </template>
  
  <script>
  import EnTête from "@/components/EnTête";
  import BasDePage from "@/components/BasDePage";
  
  export default {
    name: "EquipementSotrexco",
    components: {BasDePage, EnTête}
    }
  </script>
  
  <style scoped>
    #intro h3 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  }

  #intro p {
  font-size: 20px;
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