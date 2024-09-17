<template>
    <body>
      <header>
        <en-tête/>
      </header>
  
      <main>
        <section id="intro">
            <div>
                <h3>INDUSTRIE</h3>
            </div>
            <div>
                <h4>POMPAGE - VANNES - TUYAUTERIE ET ACCESSOIRES</h4>
                <p>
                SOTREXCO INTERNATIONAL  couvre une large gamme de fournitures (Pompes, vannes, raccords, tuyauteries et accessoires) et
                de services, dans la plupart des secteurs industriels : eau, eau potable, chimie, pétrochimie, mines, industries diverses,.....
                Un questionnaire et une documentation peuvent être envoyés pour aider à identifier les opportunités et les besoins de la manière la
                plus précise possible.
                La réponse à ces questionnaires permettra d'adapter les propositions aux besoins spécifiques des entreprises.
                Nous collaborons avec des fabricants développant des pompes de haute technologie, connues pour leurs très hautes performances et
                leur robustesse, capables d'atteindre de grands diamètres, pour fonctionner dans les conditions les plus sévères de débits et de pressions.
                </p>
            </div>
            <div>
                <h4>FILTRATION INDUSTRIELLE</h4>
                <p>
                    Gamme complète de filtres industriels pour les liquides et l'air. Un questionnaire permettra d'identifier, le plus correctement possible,
                    les possibilités et les besoins des industries locales.
                </p>
            </div>
            <div>
                <h4>CAMIONS</h4>
                <p>
                    Camions DAF neufs et d'occasion (toutes marques). Nous disposons du plus grand choix en Europe. Une analyse préalable 
                    du marché est nécessaire pour bien cerner le besoin.
                </p>
            </div>
        <div>
            <h4>TÉLÉCOMS ET DIGITALISATION</h4>
            <p>
                La digitalisation est un enjeu important du développement économique et social et concerne essentiellement les services 
                gouvernementaux ainsi que les administrations pour permettre de désenclavement des zones rurales.
            </p>
        </div>
        <div>
            <h4>ÉLECTROMÉCANIQUE INDUSTRIELLE</h4>
            <ul>
                Analyse, évaluation et fourniture des besoins et matériels des entreprises industrielles ou publiques, dans les secteurs suivants :
                <li>Solaire</li>
                <li>Électromécanique industrielle</li>
                <li>Éclairage LED</li>
                <li>CVC</li>
            </ul>
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
    name: "IndustrieSotrexco",
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