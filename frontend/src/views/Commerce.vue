<template>
    <body>
      <header>
        <en-tête/>
      </header>
  
      <main>
        <section id="intro">
          <div>
            <h3>COMMERCE GENERAL</h3>
            <div>
                <h4>BACHES</h4>
                <p>
                    SOTREXCO INTERNATIONAL propose une gamme complète de bâches destinées à des applications multiples et polyvalentes :
                    agriculture, transport, habitat, …
                </p>
            </div>
            <div>
                <h4>TEXTILE</h4>
                <p>
                    SOTREXCO INTERNATIONAL fournit également des produits textiles divers ainsi que des pagnes.
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
    name: "CommerceSotrexco",
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