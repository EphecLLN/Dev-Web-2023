<template>
  <div class="BasDePage">
    <p>&copy; 2023 Sotrexco</p>
  </div>
</template>

<script>
export default {
  name: "BasDePage"
}
</script>

<style scoped>

.BasDePage {
  bottom:0;  /* on le colle en bas */
  width:100%;
  height:100px;   /* Hauteur du pied de page */
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  margin-top: 50px;
  text-align: center;
}

</style>