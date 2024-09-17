<template>
    <body>
      <header>
        <en-tête/>
      </header>
  
      <main>
        <section id="intro">
          <div>
            <h3>CATERING</h3>
            <p>
                SOTREXCO INTERNATIONAL est capable de répondre aux demandes visant à préparer et à servir des repas à grande échelle
                pour les sites miniers, et partout où un service externalisé est nécessaire. 
            </p>
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
    name: "CateringSotrexco",
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