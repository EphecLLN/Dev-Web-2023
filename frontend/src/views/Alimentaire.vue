<template>
    <body>
      <header>
        <en-tête/>
      </header>
  
      <main>
        <section id="intro">
          <div>
            <h3>ALIMENTAIRE</h3>
            <p>
                A cet égard, Sotrexco international dispose de correspondants efficaces en Inde et en Chine, 
                de même qu'elle bénéficie de prix extrêmement compétitifs auprès de nombreux opérateurs européens actifs 
                dans les domaines alimentaires et pharmaceutiques. 
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
    name: "AlimentaireSotrexco",
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