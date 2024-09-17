<template>
  <div v-for="(service, index) in listeService" :key="index">
    <img :src ="getImages(service.id_service)" width = "150" height = "150">
    <p>{{service.nom_service}}</p>
    <p>{{service.service_description}}</p>
    <p><router-link :to="/service/ + service.id_service">En savoir plus</router-link></p>
  </div>
</template>

<script>
const imagesContext = require.context('../img/services', false, /\.(png|jpe?g|gif|webp)$/);
const images = imagesContext.keys().map(key => imagesContext(key));

  export default {
    name: "ServicesAffichage",
    props: ['listeService'],
    data (){
      return {
        images: images
      }
    },
    methods: {
      getImages(serviceId) {
        // Retourner l'image correspondante à l'identifiant de réalisation
        return this.images[serviceId - 1];
      }
    }
  }
</script>

<style scoped>

  div{
    border: 1px solid #000;
    margin-top: 50px;
  }

  img{
    margin: auto;
    display: block;
  }

  p{
    text-align: center;
  }
</style>